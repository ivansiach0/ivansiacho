# Domain documentation

## Before exploring a feature

Read the root `CONTEXT.md` for domain vocabulary and any existing decisions in
`docs/adr/` relevant to the feature. If these documents do not exist, proceed.

## Vocabulary

Use the terms defined in `CONTEXT.md` in specifications, tickets, code, and tests.
The glossary contains domain definitions only, without implementation details.
During `grill-with-docs`, record resolved terms as they are agreed upon.
Challenge conflicting definitions rather than silently introducing synonyms.

## Architectural decisions

Create an ADR only for an agreed decision that is costly to reverse, surprising
without context, and the result of a real trade-off. Store ADRs in `docs/adr/`.
Flag conflicts with existing decisions before proposing a different approach.
