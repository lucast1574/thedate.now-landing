const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

// Compile TS/TSX for Node's built-in runner; mock Next's request context, not the code under test.
function loadSource(
  entry,
  { root = process.cwd(), mocks = {}, globals = {} } = {},
) {
  const cache = new Map();
  function load(filename) {
    if (cache.has(filename)) return cache.get(filename).exports;
    const sourceModule = { exports: {} };
    cache.set(filename, sourceModule);
    const source = fs.readFileSync(filename, "utf8");
    if (filename.endsWith(".json")) {
      sourceModule.exports = { default: JSON.parse(source) };
      return sourceModule.exports;
    }
    const compiled = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        target: ts.ScriptTarget.ES2020,
      },
      fileName: filename,
    }).outputText;
    function resolve(specifier) {
      if (Object.hasOwn(mocks, specifier)) return mocks[specifier];
      if (specifier === "server-only" || specifier.endsWith(".css")) return {};
      if (specifier.startsWith("@/") || specifier.startsWith(".")) {
        const base = specifier.startsWith("@/")
          ? path.join(root, "src", specifier.slice(2))
          : path.resolve(path.dirname(filename), specifier);
        const file = [base, `${base}.ts`, `${base}.tsx`].find(
          (p) => fs.existsSync(p) && fs.statSync(p).isFile(),
        );
        if (!file)
          throw new Error(`Cannot resolve ${specifier} from ${filename}`);
        return load(file);
      }
      return require(specifier);
    }
    vm.runInNewContext(
      compiled,
      {
        module: sourceModule,
        exports: sourceModule.exports,
        require: resolve,
        URL,
        Request,
        Response,
        Headers,
        FormData,
        console,
        process: { env: { NODE_ENV: "test" } },
        fetch: () => {
          throw new Error("Unexpected network request in test");
        },
        ...globals,
      },
      { filename },
    );
    return sourceModule.exports;
  }
  return load(path.resolve(root, entry));
}

module.exports = { loadSource };
