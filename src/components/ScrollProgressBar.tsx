import React, { useEffect, useState } from 'react';
import { throttle } from '@/lib/throttle';

const ScrollProgressBar: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = throttle(() => {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      setScroll(progress);
    }, 100);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // set initial
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '5px',
      zIndex: 9999,
      background: 'transparent',
    }}>
      <div
        style={{
          height: '100%',
          width: `${scroll}%`,
          background: 'linear-gradient(90deg, #8B0000 0%, #B22222 100%)',
          boxShadow: '0 2px 8px 0 rgba(139, 0, 0, 0.2)',
          borderRadius: '0 2px 2px 0',
          transition: 'width 0.15s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;