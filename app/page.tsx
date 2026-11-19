import React from 'react';
import { Navbar, Footer, Preloader } from '@/app/components';
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
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-[#f5f5f5] relative overflow-x-hidden">

      {/* 0. Branded Splash Screen Preloader */}
      <Preloader />

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
