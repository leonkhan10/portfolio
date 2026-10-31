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
          <!-- Full-Stack IDE Code Window Mockup (Replaces missing vscode-snippet.png) -->
          <div appScrollReveal class="lg:col-span-5 order-2 lg:order-1">
            <div
              class="rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden bg-slate-900 text-slate-100 font-mono text-xs transition-colors"
            >
              <!-- Window Title Bar -->
              <div
                class="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="w-3 h-3 rounded-full bg-rose-500/80"
                    aria-hidden="true"
                  ></span>
                  <span
                    class="w-3 h-3 rounded-full bg-amber-400/80"
                    aria-hidden="true"
                  ></span>
                  <span
                    class="w-3 h-3 rounded-full bg-emerald-500/80"
                    aria-hidden="true"
                  ></span>
                </div>
                <span class="text-[11px] text-slate-400">
                  portfolio.controller.ts — NestJS + Prisma
                </span>
                <span
                  class="text-[10px] px-2 py-0.5 rounded bg-brand-500/20 text-brand-300"
                >
                  TS
                </span>
              </div>

              <!-- Code Body -->
              <div class="p-5 space-y-1.5 leading-relaxed overflow-x-auto">
                <div>
                  <span class="text-purple-400">&#64;Controller</span>(<span
                    class="text-emerald-300"
                    >'api/projects'</span
                  >)
                </div>
                <div>
                  <span class="text-sky-400">export class</span>
                  <span class="text-amber-300"> ProjectsController </span>&#123;
                </div>
                <div class="pl-4">
                  <span class="text-sky-400">constructor</span>(<span
                    class="text-sky-400"
                    >private readonly</span
                  >
                  prisma: <span class="text-amber-300">PrismaService</span>)
                  &#123;&#125;
                </div>
                <div class="pl-4 pt-1">
                  <span class="text-purple-400">&#64;Get</span>()
                </div>
                <div class="pl-4">
                  <span class="text-sky-400">async</span>
                  <span class="text-indigo-300"> getVisibleProjects</span>()
                  &#123;
                </div>
                <div class="pl-8">
                  <span class="text-sky-400">return this</span
                  >.prisma.project.<span class="text-indigo-300">findMany</span
                  >(&#123;
                </div>
                <div class="pl-12">
                  where: &#123; isVisible:
                  <span class="text-amber-400">true</span> &#125;,
                </div>
                <div class="pl-8">&#125;);</div>
                <div class="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>

              <!-- Status Footer Bar -->
              <div
                class="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400"
              >
                <span class="flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Angular 21 SSR + NestJS + MongoDB</span>
                </span>
                <span>UTF-8</span>
              </div>
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
