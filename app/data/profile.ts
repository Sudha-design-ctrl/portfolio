import { ProfileData, SocialLink } from '@/app/types';

export const profileData: ProfileData = {
  name: 'Sudha Gowda',
  shortName: 'Sudha',
  roles: [
    'Software Developer',
    'Full-Stack Web Developer',
    'Data Analytics Enthusiast',
  ],
  tagline: 'MCA Student at PES University building high-performance full-stack applications, AI/ML pipelines, and data analytics solutions.',
  bio: [
    'I am an MCA student at PES University, Bangalore (expected 2027) with a BCA degree (8.8 CGPA) and strong foundations in software engineering, full-stack web development, and data analytics.',
    'I have hands-on experience engineering full-stack applications, real-time machine learning pipelines, and data analytics solutions using Python, TypeScript, React, Next.js, FastAPI, PostgreSQL, and SQL.',
    'Currently a Virtual Intern in Data Analysis and AI/ML at 1M1B (integrated with Microsoft, supported by MeitY Startup Hub and Govt. of Karnataka), solving sustainability challenges using data-driven intelligence.',
  ],
  location: 'Bangalore, Karnataka',
  email: 'sudhangowda016@gmail.com',
  github: 'https://github.com/Sudha-design-ctrl',
  linkedin: 'https://www.linkedin.com/in/sudhagowda/',
  resumeUrl: '/Sudha_Gowda_Resume.pdf',
  resumeFileName: 'Sudha_Gowda_Resume.pdf',
  isAvailableForWork: true,
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: profileData.github,
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: profileData.linkedin,
  },
  {
    platform: 'email',
    label: 'Email',
    url: `mailto:${profileData.email}`,
  },
];
