import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { cacheControlPlugin } from "./src/lib/cache-control-plugin";
import { chromeLocalhostOptimizer } from "./src/lib/chrome-localhost-optimizer";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
    hmr: {
      overlay: false, // Disable error overlay for better performance
      clientPort: 8080, // Ensure consistent port for HMR
      protocol: 'ws', // Use WebSockets for faster updates
    },
    watch: {
      usePolling: false, // Disable polling for better CPU usage
    },
    cors: true, // Enable CORS for all origins
    headers: {
      'Cache-Control': 'no-store', // Prevent Chrome from caching localhost responses
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    react(),
    cacheControlPlugin(),
    chromeLocalhostOptimizer(),
    visualizer({
      open: true,
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      '@splinetool/react-spline'
    ],
    exclude: [],
  },
  build: {
    outDir: "dist",
    target: "esnext", // Modern browsers for better performance
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false, // Disable for production
    chunkSizeWarningLimit: 1500, // Higher limit for spline chunks
    rollupOptions: {
      output: {
        // Configure code-splitting strategy
        manualChunks: (id) => {
          // Group vendor packages
          if (id.includes('node_modules')) {
            // React and core libraries - high priority, common dependencies
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            
            // Animation libraries - medium priority
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            
            // Spline libraries - carefully chunked for optimal loading
            if (id.includes('@splinetool/runtime')) {
              // Physics modules - lowest priority, load on demand
              if (id.includes('physics')) {
                // Collision detection system
                if (id.includes('collision')) {
                  return 'spline-physics-collision';
                } 
                // Constraint system
                else if (id.includes('constraint')) {
                  return 'spline-physics-constraint';
                } 
                // Body components - split by feature
                else if (id.includes('body')) {
                  if (id.includes('composite')) {
                    return 'spline-physics-body-composite';
                  } else if (id.includes('parts')) {
                    return 'spline-physics-body-parts';
                  } else {
                    return 'spline-physics-body-core';
                  }
                } 
                // Physics solvers
                else if (id.includes('solver')) {
                  return 'spline-physics-solver';
                } 
                // Physics factory methods
                else if (id.includes('factory')) {
                  return 'spline-physics-factory';
                } 
                // Physics engine core
                else if (id.includes('engine')) {
                  return 'spline-physics-engine';
                } 
                // World components
                else if (id.includes('world')) {
                  return 'spline-physics-world';
                } 
                // Geometry utilities
                else if (id.includes('geometry')) {
                  return 'spline-physics-geometry';
                } 
                // Core physics utilities
                else {
                  return 'spline-physics-core';
                }
              } 
              // Font rendering system
              else if (id.includes('opentype')) {
                return 'spline-opentype';
              } 
              // Three.js modules - critical for rendering
              else if (id.includes('three')) {
                if (id.includes('loaders')) {
                  return 'spline-three-loaders';
                } else if (id.includes('controls')) {
                  return 'spline-three-controls';
                } else if (id.includes('animation')) {
                  return 'spline-three-animation';
                } else {
                  return 'spline-three-core';
                }
              } 
              // Event system
              else if (id.includes('events')) {
                return 'spline-events';
              } 
              // Asset loading system - granular chunks
              else if (id.includes('loader')) {
                if (id.includes('model')) {
                  return 'spline-loader-model';
                } else if (id.includes('asset')) {
                  return 'spline-loader-asset';
                } else if (id.includes('texture')) {
                  return 'spline-loader-texture';
                } else {
                  return 'spline-loader-core';
                }
              } 
              // Asset management
              else if (id.includes('assets')) {
                if (id.includes('material')) {
                  return 'spline-assets-material';
                } else if (id.includes('mesh')) {
                  return 'spline-assets-mesh';
                } else {
                  return 'spline-assets-core';
                }
              } 
              // Rendering pipeline
              else if (id.includes('render')) {
                if (id.includes('pipeline')) {
                  return 'spline-render-pipeline';
                } else if (id.includes('shader')) {
                  return 'spline-render-shader';
                } else {
                  return 'spline-render-core';
                }
              } 
              // Camera controls
              else if (id.includes('camera')) {
                return 'spline-camera';
              } 
              // Math utilities
              else if (id.includes('math')) {
                return 'spline-math';
              } 
              // Scene management
              else if (id.includes('scene')) {
                return 'spline-scene';
              } 
              // General utilities
              else if (id.includes('utils')) {
                return 'spline-utils';
              } 
              // Core runtime
              else {
                return 'spline-runtime-core';
              }
            }
            
            // React-specific Spline component
            if (id.includes('@splinetool/react-spline')) {
              return 'spline-react';
            }
            
            // All other dependencies
            return 'vendor';
          }
        },
        // Output configuration for optimal loading
        experimentalMinChunkSize: 250000, // 250KB minimum chunk size
        chunkFileNames: 'assets/[name]-[hash].js',
        minifyInternalExports: true,
        // Add cache busting hashes
        entryFileNames: 'assets/[name]-[hash].js'
      },
    },
    // Advanced asset optimization
    assetsInlineLimit: 4096, // 4kb - inline small assets
  },
  base: "./",
  esbuild: {
    legalComments: 'none', // Remove license comments in production build
    treeShaking: true, // Improve bundle size
  }
});
