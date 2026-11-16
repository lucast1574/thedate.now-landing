import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default createNextIntlPlugin("./src/lib/i18n/request.ts")(nextConfig);
