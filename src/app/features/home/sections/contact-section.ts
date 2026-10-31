import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { PortfolioStateService } from "../../../core/services/portfolio-state";
import { validateContactFormInput } from "../../../core/utils/portfolio-logic";
import { ScrollRevealDirective } from "../../../shared/directives/scroll-reveal";

@Component({
  selector: "app-contact-section",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatIconModule, ScrollRevealDirective],
  template: `
    <section
      id="contact"
      aria-labelledby="contact-heading"
      class="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Contact Introduction & Socials -->
          <div appScrollReveal class="lg:col-span-5 space-y-6">
            <div class="space-y-2">
              <span
                class="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block transition-colors"
              >
                {{ state.copy().contactKicker }}
              </span>
              <h2
                id="contact-heading"
                class="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight transition-colors"
              >
                {{ state.copy().contactTitle }}
              </h2>
              <p
                class="text-base font-semibold text-slate-800 dark:text-slate-200 transition-colors"
              >
                {{ state.copy().contactSubtitle }}
              </p>
            </div>

            <p
              class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors"
            >
              {{ state.copy().contactDescription }}
            </p>

            <!-- Channels List -->
            <div class="space-y-3 pt-2">
              @for (channel of state.contactChannels(); track channel.id) {
                <a
                  [href]="channel.href"
                  [target]="channel.external ? '_blank' : '_self'"
                  [rel]="channel.external ? 'noopener noreferrer' : ''"
                  class="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-500 hover:shadow-2xs transition-all group"
                >
                  <div
                    class="w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 dark:group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0"
                  >
                    @switch (channel.iconType) {
                      @case ("email") {
                        <mat-icon class="!w-4 !h-4 !text-[16px]">mail</mat-icon>
                      }
                      @case ("telegram") {
                        <mat-icon class="!w-4 !h-4 !text-[16px]">send</mat-icon>
                      }
                      @case ("linkedin") {
                        <mat-icon class="!w-4 !h-4 !text-[16px]">work</mat-icon>
                      }
                      @case ("network") {
                        <mat-icon class="!w-4 !h-4 !text-[16px]">code</mat-icon>
                      }
                    }
                  </div>
                  <div>
                    <div
                      class="text-[11px] text-slate-400 dark:text-slate-500 uppercase font-medium transition-colors"
                    >
                      {{ channel.label }}
                    </div>
                    <div
                      class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      {{ channel.value }}
                    </div>
                  </div>
                </a>
              }
            </div>
          </div>

          <!-- Direct Message Form -->
          <div appScrollReveal [revealDelay]="0.1" class="lg:col-span-7">
            <div
              class="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs transition-colors"
            >
              <form
                [formGroup]="contactForm"
                (ngSubmit)="onSubmit()"
                novalidate
                class="space-y-4"
              >
                <div>
                  <label
                    for="name"
                    class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 transition-colors"
                  >
                    {{ state.copy().contactNameLabel }}
                  </label>
                  <input
                    id="name"
                    type="text"
                    formControlName="name"
                    [placeholder]="state.copy().contactNamePlaceholder"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-900/50 text-slate-900 dark:text-white text-sm outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                  @if (submittedAttempt() && fieldErrors().name) {
                    <p
                      class="mt-1 text-xs text-rose-600 dark:text-rose-400"
                      role="alert"
                    >
                      {{ fieldErrors().name }}
                    </p>
                  }
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 transition-colors"
                  >
                    {{ state.copy().contactEmailLabel }}
                  </label>
                  <input
                    id="email"
                    type="email"
                    formControlName="email"
                    [placeholder]="state.copy().contactEmailPlaceholder"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-900/50 text-slate-900 dark:text-white text-sm outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                  @if (submittedAttempt() && fieldErrors().email) {
                    <p
                      class="mt-1 text-xs text-rose-600 dark:text-rose-400"
                      role="alert"
                    >
                      {{ fieldErrors().email }}
                    </p>
                  }
                </div>

                <div>
                  <label
                    for="content"
                    class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 transition-colors"
                  >
                    {{ state.copy().contactMessageLabel }}
                  </label>
                  <textarea
                    id="content"
                    rows="5"
                    formControlName="content"
                    [placeholder]="state.copy().contactMessagePlaceholder"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-900/50 text-slate-900 dark:text-white text-sm outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-y"
                  ></textarea>
                  @if (submittedAttempt() && fieldErrors().content) {
                    <p
                      class="mt-1 text-xs text-rose-600 dark:text-rose-400"
                      role="alert"
                    >
                      {{ fieldErrors().content }}
                    </p>
                  }
                </div>

                <div
                  class="flex flex-wrap items-center justify-between gap-4 pt-1"
                >
                  <button
                    type="submit"
                    [disabled]="state.isSubmittingContact()"
                    class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-semibold text-sm shadow-md shadow-brand-500/25 transition-all cursor-pointer"
                  >
                    <span>
                      {{
                        state.isSubmittingContact()
                          ? state.copy().contactSubmittingBtn
                          : state.copy().contactSubmitBtn
                      }}
                    </span>
                    <mat-icon class="!w-4 !h-4 !text-[16px]">send</mat-icon>
                  </button>

                  @if (lastSuccessMessage()) {
                    <div
                      role="status"
                      class="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 px-3.5 py-2 rounded-xl transition-colors"
                    >
                      <mat-icon
                        class="!w-4 !h-4 !text-[16px] text-emerald-600 dark:text-emerald-500"
                      >
                        check_circle
                      </mat-icon>
                      <span>{{ lastSuccessMessage() }}</span>
                    </div>
                  }
                </div>
              </form>

              <!-- Submitted Inquiries List -->
              @if (state.submittedMessages().length > 0) {
                <div
                  class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2 transition-colors"
                >
                  <div
                    class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors"
                  >
                    {{ state.copy().contactRecentInquiries }} ({{
                      state.submittedMessages().length
                    }})
                  </div>
                  @for (msg of state.submittedMessages(); track msg.id) {
                    <div
                      class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 text-xs flex items-start justify-between gap-3 transition-colors"
                    >
                      <div>
                        <span
                          class="font-semibold text-slate-800 dark:text-slate-200"
                          >{{ msg.name }}</span
                        >
                        <span class="text-slate-400 dark:text-slate-500">
                          · {{ msg.email }}</span
                        >
                        <p class="text-slate-600 dark:text-slate-400 mt-0.5">
                          {{ msg.content }}
                        </p>
                      </div>
                      <span
                        class="text-[11px] font-mono text-slate-400 dark:text-slate-500 shrink-0"
                      >
                        {{ msg.submittedAt }}
                      </span>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactSection {
  readonly state = inject(PortfolioStateService);
  private readonly fb = inject(FormBuilder);

  readonly contactForm = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    content: ["", [Validators.required, Validators.minLength(10)]],
  });

  readonly submittedAttempt = signal(false);
  readonly fieldErrors = signal<{
    name?: string;
    email?: string;
    content?: string;
  }>({});
  readonly lastSuccessMessage = signal<string>("");

  onSubmit(): void {
    this.submittedAttempt.set(true);
    const rawValue = this.contactForm.getRawValue();
    const validation = validateContactFormInput(rawValue);
    this.fieldErrors.set(validation.errors);

    if (!validation.valid) {
      return;
    }

    this.state.submitContactMessage(rawValue).subscribe((entry) => {
      this.lastSuccessMessage.set(
        `Message dispatched from ${entry.name}! Raman will respond shortly.`,
      );
      this.contactForm.reset();
      this.submittedAttempt.set(false);
      this.fieldErrors.set({});
    });
  }
}
