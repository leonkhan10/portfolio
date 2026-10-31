import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { PortfolioStateService } from "../../services/portfolio-state";

@Component({
  selector: "app-footer",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  template: `
    <footer
      class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60 py-8 transition-colors duration-300"
    >
      <div
        class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400"
      >
        <div class="flex items-center gap-2">
          <span
            class="w-2 h-2 rounded-full bg-brand-600"
            aria-hidden="true"
          ></span>
          <span>{{ state.copy().footerRights }}</span>
        </div>

        <nav
          aria-label="Footer Quick Links"
          class="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            routerLink="/about"
            class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >{{ state.copy().navAbout }}</a
          >
          <a
            routerLink="/projects"
            class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >{{ state.copy().navProjects }}</a
          >
          <a
            routerLink="/skills"
            class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >{{ state.copy().navSkills }}</a
          >
          <a
            routerLink="/contact"
            class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >{{ state.copy().navContact }}</a
          >

          <button
            type="button"
            (click)="scrollToTop()"
            class="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-slate-200 transition-colors font-medium cursor-pointer"
          >
            <span>{{ state.copy().footerBackToTop }}</span>
            <mat-icon class="!w-3.5 !h-3.5 !text-[14px] leading-none"
              >arrow_upward</mat-icon
            >
          </button>
        </nav>
      </div>
    </footer>
  `,
})
export class Footer {
  readonly state = inject(PortfolioStateService);
  private readonly document = inject(DOCUMENT);

  scrollToTop(): void {
    const win = this.document?.defaultView;
    if (win) {
      win.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}
