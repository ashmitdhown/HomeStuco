// Centralized scroll manager to optimize multiple scroll listeners
import { throttle } from './throttle';

class ScrollManager {
  private listeners: Map<string, (scrollY: number) => void> = new Map();
  private throttledHandler: (() => void) | null = null;
  private isListening = false;

  addListener(id: string, callback: (scrollY: number) => void) {
    this.listeners.set(id, callback);
    this.ensureListening();
  }

  removeListener(id: string) {
    this.listeners.delete(id);
    if (this.listeners.size === 0) {
      this.stopListening();
    }
  }

  private ensureListening() {
    if (!this.isListening) {
      this.throttledHandler = throttle(() => {
        const { scrollY } = window;
        this.listeners.forEach(callback => callback(scrollY));
      }, 100);

      window.addEventListener('scroll', this.throttledHandler, { passive: true });
      this.isListening = true;
    }
  }

  private stopListening() {
    if (this.throttledHandler) {
      window.removeEventListener('scroll', this.throttledHandler);
      this.isListening = false;
    }
  }
}

export const scrollManager = new ScrollManager();