import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      //accessToken: env.STORYBLOK_TOKEN,
      accessToken: "3ypbrK9sp5xKReS3djFHGQtt",
      apiOptions: {
        region: "",
      },
      bridge: {
        customParent: "https://app.storyblok.com",
      },
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        gallery: "storyblok/Gallery",
        image: "storyblok/Image",
        hero: "storyblok/Hero",
        puppyGallery: "storyblok/puppyGallery",
        transitioningImage: "storyblok/transitioningImage",
        astroKittenGallery: "storyblok/astroKittenGallery",
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
