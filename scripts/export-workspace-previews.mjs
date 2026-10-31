import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { resolve, join } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
const root = resolve(process.argv[2] || "../frontend"),
  require = createRequire(join(root, "package.json"));
const { loadSource } = require(join(root, "tests/support/load-source.cjs")),
  { createElement: h } = require("react"),
  { renderToStaticMarkup: render } = require("react-dom/server");
const symbolSources = await Promise.all(
  ["shirt", "gift", "martini", "door-open"].map((name) =>
    readFile(resolve(`node_modules/lucide-static/icons/${name}.svg`), "utf8"),
  ),
);
const spriteVersion = createHash("sha256")
  .update(symbolSources.join(""))
  .digest("hex")
  .slice(0, 12);
const { default: Seating } = loadSource(
  "src/features/manager/seating-canvas.tsx",
  { root },
);
const { default: Gift } = loadSource("src/features/gifts/guest-gift-card.tsx", {
  root,
});
const { default: Overview } = loadSource(
  "src/features/manager/seating-overview.tsx",
  { root },
);
const people = Array.from({ length: 24 }, (_, i) => ({
  id: `p${i}`,
  name: ["Lucía", "Mateo", "María", "Andrés"][i % 4],
  lastName: "Rojas",
  gender: i % 2 ? "man" : "woman",
  registered: true,
}));
const plan = {
  width: 1600,
  height: 1000,
  tables: [
    {
      id: "a",
      name: "Mesa 1",
      shape: "round",
      capacity: 10,
      x: 140,
      y: 150,
      rotation: 0,
    },
    {
      id: "b",
      name: "Mesa 2",
      shape: "round",
      capacity: 10,
      x: 1100,
      y: 150,
      rotation: 0,
    },
    {
      id: "c",
      name: "Mesa 3",
      shape: "rectangle",
      capacity: 10,
      x: 140,
      y: 610,
      rotation: 0,
    },
  ],
  assignments: Object.fromEntries(
    people.map((p, n) => [p.id, ["a", "b", "c"][Math.floor(n / 8)]]),
  ),
  areas: [
    {
      id: "dance",
      kind: "dance",
      name: "Pista de baile",
      x: 610,
      y: 280,
      width: 350,
      height: 390,
      rotation: 0,
    },
    {
      id: "bar",
      kind: "bar",
      name: "Bar",
      x: 1110,
      y: 650,
      width: 300,
      height: 180,
      rotation: 0,
    },
    {
      id: "entry",
      kind: "entrance",
      name: "Entrada",
      x: 660,
      y: 800,
      width: 230,
      height: 130,
      rotation: 0,
    },
  ],
};
const readonly = (s) =>
  s
    .replace(/<button\b[^>]*class="([^"]*)"([^>]*)>/g, '<div class="$1"$2>')
    .replace(/<button\b[^>]*>/g, "<div>")
    .replaceAll("</button>", "</div>")
    .replace(/<a\b[^>]*class="([^"]*)"[^>]*>/g, '<span class="$1">')
    .replace(/<a\b[^>]*>/g, "<span>")
    .replaceAll("</a>", "</span>")
    .replaceAll("tienda.example", "Tienda elegida")
    .replaceAll(
      "/symbols/lucide-1.61.svg#",
      `/symbols/lucide-1.61.svg?v=${spriteVersion}#`,
    )
    .replace(/\s(?:tabindex|aria-label|disabled|type)="[^"]*"/g, "");
const seating = readonly(
  render(
    h(Seating, {
      plan,
      people,
      selected: "a",
      areas: plan.areas,
      onMoveArea: () => {},
    }),
  ),
)
  .replaceAll('class="seating-table', 'data-animated class="seating-table')
  .replaceAll('class="venue-area ', 'data-animated class="venue-area ');
const overview = render(h(Overview, { tables: 3, count: 24, pending: 0 }));
const gifts = [
  {
    id: "coffee",
    title: "Cafetera para las mañanas",
    description: "Un detalle para compartir cada día.",
    mine: true,
    reserved: true,
  },
  {
    id: "vase",
    title: "Un jarrón para casa",
    description: "Para las flores y los días especiales.",
    mine: false,
    reserved: false,
  },
  {
    id: "speaker",
    title: "Música para nuestros planes",
    description: "Para seguir celebrando juntos.",
    mine: false,
    reserved: true,
  },
].map((g) =>
  readonly(
    render(
      h(Gift, {
        item: {
          ...g,
          url: "https://tienda.example/",
          delivered: false,
          hasImage: true,
        },
        image: `/previews/gifts/${g.id}.svg`,
        busy: false,
        hasChoice: false,
      }),
    ),
  ),
);
await writeFile(
  "src/features/marketing/workspace-preview-data.json",
  JSON.stringify(
    {
      seating,
      overview,
      gifts,
      giftAvailable: readonly(
        render(
          h(Gift, {
            item: {
              id: "coffee",
              title: "Cafetera para las mañanas",
              description: "Un detalle para compartir cada día.",
              url: "https://tienda.example/",
              mine: false,
              reserved: false,
              delivered: false,
              hasImage: true,
            },
            image: "/previews/gifts/coffee.svg",
            busy: false,
            hasChoice: false,
          }),
        ),
      ),
    },
    null,
    2,
  ) + "\n",
);
const postcss = require("postcss");
let styles =
  "/* Exported from the real studio styles. Regenerate with export-workspace-previews.mjs. */\n";
for (const file of [
  "17-seating.css",
  "54-venue-preview.css",
  "69-seating-workflow.css",
  "40-wishlist.css",
  "50-gift-experience.css",
]) {
  const ast = postcss.parse(
    await readFile(join(root, "src/styles", file), "utf8"),
  );
  ast.walkRules((rule) => {
    if (
      rule.parent?.type === "atrule" &&
      rule.parent.name.includes("keyframes")
    )
      return;
    rule.selectors = rule.selectors.map(
      (selector) => `.workspace-product-preview ${selector}`,
    );
  });
  styles += ast.toString() + "\n";
}
await writeFile("src/styles/35-workspace-product-preview.css", styles);
console.log(
  "Exported real seating, venue areas, people and gift card markup and styles; all controls are inert.",
);

const symbols = [];
for (const name of ["shirt", "gift", "martini", "door-open"]) {
  const svg = await readFile(
    resolve(`node_modules/lucide-static/icons/${name}.svg`),
    "utf8",
  );
  symbols.push(
    `<symbol id="${name}" viewBox="0 0 24 24">${svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/)[1]}</symbol>`,
  );
}
await writeFile(
  "public/symbols/lucide-1.61.svg",
  `<!-- Lucide v1.61.0, ISC: /previews/licenses/lucide-LICENSE.txt --><svg xmlns="http://www.w3.org/2000/svg">${symbols.join("")}</svg>`,
);
