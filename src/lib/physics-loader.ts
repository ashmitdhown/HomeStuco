/**
 * This module handles the conditional loading of Spline physics
 * modules based on actual need, further reducing initial load size.
 */

interface NavigatorExtended extends Navigator {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
  deviceMemory?: number;
}

/**
 * Check if a document is visible and likely to need physics
 */
export const shouldLoadPhysics = (): boolean => {
  // Don't load physics if document is hidden
  if (typeof document !== 'undefined' && document.hidden) {
    return false;
  }
  
  // Don't load physics on slow connections or save-data mode
  if ('connection' in navigator) {
    const conn = (navigator as NavigatorExtended).connection;
    if (conn && (conn.saveData || conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g')) {
      return false;
    }
  }
  
  // Don't load on low-memory devices
  if ('deviceMemory' in navigator) {
    const memory = (navigator as NavigatorExtended).deviceMemory;
    if (memory && memory < 4) {
      return false;
    }
  }
  
  return true;
};

/**
 * Preload physics modules when appropriate
 */
export const preloadPhysicsModules = (): void => {
  if (shouldLoadPhysics() && 'requestIdleCallback' in window) {
    // Wait for browser idle time to preload
    (window as Window & { requestIdleCallback: (callback: () => void) => void }).requestIdleCallback(() => {
      // Create link elements to prefetch physics modules
      const moduleNames = [
        'spline-physics-core',
        'spline-physics-body-core',
        'spline-physics-collision',
      ];
      
      moduleNames.forEach(moduleName => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'script';
        link.href = `/assets/${moduleName}`;
        document.head.appendChild(link);
      });
    });
  }
};

export default {
  shouldLoadPhysics,
  preloadPhysicsModules
};
