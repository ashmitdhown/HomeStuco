// Author: Manav Arya & Ashmit Dhown
import React, { Suspense, useState, useEffect, useRef } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineBg = () => {
  const [showSpline, setShowSpline] = useState(false);
  const splineRef = useRef(null);
  const animationRef = useRef(null);
  const paused = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpline(true), 1000); // Delay load
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!splineRef.current) return;

    let last = 0;
    const fps = 30; // clamp FPS
    const interval = 1000 / fps;

    const loop = (now) => {
      if (!paused.current && now - last >= interval) {
        last = now;
        splineRef.current.requestRender();
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
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="w-full h-full bg-gray-100" />}>
          {showSpline && (
            <Spline
              ref={splineRef}
              scene="https://prod.spline.design/T3AzZ7KbJkvWumI7/scene.splinecode"
            />
          )}
        </Suspense>
      </div>

      {/* Contact Us Button */}
      <div className="fixed bottom-4 right-5 z-20 pointer-events-auto">
        {/* Your button here */}
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 z-10 bg-black/10 pointer-events-none" />
    </>
  );
};

export default SplineBg;
