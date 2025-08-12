import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["detect-node-es"]
  },
  build: {
    rollupOptions: {
      external: ["detect-node-es"]
    }
  }
});
