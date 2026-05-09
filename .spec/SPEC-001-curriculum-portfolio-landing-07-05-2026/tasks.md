# Implementation Plan - Curriculum Portfolio Landing

## Priority Matrix Guide

- **[MVP]** = Must be done first - without this nothing works; core blocker.
- **[B]** = Blocking - prevents future work or causes regressions.
- **[P]** = Parallel - can be batched with other [P] tasks; does not block.
- **[OPT]** = Optional - only if [MVP] and [B] are completed and context remains.

---

## PHASE 1: Setup & Base Structure

**Goal**: Create the Next.js 16 project, configure Tailwind, and have the base structure working with Vercel deploy.

- [x] **[MVP]** T1. Create Next.js 16 project - 15min - COMPLETED
  - [x] Project created manually with package.json + tsconfig + next.config
  - [x] Verify that it compiles without errors -> successful build
  - [ ] Create GitHub repo (private) -> Pending Rodolfo
  - [ ] Initial push to GitHub -> Pending
  - [ ] Connect repo to Vercel (auto-deploy) -> Pending
  - Requirement: spec.md #R1
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

- [x] **[MVP]** T2. Configure folder structure - 10min - COMPLETED
  - [x] Create `src/components/` with 8 components
  - [x] Create `src/data/` with 4 data files
  - [x] Create `src/lib/` for utilities
  - [x] Create `public/screenshots/` for screenshots
  - [x] Configure `globals.css` with color tokens (Dark + Amber)
  - Requirement: spec.md #R1
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

- [x] **[B]** T3. Configure metadata and base SEO - 10min - COMPLETED
  - [x] `layout.tsx` with metadata (title, description, OG tags, Twitter card)
  - [ ] Favicon -> Pending
  - [ ] Verify Vercel deploy works -> Pending
  - Requirement: spec.md #R1, #R9
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

### Phase 1 Checkpoint

- [x] Next.js 16 project created and compiling
- [ ] GitHub repo connected to Vercel -> Pending
- [ ] Auto-deploy working (push -> deploy) -> Pending
- [x] Base folder structure created
- [x] TypeScript 0 errors
- Expected duration: 35min

---

## PHASE 2: Landing Page Core

**Goal**: Build the main landing sections: Hero, Projects, Experience, Tech Stack, How I Work with AI.

- [x] **[MVP]** T4. Hero Section - 30min - COMPLETED
  - [x] Create `src/components/Hero.tsx`
  - [x] Tagline: "23 years in tech. 15 years running a business. 4 AI-powered products."
  - [x] 2 CTAs: "View Projects" (scroll down) and "Download PDF"
  - [x] Subtle animation with Framer Motion (fade in, bounce scroll)
  - [x] Responsive mobile-first
  - Requirement: spec.md #R1
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

- [x] **[MVP]** T5. Projects Section - 4 Cards - 45min - COMPLETED
  - [x] Create `src/data/projects.ts` with data for the 4 projects
  - [x] Create `src/components/Projects.tsx` with inline ProjectCard
  - [x] Each card: name, status badge, description, stack, key features, link
  - [x] Screenshots: placeholder (Rodolfo adds the real ones)
  - [x] Links: iamenu.ai, myaibs.com, taski-lilac.vercel.app, Nexus -> "Demo on request"
  - Requirement: spec.md #R2
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

- [x] **[MVP]** T6. How I Work with AI Section - 20min - COMPLETED
  - [x] Create `src/components/HowIWorkWithAI.tsx`
  - [x] 3 blocks: SPEC System, Nexus Memory, Tools
  - [x] Concise texts with highlights
  - Requirement: spec.md #R3
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

- [x] **[MVP]** T7. Experience Timeline - 20min - COMPLETED
  - [x] Create `src/data/experience.ts` with 3 entries
  - [x] Create `src/components/Experience.tsx` - alternating vertical timeline
  - [x] 3 entries with highlights
  - Requirement: spec.md #R4
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

- [x] **[MVP]** T8. Tech Stack Grid - 15min - COMPLETED
  - [x] Create `src/data/stack.ts` with 6 categories
  - [x] Create `src/components/TechStack.tsx` - grid with monospace badges
  - Requirement: spec.md #R1
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

### Phase 2 Checkpoint

- [x] Hero section working with CTAs
- [x] 4 project cards with links
- [x] How I Work with AI section
- [x] Experience timeline
- [x] Tech stack grid
- [x] Responsive on mobile
- [x] TypeScript 0 errors
- Expected duration: 2h 10min

---

## PHASE 3: Advanced Sections + PDF

**Goal**: Add Honest Answers, Try Before You Hire, Contact, and PDF generation.

- [x] **[B]** T9. Honest Answers - Devil's Advocate - 30min - COMPLETED
  - [x] Create `src/data/answers.ts` with 10 questions and answers
  - [x] Create `src/components/HonestAnswers.tsx` - accordion with toggle
  - [x] 10 questions with honest answers
  - [x] Accordion animation with Framer Motion
  - Requirement: spec.md #R5
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

- [x] **[B]** T10. Try Before You Hire + Contact - 20min - COMPLETED
  - [x] Create `src/components/TryBeforeYouHire.tsx`
  - [x] Clear offer with amber CTA
  - [x] Create `src/components/Contact.tsx` with email + GitHub + LinkedIn
  - Requirement: spec.md #R6
  - work_prepend.md -> See "20:15 - PHASES 1-3 COMPLETED"

- [ ] **[B]** T11. PDF Generation - 45min -> PENDING (leave for last)
  - [ ] Install PDF dependency
  - [ ] Create PDF generator
  - [ ] Download button
  - Requirement: spec.md #R7
  - work_prepend.md -> Register status here

### Phase 3 Checkpoint

- [x] Honest Answers with functional accordion
- [x] Try Before You Hire section
- [x] Contact section with email
- [ ] Downloadable and readable PDF -> Pending (last)
- [x] TypeScript 0 errors
- Expected duration: 1h 35min

---

## PHASE 3.5: Humanization + Editorial Repositioning

**Goal**: Convert the page from "landing that sells apps" to "human technical curriculum/portfolio" without losing visual impact or the ability to demonstrate capability with Next.js/Vercel.

- [x] **[MVP]** T18. Rewrite Hero + professional summary - 35min - COMPLETED
  - [x] Keep English as main language
  - [x] Main role: `Full-Stack AI Developer`
  - [x] Add quick CV block: location, remote, English B2, availability, roles
  - [x] Keep temporary avatar until Rodolfo provides real photo
  - [x] Reduce SaaS pitch tone; raise human/technical tone
  - Requirement: spec.md #R1
  - work_prepend.md -> See "18:19 - REPOSITIONING APPROVED"

- [x] **[MVP]** T19. Convert Projects into Selected Work / case studies - 45min - COMPLETED
  - [x] Change structure: Problem, What I built, My role, Technical challenge, Status
  - [x] Avoid empty visual placeholders if there are no real screenshots
  - [x] Keep live links where they exist
  - [x] Do not expose private code
  - Requirement: spec.md #R2
  - work_prepend.md -> See "18:19 - REPOSITIONING APPROVED"

- [x] **[B]** T20. Humanize Nexus + AI workflow - 35min - COMPLETED
  - [x] Tell Nexus as a personal response to the problem of lost context in AI
  - [x] Keep metrics, but after the "why"
  - [x] Explain SPEC system as work methodology, not as enterprise product
  - Requirement: spec.md #R3
  - work_prepend.md -> See "18:19 - REPOSITIONING APPROVED"

- [x] **[B]** T21. Rebalance Honest Answers + CTA - 30min - COMPLETED
  - [x] Reduce from 10 questions to 5-6 more strategic questions
  - [x] Change defensive tone to mature transparency
  - [x] Replace "24h free challenge" with more professional trial task / technical conversation
  - Requirement: spec.md #R5, #R6
  - work_prepend.md -> See "18:19 - REPOSITIONING APPROVED"

- [x] **[B]** T22. Technical lint fix + verification - 20min - COMPLETED
  - [x] Fix `eslint.config.mjs` or missing dependency `@eslint/flatcompat`
  - [x] `npx tsc --noEmit` -> 0 errors
  - [x] `npm run lint` -> 0 errors
  - [x] `npm run build` -> successful
  - Requirement: spec.md Quality Standards
  - work_prepend.md -> See "18:19 - REPOSITIONING APPROVED"

### Phase 3.5 Checkpoint

- [x] Hero tells Rodolfo first, not the products
- [x] Selected Work demonstrates capability without looking like a SaaS landing
- [x] Nexus/AI workflow sounds human and credible
- [x] CTA sounds professional, not desperate
- [x] TypeScript, ESLint, and build pass
- Expected duration: 2h 45min

---

## PHASE 4: Polish, LinkedIn & Deploy

**Goal**: Polish the landing, create LinkedIn, and leave everything ready to share.

- [x] **[P]** T12. Project screenshots - 20min - COMPLETED
  - [x] IAMenu screenshots (dashboard, client view, AI features)
  - [x] MYAIBS screenshots (builder, landing)
  - [x] Taski screenshots (chat, kanban)
  - [x] Nexus screenshots (MCP console / CodeIntel / SPEC watcher)
  - [ ] Optimize images (webp, reasonable size) -> optional pending
  - Requirement: spec.md #R2
  - work_prepend.md -> Register status here

- [ ] **[P]** T13. LinkedIn Profile - 30min
  - [ ] Create LinkedIn profile
  - [ ] Headline: "Full-Stack AI Developer & Technical Founder"
  - [ ] About section with complete narrative
  - [ ] Detailed experience (3 entries)
  - [ ] Skills: Next.js, TypeScript, React, Prisma, Supabase, OpenAI, etc.
  - [ ] Link to landing in the profile
  - Requirement: spec.md #R8
  - work_prepend.md -> Register status here

- [ ] **[P]** T14. SEO & Social Sharing - 15min
  - [ ] Verify OG tags in layout.tsx
  - [ ] Create simple OG image (can be screenshot of the landing)
  - [ ] Verify preview on Twitter/LinkedIn
  - [ ] Final favicon
  - Requirement: spec.md #R9
  - work_prepend.md -> Register status here

- [ ] **[OPT]** T15. Animations and visual polish - 30min
  - [ ] Entrance animations with Framer Motion
  - [ ] Smooth scroll between sections
  - [ ] Hover effects on cards
  - [ ] Smooth transitions
  - Requirement: spec.md #R1
  - work_prepend.md -> Register status here

### Phase 4 Checkpoint

- [x] Screenshots in cards
- [ ] LinkedIn created and optimized
- [ ] SEO configured
- [ ] Vercel deploy working
- [ ] Shareable link
- Expected duration: 1h 35min

---

## PHASE 5: Testing & Launch

**Goal**: Verify everything works, Rodolfo approves, and the link is ready to share.

- [ ] **[B]** T16. Complete testing - 20min
  - [ ] TypeScript: `npx tsc --noEmit` -> 0 errors
  - [ ] ESLint: `npm run lint` -> 0 warnings
  - [ ] Mobile testing: verify responsive
  - [ ] Links testing: all links work
  - [ ] PDF testing: download and verify content
  - [ ] Vercel testing: automatic deploy works
  - Requirement: spec.md #R1-R9
  - work_prepend.md -> Register results

- [ ] **[B]** T17. Rodolfo review - 10min
  - [ ] Rodolfo reviews the full landing
  - [ ] Rodolfo approves content (texts, projects, answers)
  - [ ] Rodolfo approves design
  - [ ] Feedback -> adjustments if needed
  - Requirement: spec.md #R1-R9
  - work_prepend.md -> Register approval

### Phase 5 Checkpoint

- [ ] TypeScript 0 errors
- [ ] ESLint clean
- [ ] All links work
- [ ] PDF downloads correctly
- [ ] Rodolfo approved
- [ ] Link ready to share
- Expected duration: 30min

---

## Critical Path

**Main dependency**: T1 -> T2 -> T4 -> T5 -> T9 -> T11 -> T16 -> T17

**Parallelizable tasks**: [T6, T7, T8] can be done simultaneously after T4.
**Parallelizable tasks**: [T12, T13, T14] can be done simultaneously.

**Total estimated time**: ~6 hours

---

## Success Metrics

| Metric | Criteria | Verification |
|--------|----------|--------------|
| Compilation | 0 TypeScript errors | `npx tsc --noEmit` |
| Quality | 0 ESLint warnings | `npm run lint` |
| Deploy | Auto-deploy on Vercel | Push to GitHub -> deploy |
| PDF | Downloadable and readable | Click button -> PDF |
| Responsive | Mobile-first | Mobile test |
| Links | All work | Click each link |

---

**SPEC Triangle 2.1:**

- spec.md <-> tasks.md (Requirements are implemented in Phases/Tasks)
- tasks.md <-> work_prepend.md (Tasks are executed, progress in LIFO)
- work_prepend.md <-> spec.md (Changes are recorded in Delta Log)

---

## Current Project Reality Tasks (Post-original SPEC)

> This section was added after the original Spanish SPEC translation to reflect
> the real project state. It is intentionally separated from the original plan.

- [x] **[B]** T23. Public GitHub repository created
  - [x] Repository: `https://github.com/fenixgx/curriculum`
  - [x] Public profile link: `https://github.com/fenixgx`
  - Requirement: spec.md Current Project Reality Update

- [x] **[B]** T24. Vercel deployment completed
  - [x] Live URL: `https://rodolfo-giannotti.vercel.app/`
  - [x] Project name: `rodolfo-giannotti`
  - Requirement: spec.md Current Project Reality Update

- [x] **[B]** T25. Contact channels updated
  - [x] Email CTA
  - [x] WhatsApp contact button
  - [x] Floating WhatsApp button
  - [x] GitHub link
  - [x] LinkedIn link
  - Requirement: spec.md Current Project Reality Update

- [x] **[P]** T26. Browser tab icon / favicon added
  - [x] `src/app/icon.svg`
  - Requirement: spec.md R9

- [x] **[B]** T27. n8n automation experience added
  - [x] `src/components/AutomationSystems.tsx`
  - [x] IAMenu project data mentions n8n growth workflows
  - Requirement: spec.md Current Project Reality Update

- [x] **[B]** T28. Public code breadcrumbs added
  - [x] Important source files include breadcrumbs
  - [x] Breadcrumbs are public-facing and SPEC-linked
  - [x] Latest verification passed
  - Requirement: spec.md Current Project Reality Update

- [x] **[B]** T29. Private/public boundary protected
  - [x] `.spec/` ignored
  - [x] AGENTS/private docs ignored
  - [x] generated/local files ignored
  - Requirement: spec.md Current Project Reality Update

- [ ] **[B]** T30. Rodolfo review of updated SPEC
  - [ ] Verify original translation is not mixed with invented content
  - [ ] Verify "Current Project Reality Update" is accurate
  - [ ] Decide whether the SPEC stays private or becomes a public workflow proof
  - Requirement: spec.md Current Project Reality Update
