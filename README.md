# Ivan Siachoque — Personal Portfolio

A personal portfolio built incrementally, one approved feature at a time.
The Opening introduces Ivan in English and transitions into a concise Experience
bridge through native scrolling. City and figure layers move independently.

## Local development

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. The app uses React, Vite, TypeScript, and
vanilla-extract. GSAP and ScrollTrigger enhance the Opening when its content fits
the viewport and reduced motion is not preferred. Otherwise both sections remain
in static document flow. Skip animation jumps to the bridge and moves focus there;
email and LinkedIn remain outside the fading content.

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

Browser verification for the original static Opening is recorded in
`.scratch/opening/`. Transition verification is recorded in
`.scratch/opening-transition/`, covering scroll states, reversal, skip/focus,
contact access, reduced motion, responsive mode changes, text reflow, and image
failure. Checks target rendered behavior rather than static-markup unit tests.

## Workflow

Read `AGENTS.md` for the feature workflow, language rules, and documentation
pointers. The current specification is `.scratch/opening-transition/spec.md`.
No external deployment is configured.
