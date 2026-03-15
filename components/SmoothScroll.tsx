"use client";

import { ReactLenis } from "@/lib/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  options?: {
    lerp?: number;
    duration?: number;
    smoothWheel?: boolean;
  };
}

export function SmoothScroll({ children, options }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        ...options,
      }}
      className="min-h-screen"
    >
      {children}
    </ReactLenis>
  );
}
