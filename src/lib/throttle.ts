// Throttle function to limit how often a function can run
export function throttle<T extends unknown[]>(fn: (...args: T) => void, wait: number) {
  let lastTime = 0;
  return function (...args: T) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn(...args);
    }
  };
}
