# SPEC: Curriculum Portfolio Landing - Rodolfo Giannotti

<!--
╔══════════════════════════════════════════════════════════════════════════════╗
║ SPEC: Curriculum Portfolio Landing - Rodolfo Giannotti                      ║
║                                                                              ║
║ WHAT IS THIS:                                                                ║
║ Professional landing page that works as technical portfolio + interactive CV. ║
║                                                                              ║
║ ARCHITECTURE:                                                                ║
║ Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + Vercel.                ║
║ GitHub push -> merge -> Vercel auto-deploy.                                  ║
║                                                                              ║
║ KEY FILES:                                                                   ║
║ - src/app/page.tsx                  Main landing page                         ║
║ - src/components/Hero.tsx           Hero section                              ║
║ - src/components/Projects.tsx       Projects section                          ║
║ - src/components/HowIWorkWithAI.tsx AI/SPEC/Nexus section                     ║
║ - src/components/Experience.tsx     Experience timeline                       ║
║ - src/components/HonestAnswers.tsx  Devil's advocate Q&A                      ║
║ - src/components/Contact.tsx        Contact section                           ║
║ - src/data/*.ts                     Static content/data                       ║
║                                                                              ║
║ BE CAREFUL:                                                                  ║
║ This page is Rodolfo's public CV. Do not invent claims.                       ║
║ Keep spec.md <-> tasks.md <-> work_prepend.md synchronized.                  ║
╚══════════════════════════════════════════════════════════════════════════════╝
-->

## Problem

Rodolfo Giannotti needs to get online work as a Full-Stack AI Developer. He has
4 built apps (IAMenu, MYAIBS, Taski, Nexus), 23 years of technology experience,
and a unique methodology for working with AI. But he does not have:

- a professional online CV,
- a portfolio that shows the products in context,
- a LinkedIn profile ready to share,
- a downloadable PDF,
- a clear narrative that explains his non-linear path.

### Current Symptoms

- The projects are dispersed across different URLs.
- The value of Nexus and the SPEC system is not obvious to recruiters.
- IAMenu, MYAIBS, Taski, and Nexus need a unified presentation.
- The story needs to be truthful and strong without sounding inflated.
- The page must feel like a technical CV/portfolio, not only a product sales page.

### Problem Metrics

- 4 main projects to present.
- 23+ years of technology/business experience to explain.
- 15 years running Roka Creativa.
- 40+ IAMenu users/trials in the first month.
- 10+ countries reached through IAMenu SEO.
- 155+ SPECs across projects.

## Solution

Create a professional landing page with Next.js 16 that works as a technical
portfolio + interactive curriculum. The landing is deployed on Vercel with
auto-deploy from GitHub, demonstrating the real development workflow.

### Approved Repositioning (2026-05-07)

- Keep English as the first language.
- Main role: `Full-Stack AI Developer`.
- Make the page more human and curriculum-like.
- Keep visual impact because the page itself demonstrates capability.
- Use GitHub as portfolio infrastructure without exposing private project code.
- Create LinkedIn after the final page narrative is stable.
- Humanize Nexus as personal methodology/infrastructure for working better with AI, not as an enterprise product.
- Replace aggressive trial language with a more professional technical conversation / trial task.

## FILE STRUCTURE (KEEP UPDATED)

### Files to Create

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── HowIWorkWithAI.tsx
│   ├── Experience.tsx
│   ├── TechStack.tsx
│   ├── HonestAnswers.tsx
│   ├── TryBeforeYouHire.tsx
│   └── Contact.tsx
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── answers.ts
│   └── stack.ts
└── lib/
    └── utils.ts
```

### Configuration Files

```text
package.json
next.config.ts
tsconfig.json
tailwind.config.ts / Tailwind v4 config
eslint.config.mjs
```

### External Config (Rodolfo)

- GitHub repo (private or public)
- Vercel project
- LinkedIn profile
- Domain, if desired later

## Requirements

### R1: Landing Page with Hero Section [MVP]

**Problem**: The first impression must clearly explain who Rodolfo is and why he is relevant.

**Solution**: A strong hero with role, summary, CTA, and personal identity.

**Acceptance Criteria**:

- [ ] Shows name: Rodolfo Giannotti
- [ ] Shows main role: Full-Stack AI Developer
- [ ] Clear headline about building full-stack AI products
- [ ] Short personal/professional summary
- [ ] CTA to selected work / projects
- [ ] CTA to contact
- [ ] Responsive and visually polished

**Cross-reference**:

- tasks.md Phase 2, T4
- work_prepend.md session entries for hero/repositioning

### R2: Projects Section - 4 Apps as Demo [MVP]

**Problem**: Rodolfo's projects are dispersed (iamenu.ai, myaibs.com, taski-lilac.vercel.app) without unified context.

**Solution**: A projects/selected work section with four projects.

**Acceptance Criteria**:

- [ ] IAMenu: "SaaS digital menus · 40+ users · 10 countries · 7 AI features"
- [ ] MYAIBS: "CMS for events and landings · visual builder"
- [ ] Taski: "AI-first productivity app · 51 AI tools"
- [ ] Nexus: "AI Development Infrastructure · MCP server · Demo on request"
- [ ] Functional live links (except Nexus -> "Demo available on request")
- [ ] Each card includes stack and key features
- [ ] Does not expose private code

**Cross-reference**:

- tasks.md Phase 2, T5
- work_prepend.md screenshot integration entries

### R3: How I Work with AI Section [MVP]

**Problem**: Using AI tools is common; Rodolfo's difference is the system around them.

**Solution**: A section explaining SPEC System, Nexus, and tools.

**Acceptance Criteria**:

- [ ] Explains SPEC System briefly
- [ ] Explains Nexus in 2-3 lines
- [ ] Mentions AI tools used: Claude Code, OpenCode, VSCode, Antigravity, Obsidian, Zed, Kiro, Warp
- [ ] Shows that the workflow is structured and repeatable
- [ ] Does not make Nexus sound like a public enterprise product

**Cross-reference**:

- tasks.md Phase 2, T6
- work_prepend.md repositioning entries

### R4: Experience Timeline [MVP]

**Problem**: Rodolfo's path is non-linear and can be misunderstood.

**Solution**: Timeline showing the evolution: systems -> business -> AI products.

**Acceptance Criteria**:

- [ ] Shows AI Developer (2020-present)
- [ ] Shows Roka Creativa (2005-2020)
- [ ] Shows Systems Admin (2000-2005)
- [ ] Explains 15 years with graphic arts / hospitality / web clients
- [ ] Explains systems/network background
- [ ] Avoids making the path look like a junior transition

**Cross-reference**:

- tasks.md Phase 2, T7

### R5: Honest Answers - Devil's Advocate [B]

**Problem**: Recruiters may have doubts. Better answer directly than hide weak points.

**Solution**: Accordion/section with hard questions and honest answers.

**Acceptance Criteria**:

- [ ] Includes questions from the devil's advocate brainstorming
- [ ] Answers are honest and not exaggerated
- [ ] Tone is transparent, not defensive
- [ ] Questions include:
  1. "4 apps but none took off?" -> IAMenu launched 1 month ago, 40+ users, 10 countries
  2. "You worked alone?" -> Led 10-person team for 15 years at Roka Creativa
  3. "Why seek a job if you build products?" -> wants to learn and work in a team
  4. "Nexus - anyone else use it?" -> internal tool, demo available
  5. "English B2?" -> understands technical meetings, reads/writes better than speaks
  6. "Legacy code?" -> surgical changes, respect production
  7. "No open source?" -> private products, PR basics understood
  8. "What if AI can't solve something?" -> built Nexus to preserve context
  9. "Hardest bug?" -> IAMenu 3-level hierarchy with DnD
  10. "Production incidents?" -> works until solved

**Cross-reference**:

- tasks.md Phase 3, T9

### R6: Try Before You Hire [B]

**Problem**: Rodolfo needs a differentiator that reduces risk for companies.

**Solution**: Offer a small technical conversation / trial task / requirement review.

**Acceptance Criteria**:

- [ ] Clear CTA
- [ ] Professional tone
- [ ] Does not sound desperate
- [ ] Shows willingness to prove work

**Cross-reference**:

- tasks.md Phase 3, T10

### R7: PDF Download [B]

**Problem**: Many hiring processes still need a PDF.

**Solution**: Provide downloadable PDF version of the CV.

**Acceptance Criteria**:

- [ ] PDF can be downloaded
- [ ] PDF has clean layout
- [ ] PDF content matches the landing
- [ ] PDF is updated after content stabilizes

**Cross-reference**:

- tasks.md Phase 3, T11

### R8: LinkedIn Profile [P]

**Problem**: Rodolfo does not have a LinkedIn profile ready.

**Solution**: Create LinkedIn after finalizing the page narrative.

**Acceptance Criteria**:

- [ ] LinkedIn profile created
- [ ] Headline aligned with landing
- [ ] About section uses the final narrative
- [ ] Experience sections filled
- [ ] Landing link added

**Cross-reference**:

- tasks.md Phase 4, T13

### R9: SEO & Social Sharing [P]

**Problem**: The page should look professional when shared.

**Solution**: Metadata, Open Graph, Twitter card, and favicon.

**Acceptance Criteria**:

- [ ] Title and description configured
- [ ] OG tags configured
- [ ] Twitter card configured
- [ ] Favicon configured
- [ ] Social preview tested

**Cross-reference**:

- tasks.md Phase 4, T14

## Implementation

### Technical Stack

- **Framework**: Next.js 16
- **UI**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Tabler Icons / lucide if needed
- **Deployment**: Vercel (auto-deploy from GitHub)
- **Version Control**: GitHub

### Development Flow

1. Create Next.js project
2. Configure base structure
3. Build sections
4. Add content/data
5. Verify TypeScript/lint/build
6. Push to GitHub
7. Deploy through Vercel

### Deploy Flow

```text
Developer push -> GitHub -> Vercel detects -> Build -> Automatic deploy
```

## Quality Standards

- TypeScript must compile with 0 errors.
- ESLint must pass.
- Build must pass.
- Responsive layout required.
- Links must work.
- Content must be truthful.
- No private code exposure.
- SPEC triangle must stay synchronized.

## Success Metrics

| Metric | Criteria |
|--------|----------|
| Build | `npm run build` passes |
| TypeScript | `npx tsc --noEmit` passes |
| Lint | `npm run lint` passes |
| Deploy | Vercel URL works |
| Content | Rodolfo approves text |
| UX | Page feels like portfolio/CV, not only SaaS landing |
| Contact | Email/GitHub/LinkedIn available |

## Delta Log (Requirement Changes)

### [2026-05-07] Initial Creation

- SPEC created with 9 requirements.
- Tasks and work log initialized.
- Direction: technical portfolio + interactive CV.

### [2026-05-07] Phase 1-3 Progress

- Initial landing built.
- Core components created.
- Data files created.
- Build successful.

### [2026-05-07] Post-Review Improvements from Rodolfo

- **ADDED** "About Me" section - first-person intro with real story.
- **MODIFIED** Hero to include Rodolfo's name and personal identity.
- **MODIFIED** CTA from download-first to contact-first.

### [2026-05-07] Technical Editorial Repositioning

- **MODIFIED** R1: Hero must tell Rodolfo first, not products first.
- **MODIFIED** R2: Projects become work cases with problem, Rodolfo's role, solution, technical challenge, and real status. Do not expose private code.
- **MODIFIED** R3: How I Work with AI must humanize Nexus/SPEC.
  - BEFORE: "155+ specs, 1600+ memories" as headline.
  - NOW: clear story: "I got tired of AI forgetting context, so I built Nexus and a SPEC system." Metrics as support, not headline.
  - Reason: Nexus is a differentiator, but must sound credible to recruiters and technical teams.
- **MODIFIED** R5: Honest Answers must be more strategic and less defensive.
- **MODIFIED** R6: Try Before You Hire becomes a professional technical conversation / trial task.

---

## Current Project Reality Update (Post-original SPEC)

> This section is not part of the original Spanish SPEC text.
> It was added after implementation to keep the SPEC aligned with the real
> project state. The base SPEC above remains a translation of the original.

### Current Live State

- Public URL: `https://rodolfo-giannotti.vercel.app/`
- GitHub repository: `https://github.com/fenixgx/curriculum`
- GitHub profile used on the site: `https://github.com/fenixgx`
- LinkedIn profile: `https://www.linkedin.com/in/rodolfo-giannotti-946261409`
- Primary language: English
- Spanish version: pending for later
- Deployment: Vercel
- Repository visibility: public
- SPEC folder visibility: local/ignored unless Rodolfo decides to publish it

### Current Real File Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── AutomationSystems.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── Hero.tsx
│   ├── HonestAnswers.tsx
│   ├── HowIWorkWithAI.tsx
│   ├── Projects.tsx
│   ├── TechStack.tsx
│   └── TryBeforeYouHire.tsx
└── data/
    ├── answers.ts
    ├── experience.ts
    ├── projects.ts
    └── stack.ts
```

### Implemented Beyond the Original Plan

- Real profile photo integrated.
- Profile photo can be opened/zoomed.
- Email CTA is actionable.
- WhatsApp contact added in the contact section and as a floating button.
- WhatsApp uses the site visual system instead of default green branding.
- GitHub link points to `https://github.com/fenixgx`.
- LinkedIn link points to Rodolfo's created profile.
- Favicon/browser tab icon added through `src/app/icon.svg`.
- n8n automation has its own section: `AutomationSystems.tsx`.
- Project screenshots integrated for IAMenu, MYAIBS, Taski, and Nexus.
- Nexus screenshots are console/MCP screenshots because Nexus is internal infrastructure.
- Public code files include breadcrumbs showing why each file exists, how it flows, dependencies, risks, and SPEC reference.
- `.gitignore` protects `.spec/`, AGENTS files, private docs, generated/local assets, and build output.

### Real Public Narrative Now Implemented

The live site presents Rodolfo in this order:

1. Hero: person, role, photo, contact, location.
2. About: human/professional profile.
3. Selected Work: IAMenu, MYAIBS, Taski, Nexus.
4. How I Work with AI: SPEC, Nexus, tools, context methodology.
5. Automation & Growth: n8n workflows and product operations.
6. Experience: present AI work, Roka Creativa, systems/embassy/betting background.
7. Tech Stack.
8. Honest Answers.
9. Try Before You Hire.
10. Contact + floating WhatsApp.

### Current Truth Boundaries

These are project-specific truth guardrails added after the original SPEC because
Rodolfo corrected the narrative during review:

- Do not say Rodolfo is fluent in spoken English.
- Do not say Rodolfo was a chef.
- Do not describe Roka as mainly a software/web production company.
- Do not present IAMenu as proven paid traction unless Rodolfo confirms it.
- Do not present Nexus as a public product used by other teams.
- Do not imply GitHub contains all private product code.
- Do not present all products as mature/fully launched.
- Do not use "10 employees" as a headline flex; use team/operations context only when useful.

These guardrails are **not** from the original rules file. They are current
project content rules derived from Rodolfo's later corrections.

### Current Open Items

- PDF CV remains pending.
- Spanish version remains pending.
- OG/social preview image remains pending.
- Final decision pending: whether to publish the SPEC methodology publicly.
- Final review pending: Rodolfo decides if the current English SPEC update represents the work correctly.

### Current Verification State

Latest public code verification after breadcrumb work:

```text
npx tsc --noEmit  -> passed
npm run lint      -> passed
npm run build     -> passed
```

The SPEC itself is local and not pushed.

---

**Triangle**:

- `spec.md` defines the problem, requirements, and decisions.
- `tasks.md` defines execution.
- `work_prepend.md` records work in LIFO mode.
