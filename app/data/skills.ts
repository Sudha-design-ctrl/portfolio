import { SkillCategory, SkillItem } from '@/app/types';

export const skillCategories: SkillCategory[] = [
  'Programming Languages',
  'Web and Mobile Development',
  'Databases',
  'Data Analytics',
  'Machine Learning',
  'Development Tools',
];

export const skillsData: SkillItem[] = [
  // 1. Programming Languages
  {
    name: 'Python',
    category: 'Programming Languages',
    description: 'Core language for backend services, machine learning & data analysis',
    highlight: true,
  },
  {
    name: 'TypeScript',
    category: 'Programming Languages',
    description: 'Strongly-typed architecture for modern web applications & APIs',
    highlight: true,
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Programming Languages',
    description: 'Dynamic scripting for responsive web applications & asynchronous logic',
  },
  {
    name: 'SQL',
    category: 'Programming Languages',
    description: 'Relational query design, data manipulation & schema definitions',
    highlight: true,
  },

  // 2. Web & Backend Development
  {
    name: 'React.js',
    category: 'Web and Mobile Development',
    description: 'Component architecture, custom hooks & reactive UI state management',
    highlight: true,
  },
  {
    name: 'Next.js',
    category: 'Web and Mobile Development',
    description: 'App Router, server components, static generation & route optimization',
    highlight: true,
  },
  {
    name: 'FastAPI',
    category: 'Web and Mobile Development',
    description: 'High-speed Python REST APIs with asynchronous endpoints & JWT auth',
    highlight: true,
  },
  {
    name: 'Node.js & Express.js',
    category: 'Web and Mobile Development',
    description: 'Backend web services, middleware integration & REST endpoints',
  },

  // 3. Databases
  {
    name: 'PostgreSQL',
    category: 'Databases',
    description: 'Relational data modeling, indexing, foreign keys & ACID compliance',
    highlight: true,
  },
  {
    name: 'MySQL',
    category: 'Databases',
    description: 'Structured database schemas, complex queries & optimization',
    highlight: true,
  },

  // 4. Data Analytics
  {
    name: 'Excel',
    category: 'Data Analytics',
    description: 'Formulas, pivot tables, lookup functions & structured analytical models',
    highlight: true,
  },
  {
    name: 'Power BI',
    category: 'Data Analytics',
    description: 'Interactive business intelligence reports, DAX & visual storytelling',
    highlight: true,
  },
  {
    name: 'Tableau',
    category: 'Data Analytics',
    description: 'Data visualization, multi-dimensional dashboards & metric tracking',
    highlight: true,
  },
  {
    name: 'Pandas',
    category: 'Data Analytics',
    description: 'Data wrangling, cleaning, aggregation, reshaping & transformations',
    highlight: true,
  },

  // 5. Machine Learning
  {
    name: 'MediaPipe',
    category: 'Machine Learning',
    description: 'Real-time computer vision 225-dim skeletal landmark extraction',
    highlight: true,
  },
  {
    name: 'Scikit-learn',
    category: 'Machine Learning',
    description: 'Supervised classification, predictive modeling & evaluation pipelines',
    highlight: true,
  },

  // 6. Development Tools
  {
    name: 'Git & GitHub',
    category: 'Development Tools',
    description: 'Version control, branch management, collaboration & CI/CD workflows',
    highlight: true,
  },
  {
    name: 'Jupyter Notebook',
    category: 'Development Tools',
    description: 'Interactive computational notebooks for EDA & data modeling',
  },
];
