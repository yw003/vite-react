import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import styleImort, { AntdResolve } from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImort({
      resolves: [AntdResolve()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
