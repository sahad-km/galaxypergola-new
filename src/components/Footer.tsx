'use client';

import Image from 'next/image';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo
} from '@phosphor-icons/react';
import { contactDetailsData } from '@/data/siteData';

const footerNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Products Catalog', href: '/products' },
  { name: 'Our Process', href: '/#process' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact Us', href: '/#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-black text-white pt-24 pb-12 border-t border-neutral-800/80 overflow-hidden">

      {/* Subtle large background watermark of the standalone icon mark */}
      <div className="absolute right-[-8%] bottom-[-8%] w-[450px] h-[450px] opacity-[0.02] pointer-events-none z-0 select-none">
        <Image
          src="/logo-icon.png"
          alt="Cluster Hex Watermark Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/75">

          {/* Brand Panel (4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <a href="#home" className="inline-block mb-6 outline-none">
              <Image
                src="/logo-full.png"
                alt="Cluster Outdoor Solutions Logo"
                width={360}
                height={216}
                className="h-24 sm:h-28 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-xs text-neutral-cream/70 leading-relaxed mb-6 max-w-sm font-medium">
              Cluster Outdoor Solutions designs, manufactures, and installs premium architectural outdoor shelters. Engineered locally in New Zealand to withstand local wind, heavy rain, and harsh sunlight.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-full bg-neutral-800/60 hover:bg-primary text-neutral-cream/80 hover:text-white transition-all duration-300" aria-label="Facebook">
                <FacebookLogo size={18} weight="bold" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-neutral-800/60 hover:bg-primary text-neutral-cream/80 hover:text-white transition-all duration-300" aria-label="Instagram">
                <InstagramLogo size={18} weight="bold" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-neutral-800/60 hover:bg-primary text-neutral-cream/80 hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <LinkedinLogo size={18} weight="bold" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-neutral-800/60 hover:bg-primary text-neutral-cream/80 hover:text-white transition-all duration-300" aria-label="Youtube">
                <YoutubeLogo size={18} weight="bold" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-3.5">
              {footerNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-neutral-cream/70 hover:text-primary-light hover:underline transition-colors duration-300 font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Service Areas Column (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">
              Service Areas
            </h4>
            <ul className="flex flex-col space-y-3">
              {contactDetailsData.regions.map((reg) => (
                <li key={reg} className="text-xs text-neutral-cream/70 font-semibold flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light mr-2.5 flex-shrink-0" />
                  {reg}
                </li>
              ))}
            </ul>
          </div>

          {/* Office Location Column (2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">
              Main Office
            </h4>
            <div className="space-y-4">
              {contactDetailsData.locations.map((loc) => (
                <div key={loc.name}>
                  <p className="text-[10px] font-black uppercase text-neutral-cream/90 mb-1 leading-normal">
                    {loc.name}
                  </p>
                  <p className="text-[10px] text-neutral-cream/60 leading-normal font-semibold">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] text-neutral-cream/40 font-semibold gap-4">
          <p>© {currentYear} Cluster Outdoor Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-light transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-primary-light transition-colors duration-200">Terms of Trade</a>
            <a href="#" className="hover:text-primary-light transition-colors duration-200">NZ Engineering Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
