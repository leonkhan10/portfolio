import { DOCUMENT } from "@angular/common";
import { Injectable, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { SeoMetadata } from "../models/portfolio.model";
import { buildSeoMetadata } from "../utils/portfolio-logic";

@Injectable({
  providedIn: "root",
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  // آدرس نهایی سایت شما (برای تولید لینک‌های Canonical معتبر در سئو)
  // وقتی سایت را روی گیت‌هاب بردید، این آدرس را به آدرس واقعی خود تغییر دهید
  // مثال: 'https://ramankhanahmadi.github.io'
  private readonly BASE_URL = "https://ramankhanahmadi.dev";

  updatePageSeo(
    pageKey: "home" | "about" | "projects" | "skills" | "contact",
  ): void {
    const metadata = buildSeoMetadata(pageKey);
    this.applySeoMetadata(metadata);
  }

  applySeoMetadata(metadata: SeoMetadata): void {
    this.title.setTitle(metadata.title);

    this.meta.updateTag({ name: "description", content: metadata.description });
    if (metadata.keywords) {
      this.meta.updateTag({ name: "keywords", content: metadata.keywords });
    }

    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:title", content: metadata.title });
    this.meta.updateTag({
      property: "og:description",
      content: metadata.description,
    });

    this.meta.updateTag({
      name: "twitter:card",
      content: "summary_large_image",
    });
    this.meta.updateTag({ name: "twitter:title", content: metadata.title });
    this.meta.updateTag({
      name: "twitter:description",
      content: metadata.description,
    });

    if (metadata.canonicalPath) {
      this.updateCanonicalLink(metadata.canonicalPath);
    }
  }

  private updateCanonicalLink(path: string): void {
    const head = this.document?.head;
    if (!head) return;

    let linkEl = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!linkEl) {
      linkEl = this.document.createElement("link");
      linkEl.setAttribute("rel", "canonical");
      head.appendChild(linkEl);
    }

    const origin =
      this.document.location?.origin && this.document.location.origin !== "null"
        ? this.document.location.origin
        : this.BASE_URL;

    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    linkEl.setAttribute("href", `${origin}${normalizedPath}`);
  }
}
