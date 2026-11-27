# Issue tracker: Local Markdown

Specifications and tickets live in this repository. Publishing to the tracker
means writing local Markdown files. Tickets remain local; their implementation
branches and pull requests are published to the GitHub repository configured
as `origin`.

## Specifications

- Use one directory per feature: `.scratch/<feature-slug>/`.
- Write the specification to `.scratch/<feature-slug>/spec.md`.
- Record `**Status:** ready-for-agent` when the specification is published.
- Link the feature's tickets to its specification.

## Tickets

- Write one file per ticket under `.scratch/<feature-slug>/issues/`.
- Name files `<NN>-<slug>.md`, starting at `01` in dependency order.
- Record the end-to-end behavior, acceptance criteria, `Blocked by`, and `Status`.
- Publish approved tickets with `**Status:** ready-for-agent`.
- Use `in-progress` while implementing, `in-review` when implementation is ready
  for review, and `done` when acceptance criteria and review findings are resolved.
- Identify blockers by ticket number and title. Use `None (can start immediately)`
  when no ticket blocks the work.
- Append relevant discussion under `## Comments`.

## Execution and review

Work only on tickets whose blockers are done, within the current approved feature.
Before implementation, establish a Git baseline and record the fixed-point commit
and specification reference so code review can compare against a verified revision.
Record review findings and their resolution under the feature directory.
Keep parent specification status separate from individual ticket status.

## Branches and pull requests

- Use one branch and one pull request per ticket.
- The base branch is `main`. Before starting a new ticket, inspect remote state
  and start from the current base; preserve any unrelated local work.
- Name ticket branches `<type>/<feature>-<NN>-<short-description>`, for example
  `feat/opening-01-static-opening`.
- Keep commit subjects, bodies, PR titles, and descriptions in English.
- Include the problem and delivered behavior, local ticket/spec references,
  validation results, and relevant verification limits in each PR description.
- Push the ticket branch and open its PR against `main` after implementation
  and code review. Record the branch and PR URL on the local ticket.
- Keep remote publication state distinct from local implementation completion.
- Merge only when the user requests it. Preserve history and use ordinary pushes.
- The initial repository upload uses the workflow/specification baseline on
  `main` and publishes the completed Opening through its ticket branch.
