// Hook to trigger animation when element enters viewport
import { useState } from 'react';

function useScrollAnimation<T extends HTMLElement>() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (hasAnimated) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return [ref, hasAnimated] as const;
}
// Utility to convert classic animejs-style animation objects to keyframes format for animejs@4+
function convertToKeyframes(animation: any) {
  if (!animation || typeof animation !== 'object') return animation;
  const keyframeProps: Record<string, [any, any]> = {};
  const otherProps: Record<string, any> = {};
  for (const key in animation) {
    if (Array.isArray(animation[key]) && animation[key].length === 2 &&
        (typeof animation[key][0] !== 'object' && typeof animation[key][1] !== 'object')) {
      keyframeProps[key] = animation[key];
    } else {
      otherProps[key] = animation[key];
    }
  }
  if (Object.keys(keyframeProps).length === 0) return animation;
  // Build keyframes array
  const from: Record<string, any> = {};
  const to: Record<string, any> = {};
  for (const key in keyframeProps) {
    from[key] = keyframeProps[key][0];
    to[key] = keyframeProps[key][1];
  }
  return {
    ...otherProps,
    keyframes: [from, to],
  };
}
// AnimeJSComponent.tsx
// A reusable React component using animejs for animation

import React, { useEffect, useRef } from "react";



type AnimationParams = any; // fallback for type safety

interface AnimeJSComponentProps {
  children: React.ReactNode;
  animation?: AnimationParams;
  className?: string;
}

const AnimeJSComponent: React.FC<AnimeJSComponentProps> = ({ children, animation, className }) => {
  const [containerRef, hasAnimated] = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    let animeInstance: any;
    if (containerRef.current && animation && hasAnimated) {
      import('animejs').then((mod) => {
        const animeFn = mod.animate;
        const converted = convertToKeyframes(animation);
        if (typeof animeFn === 'function') {
          animeInstance = animeFn(containerRef.current, converted);
        } else {
          console.error('animejs: mod.animate is not a function. mod:', mod);
        }
      });
    }
    // Optionally clean up animation
    return () => {
      if (animeInstance && typeof animeInstance.pause === 'function') {
        animeInstance.pause();
      }
    };
  }, [animation, hasAnimated]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default AnimeJSComponent;
