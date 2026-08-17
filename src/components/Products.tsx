'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkle, Wind, Sun } from '@phosphor-icons/react';
import { productsData } from '@/data/siteData';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'louvre', name: 'Louvre' },
  { id: 'pergola', name: 'Pergola' },
  { id: 'canopy', name: 'Canopy' },
  { id: 'blinds', name: 'Outdoor Blinds' },
  { id: 'carport', name: 'Carport' },
  { id: 'shutter', name: 'Outdoor Shutter' },
  { id: 'sunroom', name: 'Sunroom' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Track selected swatches per product by product ID
  const [selectedSwatches, setSelectedSwatches] = useState<Record<string, string>>({
    'apex-louvre': 'Matte Charcoal',
    'horizon-canopy': 'Matte Charcoal',
    'ziptrak-blinds': 'Charcoal Mesh',
    'metro-carport': 'Matte Charcoal',
  });

  const handleSwatchSelect = (productId: string, swatchName: string) => {
    setSelectedSwatches((prev) => ({
      ...prev,
      [productId]: swatchName,
    }));
  };

  const filteredProducts = activeCategory === 'all'
    ? productsData
    : productsData.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-cream-bg/100 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-off-black leading-tight">
              NZ-Engineered Structures
            </h2>
            <p className="text-sm text-neutral-gray mt-4">
              Explore our core product lines, precision built to your home's exact dimensions. Crafted with marine-grade coatings and structural steel reinforcements.
            </p>
          </div>

          {/* Categories Tab Bar */}
          <div className="flex flex-wrap gap-2 md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative ${activeCategory === cat.id
                    ? 'text-white'
                    : 'bg-white hover:bg-neutral-50 text-neutral-charcoal border border-neutral-200'
                  }`}
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-primary rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-100/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image Area */}
                <div className="relative aspect-[16/10] overflow-hidden group bg-neutral-100">

                  {/* Floating Weather Icon Badge */}
                  <div className="absolute top-4 left-4 z-10 flex gap-1.5 flex-wrap">
                    {product.tags.map((tag) => (
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
                    sizes="(max-w-768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Product Content Details */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <h3 className="text-2xl font-extrabold text-neutral-black">
                        {product.name}
                      </h3>
                      <span className="text-[10px] font-extrabold tracking-widest text-primary bg-primary-cream px-3 py-1 rounded-full uppercase">
                        {product.category}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-gray leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Bullet Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {product.features.map((feat) => (
                        <div key={feat} className="flex items-center text-xs font-semibold text-charcoal">
                          <Shield size={16} className="text-primary mr-2 flex-shrink-0" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Swatches & CTA */}
                  <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    {/* Swatches selector */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">
                        Finish: <span className="text-neutral-charcoal">{selectedSwatches[product.id] || product.swatches[0]?.name}</span>
                      </span>
                      <div className="flex gap-2">
                        {product.swatches.map((swatch) => {
                          const currentActive = selectedSwatches[product.id] || product.swatches[0]?.name;
                          return (
                            <button
                              key={swatch.name}
                              onClick={() => handleSwatchSelect(product.id, swatch.name)}
                              className={`w-6 h-6 rounded-full border transition-all duration-300 ${currentActive === swatch.name
                                  ? 'border-primary scale-110 shadow-sm'
                                  : 'border-neutral-200 hover:scale-105'
                                }`}
                              style={{ backgroundColor: swatch.hex }}
                              aria-label={`Select ${swatch.name} color swatch`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="#contact"
                      className="px-6 py-3 bg-neutral-black text-white text-xs font-bold tracking-wider uppercase rounded-full hover:bg-primary transition-all duration-300 text-center"
                    >
                      Get Quote Info
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
