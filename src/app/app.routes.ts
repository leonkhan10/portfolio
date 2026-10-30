import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Raman Khan Ahmadi | Angular Developer & Frontend Engineer',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.HomePage),
  },
  {
    path: 'about',
    title: 'About Me — Raman Khan Ahmadi | Angular Developer',
    loadComponent: () =>
      import('./features/about/about-page').then((m) => m.AboutPage),
  },
  {
    path: 'projects',
    title: 'Projects & Architecture — Raman Khan Ahmadi',
    loadComponent: () =>
      import('./features/projects/projects-page').then((m) => m.ProjectsPage),
  },
  {
    path: 'skills',
    title: 'Skills & Career Experience — Raman Khan Ahmadi',
    loadComponent: () =>
      import('./features/skills/skills-page').then((m) => m.SkillsPage),
  },
  {
    path: 'contact',
    title: 'Contact — Raman Khan Ahmadi | Angular Developer',
    loadComponent: () =>
      import('./features/contact/contact-page').then((m) => m.ContactPage),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
