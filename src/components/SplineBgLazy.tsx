// Author: Manav Arya & Ashmit Dhown
import React, { Suspense } from "react";

// Dynamically import Spline to reduce initial bundle size
const Spline = React.lazy(() => import("@splinetool/react-spline").then(module => ({ default: module.default })));

const SplineBgLazy = () => (
  <>
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Suspense fallback={<div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />}>
        <Spline scene="https://prod.spline.design/T3AzZ7KbJkvWumI7/scene.splinecode"/>
      </Suspense>
    </div>
    {/* Contact Us Button positioned to cover Spline watermark */}
    <div className="fixed bottom-4 right-5 z-20 pointer-events-auto">
    </div>
    {/* Optional: Overlay for readability */}
  </>
);

export default SplineBgLazy;
