# Project instructions

## Language

Write code, comments, documentation, specifications, tickets, commit messages,
and website content in English. Communicate with the user in Spanish in chat.
Preserve proper names and exact source titles when referencing external material.

## Agent skills

### Issue tracker

Track specifications and tickets in local Markdown. Before creating or updating
them, read [the tracker conventions](docs/agents/issue-tracker.md).

### Domain docs

This project has one domain context. Before exploring or changing a feature,
read [the domain documentation rules](docs/agents/domain.md).

### Feature workflow

Work on one feature at a time through this sequence:

1. `grill-with-docs`: settle the feature's scope and record resolved terminology.
2. `to-spec`: agree on testing boundaries and write the feature specification.
3. `to-tickets`: agree on the vertical slices and publish one file per ticket.
4. `implement`: implement the approved tickets and verify their acceptance criteria.
5. `code-review`: review standards and specification compliance, then address findings.

Complete the current feature's implementation and review before starting another.
Treat the approved portfolio direction as context; scope each feature separately.
