import React, { useEffect, useRef } from 'react';
import { optimizeImageLoading, createImageObserver } from '../lib/image-optimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

/**
 * A component that renders images with optimization techniques
 * like lazy loading, blur-up placeholders, and proper sizing
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'blur',
  onLoad
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = createImageObserver();
    const currentImg = imgRef.current;
    
    if (!priority && currentImg && observer) {
      observer.observe(currentImg);
    } else if (currentImg) {
      optimizeImageLoading(currentImg, { priority, placeholder });
    }
    
    return () => {
      if (!priority && currentImg && observer) {
        observer.unobserve(currentImg);
      }
    };
  }, [priority, placeholder]);

  return (
    <img
      ref={imgRef}
      src={priority ? src : undefined}
      data-src={priority ? undefined : src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        opacity: priority ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
      onLoad={(e) => {
        (e.target as HTMLImageElement).style.opacity = '1';
        // Call the custom onLoad handler if provided
        if (onLoad) {
          onLoad(e);
        }
      }}
    />
  );
};

export default OptimizedImage;
