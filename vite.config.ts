import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@tabler/icons-react3": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
  plugins: [react()],
});
