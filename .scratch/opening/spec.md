# Opening: Accessible Static Introduction

**Status:** ready-for-agent

## Problem Statement

A recruiter evaluating Ivan Siachoque for a senior frontend or UI engineering
role needs to understand his professional positioning and find a direct contact
method immediately. The project currently contains workflow documentation but
no runnable portfolio.

The first feature must establish a complete, credible introduction that can be
reviewed independently before adding cinematic transitions or professional
chapters.

## Solution

Create a responsive, accessible, static Opening in English. Introduce Ivan with
the approved professional headline and copy, an original nighttime city visual
identity, and two working links: email and LinkedIn.

The composition establishes the visual foundation of the future cinematic
portfolio while remaining immediately readable and usable without motion.

### Approved content

- Name: **Ivan Siachoque**
- Professional headline: **Senior Frontend Engineer · UI & Motion**
- Introduction: **I build thoughtful interfaces and the systems behind them.**
- Supporting copy: **15+ years turning complex challenges into clear, usable web experiences.**
- Primary action: **Get in touch**, linking to `mailto:ivanfernandosia@gmail.com`.
- Secondary action: **LinkedIn**, linking to
  `https://www.linkedin.com/in/ivan-siachoque-17491247/`.

## User Stories

1. As a recruiter, I want to see Ivan's name immediately, so that I know whose portfolio I am evaluating.
2. As a recruiter, I want to see his professional headline, so that I can assess its relevance to frontend and UI engineering roles.
3. As a recruiter, I want to read a concise introduction, so that I understand the connection between his interface work and engineering experience.
4. As a recruiter, I want to see his experience expressed without invented metrics, so that the introduction remains credible.
5. As a recruiter, I want to activate Get in touch, so that I can initiate an email using my configured email application.
6. As a recruiter, I want to open his LinkedIn profile, so that I can investigate his professional background.
7. As an English-speaking recruiter, I want all portfolio content in English, so that I can evaluate it without translation.
8. As a desktop visitor, I want a deliberate composition with an original nighttime city identity, so that the Opening communicates visual craft.
9. As a mobile visitor, I want the same content and actions to fit the available width, so that I can evaluate Ivan without horizontal scrolling.
10. As a visitor on a short screen, I want content to remain reachable by scrolling, so that a viewport-height composition does not clip important information.
11. As a keyboard user, I want to reach and activate both contact links in a logical order, so that I can use the Opening without a pointer.
12. As a keyboard user, I want a clearly visible focus indicator, so that I can identify the active control.
13. As a screen reader user, I want a meaningful page title, a main landmark, a clear primary heading, and descriptive links, so that I can understand and navigate the Opening.
14. As a visitor with low vision, I want readable typography and sufficient text contrast over the illustration, so that visual atmosphere does not obscure the information.
15. As a visitor increasing text size or zoom, I want content to reflow, so that the name, introduction, and actions remain usable.
16. As a visitor who prefers reduced motion, I want a fully static experience, so that the Opening does not introduce unexpected movement.
17. As a visitor whose image request fails, I want the introduction and actions to remain readable, so that the illustration is not a prerequisite for understanding the page.
18. As a recruiter, I want only actions with existing destinations, so that I am not directed to unfinished sections.
19. As a visitor, I want any conceptual portrait to be distinguishable from a verified likeness, so that an original illustration is not misrepresented as a photograph of Ivan.
20. As the portfolio owner, I want the Opening to run locally and build for production using the agreed stack, so that future features can extend a working foundation.

## Implementation Decisions

- Use React, Vite, TypeScript, GSAP, and vanilla-extract. Use vanilla-extract for
  authored styling, including global styles where needed.
- Include GSAP as part of the agreed stack; this feature introduces no animated
  behavior, scroll timelines, parallax, or animation controllers.
- Build only the Opening and the minimum application/tooling foundation required
  to run and review it. Avoid speculative abstractions for later chapters.
- Use the exact approved English copy and contact destinations above. Treat the
  professional headline as target-role positioning, not an employer's job title.
- Use an original nighttime city illustration, without Rockstar/GTA branding or
  copied game artwork. Integrate the conceptual portrait direction where the
  composition supports it, identifying it as conceptual rather than a likeness.
- Keep final visual assets in the project so the built site does not depend on
  temporary generation paths. Maintain a readable background fallback.
- Keep the visual and content layers static. Permit ordinary document scrolling
  when content exceeds the viewport; do not lock scrolling.
- Make the two actions real links. No contact form, simulated submission, or
  email-delivery claim is part of this feature.
- Use semantic document structure, visible keyboard focus, and responsive text
  and spacing. Target WCAG AA text contrast: 4.5:1 for normal text and 3:1 for
  qualifying large text. Contact targets must be at least 44 by 44 CSS pixels.
- Decorative artwork must not create redundant screen reader content. Keep any
  explanation needed to identify the conceptual portrait available as text.
- Use a real page title, English document language, and a concise description.
- Keep project code, comments, documentation, tickets, and commit messages in
  English. Chat with the owner remains in Spanish.
- Deliver a local working version. External publication is outside this feature.

## Testing Decisions

- The agreed verification boundary is the rendered Opening in a real browser,
  supplemented by TypeScript checking and a production build.
- Verify externally observable behavior rather than component structure, CSS
  class names, hook calls, or implementation details.
- No prior automated test suite exists. Do not introduce unit tests that merely
  mirror static markup for this feature.
- Review representative desktop and mobile viewports, including a narrow
  320-CSS-pixel layout and a short landscape viewport.
- Verify all approved copy, link labels, and link destinations. Inspect the mailto
  destination without sending email or relying on an installed email client.
- Verify keyboard order, focus visibility, and link activation semantics.
- Inspect semantic heading and landmark structure, and evaluate text contrast
  against the actual surfaces, including illustration overlays.
- Check text reflow at increased text size or zoom, absence of horizontal
  overflow, image-failure fallback, and a fully static reduced-motion experience.
- Inspect the browser for application errors and failed required resources.
- Record completed checks, observed findings, and verification limits. A successful
  build alone is not evidence of visual or interaction correctness.
- Review the finished change against this spec and the documented repository
  standards using the Git baseline recorded before implementation.

## Out of Scope

- Cinematic transitions, animated entrances, parallax, scene pinning, scroll
  progress indicators, sound, and motion controls.
- Professional chapters, case studies, or recreated client interfaces.
- CV generation or download, GitHub presentation, and extended biography.
- Navigation links to future sections, menus, loading sequences, and splash screens.
- Contact forms, backend services, analytics, authentication, or CMS integration.
- External hosting, deployment, and domain setup.
- Specs or tickets for subsequent features.

## Further Notes

- This is the first feature, not the implementation of the full portfolio brief.
  Later features follow their own complete workflow after this one is reviewed.
- Professional content is grounded in the owner-supplied CV:
  https://docs.google.com/document/d/1ABMRRrK59hPoNTjDXYETL8_buOsAeNZbc3Nrjo4mzzU
- The broader approved direction is an original cinematic portfolio aimed at
  frontend/UI recruitment, with future chapters covering CrowdComfort through
  VanHack, earlier CrowdComfort work, and Huge's Google Pay experience.
- The owner approved this feature's content, actions, and browser-level validation
  in the conversation before this specification was written.
