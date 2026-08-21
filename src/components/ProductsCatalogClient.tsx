'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, MagnifyingGlass, X, SlidersHorizontal, CaretRight } from '@phosphor-icons/react';
import { productsData, getCategoryLabel } from '@/data/siteData';

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

export default function ProductsCatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync category state when URL search param changes (e.g. clicking header link)
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
      // Smooth scroll down to catalog filter/grid section when category param is present
      const targetElement = document.getElementById('catalog-filter');
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      setActiveCategory('all');
    }
  }, [categoryParam]);

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      router.push('/products', { scroll: false });
    } else {
      router.push(`/products?category=${catId}`, { scroll: false });
    }
  };

  // Pre-calculate category counts for badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: productsData.length };
    productsData.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center text-xs text-neutral-gray mb-8 gap-2">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <CaretRight size={12} className="text-neutral-400" />
        {activeCategory !== 'all' ? (
          <>
            <button onClick={() => handleCategorySelect('all')} className="hover:text-primary transition-colors">
              Products
            </button>
            <CaretRight size={12} className="text-neutral-400" />
            <span className="font-bold text-neutral-black">
              {getCategoryLabel(activeCategory)}
            </span>
          </>
        ) : (
          <span className="font-bold text-neutral-black">Products</span>
        )}
      </nav>

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-3 block">
          Complete Product Range
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-off-black leading-tight mb-6">
          Architectural Outdoor Living Systems
        </h1>
        <p className="text-neutral-gray text-base leading-relaxed">
          Custom engineered for New Zealand weather conditions. Explore our premium opening louvre roofs, glass pergolas, track-guided blinds, carports, and enclosed sunrooms.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div id="catalog-filter" className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg shadow-black/[0.03] border border-neutral-100 mb-14 space-y-6 scroll-mt-36">
        
        {/* Top Bar: Search Input & Results Indicator */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          {/* Search Input Box */}
          <div className="relative flex-1 group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-primary transition-colors">
              <MagnifyingGlass size={20} weight="bold" />
            </div>
            <input
              type="text"
              placeholder="Search by product name, category, or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-neutral-50/90 hover:bg-neutral-50 text-neutral-black text-xs sm:text-sm font-semibold rounded-2xl border border-neutral-200/80 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-neutral-400 placeholder:font-normal"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-black hover:bg-neutral-200/70 rounded-full transition-all"
                title="Clear search"
              >
                <X size={16} weight="bold" />
              </button>
            )}
          </div>

          {/* Result Stats & Reset Button */}
          <div className="flex items-center justify-between sm:justify-end gap-3 px-1 text-xs font-semibold text-neutral-gray flex-shrink-0">
            <span>
              Showing <strong className="text-neutral-black font-extrabold">{filteredProducts.length}</strong> of {productsData.length} products
            </span>
            {(activeCategory !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => { handleCategorySelect('all'); setSearchQuery(''); }}
                className="text-primary hover:text-primary-hover underline underline-offset-4 text-xs font-extrabold transition-colors ml-2"
              >
                Reset Filters
              </button>
            )}
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-100" />

        {/* Bottom Bar: Category Filter Pills */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
              <SlidersHorizontal size={14} weight="bold" /> Filter by Category
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-charcoal border border-neutral-200/80 hover:border-neutral-300'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-md font-extrabold transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-neutral-200/70 text-neutral-gray'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-neutral-100">
          <p className="text-neutral-charcoal font-bold text-lg mb-2">No matching products found</p>
          <p className="text-neutral-gray text-xs mb-6">Try broadening your search criteria or switching categories.</p>
          <button
            onClick={() => { handleCategorySelect('all'); setSearchQuery(''); }}
            className="px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase rounded-full tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-100/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header Area */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <div className="absolute top-4 left-4 z-10 flex gap-1.5 flex-wrap">
                      {product.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10"
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
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-extrabold tracking-widest text-primary bg-primary-cream px-3 py-1 rounded-full uppercase">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-neutral-black mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>

                    {product.tagline && (
                      <p className="text-xs font-semibold text-primary/90 mb-3 line-clamp-1">
                        {product.tagline}
                      </p>
                    )}

                    <p className="text-sm text-neutral-gray leading-relaxed mb-6 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6 border-t border-neutral-100 pt-4">
                      {product.features.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-center text-xs font-medium text-neutral-charcoal">
                          <Shield size={14} className="text-primary mr-2 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 px-4 py-3 bg-primary hover:bg-neutral-black text-white text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 group/btn shadow-sm shadow-primary/20"
                  >
                    <span>View Product</span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href={`/#contact?product=${product.id}`}
                    className="px-4 py-3 bg-neutral-100 text-neutral-charcoal text-xs font-bold tracking-wider uppercase rounded-full hover:bg-neutral-200 transition-all duration-300 text-center"
                  >
                    Quote
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

    </div>
  );
}
