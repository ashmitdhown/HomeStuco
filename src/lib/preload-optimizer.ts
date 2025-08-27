// This utility helps preload critical resources to improve startup performance
// especially helpful for localhost connections in Chrome

/**
 * Preloads critical resources for faster initial loading
 * This is especially helpful for Chrome on localhost
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') {
    return;
  }
  
  // Only run in production or when explicitly enabled in development
  if (process.env.NODE_ENV !== 'production' && 
      !localStorage.getItem('enable_preloading')) {
    return;
  }

  // Create preload links for critical resources
  const preloadLinks = [
    // Preload main JS chunks
    { rel: 'modulepreload', href: '/src/main.tsx', as: 'script' },
    
    // Preload critical CSS
    { rel: 'preload', href: '/src/index.css', as: 'style' },
    
    // Preload key images (modify paths as needed)
    { rel: 'preload', href: '/assets/logo.webp', as: 'image' },
    
    // Preload fonts if applicable
    // { rel: 'preload', href: '/assets/fonts/your-font.woff2', as: 'font', crossorigin: 'anonymous' },
  ];

  // Helper to create and append link elements
  function createLink(attributes: Record<string, string>) {
    const link = document.createElement('link');
    Object.entries(attributes).forEach(([key, value]) => {
      link.setAttribute(key, value);
    });
    document.head.appendChild(link);
  }

  // Create preload links with a slight delay to prioritize initial render
  setTimeout(() => {
    preloadLinks.forEach(attrs => createLink(attrs));
    
    // Use requestIdleCallback for less critical resources
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (callback: () => void) => void }).requestIdleCallback(() => {
        // Prefetch additional routes that might be visited soon
        [
          '/Events',
          '/About',
          '/Contact'
        ].forEach(route => {
          createLink({
            rel: 'prefetch',
            href: route
          });
        });
      });
    }
  }, 100); // Small delay to not block initial render
}

// DNS prefetching for external resources
export function optimizeDnsLookups() {
  if (typeof document === 'undefined') {
    return;
  }
  
  // List of domains to prefetch DNS for
  const domains = [
    // Add domains your app connects to
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'cdn.jsdelivr.net',
  ];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
    
    // Also add preconnect for important domains
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = `//${domain}`;
    document.head.appendChild(preconnect);
  });
}

export default {
  preloadCriticalResources,
  optimizeDnsLookups
};
