import { EducationItem, ExperienceItem } from '@/app/types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'internship-1m1b',
    role: 'Virtual Intern — Data Analysis and AI/ML',
    company: '1M1B (1 Million for 1 Billion)',
    mode: 'Virtual (Ongoing Internship)',
    context:
      'Integrated with Microsoft, supported by the Government of Karnataka and MeitY Startup Hub.',
    location: 'Virtual / Bangalore',
    period: 'August 2026 – Present',
    description: [
      'Completing task-based assignments in a simulated workplace environment called SustainAI.',
      'Applying data and AI to sustainability problems.',
      'Developing scaling and implementation strategies for sustainability solutions.',
      'Working on target users, value propositions, phased rollouts and risk mitigation.',
    ],
    technologies: [
      'Data Analysis',
      'AI/ML',
      'SustainAI Workplace',
      'Sustainability Modeling',
      'Risk Mitigation',
      'Phased Rollouts',
    ],
    current: true,
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-mca',
    degree: 'MCA (Master of Computer Applications)',
    institution: 'PES University, Bangalore',
    location: 'Bangalore, Karnataka',
    period: 'Pursuing, expected 2027',
    grade: 'Pursuing',
    gradeType: 'Status',
    highlights: [
      'Master of Computer Applications student focusing on Software Development, Full-Stack Web Development, and Data Analytics.',
      'Actively developing real-time AI accessibility systems and participating in tech hackathons.',
    ],
  },
  {
    id: 'edu-bca',
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Government First Grade College, Honnavar',
    university: 'Karnataka University, Dharwad',
    location: 'Honnavar, Karnataka',
    period: '2022 – 2025',
    grade: '8.8 CGPA',
    gradeType: 'CGPA',
    highlights: [
      'Graduated with distinction with an 8.8 CGPA.',
      'Comprehensive foundation in programming, database design, data structures, and web technologies.',
    ],
  },
  {
    id: 'edu-puc',
    degree: 'PUC — PCMB',
    institution: 'Mohan K Shetty PU College, Honnavar',
    board: 'Karnataka PU Board (DPUE)',
    location: 'Honnavar, Karnataka',
    period: '2020 – 2022',
    grade: '70%',
    gradeType: 'Percentage',
    highlights: [
      'Pre-University Course in Physics, Chemistry, Mathematics, and Biology.',
    ],
  },
  {
    id: 'edu-sslc',
    degree: 'SSLC (10th Standard)',
    institution: 'Shri Chennakeshava High School, Karki',
    board: 'Karnataka Secondary Education Examination Board',
    location: 'Karki, Karnataka',
    period: '2020',
    grade: '93%',
    gradeType: 'Percentage',
    highlights: [
      'Secondary School Leaving Certificate completed with 93% distinction.',
    ],
  },
];

export const certificationsData = [
  {
    title: 'Data Analysis Certification',
    issuer: 'Professional Certification',
    skills: 'Excel, Power BI, Tableau, Python',
    status: 'Completed',
  },
  {
    title: 'Data Science Course',
    issuer: 'Infosys Springboard',
    skills: 'Machine Learning, Statistical Modeling, Python',
    status: 'Ongoing',
  },
];
