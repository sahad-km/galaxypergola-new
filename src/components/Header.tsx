'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Phone, EnvelopeSimple } from '@phosphor-icons/react';

const topPills = [
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
  { name: 'All Products', href: '/products' },
];

const categoryLinks = [
  { name: 'Louvre', href: '/products?category=louvre' },
  { name: 'Pergola', href: '/products?category=pergola' },
  { name: 'Canopy', href: '/products?category=canopy' },
  { name: 'Outdoor Blinds', href: '/products?category=blinds' },
  { name: 'Carport', href: '/products?category=carport' },
  { name: 'Outdoor Shutter', href: '/products?category=shutter' },
  { name: 'Sunroom', href: '/products?category=sunroom' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        {/* Top Bar: Logo & Pill Action Buttons */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
            <Image
              src="/logo-full.png"
              alt="Cluster Outdoor Solutions Logo"
              width={220}
              height={70}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 hover:scale-102"
              priority
            />
          </Link>

          {/* Desktop Right Pill Actions */}
          <div className="hidden lg:flex items-center space-x-2.5">
            {topPills.map((pill) => (
              <a
                key={pill.name}
                href={pill.href}
                className="px-5 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-full transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {pill.name}
              </a>
            ))}

            {/* Phone Pill Button */}
            <a
              href="tel:062621147"
              className="flex items-center space-x-2 px-5 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-full transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Phone size={18} weight="fill" />
              <span>06 262 1147</span>
            </a>

            {/* Email Pill Button */}
            <a
              href="mailto:info@clusteroutdoor.co.nz"
              className="flex items-center space-x-2 px-5 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-full transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <EnvelopeSimple size={18} weight="fill" />
              <span>info@clusteroutdoor.co.nz</span>
            </a>
          </div>

          {/* Mobile Right Quick Call + Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:062621147"
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-sm"
            >
              <Phone size={15} weight="fill" />
              <span>06 262 1147</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-neutral-800 hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              aria-label="Open navigation menu"
            >
              <List size={28} weight="bold" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Full Width Brand Color Navigation Row (Hidden on mobile as it's in drawer) */}
        <div className="hidden sm:block w-full bg-primary border-t border-primary-hover">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center justify-between overflow-x-auto py-2.5 scrollbar-none whitespace-nowrap gap-4 sm:gap-6 text-white text-sm font-medium">
              {categoryLinks.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="hover:opacity-85 transition-opacity duration-150 px-1 py-0.5"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
          >
            {/* Slide in menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white p-6 flex flex-col shadow-2xl overflow-y-auto"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                <Image
                  src="/logo-full.png"
                  alt="Cluster Logo"
                  width={200}
                  height={80}
                  className="h-14 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-700 hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                  aria-label="Close navigation menu"
                >
                  <X size={26} weight="bold" />
                </button>
              </div>

              {/* Quick Action Pills in Drawer */}
              <div className="flex flex-wrap gap-2 py-6 border-b border-neutral-100">
                {topPills.map((pill) => (
                  <a
                    key={pill.name}
                    href={pill.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-full"
                  >
                    {pill.name}
                  </a>
                ))}
                <a
                  href="tel:062621147"
                  className="flex items-center space-x-1 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-full"
                >
                  <Phone size={14} weight="fill" />
                  <span>06 262 1147</span>
                </a>
              </div>

              {/* Product Category Links */}
              <div className="py-6 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">Product Categories</p>
                <nav className="flex flex-col space-y-3">
                  {categoryLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-semibold text-neutral-800 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-neutral-100">
                <a
                  href="mailto:info@clusteroutdoor.co.nz"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primary text-white font-bold text-sm tracking-wider uppercase text-center rounded-full shadow-md hover:bg-primary-hover transition-colors"
                >
                  <EnvelopeSimple size={18} weight="fill" />
                  <span>Email Us</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
