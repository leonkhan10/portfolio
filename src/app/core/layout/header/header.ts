import { DOCUMENT } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { LocaleCode } from "../../models/portfolio.model";
import { PortfolioStateService } from "../../services/portfolio-state";

@Component({
  selector: "app-header",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  host: {
    "(document:keydown.escape)": "closeMenus()",
  },
  template: `
    <header
      class="sticky top-0 z-50 bg-[#fafafc]/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-all duration-200"
    >
      <div
        class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4"
      >
        <!-- ۱. لوگوی برند -->
        <a
          routerLink="/"
          (click)="scrollToSection('home')"
          class="flex items-center gap-2.5 group whitespace-nowrap focus-visible:outline-brand-600 rounded-xl"
        >
          <div
            class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-brand-500/25 group-hover:scale-105 transition-transform duration-200"
          >
            R
          </div>
          <span
            class="font-semibold text-slate-900 dark:text-white tracking-tight text-base sm:inline hidden"
          >
            Raman Khan Ahmadi
          </span>
        </a>

        <!-- ۲. منوی ناوبری دسکتاپ -->
        <nav
          aria-label="Primary Navigation"
          class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          <a
            routerLink="/"
            routerLinkActive="text-brand-600 dark:text-brand-400 font-semibold"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="navigateOrScroll('/', 'home', $event)"
            class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-pointer"
          >
            {{ state.copy().navHome }}
          </a>
          <a
            routerLink="/about"
            routerLinkActive="text-brand-600 dark:text-brand-400 font-semibold"
            (click)="navigateOrScroll('/about', 'about', $event)"
            class="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {{ state.copy().navAbout }}
          </a>
          <a
            routerLink="/projects"
            routerLinkActive="text-brand-600 dark:text-brand-400 font-semibold"
            (click)="navigateOrScroll('/projects', 'projects', $event)"
            class="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {{ state.copy().navProjects }}
          </a>
          <a
            routerLink="/skills"
            routerLinkActive="text-brand-600 dark:text-brand-400 font-semibold"
            (click)="navigateOrScroll('/skills', 'skills', $event)"
            class="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {{ state.copy().navSkills }}
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="text-brand-600 dark:text-brand-400 font-semibold"
            (click)="navigateOrScroll('/contact', 'contact', $event)"
            class="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {{ state.copy().navContact }}
          </a>
        </nav>

        <!-- ۳. دکمه‌ها و ابزارهای سمت راست -->
        <div class="flex items-center gap-3 shrink-0">
          <!-- دکمه تغییر تم (Dark/Light Mode) -->
          <button
            type="button"
            (click)="state.toggleTheme()"
            [attr.aria-label]="
              state.isDarkMode()
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            "
            class="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            @if (state.isDarkMode()) {
              <mat-icon
                class="!w-4 !h-4 !text-[16px] leading-none text-amber-400"
                >light_mode</mat-icon
              >
            } @else {
              <mat-icon
                class="!w-4 !h-4 !text-[16px] leading-none text-slate-600"
                >dark_mode</mat-icon
              >
            }
          </button>

          <!-- منوی تغییر زبان -->
          <div class="relative inline-block text-left">
            <button
              type="button"
              id="language-menu-button"
              [attr.aria-expanded]="langMenuOpen()"
              aria-haspopup="listbox"
              (click)="toggleLangMenu()"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <span
                class="w-2 h-2 rounded-full bg-emerald-500 inline-block"
                aria-hidden="true"
              ></span>
              <span>{{ state.currentLocaleOption().label }}</span>
              <mat-icon
                class="!w-4 !h-4 !text-[16px] leading-none text-slate-400"
                >expand_more</mat-icon
              >
            </button>

            @if (langMenuOpen()) {
              <div
                role="listbox"
                aria-label="Select Language"
                class="absolute right-0 mt-2 w-44 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg py-1.5 z-50"
              >
                @for (option of state.localeOptions; track option.code) {
                  <button
                    type="button"
                    role="option"
                    [attr.aria-selected]="state.currentLocale() === option.code"
                    (click)="selectLanguage(option.code)"
                    class="w-full px-3.5 py-2 text-left text-xs flex items-center justify-between hover:bg-brand-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                    [class.text-brand-700]="
                      state.currentLocale() === option.code
                    "
                    [class.dark:text-brand-400]="
                      state.currentLocale() === option.code
                    "
                    [class.font-semibold]="
                      state.currentLocale() === option.code
                    "
                    [class.text-slate-700]="
                      state.currentLocale() !== option.code
                    "
                    [class.dark:text-slate-300]="
                      state.currentLocale() !== option.code
                    "
                  >
                    <span>{{ option.label }} ({{ option.nativeName }})</span>
                    @if (state.currentLocale() === option.code) {
                      <mat-icon
                        class="!w-3.5 !h-3.5 !text-[14px] text-brand-600 dark:text-brand-400"
                        >check</mat-icon
                      >
                    }
                  </button>
                }
              </div>
            }
          </div>

          <!-- دکمه Hire Me -->
          <a
            routerLink="/contact"
            (click)="navigateOrScroll('/contact', 'contact', $event)"
            class="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 text-white transition-all shadow-2xs cursor-pointer"
          >
            <mat-icon class="!w-3.5 !h-3.5 !text-[14px] leading-none"
              >work_outline</mat-icon
            >
            <span>{{ state.copy().hireMe }}</span>
          </a>

          <!-- دکمه همبرگری موبایل -->
          <button
            type="button"
            aria-label="Toggle navigation menu"
            [attr.aria-expanded]="mobileMenuOpen()"
            (click)="toggleMobileMenu()"
            class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <mat-icon class="!w-5 !h-5 !text-[20px]">
              {{ mobileMenuOpen() ? "close" : "menu" }}
            </mat-icon>
          </button>
        </div>
      </div>

      <!-- ۴. منوی کشویی موبایل -->
      @if (mobileMenuOpen()) {
        <nav
          aria-label="Mobile Navigation"
          class="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-2"
        >
          <a
            routerLink="/"
            (click)="navigateOrScroll('/', 'home', $event)"
            class="block py-2 text-sm font-medium text-slate-800 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
          >
            {{ state.copy().navHome }}
          </a>
          <a
            routerLink="/about"
            (click)="navigateOrScroll('/about', 'about', $event)"
            class="block py-2 text-sm font-medium text-slate-800 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
          >
            {{ state.copy().navAbout }}
          </a>
          <a
            routerLink="/projects"
            (click)="navigateOrScroll('/projects', 'projects', $event)"
            class="block py-2 text-sm font-medium text-slate-800 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
          >
            {{ state.copy().navProjects }}
          </a>
          <a
            routerLink="/skills"
            (click)="navigateOrScroll('/skills', 'skills', $event)"
            class="block py-2 text-sm font-medium text-slate-800 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
          >
            {{ state.copy().navSkills }}
          </a>
          <a
            routerLink="/contact"
            (click)="navigateOrScroll('/contact', 'contact', $event)"
            class="block py-2 text-sm font-medium text-slate-800 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
          >
            {{ state.copy().navContact }}
          </a>
        </nav>
      }
    </header>
  `,
})
export class Header {
  readonly state = inject(PortfolioStateService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  readonly langMenuOpen = signal(false);
  readonly mobileMenuOpen = signal(false);

  toggleLangMenu(): void {
    this.langMenuOpen.update((open) => !open);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMenus(): void {
    this.langMenuOpen.set(false);
    this.mobileMenuOpen.set(false);
  }

  selectLanguage(code: LocaleCode): void {
    this.state.setLocale(code);
    this.langMenuOpen.set(false);
  }

  scrollToSection(sectionId: string): void {
    this.closeMenus();
    const el = this.document?.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  navigateOrScroll(routePath: string, sectionId: string, event: Event): void {
    this.closeMenus();
    const currentUrl = this.router.url.split("?")[0].split("#")[0];
    if (currentUrl === "/" || currentUrl === "") {
      const targetEl = this.document?.getElementById(sectionId);
      if (targetEl) {
        event.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
  }
}
