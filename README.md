# 🚀 adcanoar.dev

Minimal one-page portfolio (**anchors**) built with **Next.js + TypeScript + Tailwind**.  
Content-first approach: **Markdown → MDX** (upgrade only when it adds real value).

---

## 🎯 Goal

- Ship a fast, minimal, **production-minded** portfolio.
- Showcase **3 featured projects** with **real case studies** (decisions, tradeoffs, results).
- Keep scope tight + quality high (DX, accessibility, performance).

---

## ✅ MVP Scope (One-page)

### 🧭 Navigation (anchors)
- About · Skills · Projects · Experience · Contact

### 🧩 Sections
1. **Hero** (headline + 2 CTAs)
2. **About** (short summary + product/engineering mindset)
3. **Skills** (Frontend / Backend / Data & Ops)
4. **Featured Projects** (3 cards)
5. **Case Studies** (per project)
6. **Experience** (mini)
7. **Contact**
8. **Footer**

### 🚫 Non-goals (MVP)
- Blog (until there are 3 solid posts)
- Testimonials
- Heavy animations
- CMS integration

---

## 🧱 Featured Projects (MVP)

- [ ] **Flagship:** e-load (refactor → production-grade)
- [ ] **Project 2:** TBD
- [ ] **Project 3:** TBD

### 📌 Per-project checklist
- [ ] One-liner (problem → solution)
- [ ] Stack tags
- [ ] Repo link
- [ ] Demo link (if available)
- [ ] Case study (decisions + tradeoffs + results)
- [ ] 2+ screenshots (real)

---

## 🛠 Tech Stack (Route A)

- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown first (`.md`), upgrade to MDX (`.mdx`) when needed
- **Validation:** Zod (forms / input contracts)
- **Quality:** ESLint · Prettier · TypeScript strict
- **CI:** GitHub Actions
- **Deploy:** Vercel

---

## ✍️ Markdown → MDX Strategy

**Start with Markdown** for case studies (headings, lists, code blocks).  
**Move to MDX** only when you need reusable UI inside content (callouts, cards, image galleries).

MVP rule:
- [ ] Maximum **1 custom component** in MDX (e.g. `<Callout />`)

---

## 🧠 Architecture (high level)

### 📁 Folders
- `app/` — routes, layouts, pages (App Router)
- `components/` — reusable UI components (minimal, composable)
- `content/` — case studies (`content/projects/*.md` or `.mdx`)
- `lib/` — utilities, config, content loaders, types
- `public/` — static assets (images, icons)

### 🧾 Content conventions
- One file per project: `content/projects/<slug>.md(x)`
- Consistent frontmatter (recommended):
  - `title`, `summary`, `stack`, `links`, `highlights`

---

## 🧪 Quality Gates (must pass before merge)

Local checks:
```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Product checks:
- [ ] No broken links / no dead sections
- [ ] Keyboard navigation + visible focus
- [ ] Accessible semantics (labels, headings, contrast)
- [ ] Lighthouse: strong Performance / Accessibility / SEO (measurable)

---

## ▶️ Getting Started

### Requirements
- Node.js (LTS)
- pnpm

### Install & run
```bash
pnpm install
pnpm dev
```

---

## 🔧 Configuration

No environment variables required for the MVP.  
If needed later, document them in `.env.example`.

---

## 🧩 Status

- [ ] MVP scope locked
- [ ] Projects selected (3)
- [ ] App scaffolded
- [ ] MVP shipped
- [ ] Production deployed

---

## 🗺️ Roadmap (with gates)

### Phase 0 — Scope locked
- [ ] MVP sections locked (anchors + section list)
- [ ] 3 projects selected (1 flagship)
- [ ] Global DoD written (Quality Gates)

### Phase 1 — Repo & DX
- [ ] TypeScript strict
- [ ] ESLint + Prettier + scripts
- [ ] Folder structure in place
- [ ] CI pipeline (lint/typecheck/build)

### Phase 2 — UI foundation
- [ ] Layout (header/footer/container)
- [ ] Minimal UI kit (Button/Card/Badge/Section)
- [ ] Typography + spacing system

### Phase 3 — Build MVP
- [ ] Hero / About / Skills
- [ ] Projects grid
- [ ] Case study rendering (Markdown)
- [ ] Experience + Contact

### Phase 4 — Real content
- [ ] 3 case studies written
- [ ] Screenshots (2+ per project)
- [ ] Copy polished (clear in 10 seconds)

### Phase 5 — Polish
- [ ] Performance pass (images, bundle, lazy loading)
- [ ] Accessibility pass (labels, focus, keyboard)
- [ ] SEO basics (metadata, sitemap, OG)

### Phase 6 — Deploy
- [ ] Vercel deploy
- [ ] Domain + HTTPS
- [ ] Launch checklist completed

---

## 📦 Scripts

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
```

---

## 📄 License
MIT
