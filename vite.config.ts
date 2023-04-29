import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "src/assets/*",
      components: "src/components/*",
      styles: "src/styles/*",
      types: "src/types/*.types.ts",
      src: "src/*",
    },
  },
});
