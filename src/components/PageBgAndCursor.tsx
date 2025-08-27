import { ReactNode } from "react";
import SplineBg from "@/components/SplineBg";

interface PageBgAndCursorProps {
  children: ReactNode;
}

export const PageBgAndCursor = ({ children }: PageBgAndCursorProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SplineBg />
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
};
