'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  CaretRight,
  CaretDown,
  Sparkle,
  ArrowLeft,
  Phone,
  Envelope,
  CheckCircle,
  Globe,
  FileText,
  Sliders,
  Ruler,
  Wind,
  Check,
  X,
  Sun,
  CloudRain,
  Drop,
  CornersOut,
  MagnifyingGlassPlus,
  Info,
  Buildings,
  DeviceMobile,
  Headset
} from '@phosphor-icons/react';
import { ProductItem, getCategoryLabel, activeRegions } from '@/data/siteData';

interface ProductDetailClientProps {
  product: ProductItem;
  allProducts: ProductItem[];
}

export default function ProductDetailClient({ product, allProducts }: ProductDetailClientProps) {
  // Gallery active image state
  const galleryImages = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Quote Modal state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Configurable options state
  const [selectedType, setSelectedType] = useState<string>(
    product.typeOptions && product.typeOptions.length > 0 ? product.typeOptions[0] : 'Wall Mounted'
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizeOptions && product.sizeOptions.length > 0 ? product.sizeOptions[0] : '3x3m'
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colorOptions && product.colorOptions.length > 0
      ? product.colorOptions[0].name
      : product.swatches && product.swatches.length > 0
        ? product.swatches[0].name
        : 'Matt Black (RAL9005)'
  );

  // FAQ Accordion active state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Current Page URL state for hidden field tracking
  const [currentPageUrl, setCurrentPageUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPageUrl(window.location.href);
    }
  }, []);

  // Modal Form submission state
  const [submitted, setSubmitted] = useState(false);
  const [isSubmittingModal, setIsSubmittingModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: activeRegions[0],
    message: '',
  });

  // Inline Form submission state (below FAQ)
  const [inlineSubmitted, setInlineSubmitted] = useState(false);
  const [isSubmittingInline, setIsSubmittingInline] = useState(false);
  const [inlineFormData, setInlineFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: activeRegions[0],
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingModal) return;
    setIsSubmittingModal(true);
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          product: `${product.name} (Style: ${selectedType}, Size: ${selectedSize}, Color: ${selectedColor})`,
          pageUrl: currentPageUrl || (typeof window !== 'undefined' ? window.location.href : ''),
        }),
      });
    } catch (err) {
      console.error('Error submitting quote:', err);
    } finally {
      setIsSubmittingModal(false);
      setSubmitted(true);
    }
  };

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingInline) return;
    setIsSubmittingInline(true);
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...inlineFormData,
          product: `${product.name} (Style: ${selectedType}, Size: ${selectedSize}, Color: ${selectedColor})`,
          pageUrl: currentPageUrl || (typeof window !== 'undefined' ? window.location.href : ''),
        }),
      });
    } catch (err) {
      console.error('Error submitting inline quote:', err);
    } finally {
      setIsSubmittingInline(false);
      setInlineSubmitted(true);
    }
  };

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .concat(allProducts.filter((p) => p.id !== product.id))
    .slice(0, 3);

  const defaultTrustBadges = [
    '10 yr Manufacturer Warranty',
    '2 yr Built Warranty',
    '0% Deposit On Finance',
  ];
  const trustBadges = product.trustBadges || defaultTrustBadges;

  return (
    <div className="max-w-7xl mx-auto px-6">

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center text-xs text-neutral-gray mb-6 gap-2 flex-wrap">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <CaretRight size={12} className="text-neutral-400" />
        <Link href="/products" className="hover:text-primary transition-colors">
          Products
        </Link>
        <CaretRight size={12} className="text-neutral-400" />
        {product.category && (
          <>
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-primary transition-colors font-medium"
            >
              {getCategoryLabel(product.category)}
            </Link>
            <CaretRight size={12} className="text-neutral-400" />
          </>
        )}
        <span className="font-bold text-neutral-black">{product.name}</span>
      </nav>

      {/* Back to Products Link */}
      <div className="mb-8">
        <Link
          href={product.category ? `/products?category=${product.category}` : '/products'}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-charcoal hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to {product.category ? getCategoryLabel(product.category) : 'All Products'}</span>
        </Link>
      </div>

      {/* Hero Section: Product Details on Left, Gallery & Badges on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

        {/* Left Column: Product Details, Configurator & Action CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2 gap-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-black leading-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-neutral-gray leading-relaxed mb-6 mt-4">
              {product.fullDescription || product.description}
            </p>

            {/* Configurable Option 1: Style / Option Type */}
            {product.typeOptions && product.typeOptions.length > 0 && (
              <div className="mb-5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Select Style / Option: <span className="text-neutral-black font-extrabold">{selectedType}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {product.typeOptions.map((typeOption) => (
                    <button
                      key={typeOption}
                      type="button"
                      onClick={() => setSelectedType(typeOption)}
                      className={`py-3 px-4 rounded-2xl border text-xs font-bold transition-all text-center ${selectedType === typeOption
                        ? 'border-primary bg-primary text-white shadow-md shadow-primary/20 scale-102'
                        : 'border-neutral-200 bg-white text-neutral-charcoal hover:border-neutral-300'
                        }`}
                    >
                      {typeOption}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Configurable Option 2: Size Dimensions (Matching Active Style) */}
            {product.sizeOptions && product.sizeOptions.length > 0 && (
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Select Width / Size: <span className="text-neutral-black font-extrabold">{selectedSize}</span>
                  </label>
                  {product.id === 'pergo-vue' && (
                    <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Lengths: 2m – 6m available
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {product.sizeOptions.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-3 rounded-2xl border text-xs font-bold transition-all text-center ${selectedSize === sz
                        ? 'border-primary bg-primary text-white shadow-md shadow-primary/20 scale-102'
                        : 'border-neutral-200 bg-white text-neutral-charcoal hover:border-neutral-300'
                        }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Configurable Option 3: Architectural Color Finish */}
            {product.colorOptions && product.colorOptions.length > 0 && (
              <div className="mb-6">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Architectural Finish: <span className="text-neutral-black">{selectedColor}</span>
                </label>
                <div className="flex gap-2.5 flex-wrap">
                  {product.colorOptions.map((swatch) => (
                    <button
                      key={swatch.name}
                      type="button"
                      onClick={() => setSelectedColor(swatch.name)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all ${selectedColor === swatch.name
                        ? 'border-primary bg-primary/5 text-neutral-black ring-2 ring-primary/20 shadow-sm'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50'
                        }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/15 shadow-inner"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span>{swatch.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTAs (Positioned below description and configurable options) */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex-1 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-neutral-black transition-all duration-300 text-center shadow-lg hover:shadow-xl cursor-pointer"
              >
                Get a Free Onsite Quote
              </button>
              <a
                href="tel:0224202266"
                className="px-6 py-4 bg-white text-neutral-black border border-neutral-200 text-xs font-bold tracking-wider uppercase rounded-full hover:bg-neutral-50 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone size={16} className="text-primary" weight="fill" />
                <span>Call 022 420 2266</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Image Gallery Viewer & Trust Badges */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[16/10] bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-100/90 group">
            {/* Category Tag & Badges */}
            <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap max-w-[85%]">
              {product.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-black/60 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Expand Lightbox Button */}
            <button
              onClick={() => setLightboxImage(selectedImage)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white rounded-full transition-all shadow-md"
              title="Zoom image"
            >
              <MagnifyingGlassPlus size={18} weight="bold" />
            </button>

            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover transition-all duration-500"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Gallery Thumbnail Selector */}
          {galleryImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-24 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === img
                    ? 'border-primary ring-2 ring-primary/20 shadow-md scale-102'
                    : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                >
                  <Image src={img} alt={`${product.name} thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Three Trust Badges Row (Positioned directly below the images) */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {trustBadges.map((badge, idx) => {
              const parts = badge.match(/^(\d+\s*(?:yr|%)?)\s*(.*)$/i);
              const stat = parts ? parts[1] : '';
              const label = parts ? parts[2] : badge;
              return (
                <div
                  key={idx}
                  className="p-3.5 bg-white rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-center text-center sm:text-left"
                >
                  <span className="text-xl sm:text-2xl font-black text-primary leading-none mb-1">
                    {stat || badge}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-neutral-charcoal leading-tight">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Key to Perfect Outdoor Living / Overview & Content Sections */}
      {((product.overviewTitle || product.overviewDescription) || (product.contentSections && product.contentSections.length > 0)) && (() => {
        const sections = product.contentSections || [];
        const isOdd = sections.length % 2 !== 0;
        const firstSection = isOdd ? sections[0] : null;
        const gridSections = isOdd ? sections.slice(1) : sections;

        return (
          <div className="mb-20 space-y-12">
            {/* Main Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-black leading-tight mb-4">
                {product.overviewTitle ? (
                  product.overviewTitle
                ) : (
                  <>
                    {product.name}: <span className="font-extrabold text-primary">Your Key to Perfect Outdoor Living</span>
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-neutral-gray leading-relaxed max-w-2xl mx-auto">
                {product.overviewDescription || product.description}
              </p>
            </div>

            {/* If odd count: First Card is Full Width Feature Card */}
            {isOdd && firstSection && (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Image */}
                  <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-50 p-4 border border-neutral-100/90 flex items-center justify-center">
                      <Image
                        src={firstSection.image || product.image}
                        alt={`${firstSection.title} Structure`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>

                  {/* Right Column: Title & Description */}
                  <div className="lg:col-span-6 space-y-4">
                    {firstSection.subtitle && (
                      <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                        {firstSection.subtitle}
                      </span>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-black leading-tight">
                      {firstSection.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-gray leading-relaxed whitespace-pre-line">
                      {firstSection.description}
                    </p>

                    {firstSection.highlightBadges && firstSection.highlightBadges.length > 0 && (
                      <div className="flex gap-2 flex-wrap pt-2">
                        {firstSection.highlightBadges.map((badge) => (
                          <span
                            key={badge}
                            className="px-3 py-1 bg-neutral-50 text-neutral-charcoal rounded-full text-[10px] font-bold border border-neutral-200/80"
                          >
                            ✓ {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 50/50 2-Column Grid for remaining cards (if odd) or all cards (if even) */}
            {gridSections.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gridSections.map((sec) => (
                  <div
                    key={sec.id}
                    className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {sec.image && (
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-neutral-50 p-3 border border-neutral-100/90 flex items-center justify-center">
                          <Image src={sec.image} alt={sec.title} fill className="object-contain p-2" />
                        </div>
                      )}
                      {sec.subtitle && (
                        <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-1">
                          {sec.subtitle}
                        </span>
                      )}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-black mb-3 leading-tight">
                        {sec.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-gray leading-relaxed mb-4 whitespace-pre-line">
                        {sec.description}
                      </p>
                    </div>

                    {sec.highlightBadges && sec.highlightBadges.length > 0 && (
                      <div className="flex gap-2 flex-wrap pt-4 border-t border-neutral-100">
                        {sec.highlightBadges.map((badge) => (
                          <span
                            key={badge}
                            className="px-3 py-1 bg-neutral-50 text-neutral-charcoal rounded-full text-[10px] font-bold border border-neutral-200/80"
                          >
                            ✓ {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })()}

      {/* Lightbox Product Gallery Grid */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-2 block">
            Installation Inspiration
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-black">
            Photo Gallery & Real Projects
          </h2>
          <p className="text-xs text-neutral-gray mt-2">
            Click any image to expand full-screen view
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setLightboxImage(img)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-100 shadow-md hover:shadow-xl transition-all text-left"
            >
              <Image
                src={img}
                alt={`${product.name} project photo ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 text-xs font-bold">
                <MagnifyingGlassPlus size={24} />
                <span>Expand View</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Full Screen Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all"
            >
              <X size={24} weight="bold" />
            </button>
            <div className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={lightboxImage}
                alt={`${product.name} zoomed gallery image`}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Technical Specifications Section */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="mb-20 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-100 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Sliders size={24} weight="bold" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-black">Technical Specifications</h2>
              <p className="text-xs text-neutral-gray">Comprehensive engineering parameters and material schedules</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center p-4 bg-cream-bg/60 rounded-2xl border border-neutral-100/90 hover:border-primary/20 transition-colors"
              >
                <span className="text-xs font-bold text-neutral-charcoal">{key}</span>
                <span className="text-xs font-extrabold text-primary text-right pl-4">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional Add-ons Feature Showcase Section (Tick badge indicates availability) */}
      {product.optionalAddons && product.optionalAddons.length > 0 && (
        <div className="mb-20 bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-2 block">
              Available Upgrades
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Optional Upgrades & Add-ons
            </h2>
            <p className="text-xs text-neutral-300 mt-2">
              Enhance your structure with any of these available custom features.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {product.optionalAddons.map((addon) => (
              <div
                key={addon}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-white"
              >
                <CheckCircle size={20} className="text-primary flex-shrink-0" weight="fill" />
                <span className="text-xs font-bold">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6-Step Installation Process Flow */}
      {(product.installationSteps || []).length > 0 && (
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-2 block">
              Seamless Project Execution
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-black">
              Our 6-Step Installation Process
            </h2>
            <p className="text-xs text-neutral-gray mt-2">
              From initial enquiry to final structural sign-off
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(product.installationSteps || []).map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-md relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-primary text-white font-extrabold text-sm flex items-center justify-center mb-4 shadow-md shadow-primary/20">
                    0{item.step}
                  </div>
                  <h3 className="text-base font-extrabold text-neutral-black mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-gray leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Engineered for Performance (6 Feature Cards) */}
      {(product.performanceCards || []).length > 0 && (
        <div className="mb-20 bg-cream-bg rounded-3xl p-8 sm:p-12 border border-neutral-200/60">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-2 block">
              Built for New Zealand Conditions
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-black">
              Engineered for Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(product.performanceCards || []).map((card) => {
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case 'CloudRain':
                    return <CloudRain size={22} weight="fill" />;
                  case 'Buildings':
                    return <Buildings size={22} weight="fill" />;
                  case 'Ruler':
                    return <Ruler size={22} weight="fill" />;
                  case 'DeviceMobile':
                    return <DeviceMobile size={22} weight="fill" />;
                  case 'Drop':
                    return <Drop size={22} weight="fill" />;
                  case 'Headset':
                    return <Headset size={22} weight="fill" />;
                  default:
                    return <ShieldCheck size={22} weight="fill" />;
                }
              };

              return (
                <div key={card.title} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                    {getIcon(card.icon)}
                  </div>
                  <h3 className="text-sm font-extrabold text-neutral-black mb-1.5">{card.title}</h3>
                  <p className="text-sm text-neutral-gray leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* FAQ Accordion Section */}
      {(product.faqs || []).length > 0 && (
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-2 block">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {(product.faqs || []).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="text-sm font-extrabold text-neutral-black">{faq.question}</span>
                    <CaretDown
                      size={18}
                      className={`text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-sm sm:text-base text-neutral-gray leading-relaxed border-t border-neutral-100/60 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Below FAQ Section: Inline Free Onsite Quote Request Form */}
      <div id="product-quote-form" className="mb-20 max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-neutral-100 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] font-extrabold tracking-widest text-primary uppercase mb-2 block bg-primary-cream px-3 py-1 rounded-full inline-block border border-primary/15">
            Free Measure & Quote
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-black mt-2">
            Request a Free Onsite Quote for {product.name}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-gray mt-2">
            Servicing Taranaki & Whanganui regions. Zero obligation.
          </p>
        </div>

        {inlineSubmitted ? (
          <div className="bg-primary-cream/60 border border-primary/20 p-8 rounded-2xl text-center space-y-3">
            <CheckCircle size={44} className="text-primary mx-auto" weight="fill" />
            <h3 className="text-xl font-extrabold text-neutral-black">Quote Request Received!</h3>
            <p className="text-xs sm:text-sm text-neutral-gray leading-relaxed">
              Thank you, <strong className="text-neutral-black">{inlineFormData.name}</strong>. Our local installation specialists in <strong className="text-neutral-black">{inlineFormData.region}</strong> will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleInlineSubmit} className="space-y-4">
            {/* Hidden field capturing full current page URL */}
            <input type="hidden" name="pageUrl" value={currentPageUrl} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={inlineFormData.name}
                  onChange={(e) => setInlineFormData({ ...inlineFormData, name: e.target.value })}
                  placeholder="e.g. John Smith"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-black focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Phone Number <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={inlineFormData.phone}
                  onChange={(e) => setInlineFormData({ ...inlineFormData, phone: e.target.value })}
                  placeholder="e.g. 022 123 4567"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-black focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={inlineFormData.email}
                  onChange={(e) => setInlineFormData({ ...inlineFormData, email: e.target.value })}
                  placeholder="e.g. john@example.co.nz"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-black focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Location / Active Region
                </label>
                <select
                  value={inlineFormData.region}
                  onChange={(e) => setInlineFormData({ ...inlineFormData, region: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-black focus:outline-none focus:border-primary focus:bg-white transition-all"
                >
                  {activeRegions.map((reg) => (
                    <option key={reg} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Project Notes / Details (Optional)
              </label>
              <textarea
                rows={3}
                value={inlineFormData.message}
                onChange={(e) => setInlineFormData({ ...inlineFormData, message: e.target.value })}
                placeholder="Dimensions, patio layout, or questions..."
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-black focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-neutral-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmittingInline}
              className="w-full py-4 bg-primary hover:bg-primary-hover text-white text-xs font-extrabold uppercase tracking-widest rounded-full shadow-lg shadow-primary/25 transition-all duration-300 cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmittingInline ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Request...</span>
                </>
              ) : (
                <span>Request Free Onsite Quote</span>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Quote Enquiry Form Overlay Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsQuoteModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-white/10"
            >
              {/* Close Modal Button */}
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-5 right-5 p-2.5 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} weight="bold" />
              </button>

              <div className="max-w-2xl">
                <span className="text-[10px] font-extrabold tracking-widest text-primary uppercase mb-1.5 block">
                  Free Onsite Measure & Quote
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Request a Free Onsite Measure & Quote for {product.name}
                </h2>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  Our local installation specialists will consult on your site dimensions, structural requirements, and custom finishes with zero obligation.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center space-y-4 my-6"
                  >
                    <CheckCircle size={48} className="text-primary mx-auto" />
                    <h3 className="text-xl font-bold text-white">Thank You for Your Enquiry!</h3>
                    <p className="text-xs text-neutral-200">
                      We have received your quote request for the <strong>{product.name}</strong> ({selectedSize}, {selectedType}, {selectedColor}). A local NZ specialist will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsQuoteModalOpen(false)}
                      className="px-6 py-2.5 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary/90 transition-all mt-4 cursor-pointer"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="pageUrl" value={currentPageUrl} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-3 bg-white/10 text-white placeholder-neutral-500 rounded-xl border border-white/15 focus:outline-none focus:border-primary text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 021 123 4567"
                          className="w-full px-4 py-3 bg-white/10 text-white placeholder-neutral-500 rounded-xl border border-white/15 focus:outline-none focus:border-primary text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. sarah@example.co.nz"
                          className="w-full px-4 py-3 bg-white/10 text-white placeholder-neutral-500 rounded-xl border border-white/15 focus:outline-none focus:border-primary text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                          Location / Active Region *
                        </label>
                        <select
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-900 text-white rounded-xl border border-white/15 focus:outline-none focus:border-primary text-xs"
                        >
                          {activeRegions.map((reg) => (
                            <option key={reg} value={reg}>
                              {reg}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                        Project Notes & Configuration Summary
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 text-white placeholder-neutral-500 rounded-xl border border-white/15 focus:outline-none focus:border-primary text-xs font-mono"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingModal}
                      className="w-full py-4 bg-primary text-white font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmittingModal ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <span>Send Free Onsite Quote Request</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mb-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase mb-1 block">
                Explore More Options
              </span>
              <h2 className="text-2xl font-extrabold text-neutral-black">Related Outdoor Solutions</h2>
            </div>
            <Link href="/products" className="text-xs font-bold text-primary hover:underline">
              View All Products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-all group p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                    <Image src={rel.image} alt={rel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-primary tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h3 className="text-base font-bold text-neutral-black group-hover:text-primary transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-neutral-gray line-clamp-2 mt-1">
                    {rel.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-black">
                  <span>View Details</span>
                  <CaretRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
