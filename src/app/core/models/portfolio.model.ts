export type LocaleCode = "en" | "de";

export interface LocaleOption {
  code: LocaleCode;
  label: string;
  nativeName: string;
  level: string;
}

export type ProjectCategory =
  | "All"
  | "Real-Time App"
  | "Fitness SaaS"
  | "Marketplace"
  | "E-Commerce";

export type ProjectMockupVariant =
  | "weather"
  | "fitness"
  | "housing"
  | "commerce";

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  shortDescription: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
  isVisible?: boolean;
  dotColorClass: string;
  gradientClass: string;
  mockupVariant: ProjectMockupVariant;
}

/**
 * Matches Prisma `Project` model in NestJS backend:
 * (id, title, shortDescription, category, tags, repoUrl, liveUrl, isVisible)
 */
export interface BackendProjectDto {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
  isVisible: boolean;
}

/**
 * Matches Prisma `SiteContent` model in NestJS backend:
 * (id, sectionKey, title, description, extraData)
 */
export interface BackendSiteContentDto<TExtra = Record<string, unknown>> {
  id: string;
  sectionKey: string;
  title: string;
  description: string;
  extraData?: TExtra | null;
}

/**
 * Matches Prisma `Message` creation payload in NestJS backend:
 * (name, email, content)
 */
export interface ContactFormPayload {
  name: string;
  email: string;
  content: string;
}

export interface BackendMessageResponseDto extends ContactFormPayload {
  id: string;
  createdAt: string;
}

export interface ContactSubmission extends ContactFormPayload {
  id: string;
  submittedAt: string;
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
  iconType: "email" | "telegram" | "linkedin" | "network";
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

export interface UiTranslationDictionary {
  navHome: string;
  navAbout: string;
  navProjects: string;
  navSkills: string;
  navContact: string;
  hireMe: string;
  heroBadge: string;
  heroTitle: string;
  heroRolePrimary: string;
  heroRoleSecondary: string;
  heroDescription: string;
  heroCardBadge: string;
  heroCardTag: string;
  heroCardSubtitle: string;
  downloadCv: string;
  exploreProjects: string;
  location: string;
  availability: string;
  availableTag: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutDegree: string;
  aboutUniversity: string;
  aboutLanguagesTitle: string;
  projectsKicker: string;
  projectsTitle: string;
  projectsSubtitle: string;
  projectGithubBtn: string;
  projectLiveBtn: string;
  skillsKicker: string;
  skillsTitle: string;
  skillsSubtitle: string;
  contactKicker: string;
  contactTitle: string;
  contactSubtitle: string;
  contactDescription: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactEmailLabel: string;
  contactEmailPlaceholder: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactSubmitBtn: string;
  contactSubmittingBtn: string;
  contactRecentInquiries: string;
  footerRights: string;
  footerBackToTop: string;
}
