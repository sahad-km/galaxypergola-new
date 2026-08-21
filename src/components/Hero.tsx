'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from '@phosphor-icons/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Connect scroll progression to opacity & content offset transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Overlay darkens slightly as user scrolls down
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.8]);
  // Content fades out and translates upwards as user scrolls
  const contentY = useTransform(scrollYProgress, [0, 1], ['0px', '-100px']);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen bg-neutral-black"
    >
      {/* Fixed Background Video: 100% stationary, does not scroll or move at all */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg.png"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Animated Dark Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-neutral-black/90 z-10 pointer-events-none"
        />
      </div>

      {/* Hero Content: Scrolls up naturally over the fixed video */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center justify-end h-full pb-28 sm:pb-36"
      >
        {/* Animated CTAs - Larger & Standout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center items-center w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#contact"
            className="w-full max-w-[280px] sm:max-w-none sm:w-auto px-6 py-3.5 sm:px-12 sm:py-6 bg-primary text-white text-xs sm:text-xl font-extrabold tracking-wider uppercase rounded-full shadow-2xl hover:bg-primary-hover hover:shadow-primary/40 hover:scale-105 transition-all duration-300 transform active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-light text-center"
          >
            Get a Free Onsite Quote
          </a>
          <a
            href="#products"
            className="w-full max-w-[280px] sm:max-w-none sm:w-auto px-6 py-3.5 sm:px-12 sm:py-6 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-xl font-extrabold tracking-wider uppercase rounded-full border-2 border-white/40 backdrop-blur-md shadow-2xl hover:border-white hover:scale-105 transition-all duration-300 transform active:scale-100 focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
          >
            Explore Products
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        >
          <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-white-400 font-semibold mb-1 opacity-70">
              Discover More
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="p-2 rounded-full border border-neutral-700 bg-black/30 backdrop-blur-md text-primary-light hover:text-white transition-colors"
            >
              <ArrowDown size={18} weight="bold" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
