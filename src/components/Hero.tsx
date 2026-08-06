'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from '@phosphor-icons/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Connect scroll progression to Y offset for image parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Background shifts 30% of the scroll speed downwards for a subtle depth effect
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  // Overlay darkens slightly as user scrolls down
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7]);
  // Content fades out as user scrolls down
  const contentY = useTransform(scrollYProgress, [0, 1], ['0px', '150px']);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-neutral-black"
    >
      {/* 
        DEVELOPER NOTE: Background Video Support
        To replace the background image with a video, uncomment the video block below and comment out the image motion.div.
      */}
      {/* 
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>
      */}

      {/* Parallax Background Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%] bg-[url('/images/hero-bg.png')] bg-cover bg-center z-0 pointer-events-none"
      />

      {/* Animated Dark Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-neutral-black/90 z-10 pointer-events-none"
      />

      {/* Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center h-full pt-16"
      >
        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none"
        >
          Outdoor Living, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-primary-light">
            Engineered for NZ Weather
          </span>
        </motion.h1>

        {/* Animated Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-3xl font-light leading-relaxed"
        >
          Custom designed and local built aluminium pergolas, fixed canopies, carports, and outdoor blinds. Engineered to survive heavy rain, coastal salt, and alpine wind.
        </motion.p>

        {/* Animated CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-white text-base font-bold tracking-wider uppercase rounded-full shadow-xl hover:bg-primary-hover hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-primary-light"
          >
            Get a Free Quote
          </a>
          <a
            href="#products"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-base font-bold tracking-wider uppercase rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-white/50"
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
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1 opacity-70">
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
