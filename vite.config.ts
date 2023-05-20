import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ["@src/components"]: "/src/components/index.ts",
      ["@src/constants"]: "/src/constants/index.ts",
      ["@src/contexts"]: "/src/contexts/index.ts",
      ["@src/utils"]: "/src/utils/index.ts",
      ["@src/types/*"]: "src/types/*",
    },
  },
});
