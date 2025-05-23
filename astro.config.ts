import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://usatkdmi.com",
  build: { assets: "srv" },
  experimental: { responsiveImages: true },
  image: { experimentalLayout: "constrained" },
  integrations: [mdx(), sitemap()],
});
