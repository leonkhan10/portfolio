import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { SeoService } from '../../core/services/seo';
import { animatePageEnter } from '../../shared/animations/animations';
import { AboutSection } from './sections/about-section';
import { ContactSection } from './sections/contact-section';
import { HeroSection } from './sections/hero-section';
import { ProjectsSection } from './sections/projects-section';
import { SkillsSection } from './sections/skills-section';

@Component({
  selector: 'app-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection],
  template: `
    <div class="flex flex-col">
      <app-hero-section />
      <app-about-section />
      <app-projects-section />
      <app-skills-section />
      <app-contact-section />
    </div>
  `,
})
export class HomePage implements OnInit, AfterViewInit {
  private readonly seo = inject(SeoService);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.seo.updatePageSeo('home');
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      animatePageEnter(this.el.nativeElement);
    }
  }
}
