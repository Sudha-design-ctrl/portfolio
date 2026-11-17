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
    description: 'Core language for ML pipelines, FastAPI services & data analysis',
    highlight: true,
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Programming Languages',
    description: 'Dynamic scripting for modern web applications & asynchronous logic',
  },
  {
    name: 'TypeScript',
    category: 'Programming Languages',
    description: 'Strongly-typed architecture for React, Next.js & Expo projects',
    highlight: true,
  },
  {
    name: 'Java',
    category: 'Programming Languages',
    description: 'Object-oriented programming, data structures & core fundamentals',
  },
  {
    name: 'C',
    category: 'Programming Languages',
    description: 'Low-level memory management, pointers & algorithmic foundation',
  },
  {
    name: 'SQL',
    category: 'Programming Languages',
    description: 'Relational query design, data manipulation & schema definitions',
    highlight: true,
  },

  // 2. Web and Mobile Development
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
    name: 'React Native & Expo',
    category: 'Web and Mobile Development',
    description: 'Cross-platform mobile development for SignFlow & BuildHer apps',
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
  {
    name: 'HTML5 & CSS3',
    category: 'Web and Mobile Development',
    description: 'Semantic markup, accessibility landmarks & modern responsive layouts',
  },
  {
    name: 'Tailwind CSS',
    category: 'Web and Mobile Development',
    description: 'Utility-first modern styling, responsive breakpoints & dark themes',
    highlight: true,
  },
  {
    name: 'Bootstrap',
    category: 'Web and Mobile Development',
    description: 'Responsive grid systems & rapid frontend prototyping',
  },

  // 3. Databases
  {
    name: 'PostgreSQL',
    category: 'Databases',
    description: 'Relational data modeling, foreign keys, indexing & ACID compliance',
    highlight: true,
  },
  {
    name: 'MySQL',
    category: 'Databases',
    description: 'Structured database schemas, complex joins & query optimization',
    highlight: true,
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    description: 'NoSQL document storage, flexible BSON schemas & collections',
  },

  // 4. Data Analytics
  {
    name: 'Excel (Advanced)',
    category: 'Data Analytics',
    description: 'Formulas, pivot tables, VLOOKUP/XLOOKUP & structured dashboards',
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
  {
    name: 'NumPy',
    category: 'Data Analytics',
    description: 'Multidimensional array operations, mathematical & matrix computing',
  },
  {
    name: 'Matplotlib & Seaborn',
    category: 'Data Analytics',
    description: 'Statistical plotting, exploratory distribution charts & visualizations',
  },

  // 5. Machine Learning
  {
    name: 'PyTorch',
    category: 'Machine Learning',
    description: 'Deep neural network design, tensor operations & model training',
    highlight: true,
  },
  {
    name: 'MediaPipe',
    category: 'Machine Learning',
    description: 'Real-time computer vision 225-dim skeletal landmark extraction',
    highlight: true,
  },
  {
    name: 'Scikit-learn',
    category: 'Machine Learning',
    description: 'Classification algorithms, hyperparameter tuning & cross-validation',
    highlight: true,
  },
  {
    name: 'Bidirectional LSTM',
    category: 'Machine Learning',
    description: 'Temporal gesture sequence classification on INCLUDE sign dataset',
    highlight: true,
  },
  {
    name: 'Classification Algorithms',
    category: 'Machine Learning',
    description: 'Supervised predictive modeling for debt sustainability risk analysis',
  },
  {
    name: 'Exploratory Data Analysis',
    category: 'Machine Learning',
    description: 'Hypothesis testing, feature importance analysis & data preprocessing',
  },

  // 6. Development Tools
  {
    name: 'Git & GitHub',
    category: 'Development Tools',
    description: 'Version control, branch management, code collaboration & CI/CD',
    highlight: true,
  },
  {
    name: 'VS Code',
    category: 'Development Tools',
    description: 'Primary IDE configured for TypeScript, Python, Tailwind & debugging',
  },
  {
    name: 'Jupyter Notebook',
    category: 'Development Tools',
    description: 'Interactive environment for data science, EDA & rapid ML prototyping',
    highlight: true,
  },
  {
    name: 'Postman',
    category: 'Development Tools',
    description: 'API endpoint testing, request validation & JWT header inspection',
  },
  {
    name: 'Vercel',
    category: 'Development Tools',
    description: 'Production cloud hosting, preview branches & automated deployments',
  },
];
