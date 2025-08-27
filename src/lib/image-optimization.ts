// Image optimization utility
// This helps with lazy loading and progressive loading of images

export interface ImageLoaderOptions {
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
}

/**
 * Optimizes image loading by lazily loading non-priority images
 * and providing a blur-up effect for better perceived performance
 */
export const optimizeImageLoading = (
  imageElement: HTMLImageElement, 
  options: ImageLoaderOptions = {}
): void => {
  const {
    priority = false,
    placeholder = 'blur'
  } = options;

  // Only apply lazy loading to non-priority images
  if (!priority) {
    imageElement.loading = 'lazy';
  }

  // Add decoding mode for better performance
  imageElement.decoding = priority ? 'sync' : 'async';

  // Apply blur placeholder if specified
  if (placeholder === 'blur' && !imageElement.style.backgroundImage) {
    // Create lightweight blur placeholder
    imageElement.style.backgroundSize = 'cover';
    imageElement.style.backgroundPosition = 'center';
    imageElement.style.filter = 'blur(20px)';
    imageElement.style.transform = 'scale(1.1)';
    imageElement.style.transition = 'filter 0.3s ease-in-out, transform 0.3s ease-in-out';
    
    imageElement.addEventListener('load', () => {
      imageElement.style.filter = '';
      imageElement.style.transform = '';
    });
  }

  // Add fetchpriority attribute for modern browsers
  if (priority) {
    imageElement.setAttribute('fetchpriority', 'high');
  }
};

/**
 * Observer to lazy-load images as they enter the viewport
 */
export const createImageObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLImageElement) {
          const img = entry.target;
          const { dataset: { src } } = img;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            optimizeImageLoading(img);
          }
          
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '200px', // Start loading images when they're 200px away from viewport
      threshold: 0.01
    }
  );
};

export default {
  optimizeImageLoading,
  createImageObserver
};
