import { animate, stagger } from 'motion';

export const ANIMATION_TIMINGS = {
  microFeedbackSec: 0.18,
  pageTransitionSec: 0.42,
  scrollRevealSec: 0.52,
  staggerStepSec: 0.08,
  easingCurve: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

// بررسی دسترسی‌پذیری و سازگاری با SSR
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return true;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// تابع کمکی برای نمایش فوری المان‌ها (هنگامی که انیمیشن غیرفعال است)
function applyFallbackStyles(element: HTMLElement): void {
  element.style.opacity = '1';
  element.style.transform = 'none';
}

/**
 * انیمیشن ورود صفحه یا مسیر (Page Enter)
 */
export function animatePageEnter(container: HTMLElement | null): void {
  if (!container) return;

  if (prefersReducedMotion()) {
    applyFallbackStyles(container);
    return;
  }

  animate(
    container,
    {
      opacity: [0, 1],
      y: [12, 0],
    },
    {
      duration: ANIMATION_TIMINGS.pageTransitionSec,
      ease: ANIMATION_TIMINGS.easingCurve,
    }
  );
}

/**
 * انیمیشن ظاهر شدن نرم المان در زمان اسکرول (Scroll Reveal)
 */
export function animateElementReveal(element: HTMLElement | null, delaySec = 0): void {
  if (!element) return;

  if (prefersReducedMotion()) {
    applyFallbackStyles(element);
    return;
  }

  animate(
    element,
    {
      opacity: [0, 1],
      y: [18, 0],
    },
    {
      duration: ANIMATION_TIMINGS.scrollRevealSec,
      delay: delaySec,
      ease: ANIMATION_TIMINGS.easingCurve,
    }
  );
}

/**
 * انیمیشن ترتیبی و آبشاری برای لیست‌ها یا کارت‌های فرزند (Stagger)
 */
export function animateStaggerChildren(
  parent: HTMLElement | null,
  childSelector = '[data-animate-item]'
): void {
  if (!parent) return;

  const items = parent.querySelectorAll<HTMLElement>(childSelector);
  if (!items.length) return;

  // حل مشکل مخفی ماندن آیتم‌ها در صورت خاموش بودن انیمیشن
  if (prefersReducedMotion()) {
    items.forEach((item) => applyFallbackStyles(item));
    return;
  }

  animate(
    items,
    {
      opacity: [0, 1],
      y: [16, 0],
    },
    {
      delay: stagger(ANIMATION_TIMINGS.staggerStepSec),
      duration: ANIMATION_TIMINGS.scrollRevealSec,
      ease: ANIMATION_TIMINGS.easingCurve,
    }
  );
}