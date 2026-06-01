# Firm - Digital Marketing Agency Website TODO

## Task Management Legend

- [ ] Incomplete
- [x] Complete
- [~] In Progress
- [!] Blocked

Status Indicators:
- TODO: Not started
- IN_PROGRESS: Currently being worked on
- DONE: Completed
- BLOCKED: Waiting on dependency

---

## Phase 1: Homepage Restructuring

### Task HPR-001: Implement Four-Point Homepage Layout

**Status:** DONE
**Related Files:** `src/pages/index.astro`, `src/layouts/Layout.astro`

**Implementation Notes:**
- Added "What You've Done" case studies section with 2 featured case studies (TechCorp SaaS, RetailBrand E-commerce)
- Added "What Your Clients Say" testimonials section with 3 client testimonials using semantic blockquote elements
- Added "What You Say" blog section using Content Collections to display 3 recent blog posts
- Updated hero headline from "Digital Marketing Excellence" to "Grow Your Business with Data-Driven Digital Marketing" (benefit-oriented)
- Added hero visual element with gradient background pattern (CSS-based, no image assets required)
- All sections follow accessibility guidelines with proper aria-labelledby, role attributes, and semantic HTML
- Used visual identity tokens: bg-[#111111] for cards, border-white/10, rounded-xl, electric blue accent
- Motion hierarchy: Quiet level transitions (150ms duration) for hover effects

**Definition of Done:**
Homepage follows four-point layout structure (What You Do → What You've Done → What Your Clients Say → What You Say). Each section is clearly delineated with semantic HTML. Primary CTA directs to capabilities/services page. Mobile-responsive layout maintained. Accessibility attributes (aria-labelledby, role) properly implemented.

**Out of Scope:**
Complete redesign of visual design, new component library creation, advanced animations or interactions.

**Rules to Follow:**
Follow accessibility.md rules (WCAG 2.2 AA). Use semantic HTML5 elements (section, article, aside). Maintain existing SEO implementation. Preserve current i18n structure. Follow motion-hierarchy.md (Alive level for primary CTA).

**Advanced Coding Pattern:**
Component composition with Astro slots, progressive disclosure for content sections, client-side hydration only for interactive elements.

**Anti-Patterns:**
Do NOT use inline styles. Do NOT mix concerns. Do NOT hardcode content that should be in Content Collections. Do NOT skip accessibility attributes.

**Imports/Exports:**
Import: Layout from '../layouts/Layout.astro', CaseStudyCard from '../components/CaseStudyCard.astro' (to be created), Testimonial from '../components/Testimonial.astro' (to be created). Export: Default Astro component.

**Depends On:** None  
**Blocks:** HPR-002, HPR-003, HPR-004

---

#### Subtask HPR-001-01: Add "What You've Done" Section

**Target File:** `src/pages/index.astro`

**Description:**
Add a new section after the services preview featuring 1-2 featured case studies. Each case study should display: client name/logo, brief challenge description (1-2 sentences), key result metric (e.g., "250% increase in organic traffic"), "View Case Study" CTA button linking to detailed case study page. Use semantic article elements with proper heading hierarchy. Ensure the section has aria-labelledby attribute pointing to the section heading.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask HPR-001-02: Add "What Your Clients Say" Section

**Target File:** `src/pages/index.astro`

**Description:**
Add a testimonials section after the case studies section featuring 3 client testimonials. Each testimonial should include: client name and company, position/title, testimonial quote (2-3 sentences), optional link to full case study if testimonial relates to featured work. Use blockquote element with proper citation. Ensure section has aria-labelledby attribute.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask HPR-001-03: Add "What You Say" Section

**Target File:** `src/pages/index.astro`

**Description:**
Add a thought leadership section after testimonials featuring 3 recent blog posts. Each post should display: post title, brief description (1-2 sentences), publication date, category tag, "Read More" CTA button. Link to existing blog posts using Content Collections. Ensure section has aria-labelledby attribute.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask HPR-001-04: Update Hero Section Value Proposition

**Target File:** `src/pages/index.astro`

**Description:**
Rewrite hero headline to be benefit-oriented rather than feature-oriented. Current headline "Digital Marketing Excellence" should be changed to something like "Grow Your Business with Data-Driven Digital Marketing" or similar benefit-focused statement. Update subheading to clearly articulate target audience and unique value proposition. Ensure the value proposition answers "What's in it for me?" within 3 seconds of landing.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask HPR-001-05: Add Hero Visual

**Target File:** `src/pages/index.astro`

**Description:**
Add a hero visual element (image or simple animation) to the hero section. Use Astro Image component for optimization with proper alt text for accessibility. Ensure visual reinforces brand message and doesn't distract from text.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

### Task HPR-002: Create CaseStudyCard Component

**Status:** DONE
**Related Files:** `src/components/CaseStudyCard.astro`

**Implementation Notes:**
- Created TypeScript interface for props: clientName, challenge, result, resultMetric, slug, clientLogo (optional)
- Implemented semantic HTML structure with article element, role="article", and descriptive aria-label
- Applied TailwindCSS styling following visual-identity.md: bg-[#111111], border-white/10, rounded-xl, p-6
- Added hover effect with hover:border-blue-500/50 and 150ms transition duration (Quiet level motion)
- Implemented focus states with electric blue ring for keyboard navigation
- Used absolute overlay link for full card clickability with proper aria-label
- Conditional rendering for optional clientLogo with fallback to h3 for clientName
- All text colors meet WCAG 2.2 AA contrast requirements (4.5:1 minimum)
- Build validation passed successfully

**Definition of Done:**
Reusable CaseStudyCard component created. Component accepts props: clientName, challenge, result, resultMetric, slug. Component renders card with proper semantic HTML. Responsive design (mobile-first). Accessibility attributes included. Styled with TailwindCSS following visual-identity.md.

**Out of Scope:**
Complex animations, video integration, dynamic data fetching (props only).

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML (article element), maintain visual identity tokens, follow motion-hierarchy.md (Quiet level for hover effects).

**Advanced Coding Pattern:**
TypeScript interface for props, conditional rendering for optional props, CSS Grid for responsive layout.

**Anti-Patterns:**
Do NOT use inline styles, do NOT hardcode content, do NOT skip prop validation, do NOT use client-side JavaScript unnecessarily.

**Imports/Exports:**
Import: Image from 'astro:assets' (if using images). Export: Default component with TypeScript interface.

**Depends On:** None  
**Blocks:** HPR-001-01

---

#### Subtask HPR-002-01: Define TypeScript Interface ✅

**Target File:** `src/components/CaseStudyCard.astro`

**Description:**
Create TypeScript interface for component props with fields: clientName, challenge, result, resultMetric, slug, clientLogo (optional). Add Zod validation for runtime type checking if desired.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask HPR-002-02: Implement Card HTML Structure ✅

**Target File:** `src/components/CaseStudyCard.astro`

**Description:**
Implement the card structure using semantic HTML: outer article element with role="article", client logo/name at top, challenge description in paragraph, result metric prominently displayed, CTA button linking to case study page, proper heading hierarchy (h3 for client name). Add aria-label for screen readers describing the card content.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask HPR-002-03: Apply TailwindCSS Styling ✅

**Target File:** `src/components/CaseStudyCard.astro`

**Description:**
Apply TailwindCSS classes following visual-identity.md: card background bg-[#111111], border border-white/10, border radius rounded-xl, padding p-6, hover effect hover:border-blue-500/50 transition-colors duration-150, text colors following contrast requirements. Ensure focus states for keyboard navigation (electric blue ring).

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

### Task HPR-003: Create Testimonial Component

**Status:** TODO  
**Related Files:** `src/components/Testimonial.astro`

**Definition of Done:**
Reusable Testimonial component created. Component accepts props: name, company, position, quote, caseStudySlug (optional). Component renders testimonial with proper semantic HTML. Responsive design. Accessibility attributes included. Styled with TailwindCSS.

**Out of Scope:**
Video testimonials, audio testimonials, dynamic testimonial rotation.

**Rules to Follow:**
Follow accessibility.md rules, use blockquote element for quotes, maintain visual identity tokens, follow motion-hierarchy.md (Quiet level).

**Advanced Coding Pattern:**
TypeScript interface for props, conditional rendering for optional case study link, CSS Grid for layout.

**Anti-Patterns:**
Do NOT use inline styles, do NOT hardcode content, do NOT skip prop validation, do NOT use client-side JavaScript.

**Imports/Exports:**
Export: Default component with TypeScript interface.

**Depends On:** None  
**Blocks:** HPR-001-02

---

#### Subtask HPR-003-01: Define TypeScript Interface

**Target File:** `src/components/Testimonial.astro`

**Description:**
Create TypeScript interface for component props with fields: name, company, position, quote, caseStudySlug (optional), photo (optional).

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask HPR-003-02: Implement Testimonial HTML Structure

**Target File:** `src/components/Testimonial.astro`

**Description:**
Implement testimonial structure using semantic HTML: outer figure element with role="figure", blockquote element for the quote, figcaption element for attribution (name, company, position), optional photo element with proper alt text, optional link to case study if caseStudySlug provided. Add aria-label describing the testimonial content.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask HPR-003-03: Apply TailwindCSS Styling

**Target File:** `src/components/Testimonial.astro`

**Description:**
Apply TailwindCSS classes following visual-identity.md: card background bg-[#111111], border border-white/10, border radius rounded-xl, padding p-6, quote styling italic text-gray-300, attribution styling text-sm text-gray-400, focus states for keyboard navigation. Ensure color contrast meets WCAG 2.2 AA (4.5:1 minimum).

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

### Task HPR-004: Update Navigation Structure

**Status:** TODO  
**Related Files:** `src/components/Navigation.astro`

**Definition of Done:**
Navigation updated to include Services and Portfolio links. Navigation follows predictable grouping (Home, Services, Portfolio, About, Blog, Contact). Mobile menu includes all navigation items. Active states properly implemented. Accessibility maintained (aria-current, aria-label).

**Out of Scope:**
Dropdown menus for subcategories, mega menu implementation, advanced navigation animations.

**Rules to Follow:**
Follow accessibility.md rules, maintain existing mobile menu functionality, follow navigation best practices from research, keep navigation items to 6-7 maximum.

**Advanced Coding Pattern:**
Consistent navLinks array structure, conditional rendering for mobile/desktop, ARIA attributes for accessibility.

**Anti-Patterns:**
Do NOT add more than 7 top-level links, do NOT use internal jargon in link labels, do NOT skip accessibility attributes, do NOT break mobile menu functionality.

**Imports/Exports:**
Import: LanguageSwitcher from './LanguageSwitcher.astro'. Export: Default component.

**Depends On:** None  
**Blocks:** SRV-001, POR-001

---

#### Subtask HPR-004-01: Add Services and Portfolio Links to Navigation

**Target File:** `src/components/Navigation.astro`

**Description:**
Add "Services" and "Portfolio" links to navLinks array between "About" and "Blog". Ensure both desktop and mobile navigation include the new links. Update footerLinks array in Footer.astro to match navigation structure.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

## Phase 2: Services Pages

### Task SRV-001: Create Services Overview Page

**Status:** TODO  
**Related Files:** `src/pages/services/index.astro`, `src/content.config.ts`

**Definition of Done:**
Services overview page created. Page lists all services with brief descriptions. Each service links to detailed service page. Page follows 8 essential elements from research. SEO optimized with proper meta tags. Accessibility compliant. Mobile responsive.

**Out of Scope:**
Detailed service descriptions (those go on individual pages), pricing information, case study integration (that goes on individual pages).

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML (section, article, h2), follow visual-identity.md for styling, implement 8 essential elements from research.

**Advanced Coding Pattern:**
Content Collections for service data, TypeScript for type safety, component composition.

**Anti-Patterns:**
Do NOT hardcode service data (use Content Collections), do NOT skip SEO meta tags, do NOT use inline styles, do NOT break mobile responsiveness.

**Imports/Exports:**
Import: Layout from '../../layouts/Layout.astro', ServiceCard from '../../components/ServiceCard.astro' (to be created), getCollection from 'astro:content'. Export: Default Astro component.

**Depends On:** HPR-004  
**Blocks:** SRV-002

---

#### Subtask SRV-001-01: Create Services Content Collection

**Target File:** `src/content.config.ts`

**Description:**
Add services collection to content.config.ts with schema: title (string), description (string), icon (string, optional), order (number), locale (string, default 'en'). Export collections object including blog and services.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask SRV-001-02: Create Service Content Files

**Target File:** `src/content/services/`

**Description:**
Create markdown files for each service: seo-optimization.md, content-marketing.md, social-media.md, ppc-advertising.md, email-marketing.md, web-design.md. Each file should include frontmatter with title, description, icon, order, and locale.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask SRV-001-03: Implement Services Page Structure

**Target File:** `src/pages/services/index.astro`

**Description:**
Create services page with: hero section with compelling headline ("Our Services"), brief introduction paragraph, grid of service cards (using Content Collections), each card links to detailed service page, CTA to contact for custom solutions. Use semantic HTML with proper heading hierarchy (h1 for page title, h2 for service names).

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask SRV-001-04: Add SEO Meta Tags

**Target File:** `src/pages/services/index.astro`

**Description:**
Add page-specific SEO meta tags: title "Services - Your Agency", description "Comprehensive digital marketing services including SEO, content marketing, social media, PPC, and more", Open Graph tags, Twitter Card tags, canonical URL. Pass these as props to Layout component.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

### Task SRV-002: Create ServiceCard Component

**Status:** TODO  
**Related Files:** `src/components/ServiceCard.astro`

**Definition of Done:**
Reusable ServiceCard component created. Component accepts props: title, description, icon, slug. Component renders card with proper semantic HTML. Responsive design. Accessibility attributes included. Styled with TailwindCSS.

**Out of Scope:**
Complex animations, interactive elements beyond hover, dynamic data fetching.

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML (article element), maintain visual identity tokens, follow motion-hierarchy.md (Quiet level).

**Advanced Coding Pattern:**
TypeScript interface for props, conditional rendering for optional icon, CSS Grid for responsive layout.

**Anti-Patterns:**
Do NOT use inline styles, do NOT hardcode content, do NOT skip prop validation, do NOT use client-side JavaScript.

**Imports/Exports:**
Export: Default component with TypeScript interface.

**Depends On:** SRV-001  
**Blocks:** SRV-001-03

---

#### Subtask SRV-002-01: Define TypeScript Interface

**Target File:** `src/components/ServiceCard.astro`

**Description:**
Create TypeScript interface for component props with fields: title, description, icon (optional), slug.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask SRV-002-02: Implement Card HTML Structure

**Target File:** `src/components/ServiceCard.astro`

**Description:**
Implement card structure using semantic HTML: outer article element with role="article", icon at top (if provided), service title (h3), description paragraph, "Learn More" CTA button linking to service detail page. Add aria-label describing the card content.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask SRV-002-03: Apply TailwindCSS Styling

**Target File:** `src/components/ServiceCard.astro`

**Description:**
Apply TailwindCSS classes following visual-identity.md: card background bg-[#111111], border border-white/10, border radius rounded-xl, padding p-6, hover effect hover:border-blue-500/50 transition-colors duration-150, focus states for keyboard navigation. Ensure color contrast meets WCAG 2.2 AA.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

### Task SRV-003: Create Detailed Service Pages

**Status:** TODO  
**Related Files:** `src/pages/services/[slug].astro`

**Definition of Done:**
Dynamic service detail pages created. Each page follows 8 essential elements from research. Pages include: compelling headline, organized layout, engaging visuals, clear descriptions, persuasive CTAs, social proof, easy navigation, process overview. SEO optimized with proper meta tags. Accessibility compliant. Mobile responsive.

**Out of Scope:**
Pricing information (that goes on pricing page), booking/scheduling system, client portal integration.

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML, follow visual-identity.md, implement 8 essential elements from research, use Content Collections for service data.

**Advanced Coding Pattern:**
Dynamic routing with getStaticPaths, Content Collections integration, TypeScript for type safety, component composition.

**Anti-Patterns:**
Do NOT hardcode service content, do NOT skip SEO meta tags, do NOT use inline styles, do NOT break mobile responsiveness.

**Imports/Exports:**
Import: Layout from '../../layouts/Layout.astro', getCollection from 'astro:content'. Export: getStaticPaths function, default Astro component.

**Depends On:** SRV-001, SRV-002  
**Blocks:** None

---

#### Subtask SRV-003-01: Implement getStaticPaths

**Target File:** `src/pages/services/[slug].astro`

**Description:**
Implement getStaticPaths to generate routes for each service using getCollection('services'). Return array of params (slug) and props (service).

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask SRV-003-02: Implement Page Structure with 8 Elements

**Target File:** `src/pages/services/[slug].astro`

**Description:**
Implement service detail page with 8 essential elements: compelling headline (service name + benefit), organized layout (3-4 sections covering benefits), engaging visuals (images/icons), clear service descriptions (address pain points), persuasive CTAs (benefit-specific), social proof (testimonials, case studies), easy navigation (simple scroll, breadcrumbs), process overview (step-by-step unique process). Use semantic HTML with proper heading hierarchy.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask SRV-003-03: Add Service-Specific SEO

**Target File:** `src/pages/services/[slug].astro`

**Description:**
Add page-specific SEO meta tags using service data: title "{Service Name} - Your Agency", description from Content Collection, Open Graph tags, Twitter Card tags, canonical URL, JSON-LD Service schema.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask SRV-003-04: Add Related Case Studies Section

**Target File:** `src/pages/services/[slug].astro`

**Description:**
Add section linking to related case studies. Filter case studies by service type (requires case study Content Collection with service field). Display 2-3 related case studies with brief descriptions and "View Case Study" CTAs.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

## Phase 3: Portfolio and Case Studies

### Task POR-001: Create Portfolio Overview Page

**Status:** TODO  
**Related Files:** `src/pages/portfolio/index.astro`, `src/content.config.ts`

**Definition of Done:**
Portfolio overview page created. Page displays all case studies in a grid. Filter functionality by industry, outcome, service type. Consistent case study cards. Mobile-friendly design. SEO optimized. Accessibility compliant.

**Out of Scope:**
Detailed case study content (that goes on individual pages), advanced filtering (search, date range), portfolio download/PDF.

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML, follow visual-identity.md, implement progressive disclosure for filters, use Content Collections for case study data.

**Advanced Coding Pattern:**
Content Collections integration, client-side filtering with Alpine.js or vanilla JS, TypeScript for type safety, CSS Grid for responsive layout.

**Anti-Patterns:**
Do NOT hardcode case study data, do NOT skip accessibility attributes, do NOT use inline styles, do NOT break mobile responsiveness.

**Imports/Exports:**
Import: Layout from '../../layouts/Layout.astro', getCollection from 'astro:content', PortfolioCard from '../../components/PortfolioCard.astro' (to be created). Export: Default Astro component.

**Depends On:** HPR-004  
**Blocks:** POR-002

---

#### Subtask POR-001-01: Create Case Studies Content Collection

**Target File:** `src/content.config.ts`

**Description:**
Add caseStudies collection to content.config.ts with schema: title (string), client (string), industry (string), service (string), outcome (string), resultMetric (string), pubDate (date), heroImage (string, optional), locale (string, default 'en'). Export collections object including blog, services, caseStudies.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask POR-001-02: Create Case Study Content Files

**Target File:** `src/content/case-studies/`

**Description:**
Create 2-3 initial case study markdown files with frontmatter: title, client, industry, service, outcome, resultMetric, pubDate, heroImage, locale. Content follows Challenge/Solution/Results structure.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask POR-001-03: Implement Portfolio Page Structure

**Target File:** `src/pages/portfolio/index.astro`

**Description:**
Create portfolio page with: hero section with headline ("Our Work"), brief introduction, filter buttons (All, Industry, Service, Outcome), grid of case study cards, each card links to detailed case study page, CTA to contact for custom projects. Use semantic HTML with proper heading hierarchy.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask POR-001-04: Implement Filter Functionality

**Target File:** `src/pages/portfolio/index.astro`

**Description:**
Add client-side filtering functionality using Alpine.js or vanilla JS: filter by industry, filter by service type, filter by outcome, "All" button to reset filters, smooth transitions when filtering. Ensure filtering is accessible (keyboard navigation, ARIA attributes).

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask POR-001-05: Add SEO Meta Tags

**Target File:** `src/pages/portfolio/index.astro`

**Description:**
Add page-specific SEO meta tags: title "Portfolio - Your Agency", description "See our work and results. Case studies showcasing digital marketing success across industries.", Open Graph tags, Twitter Card tags, canonical URL.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

### Task POR-002: Create PortfolioCard Component

**Status:** TODO  
**Related Files:** `src/components/PortfolioCard.astro`

**Definition of Done:**
Reusable PortfolioCard component created. Component accepts props: title, client, industry, outcome, resultMetric, heroImage, slug. Component renders card with proper semantic HTML. Responsive design. Accessibility attributes included. Styled with TailwindCSS.

**Out of Scope:**
Complex animations, video integration, dynamic data fetching.

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML (article element), maintain visual identity tokens, follow motion-hierarchy.md (Quiet level).

**Advanced Coding Pattern:**
TypeScript interface for props, conditional rendering for optional heroImage, CSS Grid for responsive layout.

**Anti-Patterns:**
Do NOT use inline styles, do NOT hardcode content, do NOT skip prop validation, do NOT use client-side JavaScript unnecessarily.

**Imports/Exports:**
Import: Image from 'astro:assets' (if using images). Export: Default component with TypeScript interface.

**Depends On:** POR-001  
**Blocks:** POR-001-03

---

#### Subtask POR-002-01: Define TypeScript Interface

**Target File:** `src/components/PortfolioCard.astro`

**Description:**
Create TypeScript interface for component props with fields: title, client, industry, outcome, resultMetric, heroImage (optional), slug.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask POR-002-02: Implement Card HTML Structure

**Target File:** `src/components/PortfolioCard.astro`

**Description:**
Implement card structure using semantic HTML: outer article element with role="article", hero image at top (if provided), client name and industry, case study title, result metric prominently displayed, "View Case Study" CTA button. Add aria-label describing the card content.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask POR-002-03: Apply TailwindCSS Styling

**Target File:** `src/components/PortfolioCard.astro`

**Description:**
Apply TailwindCSS classes following visual-identity.md: card background bg-[#111111], border border-white/10, border radius rounded-xl, padding p-6, hover effect hover:border-blue-500/50 transition-colors duration-150, focus states for keyboard navigation. Ensure color contrast meets WCAG 2.2 AA.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

### Task POR-003: Create Detailed Case Study Pages

**Status:** TODO  
**Related Files:** `src/pages/portfolio/[slug].astro`

**Definition of Done:**
Dynamic case study detail pages created. Each page follows Challenge/Solution/Results structure. Pages include: client info, challenge description, solution details, results with metrics, client testimonial, visuals. SEO optimized with proper meta tags. JSON-LD CaseStudy schema. Accessibility compliant. Mobile responsive.

**Out of Scope:**
Interactive data visualizations, video case studies, before/after image sliders.

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML, follow visual-identity.md, use Content Collections for case study data, include quantifiable results.

**Advanced Coding Pattern:**
Dynamic routing with getStaticPaths, Content Collections integration, TypeScript for type safety, JSON-LD structured data.

**Anti-Patterns:**
Do NOT hardcode case study content, do NOT skip SEO meta tags, do NOT use inline styles, do NOT break mobile responsiveness.

**Imports/Exports:**
Import: Layout from '../../layouts/Layout.astro', getCollection from 'astro:content'. Export: getStaticPaths function, default Astro component.

**Depends On:** POR-001, POR-002  
**Blocks:** None

---

#### Subtask POR-003-01: Implement getStaticPaths

**Target File:** `src/pages/portfolio/[slug].astro`

**Description:**
Implement getStaticPaths to generate routes for each case study using getCollection('caseStudies'). Return array of params (slug) and props (caseStudy).

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask POR-003-02: Implement Challenge/Solution/Results Structure

**Target File:** `src/pages/portfolio/[slug].astro`

**Description:**
Implement case study page with three main sections: Challenge (specific problem client faced), Solution (strategies, tactics, tools employed), Results (hard numbers, percentages, metrics with visual aids). Use semantic HTML with proper heading hierarchy (h2 for each section). Include client testimonial if available in content.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask POR-003-03: Add Case Study SEO and Schema

**Target File:** `src/pages/portfolio/[slug].astro`

**Description:**
Add page-specific SEO meta tags and JSON-LD schema: title "{Case Study Title} - Your Agency", description from content, Open Graph tags with hero image, Twitter Card tags, canonical URL, JSON-LD CaseStudy schema with client, outcome, resultMetric.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask POR-003-04: Add Related Services Section

**Target File:** `src/pages/portfolio/[slug].astro`

**Description:**
Add section linking to related services based on case study service field. Display 2-3 related services with brief descriptions and "Learn More" CTAs.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

## Phase 4: About and Team Enhancement

### Task ABO-001: Enhance About Page

**Status:** TODO  
**Related Files:** `src/pages/about.astro`, `src/content.config.ts`

**Definition of Done:**
About page enhanced with team section. Page includes: agency story, mission/vision/values, team bios, company culture, "Why Us?" section. Team section with professional photos. Accessibility compliant. Mobile responsive. SEO optimized.

**Out of Scope:**
Individual team member pages, team member contact forms, career/jobs page.

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML, follow visual-identity.md, use Content Collections for team data, include personality elements.

**Advanced Coding Pattern:**
Content Collections integration, TypeScript for type safety, component composition, CSS Grid for team layout.

**Anti-Patterns:**
Do NOT hardcode team data, do NOT skip accessibility attributes, do NOT use inline styles, do NOT break mobile responsiveness.

**Imports/Exports:**
Import: Layout from '../layouts/Layout.astro', getCollection from 'astro:content', TeamMember from '../components/TeamMember.astro' (to be created). Export: Default Astro component.

**Depends On:** None  
**Blocks:** ABO-002

---

#### Subtask ABO-001-01: Create Team Content Collection

**Target File:** `src/content.config.ts`

**Description:**
Add team collection to content.config.ts with schema: name (string), role (string), bio (string), photo (string), linkedin (string, optional), twitter (string, optional), order (number), locale (string, default 'en'). Export collections object including blog, services, caseStudies, team.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask ABO-001-02: Create Team Member Content Files

**Target File:** `src/content/team/`

**Description:**
Create markdown files for each team member with frontmatter: name, role, bio, photo, linkedin, twitter, order, locale. Bio should be 2-3 sentences highlighting expertise and personality. Add at least 3-4 team members.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask ABO-001-03: Add Team Section to About Page

**Target File:** `src/pages/about.astro`

**Description:**
Add team section after values section: section heading "Our Team", grid of team member cards using Content Collections, each card includes photo, name, role, bio, social links (LinkedIn, Twitter) if provided. Use semantic HTML with proper heading hierarchy.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask ABO-001-04: Add "Why Us?" Section

**Target File:** `src/pages/about.astro`

**Description:**
Add "Why Us?" section after team section: section heading "Why Choose Us", 3-4 unique selling propositions, each USP includes heading and brief description. Use semantic HTML with proper heading hierarchy.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask ABO-001-05: Add Company Culture Section

**Target File:** `src/pages/about.astro`

**Description:**
Add company culture section after "Why Us?": section heading "Our Culture", brief description of company culture and values, optional photos of team events or office environment. Use semantic HTML with proper heading hierarchy.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

### Task ABO-002: Create TeamMember Component

**Status:** TODO  
**Related Files:** `src/components/TeamMember.astro`

**Definition of Done:**
Reusable TeamMember component created. Component accepts props: name, role, bio, photo, linkedin, twitter. Component renders card with proper semantic HTML. Responsive design. Accessibility attributes included. Styled with TailwindCSS.

**Out of Scope:**
Individual team member pages, team member contact forms, video introductions.

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML (article element), maintain visual identity tokens, follow motion-hierarchy.md (Quiet level).

**Advanced Coding Pattern:**
TypeScript interface for props, conditional rendering for optional social links, CSS Grid for responsive layout.

**Anti-Patterns:**
Do NOT use inline styles, do NOT hardcode content, do NOT skip prop validation, do NOT use client-side JavaScript.

**Imports/Exports:**
Import: Image from 'astro:assets'. Export: Default component with TypeScript interface.

**Depends On:** ABO-001  
**Blocks:** ABO-001-03

---

#### Subtask ABO-002-01: Define TypeScript Interface

**Target File:** `src/components/TeamMember.astro`

**Description:**
Create TypeScript interface for component props with fields: name, role, bio, photo, linkedin (optional), twitter (optional).

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask ABO-002-02: Implement Card HTML Structure

**Target File:** `src/components/TeamMember.astro`

**Description:**
Implement card structure using semantic HTML: outer article element with role="article", professional photo at top with proper alt text, name (h3), role (paragraph with styling), bio (paragraph), social links (LinkedIn, Twitter) if provided. Add aria-label describing the team member.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask ABO-002-03: Apply TailwindCSS Styling

**Target File:** `src/components/TeamMember.astro`

**Description:**
Apply TailwindCSS classes following visual-identity.md: card background bg-[#111111], border border-white/10, border radius rounded-xl, padding p-6, photo styling rounded-full or consistent dimensions, focus states for keyboard navigation. Ensure color contrast meets WCAG 2.2 AA.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

## Phase 5: FAQ Page

### Task FAQ-001: Create FAQ Page

**Status:** TODO  
**Related Files:** `src/pages/faq.astro`, `src/content.config.ts`

**Definition of Done:**
FAQ page created with 10 essential questions. Questions address: services, industry experience, case studies, performance measurement, timeline, pricing, onboarding, point of contact, client involvement, value of digital marketing. Accordion-style answers for progressive disclosure. SEO optimized. Accessibility compliant. Mobile responsive.

**Out of Scope:**
FAQ search functionality, FAQ rating system, FAQ submission form.

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML (details/summary elements), follow visual-identity.md, implement progressive disclosure, answer questions with specificity.

**Advanced Coding Pattern:**
Content Collections for FAQ data, TypeScript for type safety, native HTML details/summary for accordion, CSS transitions for smooth animations.

**Anti-Patterns:**
Do NOT hardcode FAQ content, do NOT skip accessibility attributes, do NOT use inline styles, do NOT use JavaScript for accordion (use native HTML).

**Imports/Exports:**
Import: Layout from '../layouts/Layout.astro', getCollection from 'astro:content'. Export: Default Astro component.

**Depends On:** None  
**Blocks:** None

---

#### Subtask FAQ-001-01: Create FAQ Content Collection

**Target File:** `src/content.config.ts`

**Description:**
Add faq collection to content.config.ts with schema: question (string), answer (string), category (string), order (number), locale (string, default 'en'). Export collections object including blog, services, caseStudies, team, faq.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask FAQ-001-02: Create FAQ Content Files

**Target File:** `src/content/faq/`

**Description:**
Create markdown files for 10 essential questions: what-services-do-you-offer.md, industry-experience.md, case-studies-portfolio.md, measure-performance.md, timeline-results.md, pricing-services.md, onboarding-process.md, point-of-contact.md, client-involvement.md, value-digital-marketing.md. Each file includes question, answer, category, order, locale. Answers should be specific, not vague.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask FAQ-001-03: Implement FAQ Page Structure

**Target File:** `src/pages/faq.astro`

**Description:**
Create FAQ page with: hero section with headline ("Frequently Asked Questions"), brief introduction, FAQ items using details/summary elements, group FAQs by category if desired, CTA to contact for more questions. Use semantic HTML with proper heading hierarchy.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask FAQ-001-04: Add FAQ to Navigation

**Target File:** `src/components/Navigation.astro`, `src/components/Footer.astro`

**Description:**
Add "FAQ" link to navLinks array (optional, or add to footer). Update footerLinks array to match.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask FAQ-001-05: Add SEO Meta Tags

**Target File:** `src/pages/faq.astro`

**Description:**
Add page-specific SEO meta tags: title "FAQ - Your Agency", description "Answers to common questions about our digital marketing services, process, pricing, and more.", Open Graph tags, Twitter Card tags, canonical URL, JSON-LD FAQPage schema.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

## Phase 6: Process/Methodology Page

### Task PRS-001: Create Process Page

**Status:** TODO  
**Related Files:** `src/pages/process.astro`

**Definition of Done:**
Process page created explaining how agency works with clients. Page includes: overview, step-by-step process, client involvement, timeline expectations, communication protocols. Visual timeline or process flow. SEO optimized. Accessibility compliant. Mobile responsive.

**Out of Scope:**
Interactive process builder, client portal integration, project management system.

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML, follow visual-identity.md, focus on client involvement, use clear non-technical language.

**Advanced Coding Pattern:**
Component composition, CSS Grid for timeline layout, TypeScript for type safety, progressive disclosure for detailed steps.

**Anti-Patterns:**
Do NOT use internal jargon, do NOT skip accessibility attributes, do NOT use inline styles, do NOT break mobile responsiveness.

**Imports/Exports:**
Import: Layout from '../layouts/Layout.astro', ProcessStep from '../components/ProcessStep.astro' (to be created). Export: Default Astro component.

**Depends On:** None  
**Blocks:** None

---

#### Subtask PRS-001-01: Create ProcessStep Component

**Target File:** `src/components/ProcessStep.astro`

**Description:**
Create reusable ProcessStep component for displaying process steps with props: stepNumber, title, description, duration. Renders step with visual indicator. Styled with TailwindCSS. Accessibility compliant.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask PRS-001-02: Implement Process Page Structure

**Target File:** `src/pages/process.astro`

**Description:**
Create process page with: hero section with headline ("Our Process"), brief introduction to methodology, step-by-step process using ProcessStep components (Discovery, Strategy, Execution, Optimization, Reporting), client involvement section, timeline expectations, communication protocols, CTA to contact to get started. Use semantic HTML with proper heading hierarchy.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask PRS-001-03: Add Process to Navigation

**Target File:** `src/components/Navigation.astro`, `src/components/Footer.astro`

**Description:**
Add "Process" link to navLinks array (optional, or add to footer). Update footerLinks array to match.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

#### Subtask PRS-001-04: Add SEO Meta Tags

**Target File:** `src/pages/process.astro`

**Description:**
Add page-specific SEO meta tags: title "Our Process - Your Agency", description "Learn how we work with clients from discovery to delivery. Our proven methodology ensures results.", Open Graph tags, Twitter Card tags, canonical URL.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

## Phase 7: Client Logos Section

### Task CLI-001: Add Client Logos to Homepage

**Status:** TODO  
**Related Files:** `src/pages/index.astro`, `src/content.config.ts`

**Definition of Done:**
Client logos section added to homepage. Section displays 3-6 recognizable client logos. Logos displayed in grayscale for consistency. Strategic placement (below hero or at conversion points). Accessibility compliant with proper alt text. Mobile responsive.

**Out of Scope:**
Dynamic logo personalization, logo carousel/slider, client testimonials in this section (those go in testimonials section).

**Rules to Follow:**
Follow accessibility.md rules, use semantic HTML, follow visual-identity.md, limit to 3-6 logos maximum, use grayscale treatment.

**Advanced Coding Pattern:**
Content Collections for client data, TypeScript for type safety, CSS Grid for responsive layout.

**Anti-Patterns:**
Do NOT use more than 6 logos, do NOT skip alt text, do NOT use inline styles, do NOT break mobile responsiveness.

**Imports/Exports:**
Import: Layout from '../layouts/Layout.astro', getCollection from 'astro:content'. Export: Default Astro component.

**Depends On:** None  
**Blocks:** None

---

#### Subtask CLI-001-01: Create Clients Content Collection

**Target File:** `src/content.config.ts`

**Description:**
Add clients collection to content.config.ts with type 'data' and schema: name (string), logo (string), url (string, optional), industry (string), order (number). Export collections object including blog, services, caseStudies, team, faq, clients.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask CLI-001-02: Create Client Data Files

**Target File:** `src/content/clients/`

**Description:**
Create data files for 3-6 clients with name, logo path, optional URL, industry, order. Use recognizable brands if possible. Ensure logos are high-quality and consistent style.

**Validation Commands:**
```bash
npm run astro check
```

---

#### Subtask CLI-001-03: Add Client Logos Section to Homepage

**Target File:** `src/pages/index.astro`

**Description:**
Add client logos section to homepage: place below hero section or before testimonials, section heading "Trusted By" or similar, grid of client logos using Content Collections, logos displayed in grayscale (filter: grayscale(100%)), each logo links to client website if URL provided. Use semantic HTML with proper heading hierarchy.

**Validation Commands:**
```bash
npm run astro check
npm run build
```

---

## Phase 8: Performance Optimization

### Task PRF-001: Audit and Optimize Performance

**Status:** TODO  
**Related Files:** Multiple

**Definition of Done:**
Lighthouse audit run and scores documented. Performance issues identified and addressed. Image optimization implemented. Code splitting implemented where needed. Core Web Vitals optimized (LCP, FID, CLS). Bundle size analyzed and reduced.

**Out of Scope:**
Complete rewrite of components, major architectural changes, third-party service integration.

**Rules to Follow:**
Follow performance.md rules, use Astro's built-in optimizations, implement lazy loading for images, minimize JavaScript bundle size, test on low-end devices.

**Advanced Coding Pattern:**
Astro Image component for optimization, code splitting with React.lazy, performance monitoring with Lighthouse, bundle analysis tools.

**Anti-Patterns:**
Do NOT skip image optimization, do NOT load unnecessary JavaScript, do NOT ignore Core Web Vitals, do NOT skip mobile testing.

**Imports/Exports:** N/A  
**Depends On:** All previous phases  
**Blocks:** None

---

#### Subtask PRF-001-01: Run Lighthouse Audit

**Target File:** N/A

**Description:**
Run Lighthouse audit on production build: npm run build, npm run preview. Open http://localhost:4321 in Chrome DevTools and run Lighthouse audit. Document scores for Performance, Accessibility, Best Practices, and SEO.

**Validation Commands:**
```bash
npm run build
```

---

#### Subtask PRF-001-02: Optimize Images

**Target File:** Multiple image files

**Description:**
Ensure all images use Astro Image component with proper optimization: use WebP format when possible, implement lazy loading for below-the-fold images, use appropriate width/height attributes, add descriptive alt text, compress images using tools like TinyPNG.

**Validation Commands:**
```bash
npm run build
```

---

#### Subtask PRF-001-03: Implement Code Splitting

**Target File:** Component files

**Description:**
Review components and implement code splitting where appropriate: use Astro's client:* directives strategically, lazy load heavy components, split routes if needed, analyze bundle size using build output.

**Validation Commands:**
```bash
npm run build
```

---

#### Subtask PRF-001-04: Optimize Core Web Vitals

**Target File:** Multiple

**Description:**
Address Core Web Vitals issues: LCP (optimize largest contentful paint with image optimization and critical CSS), FID (reduce first input delay by minimizing JavaScript and using client:idle), CLS (reduce cumulative layout shift by reserving space for dynamic content and using aspect-ratio for images).

**Validation Commands:**
```bash
npm run build
```

---

## Phase 9: Testing and Validation

### Task TST-001: Implement Accessibility Testing

**Status:** TODO  
**Related Files:** Multiple

**Definition of Done:**
Accessibility audit run using @axe-core/cli. WCAG 2.2 AA compliance verified. All accessibility issues addressed. Keyboard navigation tested. Screen reader compatibility tested. Color contrast verified.

**Out of Scope:**
WCAG 2.2 AAA compliance (unless required), advanced screen reader testing (basic only), mobile accessibility testing (can be separate task).

**Rules to Follow:**
Follow accessibility.md rules, use @axe-core/cli for automated testing, test with keyboard navigation, test with screen reader (NVDA or VoiceOver), verify color contrast with tools.

**Advanced Coding Pattern:**
Automated accessibility testing in CI/CD, manual testing with assistive technologies, color contrast verification tools.

**Anti-Patterns:**
Do NOT skip accessibility testing, do NOT rely solely on automated tools, do NOT ignore keyboard navigation, do NOT skip color contrast verification.

**Imports/Exports:** N/A  
**Depends On:** All previous phases  
**Blocks:** None

---

#### Subtask TST-001-01: Run Axe Core Accessibility Audit

**Target File:** N/A

**Description:**
Run accessibility audit using @axe-core/cli: npx axe http://localhost:4321 --tags wcag2a,wcag2aa. Document all issues and prioritize fixes.

**Validation Commands:**
```bash
npm run build
npm run preview
```

---

#### Subtask TST-001-02: Test Keyboard Navigation

**Target File:** N/A

**Description:**
Test keyboard navigation across all pages: tab through all interactive elements, verify focus order follows visual order, ensure focus indicators are visible, test skip to main content link, test mobile menu keyboard navigation.

**Validation Commands:**
```bash
npm run build
npm run preview
```

---

#### Subtask TST-001-03: Verify Color Contrast

**Target File:** Multiple

**Description:**
Verify color contrast meets WCAG 2.2 AA (4.5:1 minimum): use browser extension or online tool, test all text colors against backgrounds, test focus indicators, test interactive elements, document any contrast issues.

**Validation Commands:**
```bash
npm run build
```

---

#### Subtask TST-001-04: Test Screen Reader Compatibility

**Target File:** N/A

**Description:**
Test screen reader compatibility: test with NVDA (Windows) or VoiceOver (Mac), verify all images have alt text, verify all form fields have labels, verify ARIA labels are appropriate, verify heading hierarchy is logical.

**Validation Commands:**
```bash
npm run build
npm run preview
```

---

### Task TST-002: Implement SEO Testing

**Status:** TODO  
**Related Files:** Multiple

**Definition of Done:**
SEO audit run and documented. Meta tags verified across all pages. Structured data validated. Sitemap verified. robots.txt verified. Canonical URLs verified. Open Graph tags verified.

**Out of Scope:**
Advanced SEO tools (SEMrush, Ahrefs), competitor analysis, keyword research (can be separate task).

**Rules to Follow:**
Follow SEO best practices from research, use Google Rich Results Test, validate structured data with Schema.org validator, verify sitemap in Google Search Console.

**Advanced Coding Pattern:**
Automated SEO testing in CI/CD, structured data validation, sitemap generation verification.

**Anti-Patterns:**
Do NOT skip meta tag verification, do NOT ignore structured data errors, do NOT skip sitemap verification, do NOT ignore canonical URL issues.

**Imports/Exports:** N/A  
**Depends On:** All previous phases  
**Blocks:** None

---

#### Subtask TST-002-01: Validate Structured Data

**Target File:** N/A

**Description:**
Validate structured data using Google Rich Results Test: test homepage (WebSite, Organization schemas), test blog post (BlogPosting schema), test case study (CaseStudy schema when implemented), test service page (Service schema when implemented), fix any validation errors.

**Validation Commands:**
```bash
npm run build
npm run preview
```

---

#### Subtask TST-002-02: Verify Sitemap

**Target File:** N/A

**Description:**
Verify sitemap is generated correctly: check /sitemap-index.xml exists, verify all pages are included, verify sitemap follows XML schema, submit to Google Search Console if not already done.

**Validation Commands:**
```bash
npm run build
```

---

#### Subtask TST-002-03: Verify Meta Tags

**Target File:** Multiple

**Description:**
Verify meta tags across all pages: title tags present and unique, description tags present and unique, Open Graph tags present, Twitter Card tags present, canonical URLs correct, robots meta tags appropriate.

**Validation Commands:**
```bash
npm run build
```

---

#### Subtask TST-002-04: Run SEO Audit Tool

**Target File:** N/A

**Description:**
Run SEO audit using available tools: use browser extension (SEO Minion, Detailed SEO Extension), check for broken links, check for missing alt text, check for heading hierarchy issues, document and fix issues.

**Validation Commands:**
```bash
npm run build
npm run preview
```

---

## Phase 10: Documentation and Deployment

### Task DOC-001: Update README.md

**Status:** TODO  
**Related Files:** `README.md`

**Definition of Done:**
README.md updated with new features. Installation instructions verified. Development instructions updated. Deployment instructions updated. New pages and components documented. Environment variables documented.

**Out of Scope:**
Complete rewrite of README, marketing copy in README, video tutorials.

**Rules to Follow:**
Keep README concise and accurate, update all relevant sections, document new features clearly, verify all commands work.

**Advanced Coding Pattern:**
Clear section organization, code block examples, step-by-step instructions.

**Anti-Patterns:**
Do NOT leave outdated information, do NOT skip new features, do NOT use jargon without explanation, do NOT include broken commands.

**Imports/Exports:** N/A  
**Depends On:** All previous phases  
**Blocks:** None

---

#### Subtask DOC-001-01: Update Features Section

**Target File:** `README.md`

**Description:**
Update Features section in README.md to include: services pages, portfolio/case studies, enhanced about/team page, FAQ page, process page, client logos section, improved homepage structure.

**Validation Commands:**
N/A

---

#### Subtask DOC-001-02: Update Project Structure

**Target File:** `README.md`

**Description:**
Update Project Structure section to reflect new directories: src/content/services/, src/content/case-studies/, src/content/team/, src/content/faq/, src/content/clients/, new component files (CaseStudyCard, Testimonial, ServiceCard, PortfolioCard, TeamMember, ProcessStep).

**Validation Commands:**
N/A

---

#### Subtask DOC-001-03: Verify Installation Instructions

**Target File:** `README.md`

**Description:**
Verify installation instructions are accurate: test npm install command, verify environment variables list is complete, verify database setup instructions, update if any steps have changed.

**Validation Commands:**
```bash
npm install
```

---

#### Subtask DOC-001-04: Update Deployment Instructions

**Target File:** `README.md`

**Description:**
Verify deployment instructions are accurate: test npm run build command, verify Cloudflare deployment steps, update if any steps have changed, verify environment variables for production.

**Validation Commands:**
```bash
npm run build
```

---

### Task DPL-001: Deploy to Production

**Status:** TODO  
**Related Files:** `.github/workflows/deploy.yml`

**Definition of Done:**
Production deployment successful. All environment variables configured. Database migrated if needed. SEO verified in production. Performance verified in production. Accessibility verified in production.

**Out of Scope:**
Multi-region deployment, CDN configuration beyond Cloudflare, advanced monitoring setup.

**Rules to Follow:**
Follow cloudflare-deployment.md rules, verify environment variables in Cloudflare, test production build locally first, monitor deployment logs.

**Advanced Coding Pattern:**
CI/CD deployment via GitHub Actions, environment-specific configurations, automated testing in deployment pipeline.

**Anti-Patterns:**
Do NOT deploy without testing, do NOT skip environment variable verification, do NOT ignore deployment errors, do NOT skip production verification.

**Imports/Exports:** N/A  
**Depends On:** All previous phases  
**Blocks:** None

---

#### Subtask DPL-001-01: Test Production Build Locally

**Target File:** N/A

**Description:**
Test production build locally: npm run build, npm run preview. Verify all pages load correctly, no console errors, and functionality works.

**Validation Commands:**
```bash
npm run build
npm run preview
```

---

#### Subtask DPL-001-02: Configure Cloudflare Environment Variables

**Target File:** N/A

**Description:**
Configure environment variables in Cloudflare: npx wrangler secret put NEON_DATABASE_URL, npx wrangler secret put RESEND_API_KEY, npx wrangler secret put EMAIL_FROM, npx wrangler secret put EMAIL_TO, npx wrangler secret put SITE_URL.

**Validation Commands:**
```bash
npx wrangler secret list
```

---

#### Subtask DPL-001-03: Deploy to Cloudflare

**Target File:** N/A

**Description:**
Deploy to Cloudflare Workers: npm run build, npx wrangler deploy. Monitor deployment logs for errors.

**Validation Commands:**
```bash
npm run build
npx wrangler deploy
```

---

#### Subtask DPL-001-04: Verify Production Site

**Target File:** N/A

**Description:**
Verify production site: check all pages load correctly, verify SEO meta tags, run Lighthouse audit, test contact form, verify blog posts load, check navigation works.

**Validation Commands:**
N/A (manual verification in browser)

---

## Technical Debt

### Task TD-001: Fix Navigation.astro TypeScript Errors

**Status:** TODO
**Related Files:** `src/components/Navigation.astro`

**Description:**
Fix two TypeScript errors in Navigation.astro:
1. Line 63: client:load directive causing type error with ButtonHTMLAttributes
2. Line 122: setAttribute expects string but receives boolean for aria-expanded

**Validation Commands:**
```bash
npm run astro check
```

---

### Task TD-002: Fix blog/[slug].astro TypeScript Error

**Status:** TODO
**Related Files:** `src/pages/blog/[slug].astro`

**Description:**
Fix TypeScript error on line 19: Property 'Content' does not exist on type 'RenderedContent | undefined'. Need to handle undefined case or fix type assertion.

**Validation Commands:**
```bash
npm run astro check
```

---

### Task TD-003: Fix Content Collection Blog Warning

**Status:** TODO
**Related Files:** `src/content.config.ts`, `src/content/blog/`

**Description:**
Build warning: "The collection 'blog' does not exist or is empty." Despite 11 blog files existing, Content Collection is not properly configured or synced. Investigate and fix.

**Validation Commands:**
```bash
npm run build
```
