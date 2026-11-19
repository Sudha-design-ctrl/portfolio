'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';
import { SectionHeading, GithubIcon, LinkedinIcon } from '@/app/components';
import { profileData } from '@/app/data/profile';
import { fadeInUp } from '@/app/lib/animation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedStatus, setSubmittedStatus] = useState<
    'idle' | 'opening-client' | 'error'
  >('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = 'Valid email required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setSubmittedStatus('error');
      return;
    }

    setSubmittedStatus('opening-client');

    const subject = encodeURIComponent(
      `Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Get In Touch"
          subtitle="Open for software engineering, full-stack, and data analytics roles."
          centered={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Column: Direct Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-xl bg-[#111] border border-[#1f1f1f] p-6 space-y-5">
              <div>
                <p className="text-xs font-mono uppercase text-[#737373] tracking-wider">
                  Direct Email
                </p>
                <div className="flex items-center justify-between gap-3 mt-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm font-mono text-[#f5f5f5] hover:text-indigo-400 transition-colors truncate"
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-[#1a1a1a] border border-[#2a2a2a] text-[#737373] hover:text-[#f5f5f5] hover:border-[#444] transition-all shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1f1f1f] flex flex-col gap-2.5">
                <p className="text-xs font-mono uppercase text-[#737373] tracking-wider">
                  Profiles
                </p>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#f5f5f5] hover:text-indigo-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-[#737373]" />
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#f5f5f5] hover:text-indigo-400 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-[#737373]" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1f1f1f] text-xs font-mono text-[#737373]">
                Location: {profileData.location}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl bg-[#111] border border-[#1f1f1f] p-6 sm:p-7 space-y-5">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-[#737373] uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0a0a] border border-[#1f1f1f] text-sm text-[#f5f5f5] placeholder:text-[#555] focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-[#737373] uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0a0a] border border-[#1f1f1f] text-sm text-[#f5f5f5] placeholder:text-[#555] focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-[#737373] uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Your message..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0a0a] border border-[#1f1f1f] text-sm text-[#f5f5f5] placeholder:text-[#555] focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <AnimatePresence>
                  {submittedStatus === 'opening-client' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-3 rounded-lg bg-[#141414] border border-[#222] text-xs font-mono text-emerald-400 flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 shrink-0" />
                      <span>Drafting email in your default client...</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
