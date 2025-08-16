// AnimatedCard.tsx
import React, { useEffect, useRef } from "react";
import AnimeJSComponent from "./AnimeJSComponent";

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// A specialized animated card component using AnimeJSComponent
const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, delay = 0, className = "" }) => {
  return (
    <AnimeJSComponent
      className={className}
      animation={{
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.98, 1],
        duration: 700,
        easing: 'easeOutQuad',
        delay: delay,
      }}
    >
      {children}
    </AnimeJSComponent>
  );
};

export default AnimatedCard;
