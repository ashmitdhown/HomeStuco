import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadCriticalResources, optimizeDnsLookups } from './lib/preload-optimizer'
import { prefetchSpline } from './lib/resource-loader'
import { preloadPhysicsModules } from './lib/physics-loader'

// Optimize DNS lookups and resource loading - especially helps with Chrome on localhost
optimizeDnsLookups();
preloadCriticalResources();

// Intelligent resource loading strategy
window.addEventListener('load', () => {
  // First focus on UI interactivity
  setTimeout(() => {
    // Prefetch Spline core for 3D visualization (medium priority)
    prefetchSpline();
    
    // Only load physics when user is likely to stay on the page
    const loadPhysicsWhenIdle = () => {
      // Wait until we're confident the user is staying on the page
      // and initial rendering + animations are complete
      setTimeout(() => {
        // Check if user is still engaged with the page
        if (!document.hidden) {
          console.log('Preloading physics modules for smoother experience');
          preloadPhysicsModules();
        }
      }, 5000); // Wait 5 seconds after initial load to load physics
    };
    
    // Use requestIdleCallback for non-critical loads if available
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (callback: () => void, options?: { timeout: number }) => void }).requestIdleCallback(loadPhysicsWhenIdle, { timeout: 10000 });
    } else {
      setTimeout(loadPhysicsWhenIdle, 3000);
    }
  }, 2000); // Wait 2 seconds after page load before prefetching
});

// Measure initial load performance for debugging
const startTime = performance.now();
window.addEventListener('load', () => {
  const loadTime = performance.now() - startTime;
  console.log(`Page loaded in ${Math.round(loadTime)}ms`);

  // Report if this is localhost or network
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  console.log(`Connection type: ${isLocalhost ? 'localhost' : 'network IP'}`);
});

createRoot(document.getElementById("root")!).render(<App />);
