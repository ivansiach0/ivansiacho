# Opening transition code review

## Scope

- Base: `bd6b7dc78308608a45064f26d1848630d31853f8`.
- Initial implementation: `dc287c9`; final runtime correction: `19d00c8`.
- Diff: `git diff bd6b7dc78308608a45064f26d1848630d31853f8...19d00c8`.
- Specification: [Cinematic Opening Transition](spec.md).
- Validation: [browser checks and limitations](validation.md).
- Independent read-only Standards and Spec agents reviewed the initial change
  in parallel and checked the final correction afterward.

## Standards

No actionable findings in the final range.

The implementation follows the documented English-language requirement, glossary,
feature scope, branch convention, and local tracker workflow. The hook owns one
feature's DOM access, eligibility, timeline, focus handling, and teardown without
introducing a general scene engine or speculative interfaces. Shared artwork
framing and contact styles avoid meaningful duplication.

The follow-up retains the lifecycle owner and centralizes contact scroll offsets
in the shared style. Removing additional copy introduces no new abstraction.

**Standards: 0 findings; no unresolved standards issue.**

## Spec

### Original finding: P2 — Focused contact visibility in normal flow

The spec requires keeping focus visible and adapting to viewport changes without
hidden controls. The original helper excluded all header descendants, preventing
correction if a focused contact moved offscreen when a short viewport changed
the header from sticky to normal flow.

This was a source-level finding. In the targeted in-app browser check, native
resize handling already kept the focused contact at y24–72; an offscreen contact
was not reproduced in that environment.

### Resolution

Commit `19d00c8` excludes header descendants only while the header is sticky.
Normal-flow contacts receive the ordinary bounds correction, and their shared
scroll margin provides focus clearance. The focused contact remained at y24–72
in the final 844-by-200 browser check.

The correction also removes the extra scroll cue and duplicated bridge tagline
and restores the original footer wording. The reviewer verified the correction
and reported no new mismatch. Other layered motion, skip/focus, reversal, fallback,
and lifecycle requirements matched the specification and recorded evidence.

**Spec: 1 original P2 finding resolved; 0 unresolved findings.**

## Completion

Standards: 0 findings. Spec: 1 P2 finding resolved. Neither axis has unresolved
issues. Later documentation commits record evidence and PR publication without
changing the reviewed runtime implementation.
