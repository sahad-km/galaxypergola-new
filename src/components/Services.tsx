'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  CloudRain, 
  Car, 
  Sliders, 
  Compass, 
  Wrench,
  House, 
  ArrowRight,
  Drop,
  Sparkle
} from '@phosphor-icons/react';
import { servicesData } from '@/data/siteData';

// Map icon string name to Phosphor Icon component
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sun': return <Sun size={32} weight="duotone" className="text-primary" />;
    case 'CloudRain': return <CloudRain size={32} weight="duotone" className="text-primary" />;
    case 'Car': return <Car size={32} weight="duotone" className="text-primary" />;
    case 'Sliders': return <Sliders size={32} weight="duotone" className="text-primary" />;
    case 'Compass': return <Compass size={32} weight="duotone" className="text-primary" />;
    case 'Wrench': return <Wrench size={32} weight="duotone" className="text-primary" />;
    case 'House': return <House size={32} weight="duotone" className="text-primary" />;
    default: return <Sun size={32} weight="duotone" className="text-primary" />;
  }
};

const frameColors = [
  { name: 'Matte Charcoal', hex: '#2D2E30', dark: true },
  { name: 'Slate Gray', hex: '#5A5D64', dark: true },
  { name: 'Bronze Wood', hex: '#635345', dark: true },
  { name: 'Arctic White', hex: '#ECEAE6', dark: false },
];

export default function Services() {
  // Configurator States
  const [frameColor, setFrameColor] = useState(frameColors[0]);
  const [louvreAngle, setLouvreAngle] = useState(45); // 0 (closed/flat) to 90 (open/vertical)
  const [blindsDown, setBlindsDown] = useState(false);
  const [rainActive, setRainActive] = useState(false);
  const [sensorTriggered, setSensorTriggered] = useState(false);

  // Trigger smart rain sensor logic
  useEffect(() => {
    if (rainActive) {
      // Simulating a minor delay for rain detection
      const timer = setTimeout(() => {
        setLouvreAngle(0); // Close louvres
        setSensorTriggered(true);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setSensorTriggered(false);
    }
  }, [rainActive]);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block"
          >
            Our Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-off-black leading-tight"
          >
            Premium Solutions & Smart Engineering
          </motion.h2>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.04)' }}
              className="p-8 rounded-2xl border border-neutral-100 bg-cream-bg/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-4 bg-primary-cream inline-flex rounded-xl mb-6">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-neutral-black mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center text-xs text-charcoal font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-hover group transition-colors"
              >
                Learn More
                <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Signature Feature: Interactive Configurator */}
        <div className="p-8 md:p-12 rounded-3xl bg-neutral-cream/60 border border-neutral-200/60 shadow-inner grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Configurator Visualizer (SVG) */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur rounded-2xl border border-neutral-100 p-6 shadow-lg flex flex-col items-center justify-center relative overflow-hidden aspect-[4/3] w-full">
            
            {/* Weather Indicators / Alert */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <AnimatePresence>
                {rainActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold shadow-sm"
                  >
                    <Drop size={14} weight="fill" className="animate-bounce" />
                    Simulating Rain
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {sensorTriggered && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-cream text-primary text-xs font-bold shadow-sm border border-primary/20"
                  >
                    <Sparkle size={14} weight="fill" className="animate-pulse" />
                    Rain Sensor: Louvres Closed
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Configurator SVG Wireframe */}
            <svg 
              viewBox="0 0 600 400" 
              className="w-full h-full max-h-[300px]"
              aria-label="Interactive 3D model of pergola structure"
            >
              <defs>
                {/* Ground Shadow */}
                <radialGradient id="ground-shadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Rain Drops Simulation Layer */}
              {rainActive && Array.from({ length: 24 }).map((_, i) => {
                const xVal = 100 + (i * 18);
                const delay = (i % 5) * 0.2;
                return (
                  <g key={i} className="pointer-events-none">
                    <line
                      x1={xVal}
                      y1="-20"
                      x2={xVal - 15}
                      y2="420"
                      stroke="#87CEEB"
                      strokeWidth="1.5"
                      strokeDasharray="4 8"
                      className="opacity-50"
                      style={{
                        animation: `fall 1s linear infinite`,
                        animationDelay: `${delay}s`,
                      }}
                    />
                  </g>
                );
              })}

              <style>{`
                @keyframes fall {
                  0% { transform: translateY(-50px); }
                  100% { transform: translateY(400px); }
                }
              `}</style>

              {/* Floor / Deck Shadow */}
              <ellipse cx="300" cy="335" rx="240" ry="25" fill="url(#ground-shadow)" />

              {/* Ziptrak Side Blind Screen (Front Post area) */}
              <AnimatePresence>
                {blindsDown && (
                  <motion.polygon
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    style={{ originY: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    // Left front (150,150) to Right front (450,150) downwards to (450,330) and (150,330)
                    points="150,150 450,150 450,330 150,330"
                    fill="rgba(29, 28, 27, 0.45)"
                    stroke="rgba(134, 90, 51, 0.4)"
                    strokeWidth="1"
                    className="backdrop-blur-[1px]"
                  />
                )}
              </AnimatePresence>

              {/* Ziptrak Side Blind Side Mesh (Left Side) */}
              <AnimatePresence>
                {blindsDown && (
                  <motion.polygon
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    style={{ originY: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    // Back left (220,110) to Front left (150,150) downwards to (150,330) and (220,290)
                    points="220,110 150,150 150,330 220,290"
                    fill="rgba(29, 28, 27, 0.3)"
                    stroke="none"
                  />
                )}
              </AnimatePresence>

              {/* PERGOLA POSTS (Behind blinds or layered) */}
              {/* Back Left Post */}
              <line x1="220" y1="110" x2="220" y2="290" stroke={frameColor.hex} strokeWidth="6" strokeLinecap="round" />
              {/* Back Right Post */}
              <line x1="380" y1="110" x2="380" y2="290" stroke={frameColor.hex} strokeWidth="6" strokeLinecap="round" />
              {/* Front Left Post */}
              <line x1="150" y1="150" x2="150" y2="330" stroke={frameColor.hex} strokeWidth="10" strokeLinecap="round" />
              {/* Front Right Post */}
              <line x1="450" y1="150" x2="450" y2="330" stroke={frameColor.hex} strokeWidth="10" strokeLinecap="round" />

              {/* ROOF LOUVRES SYSTEM */}
              {/* Renders 12 louvre blades that animate their visual thickness/slant based on state */}
              {Array.from({ length: 12 }).map((_, i) => {
                // Interpolate position from back roof beam to front roof beam
                const t = i / 11;
                const lx1 = 220 + t * (150 - 220); // left point x
                const ly1 = 110 + t * (150 - 110); // left point y
                const rx2 = 380 + t * (450 - 380); // right point x
                const ry2 = 110 + t * (150 - 110); // right point y

                // Compute normal vector projection for the louvre blade orientation
                // Closed (0 deg) -> wide height (flat ceiling). Open (90 deg) -> thin lines.
                const factor = Math.cos((louvreAngle * Math.PI) / 180);
                const heightOffset = 6 - factor * 6; // 0 when open (vertical), 6 when closed (flat)
                const rotOffset = factor * 4;

                return (
                  <g key={i}>
                    {/* The Slat blade */}
                    <line
                      x1={lx1}
                      y1={ly1 + rotOffset}
                      x2={rx2}
                      y2={ry2 + rotOffset}
                      stroke={frameColor.hex}
                      strokeWidth={3 + heightOffset}
                      strokeLinecap="square"
                      className="transition-all duration-500 ease-out"
                    />
                    {/* Shadow detailing on blades */}
                    <line
                      x1={lx1 + 2}
                      y1={ly1 + rotOffset + 1}
                      x2={rx2 - 2}
                      y2={ry2 + rotOffset + 1}
                      stroke="rgba(0,0,0,0.15)"
                      strokeWidth="1"
                      className="transition-all duration-500 ease-out"
                    />
                  </g>
                );
              })}

              {/* MAIN TOP BEAMS (Framing the roof) */}
              {/* Back Roof Beam */}
              <line x1="220" y1="110" x2="380" y2="110" stroke={frameColor.hex} strokeWidth="8" strokeLinecap="square" />
              {/* Left Side Beam */}
              <line x1="220" y1="110" x2="150" y2="150" stroke={frameColor.hex} strokeWidth="10" strokeLinecap="square" />
              {/* Right Side Beam */}
              <line x1="380" y1="110" x2="450" y2="150" stroke={frameColor.hex} strokeWidth="10" strokeLinecap="square" />
              {/* Front Main Beam */}
              <line x1="150" y1="150" x2="450" y2="150" stroke={frameColor.hex} strokeWidth="12" strokeLinecap="square" />

            </svg>

            {/* Interactive watermark tag */}
            <span className="absolute bottom-3 right-4 text-[10px] tracking-wider text-neutral-400 font-mono">
              Live Custom SVG Visualizer
            </span>
          </div>

          {/* Configurator Controls Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
              Signature Innovation
            </span>
            <h3 className="text-2xl font-extrabold text-neutral-black mb-4">
              Interactive Pergola Configurator
            </h3>
            <p className="text-sm text-neutral-gray leading-relaxed mb-8">
              Configure our motorized louvre pergola system. Toggle side screens, adjust sunlight levels, or simulate a rainfall downpour to see the smart automation close the roof dynamically.
            </p>

            {/* Control: Frame Color Select */}
            <div className="mb-6">
              <label className="text-xs font-extrabold uppercase tracking-wider text-neutral-black mb-2.5 block">
                Structure Frame Color: <span className="text-primary normal-case font-normal">{frameColor.name}</span>
              </label>
              <div className="flex gap-3">
                {frameColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setFrameColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 relative ${
                      frameColor.name === color.name ? 'border-primary scale-110' : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select frame color ${color.name}`}
                  >
                    {frameColor.name === color.name && (
                      <span className={`absolute inset-0 flex items-center justify-center text-[10px] ${color.dark ? 'text-white' : 'text-neutral-black'}`}>
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Control: Louvre Roof Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-neutral-black block">
                  Louvre Roof Angle
                </label>
                <span className="text-xs font-bold text-primary font-mono">{louvreAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                value={louvreAngle}
                onChange={(e) => {
                  setLouvreAngle(Number(e.target.value));
                  if (rainActive && Number(e.target.value) > 0) {
                    // Turn off rain simulation if user manually forces open
                    setRainActive(false);
                  }
                }}
                className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <div className="flex justify-between text-[10px] text-neutral-gray mt-1.5 font-medium">
                <span>0° (Rain Shelter)</span>
                <span>45° (Partial Shade)</span>
                <span>90° (Full Sunlight)</span>
              </div>
            </div>

            {/* Control: Blinds Toggle */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Ziptrak Blinds */}
              <button
                onClick={() => setBlindsDown(!blindsDown)}
                className={`flex-1 py-3 px-4 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  blindsDown 
                    ? 'bg-primary text-white border-primary shadow-md' 
                    : 'bg-white text-charcoal border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                {blindsDown ? 'Roll Up Ziptrak Blinds' : 'Drop Ziptrak Blinds'}
              </button>

              {/* Rain Simulator */}
              <button
                onClick={() => setRainActive(!rainActive)}
                className={`flex-1 py-3 px-4 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                  rainActive 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md animate-pulse' 
                    : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50/50'
                }`}
              >
                <Drop size={16} weight={rainActive ? 'fill' : 'bold'} />
                {rainActive ? 'Stop Rain Sim' : 'Simulate Rain'}
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
