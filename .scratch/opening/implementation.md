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
Implementation commit: `b5c6029`.

The [two-axis review](review.md) is complete: Standards reported zero findings
and Spec reported zero findings. Ticket 01 is done. No later feature has started.

Temporary development and production-preview servers are stopped after validation.
Use the README commands to start the application for a new local review session.
