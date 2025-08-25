import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1500, // Increase warning limit to 1500 kB to account for Spline
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'react-vendor';
            
            // UI libraries
            if (id.includes('radix-ui')) return 'radix-vendor';
            if (id.includes('lucide-react')) return 'icons';
            
            // Animation libraries
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('animejs')) return 'animejs';
            
            // Charts and data visualization
            if (id.includes('recharts') || id.includes('d3')) return 'charts';
            
            // Internationalization
            if (id.includes('i18next')) return 'i18next';
            
            // Carousel and sliders
            if (id.includes('slick-carousel') || id.includes('embla-carousel')) return 'carousel';
            
            // Spline and 3D - Keep as separate large chunk but lazy loaded
            if (id.includes('splinetool')) return 'spline';
            
            // Form handling
            if (id.includes('react-hook-form') || id.includes('hookform')) return 'forms';
            
            // Utility libraries
            if (id.includes('clsx') || id.includes('class-variance-authority') || id.includes('tailwind-merge')) return 'utilities';
            if (id.includes('date-fns')) return 'date-utils';
            if (id.includes('zod')) return 'validation';
            
            // Query and state management
            if (id.includes('tanstack') || id.includes('react-query')) return 'query';
            
            // Everything else
            return 'vendor';
          }
        },
      },
    },
  },
});
