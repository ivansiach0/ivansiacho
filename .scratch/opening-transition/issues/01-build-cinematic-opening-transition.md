# 01: Build the cinematic Opening transition

**Specification:** [Cinematic Opening Transition](../spec.md)

**What to build:** A complete scroll-linked journey from the Opening to the
Experience bridge, with independent city and figure layers, a later name exit,
a dark fade, persistent contact, and an immediate keyboard-accessible skip.
Deliver static normal-flow alternatives for reduced motion and layouts where
the content cannot fit, together with browser evidence and two-axis review.

**Blocked by:** None (can start immediately). The prerequisite static Opening
was delivered and merged through PR #1.

**Status:** in-review

**Branch:** `feat/opening-transition-01-cinematic-scroll`

- [x] Independent, aligned city and transparent figure layers produce the approved depth effect without gaps or a duplicated figure.
- [x] Professional copy exits first, the name exits later, and a dark fade reveals the exact approved Experience bridge content.
- [x] Progress follows native scroll, reverses upward, and uses a shorter mobile range.
- [x] Email and LinkedIn stay visible and keyboard-usable throughout the animated range.
- [x] Skip animation jumps directly to the bridge and moves focus to its meaningful destination without playing the skipped sequence.
- [x] Reduced motion and layouts too short for the content show both sections in static reading order without animation-only space.
- [x] Preference and viewport changes clean up or rebuild the enhancement without duplicate spacers, hidden controls, or focus loss.
- [x] Keyboard, text reflow, contrast, image failure, and responsive reachability meet the specification.
- [x] TypeScript and production build pass; rendered start, middle, end, reverse, skip, and fallback behaviors are verified and documented.
- [x] Standards and Spec reviews are completed against the recorded base; actionable findings are resolved.
- [ ] The ticket branch is pushed and a PR is opened against main, with its URL recorded locally.

## Comments

The owner approved one complete ticket without active blockers. The rendered
page is the agreed verification boundary; implementation details are not test
contracts. The separated artwork study was explicitly requested and approved
during design.
