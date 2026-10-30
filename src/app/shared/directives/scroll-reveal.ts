import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  PLATFORM_ID,
  inject,
  input,
} from '@angular/core';
import { animateElementReveal } from '../animations/animations';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit {
  readonly revealDelay = input<number>(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const nativeEl = this.el.nativeElement;

    if (typeof IntersectionObserver === 'undefined') {
      animateElementReveal(nativeEl, this.revealDelay());
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animateElementReveal(nativeEl, this.revealDelay());
            observer.unobserve(nativeEl);
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -24px 0px',
      }
    );

    observer.observe(nativeEl);

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }
}