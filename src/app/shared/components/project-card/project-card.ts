import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectItem } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <article
      data-animate-item
      class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-lg dark:hover:shadow-brand-500/10 hover:border-brand-300 dark:hover:border-brand-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group h-full"
    >
      <!-- Mock Viewport Header -->
      <div
        class="h-44 bg-gradient-to-br border-b border-slate-100 dark:border-slate-800 relative p-4 flex flex-col justify-between transition-colors"
        [class]="project().gradientClass"
      >
        <div class="absolute inset-0 bg-slate-900/0 dark:bg-slate-900/40 transition-colors pointer-events-none"></div>

        <div class="flex items-center justify-between relative z-10">
          <span
            class="text-[10px] font-mono font-medium px-2 py-0.5 bg-white dark:bg-slate-800 rounded shadow-2xs text-slate-600 dark:text-slate-300 transition-colors"
          >
            {{ project().category }}
          </span>
          <span
            class="w-2 h-2 rounded-full"
            [class]="project().dotColorClass"
            aria-hidden="true"
          ></span>
        </div>

        <div class="relative z-10">
          @switch (project().mockupVariant) {
            @case ('weather') {
              <div class="space-y-2">
                <div class="h-3 w-3/4 bg-white/80 dark:bg-slate-800/80 rounded shadow-2xs transition-colors"></div>
                <div class="h-8 w-full bg-white/90 dark:bg-slate-800/90 rounded-lg shadow-2xs flex items-center px-2 gap-2 transition-colors">
                  <div class="w-4 h-4 rounded-full bg-brand-200 dark:bg-brand-500/50"></div>
                  <div class="w-12 h-2 bg-slate-200 dark:bg-slate-600 rounded"></div>
                </div>
              </div>
            }
            @case ('fitness') {
              <div class="space-y-2">
                <div class="h-10 w-full bg-white/90 dark:bg-slate-800/90 rounded-lg shadow-2xs p-2 flex items-center justify-between transition-colors">
                  <div class="h-2 w-16 bg-slate-200 dark:bg-slate-600 rounded"></div>
                  <div class="h-4 w-10 bg-emerald-100 dark:bg-emerald-900/50 rounded"></div>
                </div>
              </div>
            }
            @case ('housing') {
              <div class="grid grid-cols-2 gap-2">
                <div class="h-12 bg-white/90 dark:bg-slate-800/90 rounded-lg shadow-2xs transition-colors"></div>
                <div class="h-12 bg-white/90 dark:bg-slate-800/90 rounded-lg shadow-2xs transition-colors"></div>
              </div>
            }
            @case ('commerce') {
              <div class="space-y-2">
                <div class="h-6 w-full bg-white/90 dark:bg-slate-800/90 rounded-md shadow-2xs flex items-center justify-between px-2 transition-colors">
                  <div class="w-8 h-2 bg-slate-200 dark:bg-slate-600 rounded"></div>
                  <div class="w-3 h-3 bg-brand-200 dark:bg-brand-500/50 rounded"></div>
                </div>
                <div class="h-4 w-2/3 bg-white/80 dark:bg-slate-800/80 rounded transition-colors"></div>
              </div>
            }
          }
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white dark:bg-slate-900 transition-colors">
        <div>
          <h3 class="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {{ project().title }}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed transition-colors">
            {{ project().shortDescription }}
          </p>
        </div>

        <div class="space-y-3">
          <div class="flex flex-wrap gap-1.5">
            @for (tag of project().tags; track tag) {
              <span class="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 whitespace-nowrap transition-colors">
                {{ tag }}
              </span>
            }
          </div>

          <!-- Actions Footer (لینک‌های مستقیم) -->
          <div class="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800 transition-colors">
            
            <!-- دکمه انتقال به ریپازیتوری گیت‌هاب -->
            <a
              [href]="project().repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="'View source code for ' + project().title + ' on GitHub'"
              class="flex-1 py-1.5 px-2 text-center text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors inline-flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
            >
              <mat-icon class="!w-3.5 !h-3.5 !text-[14px] leading-none">code</mat-icon>
              <span>GitHub</span>
            </a>

            <!-- دکمه انتقال به سایت لایو پروژه -->
            <a
              [href]="project().liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="'Open live preview for ' + project().title"
              class="flex-1 py-1.5 px-2 text-center text-xs font-semibold rounded-lg bg-brand-600 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500 text-white transition-colors inline-flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
            >
              <span>Live Site</span>
              <mat-icon class="!w-3.5 !h-3.5 !text-[14px] leading-none">open_in_new</mat-icon>
            </a>
            
          </div>
        </div>
      </div>
    </article>
  `,
})
export class ProjectCard {
  readonly project = input.required<ProjectItem>();
}