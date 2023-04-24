import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "./dist",
    copyPublicDir: true,
  },
  server: {
    host: "localhost",
    port: "3009",
    open: true,
  },
  appType: "mpa",
});
