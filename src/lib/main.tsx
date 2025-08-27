    // Use requestIdleCallback for non-critical loads if available
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (callback: () => void, options?: { timeout: number }) => void }).requestIdleCallback(loadPhysicsWhenIdle, { timeout: 10000 });
    } else {
      setTimeout(loadPhysicsWhenIdle, 3000);
    }