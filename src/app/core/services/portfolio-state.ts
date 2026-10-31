import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import {
  Injectable,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from "@angular/core";
import { catchError, forkJoin, map, Observable, of, tap } from "rxjs";

import {
  BackendMessageResponseDto,
  BackendProjectDto,
  BackendSiteContentDto,
  ContactFormPayload,
  ContactSubmission,
  LocaleCode,
  ProjectCategory,
  ProjectItem,
} from "../models/portfolio.model";

import {
  CONTACT_CHANNELS,
  EXPERIENCE_TRANSLATIONS,
  LANGUAGE_COMPETENCIES_BY_LOCALE,
  LOCALE_OPTIONS,
  PORTFOLIO_PROJECTS,
  SKILL_CATEGORIES_BY_LOCALE,
  UI_TRANSLATIONS,
  filterProjectsByCategory,
  mapBackendProjectToItem,
} from "../utils/portfolio-logic";

@Injectable({
  providedIn: "root",
})
export class PortfolioStateService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly http = inject(HttpClient);

  /**
   * Base URL for the NestJS backend API.
   * Can be overridden via environment config or proxy.
   */
  private readonly apiBaseUrl = "http://localhost:3000/api";

  readonly localeOptions = LOCALE_OPTIONS;
  readonly currentLocale = signal<LocaleCode>("en");

  readonly isDarkMode = signal<boolean>(false);

  readonly activeCategory = signal<ProjectCategory>("All");
  readonly projectSearchQuery = signal<string>("");
  readonly highlightedSkill = signal<string | null>(null);

  readonly isLoadingProjects = signal<boolean>(false);
  readonly isSubmittingContact = signal<boolean>(false);

  readonly projects = signal<readonly ProjectItem[]>(PORTFOLIO_PROJECTS);
  readonly dynamicSiteContent = signal<Record<string, BackendSiteContentDto>>(
    {},
  );

  readonly experiences = computed(
    () => EXPERIENCE_TRANSLATIONS[this.currentLocale()],
  );
  readonly skillCategories = computed(
    () => SKILL_CATEGORIES_BY_LOCALE[this.currentLocale()],
  );
  readonly languages = computed(
    () => LANGUAGE_COMPETENCIES_BY_LOCALE[this.currentLocale()],
  );
  readonly contactChannels = signal(CONTACT_CHANNELS);

  readonly submittedMessages = signal<ContactSubmission[]>([]);

  readonly currentLocaleOption = computed(
    () =>
      this.localeOptions.find((opt) => opt.code === this.currentLocale()) ??
      this.localeOptions[0],
  );

  readonly copy = computed(() => {
    const baseCopy = UI_TRANSLATIONS[this.currentLocale()];
    const overrides = this.dynamicSiteContent();

    const heroOverride = overrides["hero"];
    const aboutOverride = overrides["about"];
    const contactOverride = overrides["contact"];

    return {
      ...baseCopy,
      ...(heroOverride?.title ? { heroTitle: heroOverride.title } : {}),
      ...(heroOverride?.description
        ? { heroDescription: heroOverride.description }
        : {}),
      ...(aboutOverride?.title ? { aboutTitle: aboutOverride.title } : {}),
      ...(aboutOverride?.description
        ? { aboutDescription: aboutOverride.description }
        : {}),
      ...(contactOverride?.title
        ? { contactTitle: contactOverride.title }
        : {}),
      ...(contactOverride?.description
        ? { contactDescription: contactOverride.description }
        : {}),
    };
  });

  readonly filteredProjects = computed(() =>
    filterProjectsByCategory(
      this.projects(),
      this.activeCategory(),
      this.projectSearchQuery(),
    ),
  );

  constructor() {
    this.initTheme();
    this.initLocale();
  }

  private initTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

    this.applyTheme(shouldBeDark);
  }

  private initLocale(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const savedLocale = localStorage.getItem("locale") as LocaleCode | null;
    if (savedLocale === "en" || savedLocale === "de") {
      this.setLocale(savedLocale);
    }
  }

  toggleTheme(): void {
    this.applyTheme(!this.isDarkMode());
  }

  private applyTheme(dark: boolean): void {
    this.isDarkMode.set(dark);
    if (!isPlatformBrowser(this.platformId)) return;

    const rootEl = this.document.documentElement;
    if (dark) {
      rootEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      rootEl.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  setLocale(code: LocaleCode): void {
    this.currentLocale.set(code);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("locale", code);
      this.document.documentElement.lang = code;
    }
  }

  setCategory(category: ProjectCategory): void {
    this.activeCategory.set(category);
  }

  toggleSkillHighlight(skill: string): void {
    this.highlightedSkill.update((current) =>
      current === skill ? null : skill,
    );
  }

  downloadCvPdf(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const link = this.document.createElement("a");
    link.href = "/Raman-Khan-Ahmadi-CV.pdf";
    link.download = "Raman-Khan-Ahmadi-CV.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    this.document.body.appendChild(link);
    link.click();
    this.document.body.removeChild(link);
  }

  /**
   * Fetches dynamic Projects and SiteContent from NestJS backend.
   * Gracefully falls back to static defaults if the backend is offline.
   */
  loadPortfolioDataFromApi(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isLoadingProjects.set(true);

    forkJoin({
      projects: this.http
        .get<BackendProjectDto[]>(`${this.apiBaseUrl}/projects`)
        .pipe(catchError(() => of(null))),
      contents: this.http
        .get<BackendSiteContentDto[]>(`${this.apiBaseUrl}/site-content`)
        .pipe(catchError(() => of(null))),
    }).subscribe(({ projects, contents }) => {
      if (Array.isArray(projects) && projects.length > 0) {
        const visibleProjects = projects
          .filter((p) => p.isVisible !== false)
          .map(mapBackendProjectToItem);
        if (visibleProjects.length > 0) {
          this.projects.set(visibleProjects);
        }
      }

      if (Array.isArray(contents) && contents.length > 0) {
        const contentMap: Record<string, BackendSiteContentDto> = {};
        for (const item of contents) {
          contentMap[item.sectionKey] = item;
        }
        this.dynamicSiteContent.set(contentMap);
      }

      this.isLoadingProjects.set(false);
    });
  }

  /**
   * Sends contact inquiry to NestJS POST /api/messages endpoint.
   * Falls back to local state recording if backend is not yet running.
   */
  submitContactMessage(
    payload: ContactFormPayload,
  ): Observable<ContactSubmission> {
    const cleanPayload: ContactFormPayload = {
      name: payload.name.trim(),
      email: payload.email.trim(),
      content: payload.content.trim(),
    };

    this.isSubmittingContact.set(true);

    return this.http
      .post<BackendMessageResponseDto>(
        `${this.apiBaseUrl}/messages`,
        cleanPayload,
      )
      .pipe(
        map((res) => ({
          id: res.id || `msg-${Date.now()}`,
          name: res.name || cleanPayload.name,
          email: res.email || cleanPayload.email,
          content: res.content || cleanPayload.content,
          submittedAt: new Date(res.createdAt || Date.now()).toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute: "2-digit",
            },
          ),
        })),
        catchError(() =>
          of({
            id: `msg-${Date.now()}`,
            ...cleanPayload,
            submittedAt: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          }),
        ),
        tap((entry) => {
          this.submittedMessages.update((prev) => [entry, ...prev]);
          this.isSubmittingContact.set(false);
        }),
      );
  }
}
