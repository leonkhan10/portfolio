import {
  Injectable,
  computed,
  signal,
  PLATFORM_ID,
  inject,
} from "@angular/core";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";

import {
  ContactFormPayload,
  ContactSubmission,
  LocaleCode,
  ProjectCategory,
  ProjectItem,
} from "../models/portfolio.model";

import {
  CONTACT_CHANNELS,
  EXPERIENCE_TRANSLATIONS,
  LANGUAGE_COMPETENCIES,
  LOCALE_OPTIONS,
  PORTFOLIO_PROJECTS,
  SKILL_CATEGORIES,
  UI_TRANSLATIONS,
  filterProjectsByCategory,
} from "../utils/portfolio-logic";

@Injectable({
  providedIn: "root",
})
export class PortfolioStateService {
  // --- سرویس‌ها و پلتفرم ---
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  // --- تنظیمات زبان ---
  readonly localeOptions = LOCALE_OPTIONS;
  readonly currentLocale = signal<LocaleCode>("en");

  // --- وضعیت قالب (تم) ---
  readonly isDarkMode = signal<boolean>(false);

  // --- وضعیت پروژه‌ها و فیلترها ---
  readonly activeCategory = signal<ProjectCategory>("All");
  readonly projectSearchQuery = signal<string>("");
  readonly highlightedSkill = signal<string | null>(null);

  // --- وضعیت مودال پروژه ---
  readonly selectedProject = signal<ProjectItem | null>(null);
  readonly selectedProjectTab = signal<"preview" | "code">("preview");

  // --- داده‌های ثابت (پورتفولیو) ---
  readonly projects = signal<readonly ProjectItem[]>(PORTFOLIO_PROJECTS);
readonly experiences = computed(() => EXPERIENCE_TRANSLATIONS[this.currentLocale()]);  readonly skillCategories = signal(SKILL_CATEGORIES);
  readonly languages = signal(LANGUAGE_COMPETENCIES);
  readonly contactChannels = signal(CONTACT_CHANNELS);

  // --- پیام‌های ارتباطی ---
  readonly submittedMessages = signal<ContactSubmission[]>([]);

  // --- مقادیر محاسبه شده (Computed) ---
  readonly currentLocaleOption = computed(
    () =>
      this.localeOptions.find((opt) => opt.code === this.currentLocale()) ??
      this.localeOptions[0],
  );

  readonly copy = computed(() => UI_TRANSLATIONS[this.currentLocale()]);

  readonly filteredProjects = computed(() =>
    filterProjectsByCategory(
      this.projects(),
      this.activeCategory(),
      this.projectSearchQuery(),
    ),
  );

  // =========================================
  // متدهای مدیریت قالب (Dark/Light Mode)
  // =========================================
  private initTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

    this.applyTheme(shouldBeDark);
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

  // =========================================
  // متدهای مدیریت محتوا (زبان، فیلتر، مودال)
  // =========================================
  setLocale(code: LocaleCode): void {
    this.currentLocale.set(code);
  }

  setCategory(category: ProjectCategory): void {
    this.activeCategory.set(category);
  }

  toggleSkillHighlight(skill: string): void {
    this.highlightedSkill.update((current) =>
      current === skill ? null : skill,
    );
  }

  openProjectModal(
    project: ProjectItem,
    initialTab: "preview" | "code" = "preview",
  ): void {
    this.selectedProjectTab.set(initialTab);
    this.selectedProject.set(project);
  }

  closeProjectModal(): void {
    this.selectedProject.set(null);
  }

  // =========================================
  // دانلود مستقیم فایل رزومه (PDF)
  // =========================================
  downloadCvPdf(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const pdfUrl =
      "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing";

    window.open(pdfUrl, "_blank");
  }

  recordContactSubmission(payload: ContactFormPayload): ContactSubmission {
    const entry: ContactSubmission = {
      id: `msg-${Date.now()}`,
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
      submittedAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    this.submittedMessages.update((prev) => [entry, ...prev]);
    return entry;
  }
}
