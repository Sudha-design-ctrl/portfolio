import React from 'react';
import { Navbar, Footer } from '@/app/components';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  CertificationsSection,
  ContactSection,
} from '@/app/sections';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#080810] text-[#f1f0ff] relative overflow-x-hidden selection:bg-purple-600/30 selection:text-purple-200">
      {/* Global Background Ambient Radial Glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[550px] h-[550px] bg-indigo-950/15 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. About Preview */}
        <AboutSection />

        {/* 4. Skills Preview */}
        <SkillsSection />

        {/* 5. Featured Projects */}
        <ProjectsSection />

        {/* 6. Internship Experience & Education Preview */}
        <ExperienceSection />

        {/* 7. Certifications Section */}
        <CertificationsSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
