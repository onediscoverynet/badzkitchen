# Badz Kitchen — AI Coding Agent Instructions

## Project Overview
Badz Kitchen is a **static restaurant website** for a Filipino/Asian fusion restaurant in Guimba, Nueva Ecija. The site emphasizes SEO, multi-language support, and promotion of Filipino cuisine. Founded in 2024.

## Architecture

### Site Structure
- **Root level** (`/`): Landing page with hero, CTAs, embedded video/map, floating contact buttons
- **`/menu/`**: Grid-based menu browser with client-side search filtering. Individual menu items under subdirectories (`/menu/adobo/`, `/menu/pad-thai/`, etc.)
- **`/about/`**: Brand story and history
- **Language variants**: `/`, `/tl/` (Tagalog), `/ko/` (Korean), planned `/ilo/` (Ilocano)
- **Other pages**: `/catering/`, `/order/`, `/promo/`, `/videos/`, `/contactus/`, `/direction/`, `/map/`

### Key Integration Points

#### SEO & Analytics
- **Google Tag Manager (GTM)**: ID `GTM-NH3FSXS8` — installed in all pages for conversion tracking
- **Google Ads & Analytics**: ID `AW-17642116617` — conversion pixel fires on page load
- **hreflang links**: Every page includes `rel="alternate"` tags for EN, TL, KO, ILO for proper language routing
- **Schema.org JSON-LD**: Restaurant schema with cuisine, hours (Tue-Sun 10:30–21:00), address, aggregate ratings

#### Social & Communication
- **Facebook integration**: Multiple contact methods
  - Facebook page ID: `61576577733878` → `https://www.facebook.com/badz.kitchen.2025`
  - Messenger: `https://m.me/badz.kitchen.2025`
  - Deep linking via `fb://page/ID` for mobile apps
- **Floating action buttons**: Fixed position FAB elements for chat and Facebook links

#### Static Content Assets
- **Stylesheets**: 
  - `assets/menu.css` — unified theme with dark green (`#0c2a14`), gold accents (`#d4af37`)
  - `assets/css/main.css` — individual menu item pages
- **Images**: Menu category photos in `/assets/`, individual dish images in `/images/`

### Data & Content Patterns

#### Keyword Strategy
SEO keywords are **exhaustive and duplicated** across pages:
- Specific menu items: Lechon Belly, Soy Chicken, Laksa, Adobo, etc.
- Geographic targeting: Guimba, Nueva Ecija, Tarlac, Pangasinan (and 6 nearby towns)
- Dining occasions: family dining, barkada, romantic, catering, birthdays
- Filipino + Ilocano search terms: "pampamilyang kainan", "naimas nga kainan", "tan-aw iti palayan"

**Convention**: Long, redundant meta keywords and data attributes (`data-name`) on cards enable fuzzy search.

#### Menu Implementation
- **Search**: Uses vanilla JS (`q.addEventListener('input')`) to filter `.card` elements by `data-name` attribute
- **No database**: All menu content is HTML + CSS + basic client-side filtering
- **New dishes**: Add `<article class="card" data-name="...">` to `/menu/index.html`, create subdirectory with individual page

### HTML & Styling Conventions

#### CSS Architecture
- **CSS Variables** in `:root`: Colors, glass effects, shadows
- **Layout**: CSS Grid for responsive product cards (`grid-template-columns: repeat(auto-fit, minmax(...))`)
- **Glass-morphism**: Heavy use of `backdrop-filter: blur()` and `rgba()` for semi-transparent overlays
- **No CSS frameworks**: Pure CSS, mobile-first approach

#### Repeated HTML Patterns
1. **Meta tags**: Every page includes title, description, OG tags, canonical, hreflang, Schema.org
2. **GTM & Analytics**: Identical async script blocks appear in `<head>` of all pages
3. **Floating buttons**: Fixed-position FAB elements for chat/Facebook (z-index: 9999 or 999999)
4. **Navigation**: Breadcrumbs, hero section, card grid, footer with copyright

#### Google Tag Manager Boilerplate
Every page includes this exact structure:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-NH3FSXS8');</script>
<!-- End Google Tag Manager -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NH3FSXS8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

## Workflow & Development

### Adding a New Page
1. Create folder structure (e.g., `/newpage/`)
2. Copy template from similar existing page (`index.html`)
3. Update meta tags, title, hreflang, canonical, Schema.org
4. Ensure GTM + Google Ads scripts are included
5. Add navigation link to main pages
6. Consider language variants if multi-lang planned

### Adding a New Menu Item
1. Add entry to `/menu/index.html` card grid with `data-name="..."` attribute
2. Create subdirectory: `/menu/dish-name/index.html`
3. Use template from `/menu/adobo/index.html` (includes all SEO boilerplate)
4. Link image in `/images/menu/` directory
5. Add dish to keyword list in meta tags

### Styling Changes
- Modify `assets/menu.css` for global theme changes (colors, typography, spacing)
- **Do not create new CSS files** unless scoping to specific pages (existing pattern: one global CSS)
- CSS uses `:root` variables; update color schemes there first

### Language Localization
- Create `/tl/index.html`, `/ko/index.html` parallels
- Copy all metadata but **translate title, description, body content**
- **Keep** hreflang, GTM scripts, Schema.org IDs unchanged
- Test `rel="alternate" hreflang="tl"` links in canonicals

## Project-Specific Constraints

1. **Static site**: No database, API, or build process
2. **Search via `data-` attributes**: Client-side only; no server-side search indexing
3. **SEO-heavy**: Aggressive keyword stuffing intentional for local restaurant ranking
4. **Multi-region targeting**: Geographic keywords are redundant but necessary for local SEO
5. **Facebook-first comms**: All CTAs point to Messenger or Facebook page
6. **Mobile-first**: Fixed FAB buttons, responsive grid, safe-area-inset compensation for notches

## Key Files & Directories

| Path | Purpose |
|------|---------|
| `index.html` | Landing page (hero, CTAs, embedded video/map) |
| `/menu/index.html` | Menu browser with search |
| `/menu/adobo/index.html` | Example individual dish page |
| `assets/menu.css` | Primary stylesheet (dark theme, glass effects) |
| `assets/css/main.css` | Secondary stylesheet for dish pages |
| `/tl/`, `/ko/` | Language variants |
| `.git/` | Git repository metadata |
| `README.md` | Minimal repo description |

## Common Pitfalls

- **Forgetting GTM boilerplate**: Every page must include Google Tag Manager scripts
- **Hardcoding colors**: Use CSS `:root` variables for theme consistency
- **Missing hreflang**: Breaks multi-language SEO; ensure all pages link language variants
- **Duplicate content**: Keywords are intentionally repetitive; don't consolidate without understanding SEO strategy
- **Breaking float buttons**: Z-index wars; FABs use z-index: 999999; don't raise other elements above this
- **Image paths**: Use relative paths (`/images/...`), not domain-absolute

---

**Last Updated**: 2025-11-15 | Badz Kitchen v1 Static Site
