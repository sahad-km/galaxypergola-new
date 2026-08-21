'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Envelope,
  Clock,
  MapPin,
  CheckCircle,
  PaperPlaneTilt
} from '@phosphor-icons/react';
import { contactDetailsData } from '@/data/siteData';

interface FormState {
  name: string;
  email: string;
  phone: string;
  region: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  region?: string;
  service?: string;
}

export default function Contact() {
  // Form input states
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    region: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!form.region) newErrors.region = 'Please select your region';
    if (!form.service) newErrors.service = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        region: '',
        service: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-neutral-cream/40 border border-neutral-100 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-center">

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
                    Get in Touch
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-black mb-2">
                    Request a Free On-Site Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-gray mb-8">
                    Fill out the form below. Our engineering design team will get back to you within 24 hours to schedule your free measure and design mockup.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Floating Label: Full Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder=" "
                        className={`peer block w-full px-4 pt-6 pb-2 bg-white border rounded-2xl text-sm text-neutral-black placeholder-transparent focus:outline-none focus:ring-1 transition-all ${errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-neutral-200 focus:border-primary focus:ring-primary'
                          }`}
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 top-4 text-xs font-semibold text-neutral-400 duration-200 transform scale-75 origin-[0] translate-y-[-10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-[-10px] peer-focus:text-primary"
                      >
                        Full Name
                      </label>
                      {errors.name && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.name}</p>}
                    </div>

                    {/* Email and Phone side-by-side on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Floating Label: Email */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder=" "
                          className={`peer block w-full px-4 pt-6 pb-2 bg-white border rounded-2xl text-sm text-neutral-black placeholder-transparent focus:outline-none focus:ring-1 transition-all ${errors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-neutral-200 focus:border-primary focus:ring-primary'
                            }`}
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 top-4 text-xs font-semibold text-neutral-400 duration-200 transform scale-75 origin-[0] translate-y-[-10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-[-10px] peer-focus:text-primary"
                        >
                          Email Address
                        </label>
                        {errors.email && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.email}</p>}
                      </div>

                      {/* Floating Label: Phone */}
                      <div className="relative">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder=" "
                          className={`peer block w-full px-4 pt-6 pb-2 bg-white border rounded-2xl text-sm text-neutral-black placeholder-transparent focus:outline-none focus:ring-1 transition-all ${errors.phone
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-neutral-200 focus:border-primary focus:ring-primary'
                            }`}
                        />
                        <label
                          htmlFor="phone"
                          className="absolute left-4 top-4 text-xs font-semibold text-neutral-400 duration-200 transform scale-75 origin-[0] translate-y-[-10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-[-10px] peer-focus:text-primary"
                        >
                          Phone Number
                        </label>
                        {errors.phone && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Region and Product/Service selectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Region Selector */}
                      <div className="relative flex flex-col justify-center">
                        <select
                          name="region"
                          id="region"
                          value={form.region}
                          onChange={handleInputChange}
                          className={`block w-full px-4 pt-6 pb-2 bg-white border rounded-2xl text-sm text-neutral-black focus:outline-none focus:ring-1 transition-all appearance-none ${errors.region
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-neutral-200 focus:border-primary focus:ring-primary'
                            }`}
                        >
                          <option value="" disabled hidden></option>
                          {contactDetailsData.regions.map((reg) => (
                            <option key={reg} value={reg}>{reg}</option>
                          ))}
                        </select>
                        <label
                          htmlFor="region"
                          className={`absolute left-4 duration-200 pointer-events-none text-xs font-semibold text-neutral-400 origin-[0] ${form.region
                              ? 'scale-75 translate-y-[-10px]'
                              : 'scale-100 translate-y-0'
                            }`}
                        >
                          Select Region
                        </label>
                        {errors.region && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.region}</p>}
                      </div>

                      {/* Service of Interest */}
                      <div className="relative flex flex-col justify-center">
                        <select
                          name="service"
                          id="service"
                          value={form.service}
                          onChange={handleInputChange}
                          className={`block w-full px-4 pt-6 pb-2 bg-white border rounded-2xl text-sm text-neutral-black focus:outline-none focus:ring-1 transition-all appearance-none ${errors.service
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-neutral-200 focus:border-primary focus:ring-primary'
                            }`}
                        >
                          <option value="" disabled hidden></option>
                          <option value="Louvre">Louvre</option>
                          <option value="Pergola">Pergola</option>
                          <option value="Canopy">Canopy</option>
                          <option value="Outdoor Blinds">Outdoor Blinds</option>
                          <option value="Carport">Carport</option>
                          <option value="Outdoor Shutter">Outdoor Shutter</option>
                          <option value="Sunroom">Sunroom</option>
                          <option value="Custom Design and Build">Custom Design and Build</option>
                        </select>
                        <label
                          htmlFor="service"
                          className={`absolute left-4 duration-200 pointer-events-none text-xs font-semibold text-neutral-400 origin-[0] ${form.service
                              ? 'scale-75 translate-y-[-10px]'
                              : 'scale-100 translate-y-0'
                            }`}
                        >
                          Interested Service
                        </label>
                        {errors.service && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.service}</p>}
                      </div>
                    </div>

                    {/* Floating Label: Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        value={form.message}
                        onChange={handleInputChange}
                        placeholder=" "
                        rows={4}
                        className="peer block w-full px-4 pt-6 pb-2 bg-white border border-neutral-200 rounded-2xl text-sm text-neutral-black placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-4 top-4 text-xs font-semibold text-neutral-400 duration-200 transform scale-75 origin-[0] translate-y-[-10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-[-10px] peer-focus:text-primary"
                      >
                        Project Details / Message (Optional)
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary text-white font-bold tracking-wider uppercase rounded-2xl shadow-lg hover:bg-primary-hover hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <PaperPlaneTilt size={18} weight="bold" />
                          Submit Request
                        </>
                      )}
                    </button>

                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  <div className="p-4 bg-primary-cream text-primary rounded-full mb-6">
                    <CheckCircle size={64} weight="duotone" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-neutral-black mb-3">
                    Thank You!
                  </h3>
                  <p className="text-sm text-neutral-gray max-w-md mx-auto leading-relaxed mb-8">
                    Your request has been received. One of our design engineers will review your project details and contact you shortly to arrange a consultation.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-neutral-black text-white text-xs font-bold tracking-wider uppercase rounded-full hover:bg-primary transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: Contact Details & Animated SVG Map */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
                Cluster Hubs
              </span>
              <h3 className="text-2xl font-extrabold text-neutral-black mb-6">
                Taranaki & Whanganui Design & Install
              </h3>

              {/* Showroom Details List */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-neutral-cream rounded-xl text-primary flex-shrink-0 h-11 w-11 flex items-center justify-center">
                    <Phone size={20} weight="bold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-neutral-black tracking-widest mb-1">
                      Phone & Mobile Contact
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm font-bold text-primary">
                      <a href={`tel:${contactDetailsData.phone.replace(/\s+/g, '')}`} className="hover:underline">
                        Landline: {contactDetailsData.phone}
                      </a>
                      <span className="hidden sm:inline text-neutral-300">|</span>
                      <a href={`tel:${contactDetailsData.mobile.replace(/\s+/g, '')}`} className="hover:underline">
                        Mobile: {contactDetailsData.mobile}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-neutral-cream rounded-xl text-primary flex-shrink-0 h-11 w-11 flex items-center justify-center">
                    <Envelope size={20} weight="bold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-neutral-black tracking-widest mb-1">
                      Email Inquiries
                    </h4>
                    <p className="text-sm text-neutral-charcoal font-semibold">{contactDetailsData.email}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-neutral-cream rounded-xl text-primary flex-shrink-0 h-11 w-11 flex items-center justify-center">
                    <Clock size={20} weight="bold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-neutral-black tracking-widest mb-1">
                      Working Hours
                    </h4>
                    <p className="text-xs text-neutral-gray leading-normal font-medium">{contactDetailsData.hours}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-neutral-cream rounded-xl text-primary flex-shrink-0 h-11 w-11 flex items-center justify-center">
                    <MapPin size={20} weight="bold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-neutral-black tracking-widest mb-1">
                      Main Office & Showroom
                    </h4>
                    <p className="text-xs text-neutral-charcoal font-semibold">{contactDetailsData.locations[0].address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Google Map Container */}
            <div className="mt-10 p-5 bg-cream-bg rounded-3xl border border-neutral-100 flex flex-col w-full shadow-sm">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Office & Showroom Location Map
                </span>
                <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-primary text-white shadow-sm flex items-center gap-1.5">
                  <MapPin size={14} weight="bold" /> New Plymouth Office
                </span>
              </div>

              {/* Google Map iFrame Embed */}
              <div className="relative w-full aspect-[4/3] min-h-[260px] rounded-2xl overflow-hidden shadow-inner border border-neutral-200/80 bg-neutral-100">
                <iframe
                  title="Cluster Outdoor Solutions Google Map Location"
                  src="https://maps.google.com/maps?q=Unit+2,+1B+Sunley+Street,+Westown,+New+Plymouth+4310,+New+Zealand&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Info Bar */}
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-gray px-1 gap-1 font-medium">
                <span>
                  Main Showroom: Unit 2, 1B Sunley Street, Westown, New Plymouth 4310
                </span>
                <a
                  href="https://maps.google.com/?q=Unit+2,+1B+Sunley+Street,+Westown,+New+Plymouth+4310,+New+Zealand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
