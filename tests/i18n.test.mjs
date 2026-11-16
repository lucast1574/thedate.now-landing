import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { createRequire } from "node:module";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { loadSource } from "./support/load-source.cjs";

test("landing resolves all browser preferences with Spanish fallback", () => {
  const { resolveLocale } = loadSource("src/lib/i18n/locale.ts");
  assert.equal(resolveLocale("fr-FR,en-US;q=0.8"), "en");
  assert.equal(resolveLocale("de,pt-PT;q=0.9"), "pt");
  assert.equal(resolveLocale("ja,fr"), "es");
  assert.equal(resolveLocale("en;q=0,es-MX;q=0.5"), "es");
});

test("translated marketing copy, responsive copy and metadata render on the server", () => {
  for (const [locale, word] of [
    ["es", "invitación"],
    ["en", "invitation"],
    ["pt", "convite"],
  ]) {
    const options = { mocks: { "next-intl": { useLocale: () => locale } } };
    const { default: Hero } = loadSource(
      "src/features/marketing/general/hero.tsx",
      options,
    );
    const { default: Copy } = loadSource(
      "src/features/marketing/responsive-copy.tsx",
      options,
    );
    const { createTranslator } = loadSource("src/lib/i18n/translator.ts");
    const { landingMetadata } = loadSource(
      "src/features/marketing/metadata.ts",
    );
    assert.ok(
      renderToStaticMarkup(React.createElement(Hero))
        .toLowerCase()
        .includes(word),
    );
    const mobile = renderToStaticMarkup(
      React.createElement(Copy, { mobile: "Crear mi invitación" }, "desktop"),
    );
    assert.ok(mobile.toLowerCase().includes(word));
    assert.equal(
      landingMetadata(false, createTranslator(locale)).openGraph.locale,
      locale === "pt" ? "pt_BR" : locale === "en" ? "en_US" : "es_PE",
    );
  }
});

test("catalogs preserve brands, placeholders and complete every source message", () => {
  const es = JSON.parse(readFileSync("src/lib/i18n/messages/es.json", "utf8"));
  for (const locale of ["en", "pt"]) {
    const catalog = JSON.parse(
      readFileSync(`src/lib/i18n/messages/${locale}.json`, "utf8"),
    );
    assert.deepEqual(Object.keys(catalog).sort(), Object.keys(es).sort());
    for (const [source, target] of Object.entries(catalog)) {
      assert.ok(target.trim());
      assert.deepEqual(
        (target.match(/\{v\d+\}/g) || []).sort(),
        (source.match(/\{v\d+\}/g) || []).sort(),
      );
      for (const brand of ["The Date", "Save the Date"])
        if (source.includes(brand)) assert.ok(target.includes(brand), source);
    }
  }
});

test("structured data keeps schema vocabulary in every language", () => {
  for (const locale of ["es", "en", "pt"]) {
    const { default: Schema } = loadSource(
      "src/features/marketing/schema.tsx",
      { mocks: { "next-intl": { useLocale: () => locale } } },
    );
    const markup = renderToStaticMarkup(React.createElement(Schema));
    const json = JSON.parse(
      markup.match(/<script[^>]*>([\s\S]*)<\/script>/)[1],
    );
    assert.equal(json["@graph"][0]["@type"], "Organization");
    assert.equal(json["@graph"][1]["@type"], "WebApplication");
    assert.equal(json["@graph"][1].inLanguage, locale);
  }
});

test("every explicit UI message is registered in the Spanish source catalog", () => {
  const ts = createRequire(import.meta.url)("typescript");
  const es = JSON.parse(readFileSync("src/lib/i18n/messages/es.json", "utf8"));
  function files(directory) {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) =>
      entry.isDirectory()
        ? files(`${directory}/${entry.name}`)
        : [`${directory}/${entry.name}`],
    );
  }
  const missing = [];
  for (const file of files("src").filter(
    (file) => /\.tsx?$/.test(file) && !file.includes("/i18n/"),
  )) {
    const source = ts.createSourceFile(
      file,
      readFileSync(file, "utf8"),
      ts.ScriptTarget.Latest,
      true,
    );
    function visit(node) {
      if (
        ts.isCallExpression(node) &&
        node.expression.getText() === "i18n" &&
        node.arguments[0] &&
        ts.isStringLiteral(node.arguments[0]) &&
        !Object.hasOwn(es, node.arguments[0].text)
      )
        missing.push(`${file}: ${node.arguments[0].text}`);
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
  assert.deepEqual(missing, []);
});
