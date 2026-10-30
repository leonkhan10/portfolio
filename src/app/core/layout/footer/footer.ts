import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  template: `
    <footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60 py-8 transition-colors duration-300">
      <div
        class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400"
      >
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-brand-600" aria-hidden="true"></span>
          <span>© 2026 Raman Khan Ahmadi. All rights reserved.</span>
        </div>

        <nav aria-label="Footer Quick Links" class="flex items-center gap-6">
          <a routerLink="/about" class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">About</a>
          <a routerLink="/projects" class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Projects</a>
          <a routerLink="/skills" class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Experience</a>
          <a routerLink="/contact" class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Contact</a>
          
          <button
            type="button"
            (click)="scrollToTop()"
            class="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-slate-200 transition-colors font-medium cursor-pointer"
          >
            <span>Back to top</span>
            <mat-icon class="!w-3.5 !h-3.5 !text-[14px] leading-none">arrow_upward</mat-icon>
          </button>
        </nav>
      </div>
    </footer>
  `,
})
export class Footer {
  private readonly document = inject(DOCUMENT);

  scrollToTop(): void {
    const win = this.document?.defaultView;
    if (win) {
      win.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}