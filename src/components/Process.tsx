'use client';

import { motion } from 'framer-motion';
import {
  ChatCircleText,
  MapPin,
  PencilRuler,
  Receipt,
  Hammer,
  CheckCircle,
  CloudRain,
  Buildings,
  Ruler,
  DeviceMobile,
  Drop,
  Headset
} from '@phosphor-icons/react';
import { processData, performanceData } from '@/data/siteData';

const getProcessIcon = (iconName: string) => {
  switch (iconName) {
    case 'ChatCircleText': return <ChatCircleText size={24} weight="duotone" className="text-primary" />;
    case 'MapPin': return <MapPin size={24} weight="duotone" className="text-primary" />;
    case 'PencilRuler': return <PencilRuler size={24} weight="duotone" className="text-primary" />;
    case 'Receipt': return <Receipt size={24} weight="duotone" className="text-primary" />;
    case 'Hammer': return <Hammer size={24} weight="duotone" className="text-primary" />;
    case 'CheckCircle': return <CheckCircle size={24} weight="duotone" className="text-primary" />;
    default: return <ChatCircleText size={24} weight="duotone" className="text-primary" />;
  }
};

const getPerformanceIcon = (iconName: string) => {
  switch (iconName) {
    case 'CloudRain': return <CloudRain size={26} weight="duotone" className="text-primary" />;
    case 'Buildings': return <Buildings size={26} weight="duotone" className="text-primary" />;
    case 'Ruler': return <Ruler size={26} weight="duotone" className="text-primary" />;
    case 'DeviceMobile': return <DeviceMobile size={26} weight="duotone" className="text-primary" />;
    case 'Drop': return <Drop size={26} weight="duotone" className="text-primary" />;
    case 'Headset': return <Headset size={26} weight="duotone" className="text-primary" />;
    default: return <CloudRain size={26} weight="duotone" className="text-primary" />;
  }
};

export default function Process() {
  return (
    <section id="process" className="py-24 bg-cream-bg/100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section 1: HOW IT WORKS - Installation Process */}
        <div className="mb-24">
          <div className="max-w-3xl mb-14">
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-off-black leading-tight">
              Installation Process
            </h2>
            <p className="text-sm text-neutral-gray mt-4 max-w-2xl">
              From your initial enquiry through to final completion, our structured 6-step workflow ensures your custom project is built with precision, transparency, and care.
            </p>
          </div>

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processData.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Step Number Badge */}
                    <div className="w-10 h-10 rounded-2xl bg-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                      {item.step}
                    </div>

                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-primary-cream border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getProcessIcon(item.icon)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-black mb-3">
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

        {/* Section 2: Engineered for Performance */}
        <div>
          <div className="max-w-3xl mb-14">
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
              Built To Endure
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-off-black leading-tight">
              Engineered for Performance
            </h2>
            <p className="text-sm text-neutral-gray mt-4 max-w-2xl">
              Every structure is locally crafted with marine-grade materials, smart motorisation technology, and wind-tested structural engineering.
            </p>
          </div>

          {/* 6 Performance Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex items-start gap-5 group"
              >
                {/* Icon Box */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-cream border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getPerformanceIcon(item.icon)}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-black mb-2">
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
