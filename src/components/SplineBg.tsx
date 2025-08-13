// Author: Manav Arya & Ashmit Dhown
import React from "react";
import Spline from "@splinetool/react-spline";

const SplineBg = () => (
  <>
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Spline scene="https://prod.spline.design/T3AzZ7KbJkvWumI7/scene.splinecode"/>
    </div>
    {/* Contact Us Button positioned to cover Spline watermark */}
    <div className="fixed bottom-4 right-5 z-20 pointer-events-auto">
    </div>
    {/* Optional: Overlay for readability */}
    
  </>
);

export default SplineBg;


