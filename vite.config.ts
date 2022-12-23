import capri from "@capri-js/react";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { ImageLoader } from "esbuild-vanilla-image-loader";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vanillaExtractPlugin({
      esbuildOptions: {
        plugins: [ImageLoader()],
      },
    }),
    react(),
    capri(),
  ],
});
