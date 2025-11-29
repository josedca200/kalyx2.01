# Design Guidelines for Kalyx Service Technology

## Design Approach
**Strategy**: Reference-based approach inspired by modern SaaS platforms (Linear, Vercel, Stripe) with a technical, trustworthy personality. Glassmorphism accents with subtle gradients and professional polish.

**Brand Personality**: Confiable (trustworthy), técnica (technical), resolutiva (solution-oriented), cercana (approachable)

## Color System
- **Primary**: `#1E90FF` (sky-600) with hover state `#1C7FE6`
- **Dark Base**: `#0B1220` (slate-950)
- **Neutrals**: `#0F172A` (slate-900), `#334155` (slate-600), `#E2E8F0` (slate-200), `#F8FAFC` (slate-50)
- **Accents**: `#22D3EE` (cyan-400) and `#A78BFA` (violet-400)
- **Light/Dark Theme**: Full theme toggle with local persistence

## Typography
- **Headings**: Inter or Tomorrow (clean, modern sans-serif)
- **Body**: Inter or Roboto (readable, professional)
- **Monospace**: JetBrains Mono (for code snippets, technical specs)
- **Hierarchy**: Clear scale with h1-h6, consistent line heights optimized for readability

## Layout System
- **Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 24 (p-4, m-8, gap-12, py-16, section-24)
- **Container**: max-w-7xl for sections, max-w-6xl for content-heavy pages, max-w-prose for blog articles
- **Grid System**: 12-column grid with responsive breakpoints; 3-column feature grids on desktop, stack to single column on mobile

## Component Library

### Navigation
- **Navbar**: Sticky header with mega-menu for "Servicios" dropdown, language switcher (ES/EN), theme toggle
- **Footer**: 3-column layout (Servicios, Empresa, Legal) + newsletter signup section

### Hero Sections
- **Home Hero**: Large hero with gradient background using glassmorphism, primary headline, supporting text, dual CTAs (primary: "Agenda una llamada", secondary: "Ver casos")
- **Trust Badges**: Display below hero (client logos, certifications)
- **Image**: Abstract tech illustration or gradient blob with subtle parallax effect

### Content Blocks
- **FeatureCard**: Icon (lucide-react), heading, description, optional CTA link with hover-lift effect
- **Testimonial**: Quote, author name/role, company, optional avatar
- **CaseCard**: Project thumbnail, client name, metrics (KPIs before/after), link to full case study
- **LogoWall**: Grid of client/partner logos in grayscale with color on hover

### Forms
- **ContactForm**: Name, email, company, budget range, message fields with visible focus states, validation feedback inline, loading/success/error states
- **Newsletter**: Email input with subscribe button, minimal design

### Pricing
- **PricingTable**: 4 packages displayed as cards (Discovery Sprint, MVP Sprint, Escalamiento, Soporte), toggle for monthly/annual if applicable, feature comparison, prominent CTA per tier

### Blog
- **BlogCard**: Featured image, category tag, title, excerpt, author, date, read time
- **Article Layout**: Hero image, breadcrumbs, table of contents for long posts, code syntax highlighting with JetBrains Mono

## Visual Treatment
- **Glassmorphism**: Subtle backdrop-blur effects on cards and overlays, semi-transparent backgrounds with border highlights
- **Gradients**: Soft radial gradients (cyan to violet) for hero backgrounds and accent elements, never overwhelming
- **Shadows**: Layered shadow system (sm, md, lg, xl) for depth hierarchy
- **Borders**: 1px borders with slate-200/800 depending on theme, rounded corners (rounded-lg to rounded-xl)

## Animations & Interactions
- **Framer Motion**: Fade-in/slide-up on scroll for section reveals, parallax on hero elements (subtle, max 20px movement)
- **Hover States**: Lift effect on cards (translateY -2px + shadow increase), color transitions on buttons and links
- **Page Transitions**: Minimal fade between routes
- **Loading States**: Skeleton screens for async content, spinner for form submissions

## Accessibility
- **Focus States**: 2px outline with primary color offset, visible on all interactive elements
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text and UI components
- **Keyboard Navigation**: Full tab order, skip links to main content
- **ARIA**: Proper labels, landmarks, live regions for dynamic content
- **Semantic HTML**: Correct heading hierarchy, nav/main/aside/footer landmarks

## Images
- **Hero Image**: Abstract technology visualization with gradient overlay (1920x1080)
- **Service Pages**: Custom illustrations or icons representing each service vertical
- **Case Studies**: Project screenshots/mockups, architecture diagrams
- **Team Photos**: Professional headshots for "Nosotros" page
- **Blog**: Featured images for articles (1200x630), optimized and lazy-loaded

## Responsive Behavior
- **Breakpoints**: Mobile-first (base), md: 768px, lg: 1024px, xl: 1280px
- **Navigation**: Hamburger menu on mobile, full mega-menu on desktop
- **Typography**: Fluid scaling (text-xl md:text-2xl lg:text-4xl for h1)
- **Grids**: 1 column mobile, 2 columns tablet, 3-4 columns desktop

## Performance Targets
- **Lighthouse Score**: ≥95 in all categories (Performance, SEO, Best Practices, Accessibility)
- **Image Optimization**: WebP/AVIF formats, responsive srcset, lazy loading below fold
- **Code Splitting**: Route-based chunking, prefetch for critical routes

## SEO & Metadata
- **Meta Tags**: Unique title/description per page, Open Graph images (1200x630)
- **Schema.org**: Organization, Service, BlogPosting, FAQPage structured data
- **Sitemap**: XML sitemap with all pages, hreflang tags for ES/EN variants