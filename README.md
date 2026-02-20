# 🚀 adcanoar.dev

Portfolio **minimalista** (one-page + anchors) enfocado en **claridad**, **velocidad** y **calidad “production-grade”**.  
Este repositorio contiene el código fuente del sitio.

---

## 🎯 Objetivo

- Publicar un portfolio rápido y directo, sin secciones de relleno.
- Mostrar **3 proyectos destacados** con **case studies reales** (decisiones, tradeoffs, resultados).
- Mantener el alcance controlado y un estándar de calidad alto (DX, accesibilidad, performance).

---

## ✅ MVP (One-page)

### 🧭 Navegación (anchors)
- About · Skills · Projects · Experience · Contact

### 🧩 Secciones
1. **Hero** (headline + 2 CTAs)
2. **About** (resumen corto + enfoque producto/ingeniería)
3. **Skills** (Frontend / Backend / Data & Ops)
4. **Featured Projects** (3 cards)
5. **Case Studies** (por proyecto)
6. **Experience** (mini)
7. **Contact**
8. **Footer**

### 🚫 Fuera del MVP (non-goals)
- Blog (hasta tener 3 posts sólidos)
- Testimonials
- Animaciones complejas
- CMS

---

## 🧱 Proyectos destacados (MVP)

- [ ] **Flagship:** e-load (refactor → production-grade)
- [ ] **Proyecto 2:** TBD
- [ ] **Proyecto 3:** TBD

### 📌 Checklist por proyecto
- [ ] One-liner (problema → solución)
- [ ] Tags de stack
- [ ] Link a repo
- [ ] Link a demo (si aplica)
- [ ] Case study (decisiones + tradeoffs + resultados)

---

## 🛠 Stack

- **Framework:** Next.js (App Router) + React + TypeScript  
- **UI:** Tailwind CSS (+ opcional shadcn/ui)  
- **Contenido:** MDX (case studies)  
- **Validación:** Zod (forms / contratos de input)  
- **Calidad:** ESLint · Prettier · TypeScript strict  
- **CI:** GitHub Actions  
- **Deploy:** Vercel  

---

## 🧠 Arquitectura (alto nivel)

**Carpetas**
- `app/` — rutas, layouts, páginas (App Router)
- `components/` — UI reutilizable (mínima y componible)
- `content/` — case studies en MDX (un fichero por proyecto)
- `lib/` — utils, config, loaders
- `public/` — assets estáticos

**Estrategia de contenido**
- Case studies en `content/projects/*.mdx`
- Frontmatter consistente por proyecto (title, stack, links, highlights)

---

## ✍️ MDX (uso MVP)

**MDX = Markdown + JSX** (contenido + componentes React cuando hace falta).

Reglas MVP:
- [ ] Markdown por defecto (h2/h3, listas, bloques de código)
- [ ] Máximo **1 componente** custom (ej: `<Callout />`)

---

## 🧩 Estado

- [ ] MVP scope cerrado
- [ ] Lista de proyectos cerrada
- [ ] App scaffolded
- [ ] MVP shipped
- [ ] Producción desplegada

---

## ▶️ Empezar (local)

**Requisitos**
- Node.js (LTS)
- pnpm

```bash
pnpm install
pnpm dev
```

---

## 🔧 Configuración

No se requieren variables de entorno para el MVP.  

---

## ✅ Quality Gates (antes de merge)

Checks locales:
```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Checks de producto:
- [ ] Sin links rotos / sin secciones muertas
- [ ] Navegación por teclado + foco visible
- [ ] Lighthouse fuerte en Performance / Accessibility / SEO (medible)

---

## 🗺️ Roadmap (con gates)

### Phase 0 — Scope locked
- [ ] Secciones MVP cerradas
- [ ] 3 proyectos definidos (1 flagship)
- [ ] DoD global escrito (quality gates)

### Phase 1 — Repo & DX
- [ ] TS strict
- [ ] ESLint/Prettier + scripts
- [ ] Estructura de carpetas
- [ ] CI (lint/typecheck/build)

### Phase 2 — UI foundation
- [ ] Layout base (header/footer/container)
- [ ] UI kit mínimo (Button/Card/Badge/Section)
- [ ] Tipografía + spacing

### Phase 3 — Build MVP
- [ ] Hero / About / Skills
- [ ] Projects + render de case studies
- [ ] Experience + Contact

### Phase 4 — Contenido real
- [ ] 3 case studies escritos
- [ ] Screenshots (2+ por proyecto)
- [ ] Copy pulido (se entiende en 10s)

### Phase 5 — Pulido
- [ ] Performance pass
- [ ] Accessibility pass
- [ ] SEO básico (metadata, sitemap, OG)

### Phase 6 — Deploy
- [ ] Deploy Vercel
- [ ] Dominio + HTTPS
- [ ] Checklist de lanzamiento completada

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
