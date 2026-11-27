# Ivan Siachoque — Personal Portfolio

A personal portfolio built incrementally, one approved feature at a time.
The first feature is an accessible, static Opening in English.

## Local development

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. The app uses React, Vite, TypeScript, and
vanilla-extract. GSAP is installed for the agreed stack but is not loaded or
used by this static feature.

The development server uses port 5173 and fails if that port is occupied.
Stop the process listening on that port on macOS or Linux:

```sh
npm run stop
```

## Validation

```sh
npm run typecheck
npm run build
npm run preview
```

Browser verification is documented alongside the feature specification in
`.scratch/opening/`. It covers responsive layout, keyboard access, contrast,
link destinations, text reflow, and the image-failure fallback. No static-markup
unit tests are added.

## Workflow

Read `AGENTS.md` for the feature workflow, language rules, and documentation
pointers. The current specification is `.scratch/opening/spec.md`.
No external deployment is configured.
