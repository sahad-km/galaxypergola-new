'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';
import { testimonialsData } from '@/data/siteData';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 8000); // 8 seconds autoplay
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  // Variants for custom sliding animations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const activeTestimonial = testimonialsData[index];

  return (
    <section id="testimonials" className="py-24 bg-cream-bg relative overflow-hidden">
      
      {/* Decorative quotes background watermark */}
      <div className="absolute top-10 left-10 text-primary-cream/40 opacity-30 select-none pointer-events-none">
        <Quotes size={240} weight="fill" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-off-black leading-tight">
            Approved by Kiwi Homeowners
          </h2>
        </div>

        {/* Carousel Slider */}
        <div className="relative min-h-[380px] sm:min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white rounded-3xl border border-neutral-100 p-8 sm:p-12 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Star Ratings */}
                <div className="flex gap-1 mb-6 text-primary">
                  {Array.from({ length: activeTestimonial.rating }).map((_, idx) => (
                    <Star key={idx} size={18} weight="fill" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-base sm:text-lg md:text-xl text-neutral-charcoal italic leading-relaxed font-light mb-8">
                  "{activeTestimonial.quote}"
                </p>
              </div>

              {/* Homeowner Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-neutral-100">
                <div>
                  <h4 className="font-display font-extrabold text-neutral-black text-base">
                    {activeTestimonial.name}
                  </h4>
                  <span className="text-xs text-neutral-gray font-medium">
                    {activeTestimonial.location}
                  </span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 bg-primary-cream text-primary rounded-full self-start sm:self-auto border border-primary/15">
                  Installed: {activeTestimonial.project}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrow buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-70px] top-1/2 -translate-y-1/2 p-3 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-primary/30 shadow-md text-neutral-charcoal hover:text-primary transition-all duration-300 z-25 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <CaretLeft size={20} weight="bold" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-70px] top-1/2 -translate-y-1/2 p-3 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-primary/30 shadow-md text-neutral-charcoal hover:text-primary transition-all duration-300 z-25 focus:outline-none"
            aria-label="Next testimonial"
          >
            <CaretRight size={20} weight="bold" />
          </button>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3.5 h-1 rounded-full transition-all duration-300 ${
                index === idx ? 'bg-primary w-7' : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
