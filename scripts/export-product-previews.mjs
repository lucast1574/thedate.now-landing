import { previewPhoto } from "./preview-photo.mjs";
import { createRequire } from "node:module";
import { resolve, join } from "node:path";
import { mkdir, writeFile, readFile, copyFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { webcrypto, createHash } from "node:crypto";
const root = resolve(process.argv[2] || "../frontend"),
  require = createRequire(join(root, "package.json"));
const { loadSource } = require(join(root, "tests/support/load-source.cjs"));
const { renderToStaticMarkup } = require("react-dom/server");
const { createElement } = require("react");
const load = (file) =>
  loadSource(file, { root, globals: { crypto: webcrypto } });
const { invitationTemplates } = load("src/lib/events/template-catalog.ts");
const { templateCanvas } = load("src/features/designer/template-canvas.ts");
const { templateSequence } = load("src/features/designer/template-sequence.ts");
const { fitInvitationText } = load("src/lib/events/fit-invitation-text.ts");
const { default: Artwork } = load("src/components/invitation-artwork.tsx");
const { default: Icon } = load("src/components/icon.tsx");
const folder = resolve("public/previews/templates");
await mkdir(folder, { recursive: true });
const esc = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
const fonts = {};
for (const name of ["serif", "sans", "script"]) {
  fonts[name] = (
    await readFile(join(root, `public/fonts/invitation-${name}.woff2`))
  ).toString("base64");
}
const samples = {};
for (const kind of ["wedding", "general"]) {
  try {
    samples[kind] = (
      await readFile(
        resolve(
          `public/previews/photos/${kind === "general" ? "event" : "wedding"}.jpg`,
        ),
      )
    ).toString("base64");
  } catch {
    /* Keep the export usable without marketing photographs. */
  }
}
const floralAssets = {};
for (const name of ["floral-corner", "floral-stem"]) {
  floralAssets[`/templates/art/${name}.png`] =
    `data:image/png;base64,${(await readFile(join(root, `public/templates/art/${name}.png`))).toString("base64")}`;
}
function renderPreview(t, canvas) {
  const art = renderToStaticMarkup(
    createElement(Artwork, {
      style: canvas.artEditable ? undefined : canvas.art,
      color: t.accent,
      canvas,
    }),
  ).replace("<svg ", `<svg width="720" height="${canvas.height}" `);
  const draw = canvas.elements
    .map((raw) => {
      const e = { ...raw, fontSize: fitInvitationText(raw) };
      const centerX = e.x + e.width / 2,
        centerY = e.y + e.height / 2,
        rotate = `rotate(${e.rotation} ${centerX} ${centerY})`;
      if (e.type === "image" && samples[t.kind])
        return previewPhoto(e, samples[t.kind], `${t.id}-${e.id}`);
      if (e.type === "image")
        return `<g transform="${rotate}"><rect x="${e.x}" y="${e.y}" width="${e.width}" height="${e.height}" rx="14" fill="${t.accent}" opacity=".1"/>${renderToStaticMarkup(createElement(Icon, { name: "image" })).replace("<svg ", `<svg x="${centerX - 26}" y="${centerY - 42}" width="52" height="52" color="${t.accent}" `)}<text x="${centerX}" y="${centerY + 38}" font-size="20" text-anchor="middle" fill="${t.accent}">Tu fotografía</text></g>`;
      if (e.type === "icon")
        return `<g transform="${rotate}" opacity="${e.opacity ?? 1}">${renderToStaticMarkup(createElement(Icon, { name: e.icon }), { identifierPrefix: `${t.id}-${e.id}-` }).replace("<svg ", `<svg x="${e.x}" y="${e.y}" width="${e.width}" height="${e.height}" color="${e.color}" `)}</g>`;
      if (e.type !== "text") return "";
      const letterWidth = e.bold
        ? 0.64
        : e.font === "script"
          ? 0.36
          : e.font === "sans"
            ? 0.55
            : 0.53;
      const max = Math.max(1, Math.floor(e.width / (e.fontSize * letterWidth))),
        lines = [];
      for (const paragraph of (e.text || "")
        .replace("{{nombre_invitado}}", "María")
        .split("\n")) {
        let line = "";
        for (const word of paragraph.split(/\s+/)) {
          if (line && line.length + word.length + 1 > max) {
            lines.push(line);
            line = "";
          }
          line += (line ? " " : "") + word;
        }
        lines.push(line);
      }
      const longest = Math.max(1, ...lines.map((line) => line.length));
      const size = Math.min(
        e.fontSize,
        e.width / (longest * letterWidth),
        e.height / (Math.max(1, lines.length) * (e.lineHeight || 1.2)),
      );
      const anchor =
          e.align === "left" ? "start" : e.align === "right" ? "end" : "middle",
        x =
          e.align === "left"
            ? e.x
            : e.align === "right"
              ? e.x + e.width
              : centerX;
      return `<g transform="${rotate}"><text x="${x}" y="${centerY - (lines.length - 1) * size * 0.6}" font-family="Preview-${e.font},Georgia,serif" font-size="${size}" font-style="${e.italic ? "italic" : "normal"}" letter-spacing="${(e.letterSpacing || 0) * size}" font-weight="${e.bold ? 700 : 400}" text-anchor="${anchor}" dominant-baseline="middle" fill="${e.color}">${lines.map((line, n) => `<tspan x="${x}" dy="${n ? size * (e.lineHeight || 1.2) : 0}">${esc(line)}</tspan>`).join("")}</text></g>`;
    })
    .join("");
  const used = new Set(
    canvas.elements.filter((e) => e.type === "text").map((e) => e.font),
  );
  const css = [...used]
    .filter((name) => fonts[name])
    .map(
      (name) =>
        `@font-face{font-family:Preview-${name};src:url(data:font/woff2;base64,${fonts[name]}) format('woff2');font-weight:200 800;}`,
    )
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="${canvas.height}" viewBox="0 0 720 ${canvas.height}" role="img" aria-label="${esc(t.name)}"><style>${css}</style><rect width="720" height="${canvas.height}" fill="${canvas.background}"/>${art}${draw}</svg>`;
  return Object.entries(floralAssets).reduce(
    (result, [url, data]) => result.replaceAll(url, data),
    svg,
  );
}
const entries = [];
for (const t of invitationTemplates.filter((t) => t.mode === "flyer")) {
  const canvas = templateCanvas(t),
    svg = renderPreview(t, canvas);
  await writeFile(join(folder, t.id + ".svg"), svg);
  const sections = templateSequence(t, {
    startAt: "2027-06-12T21:00:00Z",
    timeZone: "America/Bogota",
    location:
      t.kind === "wedding" ? "Jardín de la celebración" : "Lugar del encuentro",
  }).filter((s) =>
    [
      "Nuestra historia",
      "Nos reunimos",
      "Fecha y hora",
      "Lista de regalos",
    ].includes(s.heading),
  );
  const panels = sections.map((s, i) =>
    renderPreview(t, s.canvas).replace("<svg ", `<svg x="${i * 744}" y="0" `),
  );
  const inside = `<svg xmlns="http://www.w3.org/2000/svg" width="${sections.length * 744 - 24}" height="${Math.max(...sections.map((s) => s.canvas.height))}" viewBox="0 0 ${sections.length * 744 - 24} ${Math.max(...sections.map((s) => s.canvas.height))}">${panels.join("")}</svg>`;
  await writeFile(join(folder, t.id + "-interior.svg"), inside);
  entries.push({
    id: t.id,
    name: t.name,
    kind: t.kind,
    category: t.category,
    collection: canvas.art || "editorial",
    description: t.tagline,
    accent: t.accent,
    background: t.background,
    image: `/previews/templates/${t.id}.svg?v=${createHash("sha256").update(svg).digest("hex").slice(0, 12)}`,
    interior: `/previews/templates/${t.id}-interior.svg?v=${createHash("sha256").update(inside).digest("hex").slice(0, 12)}`,
    interiorHeight: Math.max(...sections.map((s) => s.canvas.height)),
    width: 720,
    height: canvas.height,
  });
}
await writeFile(
  resolve("src/features/marketing/template-preview-data.json"),
  JSON.stringify(
    {
      sourceRepository: "lucast1574/thedate.now-front",
      sourceCommit: execFileSync("git", ["rev-parse", "HEAD"], {
        cwd: root,
        encoding: "utf8",
      }).trim(),
      templates: entries,
    },
    null,
    2,
  ) + "\n",
);
await mkdir(resolve("public/previews/licenses"), { recursive: true });
for (const name of ["cormorantgaramond", "manrope", "italianno"])
  await copyFile(
    join(root, `public/fonts/${name}-OFL.txt`),
    resolve(`public/previews/licenses/${name}-OFL.txt`),
  );
console.log(
  `Exported ${entries.length} marketing previews from the real template catalog.`,
);
