// Performance monitoring utilities
export const createScrollPerformanceMonitor = () => {
  let frameCount = 0;
  let lastTime = performance.now();
  let scrollEvents = 0;
  let lastScrollTime = 0;

  const monitorScroll = () => {
    scrollEvents++;
    const now = performance.now();

    // Log scroll performance every 60 events
    if (scrollEvents % 60 === 0) {
      const timeDiff = now - lastScrollTime;
      const fps = Math.round(1000 / (timeDiff / 60));
      console.log(`Scroll Performance: ${fps} FPS, ${scrollEvents} events processed`);
      lastScrollTime = now;
    }
  };

  return { monitorScroll };
};

// Throttle scroll events more aggressively on low-performance devices
export const getOptimalThrottleDelay = () => {
  // Use longer delays on slower devices
  const isSlowDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  return isSlowDevice ? 200 : 100;
};