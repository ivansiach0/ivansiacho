# Opening implementation record

## Scope

Implement [ticket 01](issues/01-build-accessible-static-opening.md) against the
[approved specification](spec.md). No subsequent feature is in progress.

## Review baseline

- Fixed-point commit: `9398a7eca27db77f1c4decc85db4de312cc27f95`.
- Diff command: `git diff 9398a7eca27db77f1c4decc85db4de312cc27f95...HEAD`.
- Commit list: `git log 9398a7eca27db77f1c4decc85db4de312cc27f95..HEAD --oneline`.
- Standards: root project instructions, domain glossary, and workflow documents.
- Specification: the Opening specification in this feature directory.

## Validation boundary

The rendered Opening in a real browser, TypeScript checking, and a production
build. No markup-mirroring unit suite is introduced for this static feature.

Browser and build observations are recorded in [validation](validation.md).
The implementation is ready for the two-axis code review against the baseline above.
