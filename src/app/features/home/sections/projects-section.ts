import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ProjectCategory } from "../../../core/models/portfolio.model";
import { PortfolioStateService } from "../../../core/services/portfolio-state";
import { ProjectCard } from "../../../shared/components/project-card/project-card";
import { SectionHeader } from "../../../shared/components/section-header/section-header";
import { ScrollRevealDirective } from "../../../shared/directives/scroll-reveal";

@Component({
  selector: "app-projects-section",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, SectionHeader, ProjectCard, ScrollRevealDirective],
  template: `
    <section
      id="projects"
      aria-labelledby="projects-heading"
      class="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div appScrollReveal class="mb-10">
          <app-section-header
            [kicker]="state.copy().projectsKicker"
            [title]="state.copy().projectsTitle"
            [subtitle]="state.copy().projectsSubtitle"
            [centered]="true"
          />
        </div>

        <!-- Interactive Category Filter Bar -->
        <div
          appScrollReveal
          class="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          @for (cat of categories; track cat) {
            <button
              type="button"
              role="tab"
              [attr.aria-selected]="state.activeCategory() === cat"
              (click)="state.setCategory(cat)"
              class="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer"
              [class.bg-brand-600]="state.activeCategory() === cat"
              [class.text-white]="state.activeCategory() === cat"
              [class.shadow-xs]="state.activeCategory() === cat"
              [class.bg-white]="state.activeCategory() !== cat"
              [class.dark:bg-slate-800]="state.activeCategory() !== cat"
              [class.text-slate-600]="state.activeCategory() !== cat"
              [class.dark:text-slate-300]="state.activeCategory() !== cat"
              [class.border]="state.activeCategory() !== cat"
              [class.border-slate-200]="state.activeCategory() !== cat"
              [class.dark:border-slate-700]="state.activeCategory() !== cat"
              [class.hover:border-brand-300]="state.activeCategory() !== cat"
              [class.dark:hover:border-brand-500/50]="
                state.activeCategory() !== cat
              "
            >
              {{ cat }}
            </button>
          }
        </div>

        <!-- Projects Grid -->
        <div
          appScrollReveal
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          @for (project of state.filteredProjects(); track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsSection {
  readonly state = inject(PortfolioStateService);

  readonly categories: ProjectCategory[] = [
    "All",
    "Real-Time App",
    "Fitness SaaS",
    "Marketplace",
    "E-Commerce",
  ];
}
