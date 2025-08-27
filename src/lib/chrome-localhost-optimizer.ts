// This middleware helps Chrome handle localhost connections more efficiently
// by optimizing how assets are served and enabling proper caching

import type { Plugin } from 'vite';

export function chromeLocalhostOptimizer(): Plugin {
  return {
    name: 'vite:chrome-localhost-optimizer',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Identify if this is a localhost connection
        const isLocalhost = req.headers.host?.includes('localhost') || 
                           req.headers.host?.includes('127.0.0.1');
        
        if (isLocalhost) {
          // Chrome has special handling for localhost that can cause laggy behavior
          // These headers help mitigate those issues
          
          // Prevent Chrome's "Site Isolation" feature from slowing down localhost
          res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
          res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
          
          // Optimize socket connections for localhost
          res.setHeader('Connection', 'keep-alive');
          
          // These headers help Chrome process local assets more efficiently
          if (req.url?.match(/\.(js|css|woff2)$/)) {
            // For script/style resources, use no-cache to ensure fresh content
            // but allow Chrome to validate with 304 responses
            res.setHeader('Cache-Control', 'no-cache, must-revalidate');
            res.setHeader('Pragma', 'no-cache');
          } else if (req.url?.match(/\.(jpg|png|svg|webp)$/)) {
            // For static assets, use aggressive caching
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          }
        }
        
        next();
      });
    },
  };
}
