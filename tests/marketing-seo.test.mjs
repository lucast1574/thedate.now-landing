import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";
import { loadSource } from "./support/load-source.cjs";
function context(host) {
  return {
    mocks: {
      "next/headers": { headers: async () => new Headers({ host }) },
    },
  };
}
test("marketing crawl rules expose only the landing on its own product host", async () => {
  for (const host of ["thedate.now", "save.thedate.now:3000"]) {
    const origin = `https://${host.replace(/:\d+$/, "")}`;
    const options = context(host);
    const robots = await loadSource("src/app/robots.ts", options).default();
    const sitemap = await loadSource("src/app/sitemap.ts", options).default();
    assert.equal(robots.sitemap, `${origin}/sitemap.xml`);
    assert.ok(robots.rules.disallow.includes("/rsvp/"));
    assert.ok(robots.rules.disallow.includes("/api/"));
    assert.equal(sitemap.length, 5);
    assert.ok(sitemap.every((item) => item.lastModified === "2026-10-31"));
    assert.equal(new Set(sitemap.map((item) => item.url)).size, 5);
    assert.ok(sitemap[1].url.startsWith(origin + "/invitaciones-digitales-"));
    assert.equal(sitemap[0].url, `${origin}/`);
  }
});
test("private studios, invitations and lookalike hosts never expose a marketing sitemap", async () => {
  for (const host of [
    "studio.save.thedate.now",
    "crea.thedate.now",
    "ana.save.thedate.now",
    "thedate.now.evil.test",
    "localhost:3000",
  ]) {
    const options = context(host);
    assert.equal(
      (await loadSource("src/app/robots.ts", options).default()).rules.disallow,
      "/",
    );
    assert.equal(
      (await loadSource("src/app/sitemap.ts", options).default()).length,
      0,
    );
  }
});
test("the two brands have distinct canonical URLs and social images", () => {
  const { landingMetadata } = loadSource("src/features/marketing/metadata.ts");
  const wedding = landingMetadata(true);
  const event = landingMetadata(false);
  assert.equal(wedding.alternates.canonical, "https://save.thedate.now/");
  assert.equal(event.alternates.canonical, "https://thedate.now/");
  assert.notEqual(wedding.title, event.title);
  assert.notEqual(
    wedding.openGraph.images[0].url,
    event.openGraph.images[0].url,
  );
  assert.equal(wedding.robots.index, true);
  assert.equal(event.twitter.card, "summary_large_image");
});

test("topic metadata and pages stay on their product host", async () => {
  const { topics } = loadSource("src/features/marketing/topic-data.ts");
  for (const item of topics) {
    const host = item.kind === "wedding" ? "save.thedate.now" : "thedate.now";
    const options = context(host);
    options.mocks["next/navigation"] = {
      notFound: () => {
        throw new Error("not-found");
      },
    };
    const { topicMetadata, default: TopicPage } = loadSource(
      "src/features/marketing/topic-page.tsx",
      options,
    );
    const metadata = await topicMetadata(item.slug);
    assert.equal(metadata.alternates.canonical, `https://${host}/${item.slug}`);
    assert.equal(metadata.robots.index, true);
    assert.ok(await TopicPage({ slug: item.slug }));
    for (const other of [
      host === "thedate.now" ? "save.thedate.now" : "thedate.now",
      "localhost:3135",
    ]) {
      const blocked = context(other);
      blocked.mocks["next/navigation"] = options.mocks["next/navigation"];
      const page = loadSource("src/features/marketing/topic-page.tsx", blocked);
      assert.equal((await page.topicMetadata(item.slug)).robots.index, false);
      await assert.rejects(
        () => page.default({ slug: item.slug }),
        /not-found/,
      );
    }
  }
});

test("all 48 catalogue previews exist as self contained SVG assets", () => {
  const catalog = JSON.parse(
    readFileSync("src/features/marketing/template-preview-data.json", "utf8"),
  );
  assert.equal(new Set(catalog.templates.map((t) => t.id)).size, 48);
  for (const kind of ["wedding", "general"])
    assert.equal(catalog.templates.filter((t) => t.kind === kind).length, 24);
  for (const item of catalog.templates) {
    assert.ok(existsSync(`public${item.image}`));
    const svg = readFileSync(`public${item.image}`, "utf8");
    assert.ok(svg.includes("<svg"));
    assert.doesNotMatch(svg, /<script|<foreignObject|href="https?:/i);
  }
});

test("workspace scenes use real table and gift markup with no interactive controls", () => {
  const preview = JSON.parse(
    readFileSync("src/features/marketing/workspace-preview-data.json", "utf8"),
  );
  assert.ok(preview.seating.includes('class="seating-table'));
  assert.ok(preview.seating.includes('class="venue-area venue-area-dance'));
  assert.ok(preview.seating.includes("8/10"));
  assert.ok(preview.seating.includes("person-glyph"));
  assert.ok(preview.overview.includes("Personas ubicadas"));
  assert.equal(preview.gifts.length, 3);
  for (const html of [preview.seating, ...preview.gifts])
    assert.doesNotMatch(html, /<button|<input|<select|<a\b|tabindex=/i);
  assert.ok(preview.gifts.some((html) => html.includes("Tu elección")));
  assert.ok(
    preview.gifts.some((html) => html.includes("Otro invitado lo eligió")),
  );
});
