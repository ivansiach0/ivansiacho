# Opening transition validation

## Result

The rendered transition and static alternatives were checked in the in-app
browser. TypeScript and the final production build pass. The served production
build was checked separately from development.

## Baseline and behavior boundary

Before implementation, browser inspection found zero Skip animation links and
zero Selected experience headings. The approved checks target rendered behavior,
native links, focus, content reachability, and responsive output. No unit tests
that mirror markup or GSAP implementation details were added.

## Observed behavior

| Check | Result |
| --- | --- |
| Initial state | Existing English copy and real contact links remain available. City starts at scale 1.10 and figure at 1.04. |
| Intermediate scroll | At desktop progress 0.45, city scale was 1.055 and figure scale 1.022; other copy was gone while name opacity remained approximately 0.33. |
| End state | Bridge text visible, dark veil at full opacity, city and figure scales at 1. Contact links stay visible above the stage. |
| Reverse | Upward scrolling restored name/copy opacity 1, veil opacity 0, original layer scales, and bridge opacity 0. |
| Skip from start and midpoint | Native link activation jumps directly to the completed state without smooth playback. Pointer and keyboard activation were checked. |
| Skip focus | Focus moves to the Selected experience heading. Keyboard focus outlines remain visible. |
| Contact | Exact approved email and LinkedIn destinations are preserved; all contact/skip targets measured at least 48 CSS pixels high at normal text size. |
| Mobile range | At 320 by 740, the animated end was approximately 481 scroll pixels, matching 65% of viewport height. Desktop at 1280 by 800 used 800 pixels. |
| Narrow mobile | At 320 CSS pixels, document width and scroll width were both 320; start, skip, and reversal passed in the production build. |
| Typical mobile | At 390 by 844, contact fits one action row below the wordmark; right-aligned framing keeps the foreground figure visible. |
| Short landscape | At 844 by 390, mode is static with zero pin spacers, no layer transforms, and both text sections fully opaque. |
| Focus across resize | The focused bridge heading is retained and brought below the sticky header after the layout refresh; observed top approximately 121px with header bottom 97px. |
| Enlarged text | At 200% root font size and 320px width, mode is static, contact header uses normal flow, both sections remain opaque, and scroll width remains 320. Skip still focuses the bridge. |
| Reduced motion on load | Simulated reduced preference before app initialization produces static flow, zero pin spacers, no plate transforms, and fully visible text. |
| Preference change | Changing the simulated preference during progression removes the pin and all motion styles; switching back recreates a single enhancement. |
| Image failure | Both local plates were temporarily removed. Text, contact, and Skip animation remained usable against the dark fallback. Assets were restored before building. |
| Lifecycle | React Strict Mode and repeated development remounts, preference changes, and resize transitions did not accumulate pin spacers; enhanced mode has one, static mode zero. |
| Production | Built assets load, no QA controls remain, and the start/middle/end plus mobile skip/reversal checks passed. No portfolio warnings or errors were observed. |

The full rendered observations are stored in [observations](evidence/observations.json).

## Contrast and assets

At the 1280-by-800 production start, conservative sampling composed the two
transformed plates and the authored overlays under text bounds. Measured normal
copy and contact areas exceed 4.5:1; the minimum reported value is 6.36:1. The
inline surname measures 8.87:1. Bridge colors on solid ink range from 10.70:1 to
17.03:1. The full-width H1 container includes empty image area and is not treated
as a text bound; its first line was visually inspected. Transient opacity fades
were visually reviewed rather than represented as steady-state text contrast.
See [contrast method and results](evidence/contrast.json).

The production plates are 1672 by 941 pixels. The 207,596-byte city WebP is opaque;
the 34,988-byte figure WebP preserves transparency. The original flattened image
and the artwork study remain intact. The two delivery plates have matching
framing before their independent transforms.

## Findings corrected before review

- Reverting the timeline left the bridge's initial opacity behind. Explicitly
  remove the bridge's owned opacity, transform, and pointer-event styles during
  reset; dynamic reduced-motion checks now show both sections at full opacity.
- A visibility-based fade could drop destination focus when reversing. Use
  opacity and pointer-event control while retaining semantic reading order.
- Rebuilding pin geometry could drop focus or leave it under the header. Preserve
  the focused element and recheck its viewport position after ScrollTrigger's
  layout refresh.
- The inherited mobile crop excluded the figure. Apply shared right-aligned
  framing and compact contact widths, then check mobile output again.

## Evidence

- [Production start](evidence/start.jpg)
- [Production middle](evidence/middle.jpg)
- [Production Experience bridge](evidence/bridge.jpg)
- [390px layered Opening](evidence/mobile-start.jpg)
- [320px production Opening](evidence/mobile-320.jpg)
- [Mobile bridge](evidence/mobile-bridge.jpg)
- [Reduced-motion output](evidence/reduced-motion.jpg)
- [Short landscape](evidence/short-landscape.jpg)
- [200% text](evidence/text-200.jpg)
- [Image-failure fallback](evidence/image-fallback.jpg)

## Build

- `npm run typecheck`: passed during implementation.
- `npm run build`: passed, including the final TypeScript check.
- Production output: approximately 117.48 KB gzipped JavaScript and 1.51 KB
  gzipped CSS, plus the two active artwork plates.
- `git diff --check`: passed.

## Review follow-up

The Spec review identified an unconditional header-descendant exclusion in the
focus visibility helper. Although this browser's native resize handling kept the
focused contact visible in the targeted 844-by-200 check, the exclusion would
prevent correction in a browser that retained an offscreen scroll position.
Restrict the exclusion to sticky headers; normal-flow contacts now receive the
same bounds correction as other focused content, with a scroll margin for the
focus outline. Recheck the short-viewport contact case after the change.

The final UI also removes an additional scroll hint and restores the original
footer wording, retaining only the three approved additions to visible copy.

## Verification limits

- Tests used one in-app browser environment; no cross-browser or physical-device
  matrix and no full screen reader session were conducted.
- This browser exposes no media-emulation control. A temporary local QA script
  simulated the public matchMedia preference and its change notifications before
  app startup, exercising rendered static output and live cleanup in both
  directions. It did not change the OS preference. The script and its HTML hook
  were removed; the production output was checked for their absence.
- Text enlargement used a temporary 200% root-font control rather than browser
  page zoom. The control was removed before the final build.
- Some evidence images deliberately show the temporary QA toolbar to identify
  the simulated preference or enlarged-text scenario; it is not a product control.
- Numeric contrast sampling is not an accessibility certification. Email delivery
  and external LinkedIn availability are outside this local verification.
