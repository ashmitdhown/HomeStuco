// AnimatedTextGroup.tsx
import React from "react";
import AnimeJSComponent from "./AnimeJSComponent";

interface AnimatedTextGroupProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  baseDelay?: number;
  className?: string;
}

// A component that animates a group of text elements with a staggered delay
const AnimatedTextGroup: React.FC<AnimatedTextGroupProps> = ({ 
  children, 
  staggerDelay = 100,
  baseDelay = 0,
  className = ""
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimeJSComponent
          animation={{
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 600,
            easing: 'easeOutQuad',
            delay: baseDelay + (index * staggerDelay)
          }}
          key={index}
        >
          {child}
        </AnimeJSComponent>
      ))}
    </div>
  );
};

export default AnimatedTextGroup;
