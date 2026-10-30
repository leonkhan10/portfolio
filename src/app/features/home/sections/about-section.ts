import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { PortfolioStateService } from "../../../core/services/portfolio-state";
import { ScrollRevealDirective } from "../../../shared/directives/scroll-reveal";

@Component({
  selector: "app-about-section",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ScrollRevealDirective],
  template: `
    <section
      id="about"
      aria-labelledby="about-heading"
      class="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div appScrollReveal class="lg:col-span-5 order-2 lg:order-1">
            <div
              class="rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 transition-colors"
            >
              <img
                src="vscode-snippet.png"
                alt="Code architecture snippet from VS Code"
                class="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
          </div>

          <!-- About Details & Linguistic Competencies -->
          <div
            appScrollReveal
            [revealDelay]="0.1"
            class="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <div class="space-y-2">
              <span
                class="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block"
              >
                {{ state.copy().aboutKicker }}
              </span>
              <h2
                id="about-heading"
                class="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors"
              >
                {{ state.copy().aboutTitle }}
              </h2>
            </div>

            <p
              class="text-slate-600 dark:text-slate-400 text-base leading-relaxed transition-colors"
            >
              {{ state.copy().aboutDescription }}
            </p>

            <!-- Education Block -->
            <div
              class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 flex items-start gap-4 transition-colors"
            >
              <div
                class="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 shadow-2xs transition-colors"
              >
                <mat-icon class="!w-5 !h-5 !text-[20px]">school</mat-icon>
              </div>
              <div>
                <h3
                  class="text-sm font-bold text-slate-900 dark:text-slate-200 transition-colors"
                >
                  {{ state.copy().aboutDegree }}
                </h3>
                <p
                  class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors"
                >
                  {{ state.copy().aboutUniversity }}
                </p>
              </div>
            </div>

            <!-- Language Proficiency Badges -->
            <div class="space-y-3 pt-2">
              <h4
                class="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider transition-colors"
              >
                {{ state.copy().aboutLanguagesTitle }}
              </h4>
              <div class="flex flex-wrap gap-2.5">
                @for (lang of state.languages(); track lang.language) {
                  <div
                    class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200/70 dark:border-brand-500/20 text-slate-800 dark:text-slate-200 text-xs font-medium transition-colors"
                  >
                    <span
                      class="font-semibold text-brand-700 dark:text-brand-400"
                      >{{ lang.language }}</span
                    >
                    <span
                      class="text-slate-400 dark:text-slate-500"
                      aria-hidden="true"
                      >—</span
                    >
                    <span class="text-slate-600 dark:text-slate-400">{{
                      lang.level
                    }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutSection {
  readonly state = inject(PortfolioStateService);
}
