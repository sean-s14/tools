import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mui: ["@mui/material"],
          // mathjs: ["mathjs"],
        },
      },
    },
  },
  server: {
    port: 3000,
    https: {
      key: fs.readFileSync("../.cert/key.pem"),
      cert: fs.readFileSync("../.cert/cert.pem"),
    },
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },
});
