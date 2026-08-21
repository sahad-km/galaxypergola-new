'use client';

import { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, PhoneCall, EnvelopeSimple } from '@phosphor-icons/react';

const topPills = [
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Products', href: '/products' },
];

const categoryLinks = [
  { name: 'Louvre', href: '/products?category=louvre' },
  { name: 'Pergola', href: '/products/pergo-vue' },
  { name: 'Canopy', href: '/products/canopy' },
  { name: 'Outdoor Blinds', href: '/products?category=blinds' },
  { name: 'Carport', href: '/products/carport' },
  { name: 'Outdoor Shutter', href: '/products/outdoor-shutter' },
  { name: 'Sunroom', href: '/products/sunroom' },
];

function isCategoryItemActive(catKey: string, pathname: string, currentCategoryParam?: string | null) {
  if (pathname === '/products') {
    return currentCategoryParam === catKey;
  }
  if (pathname.startsWith('/products/')) {
    const slug = pathname.replace('/products/', '').toLowerCase();
    if (catKey === 'louvre' && slug.includes('louvre')) return true;
    if (catKey === 'pergola' && (slug.includes('pergola') || slug === 'pergo-vue')) return true;
    if (catKey === 'canopy' && slug.includes('canopy')) return true;
    if (catKey === 'blinds' && (slug.includes('blinds') || slug.includes('ziptrak') || slug.includes('easy'))) return true;
    if (catKey === 'carport' && slug.includes('carport')) return true;
    if (catKey === 'shutter' && slug.includes('shutter')) return true;
    if (catKey === 'sunroom' && slug.includes('sunroom')) return true;
  }
  return false;
}

function CategoryNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams?.get('category')?.toLowerCase();

  return (
    <nav className="flex items-center justify-between overflow-x-auto py-2 scrollbar-none whitespace-nowrap gap-2 sm:gap-4 text-white text-sm font-semibold">
      {categoryLinks.map((cat) => {
        const catKey = cat.href.split('category=')[1]?.toLowerCase();
        const isActive = isCategoryItemActive(catKey, pathname, currentCategory);

        return (
          <Link
            key={cat.name}
            href={cat.href}
            className={`px-4 py-1.5 rounded-full font-bold tracking-wide transition-all duration-300 transform active:translate-y-0 ${isActive
              ? 'bg-white text-primary shadow-md scale-105'
              : 'text-white/95 hover:text-primary hover:bg-white hover:shadow-md hover:-translate-y-0.5'
              }`}
          >
            {cat.name}
          </Link>
        );
      })}
    </nav>
  );
}

function MobileCategoryNav({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams?.get('category')?.toLowerCase();

  return (
    <nav className="flex flex-col space-y-2">
      {categoryLinks.map((link) => {
        const catKey = link.href.split('category=')[1]?.toLowerCase();
        const isActive = isCategoryItemActive(catKey, pathname, currentCategory);

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClose}
            className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${isActive
              ? 'bg-primary text-white font-bold shadow-sm'
              : 'text-neutral-800 hover:bg-primary-cream hover:text-primary'
              }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

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
              className="h-12 sm:h-14 md:h-20 w-auto object-contain transition-transform duration-200 hover:scale-102"
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
              href="tel:0224202266"
              className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold rounded-full transition-all shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <PhoneCall size={16} weight="fill" className="flex-shrink-0 opacity-90" />
              <span>022 420 2266</span>
            </a>

            {/* Email Pill Button */}
            <a
              href="mailto:info@clusteroutdoor.co.nz"
              className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold rounded-full transition-all shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <EnvelopeSimple size={16} weight="fill" className="flex-shrink-0 opacity-90" />
              <span>info@clusteroutdoor.co.nz</span>
            </a>
          </div>

          {/* Mobile Right Quick Call + Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:0224202266"
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-sm"
            >
              <PhoneCall size={14} weight="fill" className="flex-shrink-0" />
              <span>022 420 2266</span>
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

        {/* Bottom Bar: Full Width Brand Color Navigation Row */}
        <div className="hidden sm:block w-full bg-primary border-t border-primary-hover shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Suspense fallback={
              <nav className="flex items-center justify-between overflow-x-auto py-2 scrollbar-none whitespace-nowrap gap-2 sm:gap-4 text-white text-sm font-semibold">
                {categoryLinks.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="px-4 py-1.5 rounded-full text-white/95 font-bold tracking-wide"
                  >
                    {cat.name}
                  </Link>
                ))}
              </nav>
            }>
              <CategoryNav />
            </Suspense>
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
                  href="tel:0224202266"
                  className="flex items-center space-x-1 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-full"
                >
                  <PhoneCall size={14} weight="fill" />
                  <span>022 420 2266</span>
                </a>
              </div>

              {/* Product Category Links */}
              <div className="py-6 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">Product Categories</p>
                <Suspense fallback={
                  <nav className="flex flex-col space-y-3">
                    {categoryLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-semibold text-neutral-800"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                }>
                  <MobileCategoryNav onClose={() => setMobileMenuOpen(false)} />
                </Suspense>
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
