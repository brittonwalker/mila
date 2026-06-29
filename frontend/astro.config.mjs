// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Neue Montreal",
      cssVariable: "--font-neue-montreal",
      options: {
        variants: [
          {
            src: ["./public/fonts/NeueMontreal/PPNeueMontreal-Regular.woff2"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./public/fonts/NeueMontreal/PPNeueMontreal-Medium.woff2"],
            weight: "500",
            style: "normal",
          },
        ],
      },
    },
  ],
});
