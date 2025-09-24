import { ReactNode } from "react";
import GradientBlinds from "./GradientBlinds";

interface PageBgAndCursorProps {
  children: ReactNode;
}

export const PageBgAndCursor = ({ children }: PageBgAndCursorProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Custom Gradient Background */}
      <div className="absolute inset-0 z-0">
        <GradientBlinds
          gradientColors={['#FF0000', '#FF0000']} // Two red colors from your screenshot
          angle={0} // Blinds angle: 0
          noise={0.5} // Noise amount: 0.5
          blindCount={23} // Blinds count: 23
          blindMinWidth={10} // Min blind width: 10
          mouseDampening={0.15} // Mouse damping: 0.15
          spotlightRadius={0.5} // Spot radius: 0.5
          distortAmount={0} // Distort: 0
          shineDirection="left" // Light direction: Left
          mixBlendMode="normal"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
};
