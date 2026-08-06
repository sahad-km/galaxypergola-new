'use client';

import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { ReactNode } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,        // Inertia smooth level (lower = smoother/slower)
        duration: 1.4,     // Scroll speed duration
        smoothWheel: true, // Smooth mouse wheel scroll
        syncTouch: false,  // Do not force touch smooth to avoid mobile jank
      }}
    >
      {children}
    </ReactLenis>
  );
}
