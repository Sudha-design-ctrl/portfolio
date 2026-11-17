import { ProjectItem } from '@/app/types';

export const projectsData: ProjectItem[] = [
  {
    id: 'signflow',
    title: 'Real-Time Indian Sign Language Recognition and Speech Translation App',
    shortTitle: 'SignFlow',
    tagline: 'Featured Project',
    description:
      'An application that recognizes dynamic Indian Sign Language gestures and converts them into text and speech in English, Hindi and Kannada.',
    longDescription:
      'End-to-end recognition pipeline translating dynamic ISL gesture sequences into synthesized voice and text with sub-25 ms inference latency on standard CPU hardware.',
    category: 'Full Stack',
    statusType: 'Implemented Application',
    tags: [
      'Python',
      'PyTorch',
      'MediaPipe',
      'FastAPI',
      'PostgreSQL',
      'React Native',
      'Expo',
      'TypeScript',
    ],
    highlights: [
      '2-layer Bidirectional LSTM model with Global Average Pooling',
      '92.06% validation accuracy across 15 conversational sign classes',
      '225-dimensional skeletal landmark extraction preserving privacy',
      'Real-time recognition pipeline with English, Hindi & Kannada synthesis',
    ],
    githubUrl: 'https://github.com/Sudha-design-ctrl/signflow',
    featured: true,
  },
  {
    id: 'buildher',
    title: 'AI-Powered Women Entrepreneurship Platform',
    shortTitle: 'BuildHer',
    tagline: 'ACM-W State Hackathon Concept',
    description:
      'A mobile application concept designed to help women discover their skills and explore income-generating business opportunities.',
    longDescription:
      'Concept developed for the ACM-W State-Level Hackathon exploring an integrated ecosystem to empower aspiring women entrepreneurs through AI-guided discovery and business planning.',
    category: 'Software Engineering',
    statusType: 'Conceptual Platform & Prototype',
    tags: ['React Native', 'Expo', 'Python', 'FastAPI', 'JWT'],
    highlights: [
      'AI Skill discovery wizard matching personal strengths to viable businesses',
      'Personalized business recommendation engine with timeline estimation',
      'Cost-plus pricing assistance calculating ingredient, labor & overhead margins',
      'AI marketing content generator creating festive WhatsApp & Instagram copy',
    ],
    githubUrl: 'https://github.com/Sudha-design-ctrl/buildher',
    featured: false,
  },
  {
    id: 'debt-risk',
    title: 'Machine Learning Pipeline for Debt Sustainability',
    shortTitle: 'Debt Sustainability Classifier',
    tagline: 'Supervised ML Pipeline',
    description:
      'A supervised machine learning project that classifies debt sustainability risk categories using financial indicators.',
    longDescription:
      'Quantitative predictive modeling pipeline analyzing macroeconomic indicators to classify debt risk levels and assist fiscal health assessment.',
    category: 'Data Analytics',
    statusType: 'Machine Learning Pipeline',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    highlights: [
      'Data cleaning and preprocessing with outlier handling & normalization',
      'Exploratory Data Analysis (EDA) uncovering key predictive feature correlations',
      'Classification model training and evaluation using Scikit-learn',
      'Performance evaluation and metric visualization with Matplotlib & Seaborn',
    ],
    githubUrl: 'https://github.com/Sudha-design-ctrl/debt_risk',
    featured: false,
  },
];
