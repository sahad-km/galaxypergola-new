'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CaretRight,
  Sparkle,
  ArrowLeft,
  Phone,
  Envelope,
  CheckCircle,
  Globe,
  FileText,
  Sliders,
  Ruler,
  Wind
} from '@phosphor-icons/react';
import { ProductItem, getCategoryLabel } from '@/data/siteData';

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

  // Color Swatch state
  const [activeSwatch, setActiveSwatch] = useState(product.swatches[0]?.name || '');

  // Form submission state
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: 'Auckland',
    message: `Hi, I would like to request a quote and free site measure for the ${product.name}.`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .concat(allProducts.filter((p) => p.id !== product.id))
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6">

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center text-xs text-neutral-gray mb-8 gap-2 flex-wrap">
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

      {/* Product Hero Section (Image & Overview) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

        {/* Left Column: Gallery & Images */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[16/10] bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-100/90">
            {/* Tag Badges */}
            <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover transition-all duration-500"
              priority
              sizes="(max-w-1024px) 100vw, 60vw"
            />
          </div>

          {/* Thumbnails list */}
          {galleryImages.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-24 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === img
                    ? 'border-primary shadow-md'
                    : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Core Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-extrabold tracking-widest text-primary bg-primary-cream px-3 py-1 rounded-full uppercase">
                {getCategoryLabel(product.category)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-black leading-tight mb-3">
              {product.name}
            </h1>

            {product.tagline && (
              <p className="text-sm font-bold text-primary mb-4 leading-relaxed">
                {product.tagline}
              </p>
            )}

            <p className="text-sm text-neutral-gray leading-relaxed mb-6">
              {product.fullDescription || product.description}
            </p>

            {/* Color Swatches Selector */}
            {product.swatches && product.swatches.length > 0 && (
              <div className="mb-6 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                  Available Finishes: <span className="text-neutral-charcoal">{activeSwatch}</span>
                </span>
                <div className="flex gap-3 flex-wrap">
                  {product.swatches.map((swatch) => (
                    <button
                      key={swatch.name}
                      onClick={() => setActiveSwatch(swatch.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${activeSwatch === swatch.name
                          ? 'border-primary bg-primary/5 text-neutral-black shadow-sm'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                        }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 flex-shrink-0"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span>{swatch.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Feature Bullet Points */}
            <div className="space-y-3 mb-8">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-neutral-black mb-2">
                Key Performance Features
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {product.features.map((feat) => (
                  <div key={feat} className="flex items-start text-xs font-medium text-neutral-charcoal">
                    <ShieldCheck size={18} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick CTA Button Scroll to Quote Form */}
          <div className="pt-4 border-t border-neutral-200/60 flex flex-col sm:flex-row gap-4">
            <a
              href="#quote-form"
              className="flex-1 py-4 bg-neutral-black text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-primary transition-all duration-300 text-center shadow-md hover:shadow-lg"
            >
              Get Free Site Measure & Quote
            </a>
            <a
              href="tel:062621147"
              className="px-6 py-4 bg-white text-neutral-black border border-neutral-200 text-xs font-bold tracking-wider uppercase rounded-full hover:bg-neutral-50 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <Phone size={16} className="text-primary" />
              <span>06 262 1147</span>
            </a>
          </div>

        </div>

      </div>

      {/* Technical Specifications Section */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="mb-16 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-100 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Sliders size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-neutral-black">Technical Specifications</h2>
              <p className="text-xs text-neutral-gray">Engineered specifically for New Zealand wind zones & climate demands</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-4 bg-cream-bg/60 rounded-2xl border border-neutral-100">
                <span className="text-xs font-bold text-neutral-charcoal">{key}</span>
                <span className="text-xs font-semibold text-primary text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quote Enquiry Form Section */}
      <div id="quote-form" className="mb-20 bg-neutral-black text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-2 block">
            Direct Product Enquiry
          </span>
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Request a Free Measure & Quote for {product.name}
          </h2>
          <p className="text-xs text-neutral-300 leading-relaxed mb-8">
            Our local installation specialists will consult on your site dimensions, structural requirements, and custom finishes with zero obligation.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center space-y-4"
            >
              <CheckCircle size={48} className="text-primary mx-auto" />
              <h3 className="text-xl font-bold text-white">Thank You for Your Enquiry!</h3>
              <p className="text-xs text-neutral-200">
                We have received your quote request for the <strong>{product.name}</strong>. A local NZ specialist will get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    Region Location
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-900 text-white rounded-xl border border-white/15 focus:outline-none focus:border-primary text-xs"
                  >
                    <option value="Taranaki">Taranaki / New Plymouth</option>
                    <option value="Auckland">Auckland</option>
                    <option value="Waikato">Waikato / Hamilton</option>
                    <option value="Bay of Plenty">Bay of Plenty / Tauranga</option>
                    <option value="Manawatu">Manawatu / Whanganui</option>
                    <option value="Wellington">Wellington & Lower North Island</option>
                    <option value="South Island">South Island Region</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Project Notes & Preferred Finish ({activeSwatch})
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 text-white placeholder-neutral-500 rounded-xl border border-white/15 focus:outline-none focus:border-primary text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all shadow-lg"
              >
                Send Free Quote Request
              </button>
            </form>
          )}
        </div>
      </div>

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
