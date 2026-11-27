# Opening validation

## Result

The approved static Opening is implemented and passes the checks below. The
production build was served locally and inspected in the in-app browser.

## Build and dependencies

- `npm run typecheck`: passed.
- `npm run build`: passed, including TypeScript checking.
- Dependency installation: 114 packages added; npm reported zero vulnerabilities.
- Production assets: approximately 70 KB gzipped JavaScript, 1.2 KB gzipped CSS,
  and a 215,368-byte WebP illustration.
- GSAP is installed but neither imported nor executed by this static feature.

## Browser observations

| Check | Observation |
| --- | --- |
| Approved content | Name, headline, introduction, supporting copy, and action labels match the specification. |
| Semantics | English document language, descriptive title, one main landmark, one primary heading, and a named contact navigation region. |
| Email | A native anchor points to the exact approved mailto destination. No message was sent or email client launched. |
| LinkedIn | Keyboard activation opened the approved profile URL. The browser then returned to the Opening. |
| Keyboard | Tab reached Get in touch, then LinkedIn; both displayed a white 3-pixel outline with a 5-pixel offset. |
| Contact targets | Both links measure 140 by 52 CSS pixels at normal text size. |
| Desktop | Inspected at 1280 by 720 and 1280 by 800; content and contact actions are readable and usable. |
| Narrow mobile | Inspected at 320 by 740; document width and scroll width both measure 320 CSS pixels. |
| Typical mobile | Inspected at 390 by 844; document width and scroll width both measure 390 CSS pixels. |
| Short landscape | Inspected at 844 by 390; document width and scroll width both measure 844 CSS pixels. Scrolling reaches both links and the footer. |
| Text enlargement | Temporarily doubled the root font size to 32 pixels at a 320-pixel viewport. After corrections, scroll width remained 320 and both links stayed inside the available 224-pixel content width. Removed the temporary QA style before the final build. |
| Image failure | Temporarily removed the local illustration and reloaded. The dark fallback retained all text and contact links. Restored the illustration before the final build. |
| Static behavior | Computed styles reported no animations or nonzero transition durations on rendered elements. No animation code or motion-dependent behavior exists. |
| Production smoke check | Built stylesheet loaded, approved links and content remained present, and the 320-pixel layout had no horizontal overflow. |
| Application logs | No warnings or errors attributed to the portfolio. Logs from the temporarily visited LinkedIn page were excluded. |

## Contrast

The local artwork was sampled under the measured text bounds at 1280 by 800 and
composited with the authored gradient and control surfaces. All sampled text
regions exceeded 4.5:1; the minimum was 6.55:1 for the large surname. The supporting
copy measured at least 7.12:1 and the primary contact label 14.52:1.

Measurements and the method are recorded in [contrast evidence](evidence/contrast.json).
This is a sampled contrast check, not a certification of all accessibility behavior.

## Findings resolved during implementation

- At 200% root text size and 320-pixel width, the wordmark and links initially
  overflowed. Allowed the wordmark to wrap and constrained link widths while
  retaining normal-size targets. Rechecked the enlarged-text layout successfully.
- A first link-width adjustment caused unnecessary stacking on desktop. Replaced
  the cyclic percentage minimum with a definite width constrained by the available
  space, then rechecked desktop and enlarged mobile text.
- Added explicit whitespace between the primary heading's two visual lines so
  its text content is exactly `Ivan Siachoque`.

## Evidence

- [Desktop production Opening](evidence/desktop.jpg)
- [320-pixel production Opening](evidence/mobile-320.jpg)
- [390-pixel Opening](evidence/mobile-390.jpg)
- [200% text at 320 pixels](evidence/text-200-mobile.jpg)
- [Image-failure fallback during validation](evidence/image-fallback.jpg)

## Verification limits

- Tested in the in-app browser; a cross-browser or physical-device matrix was
  not executed.
- Text reflow used a temporary 200% root font-size override, not browser page zoom.
- The operating system's reduced-motion preference was not changed. Static behavior
  was verified by inspecting computed styles and the absence of motion code.
- Semantic structure was inspected, but no full screen reader session was conducted.
- Email-client delivery and LinkedIn availability for every visitor are external
  behaviors outside this local feature.
