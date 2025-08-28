// Author: Manav Arya & Ashmit Dhown
import React, { Suspense, useState, useEffect, useRef } from "react";
import { throttle } from "lodash";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineBg = () => {
  const [showSpline, setShowSpline] = useState(false);
  const splineRef = useRef(null);
  const animationRef = useRef(null);
  const paused = useRef(false);
  const idle = useRef(false);
  const lastActivity = useRef(Date.now());
  const scrolling = useRef(false);

  useEffect(() => {
    setShowSpline(true); // Load immediately
  }, []);

  // Track user activity for idle detection and debounce scroll
  useEffect(() => {
    let scrollTimeout;
    const activityHandler = () => {
      lastActivity.current = Date.now();
      idle.current = false;
    };
    const scrollHandler = throttle(() => {
      activityHandler();
      scrolling.current = true;
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        scrolling.current = false;
      }, 300); // Reduced from 500ms to 300ms for better responsiveness
    }, 100); // Throttle scroll events

    window.addEventListener('mousemove', activityHandler);
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', activityHandler);
      window.removeEventListener('scroll', scrollHandler);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  useEffect(() => {
    if (!splineRef.current) {
      return;
    }

    let last = 0;
    let currentFps = 12; // Increased from 8 to 12 for smoother animation
    const normalFps = 12;

    const loop = (now) => {
      // Aggressively pause animation when idle or scrolling
      if (Date.now() - lastActivity.current > 3000 || paused.current || scrolling.current) { // Reduced from 5000ms to 3000ms
        idle.current = true;
        // Do not render or request next frame
        return;
      } else {
        idle.current = false;
        currentFps = normalFps;
      }
      const interval = 1000 / currentFps;
      if (!paused.current && now - last >= interval) {
        last = now;
        if (splineRef.current?.requestRender) {
          splineRef.current.requestRender();
        }
      }
      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationRef.current);
  }, [showSpline]);

  // Pause when tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      paused.current = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <Suspense fallback={<div className="w-full h-full bg-gray-100" />}>
          {showSpline && (
            <Spline
              ref={splineRef}
              scene="https://prod.spline.design/T3AzZ7KbJkvWumI7/scene.splinecode"
            />
          )}
        </Suspense>
      </div>


      <div className="fixed bottom-4 right-5 z-20 pointer-events-auto">

      </div>


      <div className="fixed inset-0 z-10 bg-black/10 pointer-events-none" />
    </>
  );
};

export default SplineBg;
