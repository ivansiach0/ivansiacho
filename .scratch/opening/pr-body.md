## Summary

Recruiters can now identify Ivan Siachoque's frontend/UI positioning and reach
his email or LinkedIn profile from a responsive, accessible static introduction.
This PR delivers the first approved portfolio ticket and establishes the local
engineering workflow for subsequent ticket-by-ticket development.

- Build the Opening with React, Vite, TypeScript, and vanilla-extract. GSAP is
  installed but is not loaded by this static feature.
- Add the approved English copy, functional contact links, original nighttime
  city artwork, and explicit conceptual-portrait labeling.
- Configure the local specification/ticket tracker, domain glossary, and the
  grill-with-docs → to-spec → to-tickets → implement → code-review workflow.
- Add `npm run stop` for port 5173 and pin `npm run dev` to that port with
  `--strictPort`.
- Document one branch and one PR per ticket. The original commits are preserved;
  the final upload commit includes a full summary of the completed work.

## Validation

- `npm run build` passed, including TypeScript checking, after the final tooling changes.
- Browser checks covered desktop, 320px and 390px mobile, short landscape,
  keyboard focus, contact destinations, image-failure fallback, and text enlarged
  to 200% through a temporary root-font override.
- Sampled text contrast exceeded 4.5:1; the minimum recorded value was 6.55:1.
- Independent Standards and Spec reviews reported zero actionable findings.
- Validation used the in-app browser; no cross-browser matrix or full screen
  reader session was conducted. OS reduced-motion preferences were not changed;
  the implementation has no animations or transitions.

## Ticket and evidence

- [Ticket 01: Build the accessible static Opening](https://github.com/ivansiach0/ivansiacho/blob/69f9cfb/.scratch/opening/issues/01-build-accessible-static-opening.md)
- [Approved specification](https://github.com/ivansiach0/ivansiacho/blob/69f9cfb/.scratch/opening/spec.md)
- [Validation record](https://github.com/ivansiach0/ivansiacho/blob/69f9cfb/.scratch/opening/validation.md)
- [Two-axis code review](https://github.com/ivansiach0/ivansiacho/blob/69f9cfb/.scratch/opening/review.md)

![Static Opening on desktop](https://raw.githubusercontent.com/ivansiach0/ivansiacho/69f9cfb/.scratch/opening/evidence/desktop.jpg)

## Scope

The feature is local-only. Cinematic transitions, professional chapters, expanded
case studies, CV downloads, and deployment belong to subsequent approved tickets.
