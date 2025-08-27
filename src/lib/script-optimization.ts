/**
 * Script loading utilities to improve performance
 * These utilities help with optimal script loading and execution
 */

/**
 * Load a script with optimal loading strategy
 * @param src The URL of the script
 * @param defer Whether to defer execution until after parsing
 * @param async Whether to load asynchronously
 */
export const loadScript = (src: string, defer = true, async = true): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.defer = defer;
    script.async = async;
    
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    
    document.head.appendChild(script);
  });
};

/**
 * Load a script only when needed (on interaction or in viewport)
 * Great for non-critical third-party scripts
 */
export const lazyLoadScript = (src: string, loadTrigger: 'idle' | 'visible' | 'interaction' = 'idle'): void => {
  const loadScriptNow = () => {
    loadScript(src, true, true)
      .catch(err => console.error(`Failed to lazy load script ${src}:`, err));
  };

  switch (loadTrigger) {
    case 'idle':
      // Load when browser is idle
      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (callback: () => void) => void }).requestIdleCallback(loadScriptNow);
      } else {
        setTimeout(loadScriptNow, 1000);
      }
      break;
      
    case 'visible':
      // Load when element is visible
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            loadScriptNow();
            observer.disconnect();
          }
        });
        
        // Create a dummy element to observe
        const sentinel = document.createElement('div');
        sentinel.style.height = '1px';
        sentinel.style.width = '1px';
        document.body.appendChild(sentinel);
        observer.observe(sentinel);
      } else {
        // Fallback
        loadScriptNow();
      }
      break;
      
    case 'interaction': {
      // Load on user interaction
      const interactionEvents = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];
      
      const onInteraction = () => {
        loadScriptNow();
        interactionEvents.forEach(event => {
          document.removeEventListener(event, onInteraction);
        });
      };
      
      interactionEvents.forEach(event => {
        document.addEventListener(event, onInteraction, { once: true });
      });
      break;
    }
  }
};

export default {
  loadScript,
  lazyLoadScript
};
