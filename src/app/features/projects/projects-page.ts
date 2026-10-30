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
import { ContactSection } from '../home/sections/contact-section';
import { ProjectsSection } from '../home/sections/projects-section';

@Component({
  selector: 'app-projects-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectsSection, ContactSection],
  template: `
    <div class="flex flex-col w-full bg-transparent transition-colors duration-300">
      <app-projects-section />
      <app-contact-section />
    </div>
  `,
})
export class ProjectsPage implements OnInit, AfterViewInit {
  private readonly seo = inject(SeoService);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.seo.updatePageSeo('projects');
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      animatePageEnter(this.el.nativeElement);
    }
  }
}