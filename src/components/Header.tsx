'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  
  // Track scroll position to toggle header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic button effect logic
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = ctaRef.current;
    if (!btn) return;
    
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smoothly shift the button 25% of the distance from the center
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    const btn = ctaRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0px, 0px)';
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-neutral-100'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
            <Image
              src="/logo-full.png"
              alt="Cluster Outdoor Solutions Logo"
              width={320}
              height={192}
              className={`h-20 sm:h-24 w-auto object-contain transition-all duration-300 hover:scale-102 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1 ${
                  scrolled 
                    ? 'text-neutral-charcoal hover:text-primary' 
                    : 'text-white hover:text-primary-light'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side CTA Button */}
          <div className="hidden md:block">
            <a
              ref={ctaRef}
              href="#contact"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold text-sm tracking-wider uppercase rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-primary-light active:scale-95"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden p-2 transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ${
              scrolled ? 'text-neutral-charcoal hover:text-primary' : 'text-white hover:text-primary-light'
            }`}
            aria-label="Open navigation menu"
          >
            <List size={28} weight="bold" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
          >
            {/* Slide in menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white p-8 flex flex-col shadow-2xl justify-between"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-8 border-b border-neutral-100">
                  <Image
                    src="/logo-icon.png"
                    alt="Cluster Icon Mark"
                    width={48}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-neutral-charcoal hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                    aria-label="Close navigation menu"
                  >
                    <X size={28} weight="bold" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col space-y-6 pt-10">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-bold text-neutral-black hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer CTA */}
              <div className="pt-8 border-t border-neutral-100">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-4 bg-primary text-white font-bold tracking-wider uppercase text-center rounded-full shadow-lg"
                >
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
