# Opening transition design notes

## Current stage

Design, specification, ticket approval, implementation, browser validation, and
two-axis review are complete. The remaining ticket step is GitHub PR publication.

## Agreed decisions

- The transition leads from the Opening to an Experience bridge containing:
  - Heading: "Selected experience".
  - Copy: "Building products at CrowdComfort. Crafting global experiences at Huge."
- Provide a keyboard-accessible "Skip animation" action that goes directly to
  the Experience bridge and moves focus to its destination.
- Keep email and LinkedIn visible in a discreet contact area during the transition.
- Use normal document flow when a short viewport or enlarged text prevents the
  Opening from fitting completely.
- With reduced motion, show the Opening and Experience bridge statically in
  reading order.
- The city zooms out gently; the figure zooms out less, providing depth. The
  professional copy fades first, the name persists slightly longer, and a dark
  fade introduces the Experience bridge.
- Use approximately one additional viewport of scroll on desktop and a shorter
  mobile range. Scrolling upward reverses the sequence.
- Verify start, midpoint, end, reverse scrolling, keyboard skip, persistent
  contact, reduced motion, viewport changes, TypeScript, and the production build.

## Artwork exploration requested by the owner

The current illustration combines the city and conceptual figure in one image.
The owner requested separate, superimposable assets. Prepare a clean city plate
with the occluded environment reconstructed and a transparent figure layer,
preserving the original framing and keeping the existing published asset intact.
The approved study is retained as source/provenance for the production plates.

The two assets have now been generated and inspected. They share a 1672 by 941
canvas; the figure has genuine transparency. A browser composition verified
matching layer rectangles and visual alignment. See `artwork/README.md` for the
edit prompts, metadata, and preview. No application code or published assets
were changed during this artwork study.

## Design frontier

No unresolved design questions remain. The approved ticket is implemented; see
the validation and review records.
