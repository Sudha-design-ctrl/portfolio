import { CertificationItem } from '@/app/types';

export const certificationsList: CertificationItem[] = [
  {
    id: 'cert-data-analysis',
    title: 'Data Analysis',
    status: 'Completed',
    skillsCovered: ['Microsoft Excel', 'Power BI', 'Tableau', 'Python'],
    description:
      'Rigorous foundational training covering data cleaning, quantitative analysis, exploratory modeling, and visual dashboard storytelling using Excel, Power BI, Tableau, and Python.',
  },
  {
    id: 'cert-data-science',
    title: 'Data Science',
    platform: 'Infosys Springboard',
    status: 'Ongoing',
    skillsCovered: ['Data Science Fundamentals', 'Machine Learning', 'Statistical Analysis', 'Python'],
    description:
      'Active structured coursework through Infosys Springboard advancing competencies in statistical inference, machine learning algorithms, and predictive data modeling.',
  },
];
