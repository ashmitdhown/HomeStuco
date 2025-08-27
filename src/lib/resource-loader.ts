/**
 * This module contains functions for intelligent resource loading
 * to optimize large assets like Spline 3D scenes.
 */

interface NavigatorExtended extends Navigator {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
}

/**
 * Prefetches the Spline library after initial page load
 * to ensure it's available when needed but doesn't block critical rendering
 */
export const prefetchSpline = () => {
  // Wait until browser is idle and page has rendered
  if ('requestIdleCallback' in window) {
    (window as Window & { requestIdleCallback: (callback: () => void) => void }).requestIdleCallback(() => {
      // Only prefetch if we're not on a slow connection
      if (!isSlowConnection() && !prefersReducedMotion()) {
        // Create a link prefetch for the Spline code
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'script';
        link.href = '/assets/vendor-spline-react'; // This will match one of our chunks
        document.head.appendChild(link);
      }
    });
  }
};

/**
 * Checks if user has indicated they prefer reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Detects if user is on a slow connection
 */
export const isSlowConnection = () => {
  if ('connection' in navigator) {
    const conn = (navigator as NavigatorExtended).connection;
    if (conn && (conn.saveData || 
                 conn.effectiveType === 'slow-2g' || 
                 conn.effectiveType === '2g')) {
      return true;
    }
  }
  return false;
};

/**
 * Detects if user is likely on a mobile device
 */
export const isMobileDevice = () => {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

export default {
  prefetchSpline,
  prefersReducedMotion,
  isSlowConnection,
  isMobileDevice
};
