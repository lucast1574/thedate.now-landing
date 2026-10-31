import { createRequire } from "node:module";
import { resolve, join } from "node:path";
import { mkdir, writeFile, readFile, copyFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { webcrypto } from "node:crypto";
const root = resolve(process.argv[2] || "../frontend"),
  require = createRequire(join(root, "package.json"));
const { loadSource } = require(join(root, "tests/support/load-source.cjs"));
const { renderToStaticMarkup } = require("react-dom/server");
const { createElement } = require("react");
const load = (file) =>
  loadSource(file, { root, globals: { crypto: webcrypto } });
const { invitationTemplates } = load("src/lib/events/template-catalog.ts");
const { templateCanvas } = load("src/features/designer/template-canvas.ts");
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
for (const name of ["serif", "sans"]) {
  fonts[name] = (
    await readFile(join(root, `public/fonts/invitation-${name}.woff2`))
  ).toString("base64");
}
const entries = [];
for (const t of invitationTemplates.filter((t) => t.mode === "flyer")) {
  const canvas = templateCanvas(t),
    art = renderToStaticMarkup(
      createElement(Artwork, { style: canvas.art, color: t.accent }),
    ).replace("<svg ", `<svg width="720" height="${canvas.height}" `);
  const draw = canvas.elements
    .map((e) => {
      const centerX = e.x + e.width / 2,
        centerY = e.y + e.height / 2,
        rotate = `rotate(${e.rotation} ${centerX} ${centerY})`;
      if (e.type === "image")
        return `<g transform="${rotate}"><rect x="${e.x}" y="${e.y}" width="${e.width}" height="${e.height}" rx="14" fill="${t.accent}" opacity=".1"/>${renderToStaticMarkup(createElement(Icon, { name: "image" })).replace("<svg ", `<svg x="${centerX - 26}" y="${centerY - 42}" width="52" height="52" color="${t.accent}" `)}<text x="${centerX}" y="${centerY + 38}" font-size="20" text-anchor="middle" fill="${t.accent}">Tu fotografía</text></g>`;
      if (e.type !== "text") return "";
      const max = Math.max(1, Math.floor(e.width / (e.fontSize * 0.62))),
        lines = [];
      for (const paragraph of (e.text || "").split("\n")) {
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
        e.width / (longest * 0.66),
        e.height / (Math.max(1, lines.length) * 1.2),
      );
      const anchor =
          e.align === "left" ? "start" : e.align === "right" ? "end" : "middle",
        x =
          e.align === "left"
            ? e.x
            : e.align === "right"
              ? e.x + e.width
              : centerX;
      return `<g transform="${rotate}"><text x="${x}" y="${centerY - (lines.length - 1) * size * 0.6}" font-family="Preview-${e.font},Georgia,serif" font-size="${size}" font-weight="${e.bold ? 700 : 400}" text-anchor="${anchor}" dominant-baseline="middle" fill="${e.color}">${lines.map((line, n) => `<tspan x="${x}" dy="${n ? size * 1.2 : 0}">${esc(line)}</tspan>`).join("")}</text></g>`;
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
  await writeFile(
    join(folder, t.id + ".svg"),
    `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="${canvas.height}" viewBox="0 0 720 ${canvas.height}" role="img" aria-label="${esc(t.name)}"><style>${css}</style><rect width="720" height="${canvas.height}" fill="${canvas.background}"/>${art}${draw}</svg>`,
  );
  entries.push({
    id: t.id,
    name: t.name,
    kind: t.kind,
    category: t.category,
    description: t.tagline,
    accent: t.accent,
    background: t.background,
    image: `/previews/templates/${t.id}.svg`,
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
for (const name of ["cormorantgaramond", "manrope"])
  await copyFile(
    join(root, `public/fonts/${name}-OFL.txt`),
    resolve(`public/previews/licenses/${name}-OFL.txt`),
  );
console.log(
  `Exported ${entries.length} marketing previews from the real template catalog.`,
);
