'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { productsData } from '@/data/siteData';

interface HomeProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
}

const homeProducts: HomeProduct[] = [
  {
    id: 'louvre',
    name: 'Louvre',
    category: 'louvre',
    description: 'Motorised aluminium louvre systems built with integrated gutter channels, rain sensors, and warm/cool LED lighting for all-weather patio climate control.',
    image: "/images/Deluxe-Louvre/gallery-1.webp",
    tags: ['Motorised', 'Rain Sensor'],
    href: '/products?category=louvre',
  },
  {
    id: 'pergola',
    name: 'Pergola',
    category: 'pergola',
    description: 'Panoramic glass and open-frame roof system delivering unobstructed natural sky views while maintaining complete weather protection.',
    image: "/images/Pergola/gallery-1.webp",
    tags: ['Panoramic Sky', 'Glass Roof'],
    href: '/products/pergo-vue',
  },
  {
    id: 'canopy',
    name: 'Canopy',
    category: 'canopy',
    description: 'Custom architectural canopy solutions engineered for New Zealand weather. Built with micro powder-coated aluminium frames and 2mm 99.9% UV protected solid polycarbonate roofing.',
    image: "/images/Canopy/gallery-1.webp",
    tags: ['3 Styles Available', '99.9% UV Block'],
    href: '/products/canopy',
  },
  {
    id: 'blinds',
    name: 'Outdoor Blinds',
    category: 'blinds',
    description: 'Track-guided and side channel outdoor blind systems locking tightly against wind, rain, and insects. Turn any patio into a protected outdoor room.',
    image: "/images/Ziptrack-Blinds/gallery-2.webp",
    tags: ['3 Systems Available', 'Zero Gap'],
    href: '/products?category=blinds',
  },
  {
    id: 'carport',
    name: 'Carport',
    category: 'carport',
    description: 'High-grade aluminium alloy carport structures protecting vehicles, caravans, and boats from UV solar heat, heavy rain, and severe hail damage.',
    image: "/images/Carports/gallery-3.webp",
    tags: ['2 Styles Available', '120 km/h Wind Rated'],
    href: '/products/carport',
  },
  {
    id: 'shutter',
    name: 'Outdoor Shutter',
    category: 'shutter',
    description: 'Architectural aluminium louvre shutters engineered for deck privacy, wind buffering, airflow control, and security across balconies and patios.',
    image: "/images/Outdoor-Shutter/gallery-1.webp",
    tags: ['Privacy Control', 'Wind Barrier'],
    href: '/products/outdoor-shutter',
  },
  {
    id: 'sunroom',
    name: 'Sunroom',
    category: 'sunroom',
    description: 'Fully enclosed 365-day sunroom featuring double-glazed glass sliding doors, thermal insulated roof panels, and complete weather-sealed protection.',
    image: "/images/Sunroom/gallery-1.webp",
    tags: ['All-Weather Enclosure', 'Double Glazed'],
    href: '/products/sunroom',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-off-black leading-tight">
            NZ-Engineered Outdoor Solutions
          </h2>
          <p className="text-base sm:text-lg text-neutral-gray mt-4">
            Explore our seven core architectural product lines, custom engineered to your property's exact site dimensions.
          </p>
        </div>

        {/* Products Grid - 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeProducts.map((product, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-100/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden group bg-neutral-100">

                {/* Floating Tags */}
                <div className="absolute top-4 left-4 z-10 flex gap-1.5 flex-wrap">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-black/45 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Product Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-xl font-extrabold text-neutral-black hover:text-primary transition-colors">
                      <Link href={product.href}>
                        {product.name}
                      </Link>
                    </h3>
                    <span className="text-[10px] font-extrabold tracking-widest text-primary bg-primary-cream px-2.5 py-1 rounded-full uppercase flex-shrink-0">
                      {product.category}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-gray leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <Link
                    href={product.href}
                    className="flex-1 py-3 bg-primary hover:bg-neutral-black text-white text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-300 text-center flex items-center justify-center gap-1.5 shadow-sm shadow-primary/20"
                  >
                    <span>{product.href.includes('category=') ? 'Explore Range' : 'View Details'}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href="#contact"
                    className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-charcoal text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-300 text-center"
                  >
                    Quote
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
