import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PORTFOLIO_PROJECTS,
  SKILL_CATEGORIES,
  EXPERIENCE_TRANSLATIONS,
  filterProjectsByCategory,
  validateContactFormInput,
  buildSeoMetadata,
} from './portfolio-logic';

test('PORTFOLIO_PROJECTS contains all 4 design reference projects', () => {
  assert.equal(PORTFOLIO_PROJECTS.length, 4);
  assert.deepEqual(
    PORTFOLIO_PROJECTS.map((p) => p.title),
    [
      'Weather Radar & Forecast',
      'Fitness Workout Tracker',
      'US Housing Rental Hub',
      'Commerce Cart & Checkout',
    ]
  );
});

test('filterProjectsByCategory filters by category and search query accurately', () => {
  const all = filterProjectsByCategory(PORTFOLIO_PROJECTS, 'All');
  assert.equal(all.length, 4);

  const fitnessOnly = filterProjectsByCategory(PORTFOLIO_PROJECTS, 'Fitness SaaS');
  assert.equal(fitnessOnly.length, 1);
  assert.equal(fitnessOnly[0]?.id, 'fitness-tracker');

  const rxjsSearch = filterProjectsByCategory(PORTFOLIO_PROJECTS, 'All', 'RxJS');
  assert.equal(rxjsSearch.length, 1);
  assert.equal(rxjsSearch[0]?.id, 'weather-radar');
});

test('validateContactFormInput enforces required fields and valid email format', () => {
  const invalidEmpty = validateContactFormInput({ name: '', email: '', message: '' });
  assert.equal(invalidEmpty.valid, false);
  assert.ok(invalidEmpty.errors.name);
  assert.ok(invalidEmpty.errors.email);
  assert.ok(invalidEmpty.errors.message);

  const invalidEmail = validateContactFormInput({
    name: 'Alex Morgan',
    email: 'not-an-email',
    message: 'Hi Raman, let us discuss an Angular role!',
  });
  assert.equal(invalidEmail.valid, false);
  assert.ok(invalidEmail.errors.email);
  assert.equal(invalidEmail.errors.name, undefined);

  const validPayload = validateContactFormInput({
    name: 'Alex Morgan',
    email: 'alex@example.com',
    message: 'Hi Raman, let us discuss an Angular role and project architecture.',
  });
  assert.equal(validPayload.valid, true);
  assert.deepEqual(validPayload.errors, {});
});

test('buildSeoMetadata returns route-specific SEO titles and canonical paths', () => {
  const homeSeo = buildSeoMetadata('home');
  assert.ok(homeSeo.title.includes('Raman Khan Ahmadi'));
  assert.equal(homeSeo.canonicalPath, '/');

  const projectsSeo = buildSeoMetadata('projects');
  assert.ok(projectsSeo.title.includes('Projects'));
  assert.equal(projectsSeo.canonicalPath, '/projects');
});

test('EXPERIENCE_TRANSLATIONS and SKILL_CATEGORIES match portfolio structure', () => {
  assert.equal(SKILL_CATEGORIES.length, 3);
  
  assert.equal(EXPERIENCE_TRANSLATIONS['en'].length, 4);
  assert.equal(EXPERIENCE_TRANSLATIONS['de'].length, 4);
  
  assert.ok(EXPERIENCE_TRANSLATIONS['en'][0].description.includes('NestJS'));
});