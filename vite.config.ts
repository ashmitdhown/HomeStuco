import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { cacheControlPlugin } from "./src/lib/cache-control-plugin";
import { chromeLocalhostOptimizer } from "./src/lib/chrome-localhost-optimizer";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "./", // Important for Hostinger static hosting
  server: {
    host: "0.0.0.0",
    port: 8080,
    hmr: { overlay: false, clientPort: 8080, protocol: "ws" },
    watch: { usePolling: false },
    cors: true,
    headers: {
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    react(),
    cacheControlPlugin(),
    chromeLocalhostOptimizer(),
    visualizer({ open: true, filename: "dist/stats.html", gzipSize: true, brotliSize: true }),
  ],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion", "@splinetool/react-spline"],
  },
  build: {
    outDir: "dist",
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // Let Vite automatically split chunks
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    assetsInlineLimit: 4096, // Inline small assets for faster load
  },
  esbuild: { legalComments: "none", treeShaking: true },
});
