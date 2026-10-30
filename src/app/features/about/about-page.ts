import { isPlatformBrowser } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  PLATFORM_ID,
  inject,
} from "@angular/core";
import { SeoService } from "../../core/services/seo";
import { animatePageEnter } from "../../shared/animations/animations";
import { AboutSection } from "../home/sections/about-section";
import { ContactSection } from "../home/sections/contact-section";

@Component({
  selector: "app-about-page",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AboutSection, ContactSection],
  template: `
    <div
      class="flex flex-col w-full bg-transparent transition-colors duration-300"
    >
      <app-about-section />
      <app-contact-section />
    </div>
  `,
})
export class AboutPage implements OnInit, AfterViewInit {
  private readonly seo = inject(SeoService);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.seo.updatePageSeo("about");
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      animatePageEnter(this.el.nativeElement);
    }
  }
}
