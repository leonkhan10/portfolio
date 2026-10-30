import {
  ContactChannel,
  ContactFormPayload,
  LanguageCompetency,
  LocaleCode,
  LocaleOption,
  ProjectCategory,
  ProjectItem,
  SeoMetadata,
  SkillCategoryGroup,
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

// =========================================
// دیکشنری ترجمه‌های رابط کاربری (UI)
// =========================================
export const UI_TRANSLATIONS: Record<
  LocaleCode,
  {
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
    downloadCv: string;
    exploreProjects: string;
    location: string;
    availability: string;
    availableTag: string;

    // --------------------------------------------

    aboutKicker: string;
    aboutTitle: string;
    aboutDescription: string;
    aboutDegree: string;
    aboutUniversity: string;
    aboutLanguagesTitle: string;

    // ----------------------------------------------
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
    contactRecentInquiries: string;

    //--------------------------------------------------------------
    projectsKicker: string;
    projectsTitle: string;
    projectsSubtitle: string;
  }
> = {
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
    heroRoleSecondary: "Angular & NestJs Specialist",
    heroDescription:
      "I build production-ready web applications with Angular, TypeScript, NestJS, and MongoDB. Passionate about modern component architecture, state management, and building robust RESTful APIs.",
    downloadCv: "Download CV",
    exploreProjects: "Explore Projects",
    location: "Saint Petersburg, Russia",
    availability: "Open to Remote B2B/EoR & Europe Relocation",
    availableTag: "Available",

    //------------------------------------------------------------------------------

    aboutKicker: "Background",
    aboutTitle: "About me",
    aboutDescription:
      "I’m a Full-Stack Engineer with 3+ years of experience building and migrating complex web applications. From upgrading live smart-building IoT dashboards to architecting modern Angular 20+ and Node.js platforms, I enjoy delivering robust features from UI to API. I work in Agile teams, utilize Docker for reproducible environments, and write automated tests to ensure stable releases.",
    aboutDegree: "Computer Science",
    aboutUniversity: "University of the People — USA (In progress)",
    aboutLanguagesTitle: "Languages",

    //-------------------------------------------------------------------------------

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
      "Hi Raman, let's discuss an Angular role / project...",
    contactSubmitBtn: "Send message",
    contactRecentInquiries: "Recent Dispatched Inquiries",

    //---------------------------------------------------------------
    projectsKicker: "Portfolio",
    projectsTitle: "Projects",
    projectsSubtitle:
      "Turning complex problems into simple, effective solutions.",
  },
  de: {
    navHome: "Startseite",
    navAbout: "Über mich",
    navProjects: "Projekte",
    navSkills: "Fähigkeiten & Erfahrung",
    navContact: "Kontakt",
    hireMe: "Mich einstellen",
    heroBadge: "3+ Jahre Erfahrung in skalierbaren Frontends",
    heroTitle: "Ich bin Raman Khan Ahmadi",
    heroRolePrimary: "Angular-Entwickler",
    heroRoleSecondary: "Frontend-Ingenieur",
    heroDescription:
      "Ich entwickle skalierbare, responsive Webanwendungen mit Angular & TypeScript. Leidenschaftlich in Bezug auf Komponentenarchitektur, State Management und moderne UI-Performance.",
    downloadCv: "Lebenslauf herunterladen",
    exploreProjects: "Projekte entdecken",
    location: "Sankt Petersburg, Russland",
    availability: "Offen für Vollzeit- & Remote-Rollen",
    availableTag: "Verfügbar",

    //------------------------------------------------------------------------------

    aboutKicker: "Hintergrund",
    aboutTitle: "Über mich",
    aboutDescription:
      "Ich bin ein Full-Stack-Ingenieur mit über 3 Jahren Erfahrung in der Entwicklung und Migration komplexer Webanwendungen. Von der Aktualisierung von Smart-Building-IoT-Dashboards bis hin zur Architektur moderner Angular 20+ und Node.js Plattformen – ich liefere robuste Funktionen von der UI bis zur API. Ich arbeite in agilen Teams, nutze Docker für reproduzierbare Umgebungen und schreibe automatisierte Tests, um stabile Releases zu gewährleisten.",
    aboutDegree: "Informatik (Computer Science)",
    aboutUniversity: "University of the People — USA (Laufend)",
    aboutLanguagesTitle: "Sprachen",

    //--------------------------------------------------------------------------------

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
      "Hallo Raman, lass uns über ein Angular-Projekt sprechen...",
    contactSubmitBtn: "Nachricht senden",
    contactRecentInquiries: "Kürzlich gesendete Anfragen",

    //---------------------------------------------------------------

    projectsKicker: "Portfolio",
    projectsTitle: "Projekte",
    projectsSubtitle:
      "Komplexe Probleme in einfache, effektive Lösungen verwandeln.",
  },
};

// =========================================
// مهارت‌های زبانی (برای نمایش در بخش About)
// =========================================
export const LANGUAGE_COMPETENCIES: LanguageCompetency[] = [
  { language: "Persian", level: "Native" },
  { language: "Turkish", level: "Advanced" },
  { language: "English", level: "Intermediate B1" },
  { language: "Russian", level: "Intermediate B1" },
];

// =========================================
// لیست پروژه‌های پورتفولیو
// =========================================
export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "weather-radar",
    slug: "weather-radar-forecast",
    title: "Weather Radar & Forecast",
    category: "Real-Time App",
    dotColorClass: "bg-brand-500",
    gradientClass: "from-indigo-50 via-slate-100 to-purple-50",
    mockupVariant: "weather",
    shortDescription:
      "Real-time weather analytics application featuring dynamic geolocation tracking and responsive widgets.",
    architectureSummary:
      "Reactive stream pipeline built with Angular Signals and RxJS operators (switchMap, debounceTime, shareReplay) consuming Open-Meteo & Geolocation APIs with zero-flicker caching.",
    highlights: [
      "Automatic browser geolocation with fallback city search & debounce streams",
      "Hourly & 7-day forecast widgets with UV index, wind vectors, and precipitation radar",
      "OnPush change detection with Signals for sub-16ms frame rendering",
    ],
    tags: ["Angular", "RxJS", "REST API"],
    codeFileName: "weather-stream.service.ts",
    codeSnippet: `@Injectable({ providedIn: 'root' })
export class WeatherStreamService {
  private readonly http = inject(HttpClient);
  readonly selectedCity = signal<string>('Saint Petersburg');

  readonly forecast$ = toObservable(this.selectedCity).pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap((city) => this.http.get<ForecastDto>(\`/api/weather?q=\${city}\`)),
    shareReplay({ bufferSize: 1, refCount: true })
  );
}`,
    metrics: [
      { label: "Update Latency", value: "< 120ms" },
      { label: "Lighthouse Perf", value: "99 / 100" },
      { label: "Architecture", value: "Signals + RxJS" },
    ],
    repoUrl: "https://github.com/ramankhanahmadi/weather-radar-angular",
    liveUrl: "/projects?preview=weather-radar",
  },
  {
    id: "fitness-tracker",
    slug: "fitness-workout-tracker",
    title: "Fitness Workout Tracker",
    category: "Fitness SaaS",
    dotColorClass: "bg-emerald-500",
    gradientClass: "from-violet-50 via-slate-100 to-indigo-50",
    mockupVariant: "fitness",
    shortDescription:
      "Dynamic workout logging interface with schedule planner, performance graphs, and local sync.",
    architectureSummary:
      "Modular standalone Angular architecture using NgPrime components, reactive form arrays for custom exercise sets, and offline-first local storage state synchronization.",
    highlights: [
      "Interactive weekly split planner with drag-ready set/rep progression tracking",
      "Real-time volume & personal record (PR) computation using Angular computed() signals",
      "Offline persistence with automatic hydration and JSON workout export",
    ],
    tags: ["Angular", "TypeScript", "NgPrime"],
    codeFileName: "workout-planner.store.ts",
    codeSnippet: `export class WorkoutPlannerStore {
  readonly sessions = signal<WorkoutSession[]>(loadSyncedSessions());

  readonly weeklyVolumeKg = computed(() =>
    this.sessions().reduce(
      (sum, s) => sum + s.sets.reduce((acc, set) => acc + set.weight * set.reps, 0),
      0
    )
  );

  addCompletedSet(sessionId: string, newSet: ExerciseSet): void {
    this.sessions.update((list) =>
      list.map((s) => (s.id === sessionId ? { ...s, sets: [...s.sets, newSet] } : s))
    );
  }
}`,
    metrics: [
      { label: "State Sync", value: "Offline-First" },
      { label: "UI Library", value: "PrimeNG + Tailwind" },
      { label: "Type Safety", value: "100% Strict TS" },
    ],
    repoUrl: "https://github.com/ramankhanahmadi/fitness-workout-tracker",
    liveUrl: "/projects?preview=fitness-tracker",
  },
  {
    id: "housing-hub",
    slug: "us-housing-rental-hub",
    title: "US Housing Rental Hub",
    category: "Marketplace",
    dotColorClass: "bg-brand-500",
    gradientClass: "from-purple-50 via-slate-100 to-pink-50",
    mockupVariant: "housing",
    shortDescription:
      "Real estate portal to compare and view housing prices, metrics, and amenities across US cities.",
    architectureSummary:
      "High-density marketplace directory built with Angular Material & Tailwind CSS featuring multi-criteria filtering, side-by-side property comparison, and route-level lazy loading.",
    highlights: [
      "Instant multi-faceted filtering by price tier, city metro area, bedrooms, and amenities",
      "Side-by-side rental yield and price-per-sqft comparison matrix",
      "SSR-ready semantic property cards with dynamic Meta & Title SEO tags",
    ],
    tags: ["Angular", "Material", "Tailwind"],
    codeFileName: "property-filter.computed.ts",
    codeSnippet: `readonly filteredListings = computed(() => {
  const query = this.searchQuery().toLowerCase().trim();
  const maxRent = this.maxMonthlyRent();

  return this.properties().filter((item) => {
    const matchesCity = !query || item.city.toLowerCase().includes(query);
    const matchesBudget = item.monthlyRent <= maxRent;
    return matchesCity && matchesBudget;
  });
});`,
    metrics: [
      { label: "Filter Speed", value: "< 8ms (1k items)" },
      { label: "Design System", value: "Material 3 + Tailwind" },
      { label: "Routing", value: "Lazy Standalone" },
    ],
    repoUrl: "https://github.com/ramankhanahmadi/us-housing-rental-hub",
    liveUrl: "/projects?preview=housing-hub",
  },
  {
    id: "commerce-checkout",
    slug: "commerce-cart-checkout",
    title: "Commerce Cart & Checkout",
    category: "E-Commerce",
    dotColorClass: "bg-blue-500",
    gradientClass: "from-slate-100 via-sky-50 to-indigo-50",
    mockupVariant: "commerce",
    shortDescription:
      "Interactive catalog with shopping cart management, form validation, and reactive payment flows.",
    architectureSummary:
      "End-to-end e-commerce checkout flow featuring deterministic signal state management, multi-step reactive form validation, promo code calculation, and REST API integration.",
    highlights: [
      "Reactive shopping cart with optimistic quantity updates, tax/shipping calculation, and promo codes",
      "Strict Reactive Forms validation for shipping address, card Luhn check, and billing steps",
      "Protected route guards and modular service layer for RESTful order submission",
    ],
    tags: ["Angular", "State Mgmt", "Bootstrap"],
    codeFileName: "cart-checkout.facade.ts",
    codeSnippet: `readonly cartSummary = computed(() => {
  const items = this.cartItems();
  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = this.activeCoupon() ? subtotal * 0.15 : 0;
  const total = Math.max(0, subtotal - discount);
  return { subtotal, discount, total, count: items.length };
});`,
    metrics: [
      { label: "Form Engine", value: "Typed Reactive Forms" },
      { label: "Cart State", value: "Signal Store" },
      { label: "Validation", value: "Sync + Async Guards" },
    ],
    repoUrl: "https://github.com/ramankhanahmadi/commerce-cart-checkout",
    liveUrl: "/projects?preview=commerce-checkout",
  },
];

// =========================================
// لیست سوابق شغلی
// =========================================
export const EXPERIENCE_TRANSLATIONS: Record<
  LocaleCode,
  {
    id: string;
    role: string;
    company: string;
    teamSuffix?: string;
    period: string;
    description: string;
    skills: string[];
  }[]
> = {
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
        "REST APIs",
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
        "Frontend-Architektur",
        "Unit-Tests",
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
        "Finanztechnologie",
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
        "REST-APIs",
        "State Management",
        "Bootstrap 5",
        "UI-Integration",
      ],
    },
  ],
};

// =========================================
// دسته‌بندی مهارت‌های فنی
// =========================================
export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
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
      "Oracle PL/SQL",
      "SQL",
      "MongoDB",
      "RESTful API",
      "Linux Essentials",
      "FireBase",
      "NestJS",
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    dotColorClass: "bg-violet-600",
    skills: ["Git", "GitHub", "GitLab", "Docker", "VMware"],
  },
];

// =========================================
// راه‌های ارتباطی
// =========================================
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

// =========================================
// توابع منطقی (Helpers)
// =========================================

// فیلتر کردن پروژه‌ها بر اساس دسته‌بندی و عبارت جستجو
export function filterProjectsByCategory(
  projects: readonly ProjectItem[],
  category: ProjectCategory,
  searchQuery = "",
): ProjectItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return projects.filter((project) => {
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

// اعتبارسنجی فیلدهای فرم تماس
export function validateContactFormInput(payload: ContactFormPayload): {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormPayload, string>>;
} {
  const errors: Partial<Record<keyof ContactFormPayload, string>> = {};
  const trimmedName = payload.name.trim();
  const trimmedEmail = payload.email.trim();
  const trimmedMessage = payload.message.trim();

  if (!trimmedName || trimmedName.length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!trimmedMessage || trimmedMessage.length < 10) {
    errors.message = "Please enter a message with at least 10 characters.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

// تولید متادیتای سئو برای هر صفحه
export function buildSeoMetadata(
  pageKey: "home" | "about" | "projects" | "skills" | "contact",
): SeoMetadata {
  const baseTitle = "Raman Khan Ahmadi | Angular Developer & Frontend Engineer";
  switch (pageKey) {
    case "about":
      return {
        title: `About Me — ${baseTitle}`,
        description:
          "Learn about Raman Khan Ahmadi, B.Sc. in System and Applied Software at ITMO University, Angular 18+ specialist, and multilingual frontend engineer.",
        canonicalPath: "/about",
      };
    case "projects":
      return {
        title: `Projects & Architecture — ${baseTitle}`,
        description:
          "Explore scalable Angular & TypeScript projects by Raman Khan Ahmadi: Weather Radar & Forecast, Fitness Workout Tracker, US Housing Rental Hub, and Commerce Cart.",
        canonicalPath: "/projects",
      };
    case "skills":
      return {
        title: `Skills & Career Experience — ${baseTitle}`,
        description:
          "Career history and technical skills of Raman Khan Ahmadi across Angular, TypeScript, RxJS, Angular Material, NgPrime, Tailwind CSS, and Oracle PL/SQL.",
        canonicalPath: "/skills",
      };
    case "contact":
      return {
        title: `Contact Raman Khan Ahmadi — ${baseTitle}`,
        description:
          "Get in touch with Raman Khan Ahmadi for full-time or remote Angular Developer and Frontend Engineer opportunities.",
        canonicalPath: "/contact",
      };
    case "home":
    default:
      return {
        title: baseTitle,
        description:
          "I build scalable, responsive web applications with Angular & TypeScript. Passionate about component architecture, state management, and modern UI performance.",
        canonicalPath: "/",
      };
  }
}
