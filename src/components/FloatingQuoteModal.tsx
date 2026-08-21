'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardText, X, CheckCircle, Phone, Envelope, MapPin } from '@phosphor-icons/react';

export default function FloatingQuoteModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    region: 'Taranaki Region',
    product: 'Louvre',
    notes: '',
  });

  // Track scroll position to show floating button once Hero section leaves viewport
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setForm({
        name: '',
        phone: '',
        email: '',
        region: 'Taranaki Region',
        product: 'Louvre',
        notes: '',
      });
    }, 300);
  };

  return (
    <>
      {/* Floating Action Button - Appears when Hero section scrolls out of view */}
      <AnimatePresence>
        {isVisible && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="px-5 py-3.5 bg-primary hover:bg-primary-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-2xl shadow-primary/40 border border-white/20 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <ClipboardText size={20} weight="fill" className="flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get a Free Onsite Quote</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Modal Backdrop & Card */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Dark Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-100 relative z-10 overflow-hidden my-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-black hover:bg-neutral-100 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X size={20} weight="bold" />
              </button>

              {isSubmitted ? (
                /* Success Message View */
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary-cream text-primary rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <CheckCircle size={36} weight="fill" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-neutral-black mb-2">
                    Quote Request Received!
                  </h3>
                  <p className="text-neutral-gray text-sm leading-relaxed mb-6">
                    Thank you, <strong className="text-neutral-black">{form.name}</strong>. Our local team will contact you shortly to schedule your free onsite measure in <strong className="text-neutral-black">{form.region}</strong>.
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                /* Form Input View */
                <div>
                  <div className="mb-6 pr-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary-cream px-3 py-1 rounded-full inline-block mb-2 border border-primary/15">
                      Free Measure & Quote
                    </span>
                    <h3 className="text-2xl font-extrabold text-neutral-black leading-tight">
                      Get a Free Onsite Quote
                    </h3>
                    <p className="text-xs text-neutral-gray mt-1">
                      No obligation. Servicing Taranaki & Whanganui regions.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-black font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-neutral-400"
                      />
                    </div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                          Phone Number <span className="text-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="022 123 4567"
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-black font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-neutral-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="john@example.co.nz"
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-black font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    {/* Region & Product Select Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                          Service Region
                        </label>
                        <select
                          name="region"
                          value={form.region}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-black font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all"
                        >
                          <option value="Taranaki Region">Taranaki Region</option>
                          <option value="Whanganui Region">Whanganui Region</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                          Product Interest
                        </label>
                        <select
                          name="product"
                          value={form.product}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-black font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all"
                        >
                          <option value="Louvre">Louvre</option>
                          <option value="Pergola">Pergola</option>
                          <option value="Canopy">Canopy</option>
                          <option value="Outdoor Blinds">Outdoor Blinds</option>
                          <option value="Carport">Carport</option>
                          <option value="Outdoor Shutter">Outdoor Shutter</option>
                          <option value="Sunroom">Sunroom</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                        Site Notes / Details (Optional)
                      </label>
                      <textarea
                        name="notes"
                        rows={2}
                        value={form.notes}
                        onChange={handleInputChange}
                        placeholder="Dimensions, patio orientation, or questions..."
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-black font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-neutral-400 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary hover:bg-primary-hover text-white text-xs font-extrabold uppercase tracking-widest rounded-full shadow-lg shadow-primary/25 transition-all duration-300 disabled:opacity-50 mt-2"
                    >
                      {isSubmitting ? 'Submitting Quote Request...' : 'Request Free Onsite Quote'}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
