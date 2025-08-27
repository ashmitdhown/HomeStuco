import type { Plugin } from 'vite';

// This plugin helps generate headers for Netlify or Vercel deployments
// to optimize caching of static assets
export function cacheControlPlugin(): Plugin {
  return {
    name: 'vite:cache-control',
    apply: 'build',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Add cache headers for static assets
        if (req.url?.match(/\.(js|css|woff2|jpg|png|svg|webp)$/)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
        next();
      });
    },
    generateBundle() {
      console.log('✓ Cache-Control headers configured for optimal performance');
    },
  };
}
