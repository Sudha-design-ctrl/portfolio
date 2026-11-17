'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  Copy,
  Check,
  FileText,
  Download,
  AlertCircle,
  ExternalLink,
  Info,
  Sparkles,
  MapPin,
  Clock,
} from 'lucide-react';
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
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
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
      `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Hello Sudha,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\n---\nSent via Portfolio Contact Form`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${subject}&body=${body}`;

    // Trigger the client's native mail program
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 border-t border-purple-500/10 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-700/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let’s Discuss Opportunities & Projects"
          subtitle="Open for software engineering, full-stack web development, and data analytics roles."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Verified Social Cards */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Status Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#101024] via-[#0c0c1b] to-[#080812] border border-purple-500/20 shadow-xl space-y-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/25 text-emerald-300 text-xs font-mono font-medium w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Actively Seeking Opportunities</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Contact &amp; Connect Directly
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Whether you have an internship position, full-stack software requirements, or a collaborative data analytics initiative, feel free to reach out.
              </p>

              {/* Email Box with One-Click Copy */}
              <div className="p-4 rounded-2xl bg-[#080812] border border-purple-500/15 space-y-2">
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-purple-300 transition-colors truncate"
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#14142a] text-purple-200 hover:text-white hover:bg-purple-900/40 border border-purple-500/20 transition-all shrink-0 active:scale-95"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-purple-300" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Verified Profiles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#090914] border border-purple-500/15 hover:border-purple-500/40 hover:bg-[#121226] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                      GitHub
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#090914] border border-purple-500/15 hover:border-purple-500/40 hover:bg-[#121226] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                      LinkedIn
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </a>
              </div>

              {/* Resume CTA */}
              <a
                href={profileData.resumeUrl}
                download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-semibold text-purple-200 bg-[#121226] border border-purple-500/25 hover:border-purple-500/50 hover:bg-[#181832] transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume PDF</span>
              </a>

              {/* Location Tag */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Validation & Mailto Action */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e0e1e] via-[#0c0c1a] to-[#080812] border border-purple-500/20 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Fill out this form to draft an inquiry. Clicking submit opens your email client directly.
                </p>
              </div>

              {/* Explicit Honest Notice */}
              <div className="p-3.5 rounded-2xl bg-[#090914] border border-purple-500/15 flex items-start gap-2.5 text-xs text-slate-400">
                <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-purple-200">Notice:</strong> This form uses a verified <code className="text-purple-300 font-mono">mailto</code> trigger that opens your email application. Messages are not stored in a remote database; please send the generated email from your mail client.
                </p>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider"
                  >
                    Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080812] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-purple-500/20 focus:border-purple-500/60'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider"
                  >
                    Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. sarah.jenkins@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080812] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-purple-500/20 focus:border-purple-500/60'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider"
                  >
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Describe your project, role opportunity, or question..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#080812] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-purple-500/20 focus:border-purple-500/60'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Feedback Banner */}
                <AnimatePresence>
                  {submittedStatus === 'opening-client' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <p>
                        Opening your default email application with prefilled message. Please review and send your email!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 shadow-lg shadow-purple-950/60 hover:shadow-purple-700/30 transition-all duration-200 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Draft &amp; Open Email Client</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
