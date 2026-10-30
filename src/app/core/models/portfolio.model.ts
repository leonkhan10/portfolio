export type LocaleCode = 'en' | 'de' ;

export interface LocaleOption {
  code: LocaleCode;
  label: string;
  nativeName: string;
  level: string;
}

export type ProjectCategory =
  | 'All'
  | 'Real-Time App'
  | 'Fitness SaaS'
  | 'Marketplace'
  | 'E-Commerce';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  dotColorClass: string;
  gradientClass: string;
  mockupVariant: 'weather' | 'fitness' | 'housing' | 'commerce';
  shortDescription: string;
  architectureSummary: string;
  highlights: string[];
  tags: string[];
  codeSnippet: string;
  codeFileName: string;
  metrics: {
    label: string;
    value: string;
  }[];
  repoUrl: string;
  liveUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  teamSuffix?: string;
  period: string;
  description: string;
  skills: string[];
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  dotColorClass: string;
  skills: string[];
}

export interface LanguageCompetency {
  language: string;
  level: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  iconType: 'email' | 'telegram' | 'linkedin' | 'network';
}

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmission extends ContactFormPayload {
  id: string;
  submittedAt: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}
