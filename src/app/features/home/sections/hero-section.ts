import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { Router } from "@angular/router";
import { PortfolioStateService } from "../../../core/services/portfolio-state";
import { ScrollRevealDirective } from "../../../shared/directives/scroll-reveal";

@Component({
  selector: "app-hero-section",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ScrollRevealDirective],
  template: `
    <section
      id="home"
      aria-labelledby="hero-heading"
      class="relative pt-12 pb-20 md:py-24 subtle-grid border-b border-slate-100 dark:border-slate-800/60 transition-colors duration-300 overflow-hidden bg-white dark:bg-slate-950"
    >
      <!-- Subtle Glow Accent -->
      <div
        class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-200/30 dark:bg-brand-500/10 blur-[120px] pointer-events-none rounded-full transition-colors"
        aria-hidden="true"
      ></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          <!-- Hero Text Details -->
          <div appScrollReveal class="lg:col-span-7 space-y-6">
            <div
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-200/80 dark:border-brand-500/30 bg-brand-50/70 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 text-xs font-medium backdrop-blur-xs transition-colors"
            >
              <span
                class="flex h-2 w-2 rounded-full bg-brand-500"
                aria-hidden="true"
              ></span>
              <span>{{ state.copy().heroBadge }}</span>
            </div>

            <h1
              id="hero-heading"
              class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.12] text-balance transition-colors"
            >
              {{ state.copy().heroTitle }}
            </h1>

            <p
              class="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 transition-colors"
            >
              {{ state.copy().heroRolePrimary }}
              <span
                class="text-brand-600 dark:text-brand-500"
                aria-hidden="true"
                >|</span
              >
              {{ state.copy().heroRoleSecondary }}
            </p>

            <p
              class="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed transition-colors"
            >
              {{ state.copy().heroDescription }}
            </p>

            <!-- Action Buttons -->
            <div class="pt-2 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                (click)="state.downloadCvPdf()"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <mat-icon class="!w-4 !h-4 !text-[16px] leading-none"
                  >download</mat-icon
                >
                <span>{{ state.copy().downloadCv }}</span>
              </button>

              <button
                type="button"
                (click)="scrollToProjects()"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <span>{{ state.copy().exploreProjects }}</span>
                <mat-icon
                  class="!w-4 !h-4 !text-[16px] leading-none text-slate-400 dark:text-slate-500"
                >
                  arrow_forward
                </mat-icon>
              </button>
            </div>

            <!-- Current Location / Status Marker -->
            <div
              class="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors"
            >
              <span class="flex items-center gap-1.5">
                <mat-icon
                  class="!w-4 !h-4 !text-[16px] leading-none text-slate-400 dark:text-slate-500"
                >
                  location_on
                </mat-icon>
                <span>{{ state.copy().location }}</span>
              </span>
              <span class="flex items-center gap-1.5">
                <span
                  class="w-2 h-2 rounded-full bg-emerald-500"
                  aria-hidden="true"
                ></span>
                <span>{{ state.copy().availability }}</span>
              </span>
            </div>
          </div>

          <!-- Hero Portrait / Visual Presentation -->
          <div
            appScrollReveal
            [revealDelay]="0.12"
            class="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div class="relative w-full max-w-[380px]">
              <!-- Subtle decorative gradient borders -->
              <div
                class="absolute -inset-1.5 bg-gradient-to-tr from-brand-500/20 via-indigo-500/20 to-purple-400/20 rounded-[2.5rem] blur-lg opacity-70"
                aria-hidden="true"
              ></div>

              <!-- Card Framing for Profile / Visual -->
              <div
                class="relative bg-white dark:bg-slate-900 p-3 rounded-[2.2rem] border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors"
              >
                <div
                  class="relative w-full aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-between p-6 transition-colors"
                >
                  <!-- Top Badge inside Visual Frame -->
                  <div class="w-full flex items-center justify-between z-10">
                    <span
                      class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[11px] font-semibold text-slate-700 dark:text-slate-300 shadow-2xs transition-colors"
                    >
                      <span
                        class="w-1.5 h-1.5 rounded-full bg-brand-500"
                        aria-hidden="true"
                      ></span>
                      <span>{{ state.copy().heroCardBadge }}</span>
                    </span>
                    <span
                      class="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold transition-colors"
                    >
                      {{ state.copy().heroCardTag }}
                    </span>
                  </div>

                  <!-- Professional Graphic / Minimal Portrait Visual -->
                  <div
                    class="relative w-36 h-36 rounded-full bg-gradient-to-tr from-brand-600 via-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-xl shadow-brand-500/30 group"
                  >
                    <mat-icon
                      class="!w-20 !h-20 !text-[80px] text-white/90 transition-transform duration-300 group-hover:scale-105"
                      >person</mat-icon
                    >
                  </div>

                  <!-- Bottom Floating Card in Frame -->
                  <div
                    class="w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xs flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div
                        class="text-xs font-bold text-slate-900 dark:text-slate-200 transition-colors"
                      >
                        Raman Khan Ahmadi
                      </div>
                      <div
                        class="text-[11px] text-slate-500 dark:text-slate-400 transition-colors"
                      >
                        {{ state.copy().heroCardSubtitle }}
                      </div>
                    </div>
                    <div
                      class="flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-md transition-colors"
                    >
                      {{ state.copy().availableTag }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroSection {
  readonly state = inject(PortfolioStateService);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  scrollToProjects(): void {
    const el = this.document?.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      this.router.navigate(["/projects"]);
    }
  }
}
