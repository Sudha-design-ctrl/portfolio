export interface ProfileData {
  name: string;
  shortName: string;
  roles: string[];
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  resumeFileName?: string;
  isAvailableForWork: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export type SkillCategory =
  | 'Programming Languages'
  | 'Web and Mobile Development'
  | 'Databases'
  | 'Data Analytics'
  | 'Machine Learning'
  | 'Development Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  description?: string;
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle?: string;
  tagline?: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Web Development' | 'Data Analytics' | 'Software Engineering';
  statusType: 'Implemented Application' | 'Conceptual Platform & Prototype' | 'Machine Learning Pipeline';
  tags: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  mode?: string;
  context?: string;
  location?: string;
  period: string;
  description: string[];
  technologies?: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  board?: string;
  location?: string;
  period: string;
  grade?: string;
  gradeType?: 'CGPA' | 'Percentage' | 'Status';
  highlights?: string[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
  label: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  platform?: string;
  status: 'Completed' | 'Ongoing';
  skillsCovered: string[];
  description?: string;
}
