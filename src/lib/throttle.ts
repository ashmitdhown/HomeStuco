// Throttle function to limit how often a function can run
export function throttle(fn: (...args: any[]) => void, wait: number) {
  let lastTime = 0;
  return function (...args: any[]) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn(...args);
    }
  };
}
