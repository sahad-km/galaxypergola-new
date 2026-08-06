'use client';

import { motion } from 'framer-motion';
import { 
  ChatCircleText, 
  Desktop, 
  Factory, 
  ShieldCheck 
} from '@phosphor-icons/react';
import { processData } from '@/data/siteData';

const getProcessIcon = (iconName: string) => {
  switch (iconName) {
    case 'ChatCircleText': return <ChatCircleText size={28} weight="duotone" className="text-primary" />;
    case 'Desktop': return <Desktop size={28} weight="duotone" className="text-primary" />;
    case 'Factory': return <Factory size={28} weight="duotone" className="text-primary" />;
    case 'ShieldCheck': return <ShieldCheck size={28} weight="duotone" className="text-primary" />;
    default: return <ChatCircleText size={28} weight="duotone" className="text-primary" />;
  }
};

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
            Our Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-off-black leading-tight">
            How We Build Your Space
          </h2>
          <p className="text-sm text-neutral-gray mt-4 max-w-xl mx-auto">
            From the initial on-site consultation to the final handoff, our NZ-certified process guarantees complete reliability and precision.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Horizontal Line Connector (Desktop) */}
          <div className="hidden lg:block absolute top-[43px] left-[12%] right-[12%] h-0.5 bg-neutral-100 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ originX: 0 }}
              className="w-full h-full bg-gradient-to-r from-primary/30 via-primary to-primary-light"
            />
          </div>

          {/* Vertical Line Connector (Mobile) */}
          <div className="lg:hidden absolute top-[40px] bottom-[40px] left-[39px] w-0.5 bg-neutral-100 z-0">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-primary/30 via-primary to-primary-light"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {processData.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
              >
                
                {/* Step Circle & Icon */}
                <div className="flex-shrink-0 mr-6 lg:mr-0 lg:mb-6 relative">
                  <div className="w-20 h-20 rounded-2xl bg-cream-bg border-2 border-neutral-100 shadow-md flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-lg transition-all duration-300 relative z-10">
                    {getProcessIcon(item.icon)}
                  </div>
                  {/* Floating index tag */}
                  <div className="absolute -top-2.5 -right-2.5 bg-primary text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow">
                    {item.step}
                  </div>
                </div>

                {/* Step Description Content */}
                <div className="flex-1 lg:px-4">
                  <h3 className="text-lg font-bold text-neutral-black mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-gray leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
