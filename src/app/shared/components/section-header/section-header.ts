import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      [class.text-center]="centered()"
      [class.max-w-2xl]="centered()"
      [class.mx-auto]="centered()"
      class="space-y-2"
    >
      <!-- Kicker (متن کوچک رنگی بالای تیتر) -->
      <span class="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block transition-colors">
        {{ kicker() }}
      </span>
      
      <!-- Title (تیتر اصلی) -->
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight transition-colors">
        {{ title() }}
      </h2>
      
      <!-- Subtitle (زیرنویس - در صورت وجود رندر می‌شود) -->
      @if (subtitle()) {
        <p class="text-slate-500 dark:text-slate-400 text-sm sm:text-base transition-colors">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeader {
  readonly kicker = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly centered = input<boolean>(false);
}