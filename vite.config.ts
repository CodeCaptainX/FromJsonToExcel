import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`, // 👈 No hash
        chunkFileNames: `assets/chunk-[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
