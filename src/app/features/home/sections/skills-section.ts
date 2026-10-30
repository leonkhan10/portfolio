import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioStateService } from '../../../core/services/portfolio-state';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-skills-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, SectionHeader, ScrollRevealDirective],
  template: `
    <section
      id="skills"
      aria-labelledby="skills-heading"
      class="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div class="max-w-6xl mx-auto px-6">
        
        <!-- Section Header -->
        <div appScrollReveal class="mb-12">
          <app-section-header kicker="Career History" title="Skills & Experience" />
        </div>

        <!-- Experience 2x2 Grid -->
        <div appScrollReveal class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          @for (exp of state.experiences(); track exp.id) {
            <article
              class="p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-[#fafafc] dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:border-brand-200 dark:hover:border-brand-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div class="space-y-3">
                <div class="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white transition-colors">{{ exp.role }}</h3>
                    <p class="text-xs font-semibold text-brand-600 dark:text-brand-400 transition-colors">
                      {{ exp.company }}
                      @if (exp.teamSuffix) {
                        <span class="text-slate-400 dark:text-slate-500 font-normal">| {{ exp.teamSuffix }}</span>
                      }
                    </p>
                  </div>
                  <!-- تاریخ سابقه شغلی -->
                  <span
                    class="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full shadow-2xs whitespace-nowrap transition-colors"
                  >
                    <mat-icon class="!w-3.5 !h-3.5 !text-[14px] leading-none text-slate-400 dark:text-slate-500">
                      calendar_today
                    </mat-icon>
                    <span>{{ exp.period }}</span>
                  </span>
                </div>

                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  {{ exp.description }}
                </p>
              </div>

              <!-- بج‌های مهارت در پایین هر سابقه شغلی -->
              <div class="flex flex-wrap gap-2 pt-4 mt-2 border-t border-slate-200/60 dark:border-slate-800/80 transition-colors">
                @for (skill of exp.skills; track skill) {
                  <span
                    class="text-[11px] font-medium px-2.5 py-0.5 rounded-md transition-colors"
                    [class.bg-brand-600]="state.highlightedSkill() === skill"
                    [class.text-white]="state.highlightedSkill() === skill"
                    
                    [class.bg-brand-50]="state.highlightedSkill() !== skill"
                    [class.dark:bg-brand-900/20]="state.highlightedSkill() !== skill"
                    
                    [class.text-brand-700]="state.highlightedSkill() !== skill"
                    [class.dark:text-brand-300]="state.highlightedSkill() !== skill"
                  >
                    {{ skill }}
                  </span>
                }
              </div>
            </article>
          }
        </div>

        <!-- Skills Matrix Section -->
        <div
          appScrollReveal
          class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#fafafc] dark:bg-slate-900/50 p-8 shadow-2xs transition-colors"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            @for (category of state.skillCategories(); track category.id) {
              <div class="space-y-4">
                
                <div class="flex items-center gap-2">
                  <span
                    class="w-2.5 h-2.5 rounded-full"
                    [class]="category.dotColorClass"
                    aria-hidden="true"
                  ></span>
                  <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 transition-colors">
                    {{ category.title }}
                  </h3>
                </div>

                <div class="flex flex-wrap gap-1.5">
                  @for (skill of category.skills; track skill) {
                    <button
                      type="button"
                      (click)="state.toggleSkillHighlight(skill)"
                      [attr.aria-pressed]="state.highlightedSkill() === skill"
                      class="px-3 py-1 rounded-lg border text-xs font-medium transition-all cursor-pointer whitespace-nowrap"
                      
                      [class.bg-brand-600]="state.highlightedSkill() === skill"
                      [class.text-white]="state.highlightedSkill() === skill"
                      [class.border-brand-600]="state.highlightedSkill() === skill"
                      
                      [class.bg-white]="state.highlightedSkill() !== skill"
                      [class.dark:bg-slate-800]="state.highlightedSkill() !== skill"
                      
                      [class.text-slate-700]="state.highlightedSkill() !== skill"
                      [class.dark:text-slate-300]="state.highlightedSkill() !== skill"
                      
                      [class.border-slate-200]="state.highlightedSkill() !== skill"
                      [class.dark:border-slate-700]="state.highlightedSkill() !== skill"
                      
                      [class.hover:border-brand-300]="state.highlightedSkill() !== skill"
                      [class.dark:hover:border-brand-500/50]="state.highlightedSkill() !== skill"
                    >
                      {{ skill }}
                    </button>
                  }
                </div>
                
              </div>
            }
          </div>
        </div>
        
      </div>
    </section>
  `,
})
export class SkillsSection {
  readonly state = inject(PortfolioStateService);
}