# Cinematic Opening Transition

**Status:** ready-for-agent

## Problem Statement

The current Opening introduces Ivan clearly but is static. It does not yet
demonstrate the cinematic, scroll-linked interface craft that the portfolio is
intended to communicate to frontend/UI recruiters. Its single flattened artwork
also prevents independent foreground and background movement.

A recruiter must remain able to contact Ivan or reach the next useful content
without completing an animated sequence. Motion must not make the introduction
unreadable, hide focusable controls, or trap content on short screens.

## Solution

Add a reversible, scroll-linked Opening transition from the existing introduction
to an Experience bridge. Superimpose the approved clean city plate and transparent
conceptual figure on their matching canvases. Move them independently to suggest
depth, retain the name briefly after the other professional copy fades, then use
a dark fade to introduce the bridge.

Keep email and LinkedIn visible throughout the transition. Provide an immediate,
keyboard-accessible Skip animation action. Present the same content in normal
flow when reduced motion is preferred or the complete Opening cannot fit within
the available viewport height.

### Approved content

Retain the existing name, professional headline, professional copy, email and
LinkedIn destinations, and conceptual-artwork disclosure from the completed
Opening. Add only:

- Bridge heading: **Selected experience**
- Bridge copy: **Building products at CrowdComfort. Crafting global experiences at Huge.**
- Skip action: **Skip animation**

## User Stories

1. As a recruiter, I want to see the existing Opening immediately, so that motion does not delay identifying Ivan or his professional positioning.
2. As a recruiter, I want the city's scale to change gently as I scroll, so that the introduction feels cinematic and directly responsive.
3. As a visitor, I want the foreground figure to move less than the city, so that the composition conveys depth.
4. As a visitor, I want the two image layers to remain aligned, so that independent motion does not expose an opaque matte, duplicate figure, or mismatched framing.
5. As a recruiter, I want professional copy to leave before the name, so that Ivan's identity remains the visual anchor during the first part of the transition.
6. As a visitor, I want a dark fade between the Opening and Experience bridge, so that the scene change feels deliberate.
7. As a recruiter, I want Selected experience to introduce CrowdComfort and Huge, so that the transition ends in useful professional context.
8. As a visitor, I want animation progress to follow scroll position, so that I can stop, continue, or reverse the sequence at my own pace.
9. As a visitor scrolling upward, I want the sequence to reverse and restore the Opening, so that the introduction remains revisitable.
10. As a desktop visitor, I want the animated progression to take approximately one additional viewport of scrolling, so that it feels substantial without a long intro.
11. As a mobile visitor, I want a shorter animated range, so that the journey does not demand excessive swiping.
12. As a recruiter, I want email and LinkedIn to remain visible during the transition, so that I can act at any point.
13. As a recruiter, I want Skip animation to take me directly to the Experience bridge, so that I can bypass the progression.
14. As a keyboard user, I want Skip animation to move focus to the bridge destination, so that the shortcut updates my navigation position as well as the visual position.
15. As a keyboard user, I want contact and skip controls to have visible focus and logical order, so that fading content never leaves me focused on an invisible control.
16. As a visitor using reduced motion, I want the Opening and bridge to appear statically in reading order, so that all information remains available without parallax, zoom, fading, or pinning.
17. As a visitor changing motion preferences, I want the page to adapt without a reload, so that the animation respects my current preference.
18. As a visitor on a short screen or with enlarged text, I want normal document flow when the Opening cannot fit, so that all content and controls stay reachable.
19. As a visitor resizing or rotating my screen, I want the layout and transition to adapt, so that I do not encounter stale offsets, overlapping controls, or trapped content.
20. As a screen reader user, I want the Opening and Experience bridge to retain meaningful document structure and reading order, so that visual movement is not required to understand the page.
21. As a visitor, I want scrolling to remain native, so that familiar wheel, touch, and keyboard behavior continues to work.
22. As a visitor, I want content and contact links to remain usable if an artwork request fails, so that decorative assets do not gate the professional information.
23. As a visitor, I want the figure to remain explicitly conceptual, so that the artwork is not misrepresented as a photograph of Ivan.
24. As a recruiter, I want only existing professional content and real action destinations, so that the transition does not lead to unfinished chapters or placeholder buttons.
25. As the portfolio owner, I want the feature to remain stable under development reloads and remounts, so that animation setup does not accumulate duplicate pin spacers or handlers.
26. As the portfolio owner, I want the change reviewed and published through its ticket branch and PR, so that the feature follows the agreed incremental workflow.

## Implementation Decisions

### Visual composition

- Retain React, Vite, TypeScript, and vanilla-extract. Use the installed GSAP and
  ScrollTrigger to coordinate the scroll-linked sequence.
- Reuse the approved artwork study: an opaque clean city plate and a transparent
  conceptual figure, both 1672 by 941 pixels. Store production delivery assets
  locally and preserve transparency during any encoding optimization.
- Apply a shared responsive framing model to both plates. Keep the figure's
  lower-right placement and align the layers before independent transforms.
- Zoom the city out gently while the figure zooms out less. Avoid exposing cropped
  foreground edges or revealing gaps beyond the city plate.
- Fade the professional headline and descriptive copy first; retain the name
  slightly longer. Fade through a dark overlay and reveal the Experience bridge.
- Use a modest progression of roughly one extra viewport on desktop, with a
  shorter mobile range. Fine timing and transform magnitudes may be tuned during
  visual verification without changing the approved sequence.
- Make the timeline scrub with native scroll and reverse on upward scrolling.
  Do not add an automatic entrance, forced wheel/touch interception, or scroll
  smoothing library.
- Keep the artwork disclosure available and retain the original flattened asset
  rather than overwriting it during integration.

### Content and interaction

- The bridge is a real editorial destination with the exact approved heading and
  copy. It is not a detailed professional chapter or case study.
- Preserve the approved contact destinations and maintain a discreet, visible
  contact area throughout the animated range.
- Keep contact controls outside any fading content treatment. Avoid duplicate
  active contact sets or invisible focusable controls.
- Provide Skip animation from the initial Opening and throughout the transition.
  Activation must jump directly to the bridge without playing through a smooth
  animated scroll, then move keyboard focus to a meaningful bridge destination.
- Keep focus visible, prevent the persistent contact area from obscuring focused
  content, and preserve logical tab order.
- Ordinary scrolling must not move keyboard focus automatically. The focus change
  is associated with explicit skip activation.
- Preserve one main landmark and the existing primary heading. Introduce an
  appropriate subordinate heading for the bridge, in document reading order.
- Maintain the existing text-contrast and minimum 44-by-44-CSS-pixel contact-target
  requirements. Reassess contrast against the moving composition and overlay.

### Responsive behavior and lifecycle

- Default content must remain readable in document flow. Enhance with motion only
  when the complete Opening can fit without clipping or obscuring controls.
- When reduced motion is preferred, show both sections statically in reading
  order. Do not add decorative transitions, parallax, zoom, pinning, or extra
  animation-only scroll distance in this mode.
- If viewport height or text enlargement prevents the Opening from fitting,
  use the static normal-flow presentation. Skip and contact must remain usable.
- Adapt to viewport size, orientation, and motion-preference changes. Recalculate
  geometry or remove the enhancement as appropriate without forcing focus.
- Scope animation setup, listeners, and teardown to the rendered feature. React
  Strict Mode, resizing, and remounts must not produce duplicate timelines,
  spacers, or persistent inline styles that break the static presentation.
- Keep the underlying content and controls usable if artwork fails. Do not gate
  the page behind image preloading or a loading sequence.
- Keep implementation focused on the Opening transition. Avoid a general scene
  engine, route system, CMS, or speculative chapter abstractions.

### Delivery

- Keep project code, documentation, tickets, commit messages, and PR descriptions
  in English; chat remains in Spanish.
- Create a ticket branch from the current merged base before implementation.
  Record its Git baseline and review the finished diff on Standards and Spec.
- Publish one PR per approved ticket against main, recording its URL locally.
  Do not merge automatically.

## Testing Decisions

- The owner approved the rendered page in a real browser as the highest practical
  behavior boundary, supplemented by TypeScript and the production build.
- Follow the prior Opening's browser-evidence approach. Verify visible behavior,
  navigation, focus, content reachability, and responsive results rather than
  GSAP internals, CSS class names, or markup snapshots.
- Verify the initial, intermediate, and completed animated states. Confirm the
  city and figure move independently, the name exits later than the other copy,
  the dark fade provides the bridge, and no image edges or matte become visible.
- Scroll back upward and confirm the Opening is restored. Repeat the traversal
  to check that state does not accumulate across passes.
- Activate Skip animation with keyboard and pointer from the start and during
  progression. Confirm arrival at the bridge, appropriate destination focus,
  visible focus, and no playback of the skipped sequence.
- Confirm both contact actions remain visible and keyboard-reachable at the
  start, midpoint, and end. Inspect mailto without sending email and verify the
  approved LinkedIn destination.
- Inspect desktop, narrow mobile at 320 CSS pixels, typical mobile, and a short
  landscape viewport. Check overflow, touch targets, text contrast, control
  overlap, and content reachability.
- Enlarge text to 200% and verify normal flow when the Opening no longer fits.
- Verify static reduced-motion output, including content order, usable skip and
  contact, and absence of animation-only space. Where supported, change the
  preference while the page is open and verify cleanup and adaptation.
- Resize across mobile/desktop and short/tall layouts at intermediate progress,
  then verify the resulting mode is coherent and content remains reachable.
- Check the image-failure fallback and inspect application logs for runtime
  errors. Review remount/development behavior for duplicated animation artifacts.
- Run TypeScript checking and a production build; smoke-test the served build.
- Record completed checks, evidence, and any environment limitations explicitly.
  A single-browser check is not a cross-browser or screen reader certification.

## Out of Scope

- Detailed professional chapters, expanded case studies, client interface demos,
  CV downloads, GitHub presentation, and extended biography.
- Full-site navigation to future sections or nonfunctional destination controls.
- New portraits or additional visual worlds beyond the approved separated plates.
- WebGL, 3D models, shaders, video, sound, loaders, and automatic intros.
- Contact forms, backend services, analytics, authentication, and CMS integration.
- External site deployment, domain configuration, and automatic PR merging.
- A reusable scene engine or specifications for subsequent features.

## Further Notes

- The original Opening was delivered through PR #1 and is merged into main.
- The artwork separation was explicitly requested during design. Both canvases,
  the figure's transparency, and visual alignment were checked before this spec.
- The separated plates are generative edits, including reconstructed occluded
  environment and small visual variations; they are not pixel-identical source
  segmentation. The owner reviewed the superimposed result before approval.
- No runtime motion code has been implemented at specification publication.
- The owner approved the final sequence, mobile shortening, upward reversal,
  persistent contact, skip destination focus, responsive fallback, and browser
  verification in the chat before this specification was written.
