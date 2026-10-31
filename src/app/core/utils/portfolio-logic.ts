import {
  BackendProjectDto,
  ContactChannel,
  ContactFormPayload,
  ExperienceItem,
  LanguageCompetency,
  LocaleCode,
  LocaleOption,
  ProjectCategory,
  ProjectItem,
  ProjectMockupVariant,
  SeoMetadata,
  SkillCategoryGroup,
  UiTranslationDictionary,
} from "../models/portfolio.model";

export const LOCALE_OPTIONS: LocaleOption[] = [
  {
    code: "en",
    label: "English",
    nativeName: "English",
    level: "Intermediate B1",
  },
  {
    code: "de",
    label: "German",
    nativeName: "Deutsch",
    level: "Intermediate B1",
  },
];

export const UI_TRANSLATIONS: Record<LocaleCode, UiTranslationDictionary> = {
  en: {
    navHome: "Home",
    navAbout: "About me",
    navProjects: "Projects",
    navSkills: "Skills & Experience",
    navContact: "Contact me",
    hireMe: "Hire Me",
    heroBadge: "3+ Years Experience in Full-Stack & Angular",
    heroTitle: "I’m Raman Khan Ahmadi",
    heroRolePrimary: "Full-Stack Engineer",
    heroRoleSecondary: "Angular & NestJS Specialist",
    heroDescription:
      "I build production-ready web applications with Angular, TypeScript, NestJS, and MongoDB. Passionate about modern component architecture, state management, and building robust RESTful APIs.",
    heroCardBadge: "Angular 21 + NestJS",
    heroCardTag: "Full-Stack",
    heroCardSubtitle: "Angular & NestJS Engineer",
    downloadCv: "Download CV",
    exploreProjects: "Explore Projects",
    location: "Saint Petersburg, Russia",
    availability: "Open to Remote B2B/EoR & Europe Relocation",
    availableTag: "Available",

    aboutKicker: "Background",
    aboutTitle: "About me",
    aboutDescription:
      "I’m a Full-Stack Engineer with 3+ years of experience building and migrating complex web applications. From upgrading live smart-building IoT dashboards to architecting modern Angular 20+ and NestJS platforms, I enjoy delivering robust features from UI to API. I work in Agile teams, utilize Docker for reproducible environments, and write automated tests to ensure stable releases.",
    aboutDegree: "Computer Science (B.Sc.)",
    aboutUniversity: "University of the People — USA (In progress)",
    aboutLanguagesTitle: "Languages",

    projectsKicker: "Portfolio",
    projectsTitle: "Projects",
    projectsSubtitle:
      "Turning complex problems into simple, effective full-stack and frontend solutions.",
    projectGithubBtn: "GitHub",
    projectLiveBtn: "Live Site",

    skillsKicker: "Career History",
    skillsTitle: "Skills & Experience",
    skillsSubtitle:
      "Click any technology badge below to highlight where it was applied in my career.",

    contactKicker: "Reach Out",
    contactTitle: "Contact me",
    contactSubtitle: "Let’s work together",
    contactDescription:
      "I am always open to new opportunities, interesting B2B/EoR projects, and professional collaborations. Feel free to reach out if you have a question or want to discuss a role.",
    contactNameLabel: "Your Name",
    contactNamePlaceholder: "e.g. Alex Morgan",
    contactEmailLabel: "Your Email",
    contactEmailPlaceholder: "e.g. alex@example.com",
    contactMessageLabel: "Your Message",
    contactMessagePlaceholder:
      "Hi Raman, let’s discuss an Angular / Full-Stack role or project...",
    contactSubmitBtn: "Send message",
    contactSubmittingBtn: "Sending...",
    contactRecentInquiries: "Recent Dispatched Inquiries",

    footerRights: "© 2026 Raman Khan Ahmadi. All rights reserved.",
    footerBackToTop: "Back to top",
  },
  de: {
    navHome: "Startseite",
    navAbout: "Über mich",
    navProjects: "Projekte",
    navSkills: "Fähigkeiten & Erfahrung",
    navContact: "Kontakt",
    hireMe: "Mich einstellen",
    heroBadge: "3+ Jahre Erfahrung in Full-Stack & Angular",
    heroTitle: "Ich bin Raman Khan Ahmadi",
    heroRolePrimary: "Full-Stack-Ingenieur",
    heroRoleSecondary: "Angular & NestJS Spezialist",
    heroDescription:
      "Ich entwickle produktionsreife Webanwendungen mit Angular, TypeScript, NestJS und MongoDB. Leidenschaftlich in Bezug auf moderne Komponentenarchitektur, State Management und robuste RESTful-APIs.",
    heroCardBadge: "Angular 21 + NestJS",
    heroCardTag: "Full-Stack",
    heroCardSubtitle: "Angular & NestJS Ingenieur",
    downloadCv: "Lebenslauf herunterladen",
    exploreProjects: "Projekte entdecken",
    location: "Sankt Petersburg, Russland",
    availability: "Offen für Remote B2B/EoR & Umzug nach Europa",
    availableTag: "Verfügbar",

    aboutKicker: "Hintergrund",
    aboutTitle: "Über mich",
    aboutDescription:
      "Ich bin ein Full-Stack-Ingenieur mit über 3 Jahren Erfahrung in der Entwicklung und Migration komplexer Webanwendungen. Von der Aktualisierung von Smart-Building-IoT-Dashboards bis hin zur Architektur moderner Angular 20+ und NestJS-Plattformen liefere ich robuste Funktionen von der UI bis zur API. Ich arbeite in agilen Teams, nutze Docker für reproduzierbare Umgebungen und schreibe automatisierte Tests für stabile Releases.",
    aboutDegree: "Informatik / Computer Science (B.Sc.)",
    aboutUniversity: "University of the People — USA (Laufend)",
    aboutLanguagesTitle: "Sprachen",

    projectsKicker: "Portfolio",
    projectsTitle: "Projekte",
    projectsSubtitle:
      "Komplexe Probleme in einfache, effektive Full-Stack- und Frontend-Lösungen verwandeln.",
    projectGithubBtn: "GitHub",
    projectLiveBtn: "Live-Demo",

    skillsKicker: "Beruflicher Werdegang",
    skillsTitle: "Fähigkeiten & Erfahrung",
    skillsSubtitle:
      "Klicken Sie unten auf eine Technologie, um hervorzuheben, wo ich sie eingesetzt habe.",

    contactKicker: "Kontakt aufnehmen",
    contactTitle: "Kontaktiere mich",
    contactSubtitle: "Lassen Sie uns zusammenarbeiten",
    contactDescription:
      "Ich bin immer offen für neue Möglichkeiten, interessante B2B/EoR-Projekte und professionelle Zusammenarbeiten. Melden Sie sich gerne, wenn Sie eine Frage haben oder über eine Position sprechen möchten.",
    contactNameLabel: "Ihr Name",
    contactNamePlaceholder: "z.B. Alex Morgan",
    contactEmailLabel: "Ihre E-Mail",
    contactEmailPlaceholder: "z.B. alex@beispiel.com",
    contactMessageLabel: "Ihre Nachricht",
    contactMessagePlaceholder:
      "Hallo Raman, lass uns über ein Angular / Full-Stack-Projekt sprechen...",
    contactSubmitBtn: "Nachricht senden",
    contactSubmittingBtn: "Wird gesendet...",
    contactRecentInquiries: "Kürzlich gesendete Anfragen",

    footerRights: "© 2026 Raman Khan Ahmadi. Alle Rechte vorbehalten.",
    footerBackToTop: "Nach oben",
  },
};

export const LANGUAGE_COMPETENCIES_BY_LOCALE: Record<
  LocaleCode,
  LanguageCompetency[]
> = {
  en: [
    { language: "Persian", level: "Native" },
    { language: "Turkish", level: "Advanced" },
    { language: "English", level: "Intermediate B1" },
    { language: "Russian", level: "Intermediate B1" },
  ],
  de: [
    { language: "Persisch", level: "Muttersprache" },
    { language: "Türkisch", level: "Fortgeschritten" },
    { language: "Englisch", level: "Mittelstufe B1" },
    { language: "Russisch", level: "Mittelstufe B1" },
  ],
};

export const LANGUAGE_COMPETENCIES = LANGUAGE_COMPETENCIES_BY_LOCALE.en;

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "weather-radar",
    title: "Weather Radar & Forecast",
    category: "Real-Time App",
    dotColorClass: "bg-brand-500",
    gradientClass: "from-indigo-50 via-slate-100 to-purple-50",
    mockupVariant: "weather",
    shortDescription:
      "Real-time weather analytics application featuring dynamic geolocation tracking and responsive widgets.",
    tags: ["Angular", "RxJS", "REST API"],
    repoUrl: "https://github.com/ramankhanahmadi/weather-radar-angular",
    liveUrl: "https://github.com/ramankhanahmadi/weather-radar-angular",
    isVisible: true,
  },
  {
    id: "fitness-tracker",
    title: "Fitness Workout Tracker",
    category: "Fitness SaaS",
    dotColorClass: "bg-emerald-500",
    gradientClass: "from-violet-50 via-slate-100 to-indigo-50",
    mockupVariant: "fitness",
    shortDescription:
      "Dynamic workout logging interface with schedule planner, performance graphs, and local sync.",
    tags: ["Angular", "TypeScript", "NgPrime"],
    repoUrl: "https://github.com/ramankhanahmadi/fitness-workout-tracker",
    liveUrl: "https://github.com/ramankhanahmadi/fitness-workout-tracker",
    isVisible: true,
  },
  {
    id: "housing-hub",
    title: "US Housing Rental Hub",
    category: "Marketplace",
    dotColorClass: "bg-brand-500",
    gradientClass: "from-purple-50 via-slate-100 to-pink-50",
    mockupVariant: "housing",
    shortDescription:
      "Real estate portal to compare and view housing prices, metrics, and amenities across US cities.",
    tags: ["Angular", "Material", "Tailwind"],
    repoUrl: "https://github.com/ramankhanahmadi/us-housing-rental-hub",
    liveUrl: "https://github.com/ramankhanahmadi/us-housing-rental-hub",
    isVisible: true,
  },
  {
    id: "commerce-checkout",
    title: "Commerce Cart & Checkout",
    category: "E-Commerce",
    dotColorClass: "bg-blue-500",
    gradientClass: "from-slate-100 via-sky-50 to-indigo-50",
    mockupVariant: "commerce",
    shortDescription:
      "Interactive catalog with shopping cart management, form validation, and reactive payment flows.",
    tags: ["Angular", "State Mgmt", "Bootstrap"],
    repoUrl: "https://github.com/ramankhanahmadi/commerce-cart-checkout",
    liveUrl: "https://github.com/ramankhanahmadi/commerce-cart-checkout",
    isVisible: true,
  },
];

const CATEGORY_VISUAL_CONFIG: Record<
  Exclude<ProjectCategory, "All">,
  {
    dotColorClass: string;
    gradientClass: string;
    mockupVariant: ProjectMockupVariant;
  }
> = {
  "Real-Time App": {
    dotColorClass: "bg-brand-500",
    gradientClass: "from-indigo-50 via-slate-100 to-purple-50",
    mockupVariant: "weather",
  },
  "Fitness SaaS": {
    dotColorClass: "bg-emerald-500",
    gradientClass: "from-violet-50 via-slate-100 to-indigo-50",
    mockupVariant: "fitness",
  },
  Marketplace: {
    dotColorClass: "bg-brand-500",
    gradientClass: "from-purple-50 via-slate-100 to-pink-50",
    mockupVariant: "housing",
  },
  "E-Commerce": {
    dotColorClass: "bg-blue-500",
    gradientClass: "from-slate-100 via-sky-50 to-indigo-50",
    mockupVariant: "commerce",
  },
};

export function mapBackendProjectToItem(dto: BackendProjectDto): ProjectItem {
  const validCategories: Exclude<ProjectCategory, "All">[] = [
    "Real-Time App",
    "Fitness SaaS",
    "Marketplace",
    "E-Commerce",
  ];

  const matchedCategory = validCategories.includes(
    dto.category as Exclude<ProjectCategory, "All">,
  )
    ? (dto.category as Exclude<ProjectCategory, "All">)
    : "Real-Time App";

  const visual = CATEGORY_VISUAL_CONFIG[matchedCategory];

  return {
    id: dto.id,
    title: dto.title,
    shortDescription: dto.shortDescription,
    category: matchedCategory,
    tags: Array.isArray(dto.tags) ? dto.tags : [],
    repoUrl: dto.repoUrl,
    liveUrl: dto.liveUrl || dto.repoUrl,
    isVisible: dto.isVisible,
    dotColorClass: visual.dotColorClass,
    gradientClass: visual.gradientClass,
    mockupVariant: visual.mockupVariant,
  };
}

export const EXPERIENCE_TRANSLATIONS: Record<LocaleCode, ExperienceItem[]> = {
  en: [
    {
      id: "exp-1",
      role: "Full-Stack Engineer",
      company: "Freelance / Self-Employed",
      period: "Oct 2023 – Present",
      description:
        "Architecting and delivering full-stack applications. Currently developing a comprehensive platform for an Art Academy using Angular, NestJS, and MySQL, fully containerized with Docker. Previously migrated a production IoT smart-building dashboard from Angular 8 to 14 (View Engine to Ivy) and built scalable web platforms leveraging Angular Signals, RxJS, and Node.js.",
      skills: [
        "Angular",
        "NestJS",
        "MySQL",
        "Docker",
        "Node.js",
        "RxJS",
        "TypeScript",
      ],
    },
    {
      id: "exp-2",
      role: "Frontend Developer",
      company: "ITMO University",
      period: "Dec 2025 – Apr 2026",
      description:
        "Built core features for an academic collaboration platform using React 18 and TypeScript. Structured the codebase using a feature-based modular architecture to ensure scalability and authored automated unit tests for core user flows within agile sprints.",
      skills: [
        "React 18",
        "TypeScript",
        "Frontend Architecture",
        "Unit Testing",
        "Agile/Scrum",
      ],
    },
    {
      id: "exp-3",
      role: "Oracle PL/SQL Technical Support Specialist",
      company: "Complex Systems Analysts Matrix",
      period: "Jan 2024 – Aug 2024",
      description:
        "Optimized Oracle PL/SQL pipelines and ETL solutions for daily financial reporting under strict banking compliance standards. Resolved enterprise software issues and managed operational workflows using Docker, Git, and Linux.",
      skills: [
        "Oracle PL/SQL",
        "ETL",
        "Linux",
        "Docker",
        "Git",
        "Financial Tech",
      ],
    },
    {
      id: "exp-4",
      role: "Angular Developer",
      company: "Freelancer",
      period: "May 2023 – Oct 2023",
      description:
        "Developed responsive frontend applications in collaboration with UX/UI designers. Implemented secure authentication flows, managed complex state for e-commerce carts, and integrated RESTful APIs using Angular and Bootstrap 5.",
      skills: [
        "Angular",
        "RESTful API",
        "State Management",
        "Bootstrap 5",
        "UI Integration",
      ],
    },
  ],
  de: [
    {
      id: "exp-1",
      role: "Full-Stack-Ingenieur",
      company: "Freiberuflich / Selbstständig",
      period: "Okt 2023 – Heute",
      description:
        "Architektur und Bereitstellung von Full-Stack-Anwendungen. Derzeitige Entwicklung einer umfassenden Plattform für eine Kunstakademie mit Angular, NestJS und MySQL, vollständig containerisiert mit Docker. Zuvor Migration eines IoT-Smart-Building-Dashboards von Angular 8 auf 14 (View Engine zu Ivy) und Entwicklung skalierbarer Webplattformen mit Angular Signals, RxJS und Node.js.",
      skills: [
        "Angular",
        "NestJS",
        "MySQL",
        "Docker",
        "Node.js",
        "RxJS",
        "TypeScript",
      ],
    },
    {
      id: "exp-2",
      role: "Frontend-Entwickler",
      company: "ITMO Universität",
      period: "Dez 2025 – Apr 2026",
      description:
        "Entwicklung von Kernfunktionen für eine akademische Kollaborationsplattform mit React 18 und TypeScript. Strukturierung der Codebasis durch eine modulare, Feature-basierte Architektur zur Skalierung und Erstellung automatisierter Unit-Tests für wichtige Benutzerabläufe in agilen Sprints.",
      skills: [
        "React 18",
        "TypeScript",
        "Frontend Architecture",
        "Unit Testing",
        "Agile/Scrum",
      ],
    },
    {
      id: "exp-3",
      role: "Oracle PL/SQL Technical Support Specialist",
      company: "Complex Systems Analysts Matrix",
      period: "Jan 2024 – Aug 2024",
      description:
        "Optimierung von Oracle PL/SQL-Pipelines und ETL-Lösungen für das tägliche Finanzreporting unter strengen Banken-Compliance-Standards. Behebung von Problemen mit Unternehmenssoftware und Verwaltung betrieblicher Arbeitsabläufe mit Docker, Git und Linux.",
      skills: [
        "Oracle PL/SQL",
        "ETL",
        "Linux",
        "Docker",
        "Git",
        "Financial Tech",
      ],
    },
    {
      id: "exp-4",
      role: "Angular-Entwickler",
      company: "Freiberuflich",
      period: "Mai 2023 – Okt 2023",
      description:
        "Entwicklung responsiver Frontend-Anwendungen in Zusammenarbeit mit UX/UI-Designern. Implementierung sicherer Authentifizierungsabläufe, Verwaltung komplexer Zustände für E-Commerce-Warenkörbe und Integration von RESTful APIs mit Angular und Bootstrap 5.",
      skills: [
        "Angular",
        "RESTful API",
        "State Management",
        "Bootstrap 5",
        "UI Integration",
      ],
    },
  ],
};

export const SKILL_CATEGORIES_BY_LOCALE: Record<
  LocaleCode,
  SkillCategoryGroup[]
> = {
  en: [
    {
      id: "frontend",
      title: "Frontend Development",
      dotColorClass: "bg-brand-600",
      skills: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "RxJS",
        "Angular Material",
        "HTML5",
        "CSS3",
        "SCSS / Sass",
        "Bootstrap 5",
        "Tailwind CSS",
      ],
    },
    {
      id: "backend",
      title: "Backend & Database",
      dotColorClass: "bg-indigo-600",
      skills: [
        "NestJS",
        "Node.js",
        "MongoDB",
        "Prisma",
        "MySQL",
        "Oracle PL/SQL",
        "SQL",
        "RESTful API",
        "Linux",
      ],
    },
    {
      id: "tools",
      title: "Tools & DevOps",
      dotColorClass: "bg-violet-600",
      skills: ["Docker", "Git", "GitHub", "GitLab", "VMware"],
    },
  ],
  de: [
    {
      id: "frontend",
      title: "Frontend-Entwicklung",
      dotColorClass: "bg-brand-600",
      skills: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "RxJS",
        "Angular Material",
        "HTML5",
        "CSS3",
        "SCSS / Sass",
        "Bootstrap 5",
        "Tailwind CSS",
      ],
    },
    {
      id: "backend",
      title: "Backend & Datenbanken",
      dotColorClass: "bg-indigo-600",
      skills: [
        "NestJS",
        "Node.js",
        "MongoDB",
        "Prisma",
        "MySQL",
        "Oracle PL/SQL",
        "SQL",
        "RESTful API",
        "Linux",
      ],
    },
    {
      id: "tools",
      title: "Tools & DevOps",
      dotColorClass: "bg-violet-600",
      skills: ["Docker", "Git", "GitHub", "GitLab", "VMware"],
    },
  ],
};

export const SKILL_CATEGORIES = SKILL_CATEGORIES_BY_LOCALE.en;

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "raman.khanahmadi@outlook.com",
    href: "mailto:raman.khanahmadi@outlook.com",
    iconType: "email",
  },
  {
    id: "telegram",
    label: "Telegram",
    value: "@Raman_Oracle",
    href: "https://t.me/Raman_Oracle",
    external: true,
    iconType: "telegram",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Raman Khan Ahmadi",
    href: "https://www.linkedin.com/in/raman-khanahmadi",
    external: true,
    iconType: "linkedin",
  },
];

export function filterProjectsByCategory(
  projects: readonly ProjectItem[],
  category: ProjectCategory,
  searchQuery = "",
): ProjectItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return projects.filter((project) => {
    if (project.isVisible === false) {
      return false;
    }
    const matchesCategory = category === "All" || project.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    const inTitle = project.title.toLowerCase().includes(normalizedQuery);
    const inDesc = project.shortDescription
      .toLowerCase()
      .includes(normalizedQuery);
    const inTags = project.tags.some((t) =>
      t.toLowerCase().includes(normalizedQuery),
    );
    return inTitle || inDesc || inTags;
  });
}

export function validateContactFormInput(payload: ContactFormPayload): {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormPayload, string>>;
} {
  const errors: Partial<Record<keyof ContactFormPayload, string>> = {};
  const trimmedName = payload.name.trim();
  const trimmedEmail = payload.email.trim();
  const trimmedContent = payload.content.trim();

  if (!trimmedName || trimmedName.length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!trimmedContent || trimmedContent.length < 10) {
    errors.content = "Please enter a message with at least 10 characters.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildSeoMetadata(
  pageKey: "home" | "about" | "projects" | "skills" | "contact",
): SeoMetadata {
  const baseTitle =
    "Raman Khan Ahmadi | Full-Stack Engineer (Angular & NestJS)";
  switch (pageKey) {
    case "about":
      return {
        title: `About Me — ${baseTitle}`,
        description:
          "Learn about Raman Khan Ahmadi, Full-Stack Engineer specializing in Angular 21, NestJS, TypeScript, MongoDB, and Docker.",
        canonicalPath: "/about",
      };
    case "projects":
      return {
        title: `Projects & Architecture — ${baseTitle}`,
        description:
          "Explore scalable Angular, TypeScript, and NestJS projects by Raman Khan Ahmadi: Weather Radar, Fitness Workout Tracker, US Housing Hub, and Commerce Cart.",
        canonicalPath: "/projects",
      };
    case "skills":
      return {
        title: `Skills & Career Experience — ${baseTitle}`,
        description:
          "Career history and technical skills of Raman Khan Ahmadi across Angular, NestJS, TypeScript, RxJS, MongoDB, Prisma, Tailwind CSS, and Oracle PL/SQL.",
        canonicalPath: "/skills",
      };
    case "contact":
      return {
        title: `Contact Raman Khan Ahmadi — ${baseTitle}`,
        description:
          "Get in touch with Raman Khan Ahmadi for full-time, B2B/EoR remote, or relocation Full-Stack & Angular Engineer opportunities.",
        canonicalPath: "/contact",
      };
    case "home":
    default:
      return {
        title: baseTitle,
        description:
          "I build production-ready web applications with Angular, TypeScript, NestJS, and MongoDB. Passionate about modern component architecture and robust RESTful APIs.",
        canonicalPath: "/",
      };
  }
}
