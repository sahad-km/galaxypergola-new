'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { statsData } from '@/data/siteData';

// Custom Count-Up Counter Sub-component
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds animation

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Easing out cubic: f(t) = 1 - (1-t)^3
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easeProgress * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={containerRef} className="font-display text-4xl sm:text-5xl font-black text-primary tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Effect for the Image
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-cream-bg relative overflow-hidden">
      {/* Decorative Large Background Mark */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 opacity-[0.02] pointer-events-none">
        <Image
          src="/logo-icon.png"
          alt="Cluster Hex Watermark"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-off-black leading-tight font-extrabold mb-6">
                Designed for the kiwi lifestyle. Engineered for local conditions.
              </h2>
              <p className="text-base sm:text-lg text-charcoal leading-relaxed mb-6">
                At Cluster Outdoor Solutions, we believe that New Zealanders deserve spaces that blur the boundaries between indoors and outdoors, regardless of the season. From coastal Taranaki winds to variable Whanganui weather, our structures are engineered to endure.
              </p>
              <p className="text-base text-neutral-gray leading-relaxed mb-8">
                We custom-engineer every pergola, canopy, carport, and blind system in our local facility, using premium marine-grade aluminium and stainless steel fixtures. Our structural standards exceed local building codes, ensuring your investment stands rock-solid for decades.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-neutral-200">
              {statsData.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="font-display font-bold text-neutral-black mt-2 text-sm sm:text-base">
                    {stat.label}
                  </span>
                  <span className="text-xs text-neutral-gray mt-1 leading-normal">
                    {stat.description}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Parallax Image Showcase */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-200"
              ref={imageContainerRef}
            >
              {/* Parallax Image */}
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
              >
                <Image
                  src="/images/about-us.webp"
                  alt="Precision installation of aluminium outdoor pergola"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Image Overlay/Border Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              {/* Small floating badge */}
              {/* <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl shadow-lg border border-white/20">
                <p className="text-xs uppercase tracking-widest font-extrabold text-primary mb-1">
                  100% Quality Guaranteed
                </p>
                <p className="text-sm font-bold text-neutral-black leading-tight">
                  Certified Master Builders & Engineers
                </p>
              </div> */}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
