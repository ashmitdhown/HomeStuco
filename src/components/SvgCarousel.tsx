
import React from 'react';
import AnimeJSComponent from '@/components/AnimeJSComponent';

interface SvgCarouselProps {
  className?: string;
}

const SvgCarousel: React.FC<SvgCarouselProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 w-full h-full ${className || ''}`}>
      <AnimeJSComponent
        animation={{
          opacity: [0, 1],
          scale: [1, 1],
          duration: 1000,
          easing: 'easeOutBack',
        }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/untitled-design.svg"
          alt="About Background"
          className="w-full h-full object-fill"
          style={{ filter: 'brightness(1.15) contrast(1.15)' }}
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/10" />
      </AnimeJSComponent>
    </div>
  );
};

export default SvgCarousel;
