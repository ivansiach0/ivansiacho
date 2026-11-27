import { globalStyle, style } from '@vanilla-extract/css';

const ink = '#0a121a';
const white = '#f3f4ed';
const muted = '#bac5ca';
const accent = '#d5e9b9';
const mobile = 'screen and (max-width: 700px)';
const gutter = 'clamp(1.5rem, 5vw, 5.5rem)';

globalStyle('*, *::before, *::after', { boxSizing: 'border-box' });
globalStyle('html', { colorScheme: 'dark', background: ink });
globalStyle('body', { margin: 0, minWidth: 0, color: white, background: ink, fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '1rem', WebkitFontSmoothing: 'antialiased' });
globalStyle('body, h1, h2, p', { margin: 0 });
globalStyle('::selection', { color: ink, background: accent });

export const page = style({ position: 'relative', isolation: 'isolate', minHeight: '100svh', background: ink });

export const header = style({
  position: 'relative', top: 0, zIndex: 10,
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap',
  gap: '1rem 2rem', padding: `1.5rem ${gutter}`, background: ink, borderBottom: '1px solid #22313a',
  selectors: { [`${page}[data-contact="sticky"] &`]: { position: 'sticky' } },
  '@media': { [mobile]: { padding: '1rem 1.5rem', gap: '1rem' } },
});

export const wordmark = style({ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', gap: '.875rem', fontSize: '.8125rem', lineHeight: 1.25, letterSpacing: '.11em', fontWeight: 700, minWidth: 0, maxWidth: '100%' });
export const monogram = style({ width: '2.5rem', height: '2.5rem', color: accent });

export const actions = style({
  display: 'flex', alignItems: 'center', flexWrap: 'wrap', maxWidth: '100%', gap: '.75rem',
  '@media': { [mobile]: { gap: '.5rem', width: '100%' } },
});

const contactLink = style({
  minHeight: '3rem', width: '8.75rem', minWidth: 0, maxWidth: '100%', flexShrink: 0,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '.75rem 1rem',
  border: '1px solid transparent', borderRadius: '3px', fontSize: '.9375rem', lineHeight: 1.4,
  fontWeight: 600, textDecoration: 'none',
  scrollMarginTop: 'var(--focus-offset, 1.5rem)',
  selectors: { '&:focus-visible': { outline: '3px solid #ffffff', outlineOffset: '5px' } },
  '@media': {
    [mobile]: { width: 'auto', padding: '.75rem' },
    '(forced-colors: active)': { borderColor: 'ButtonText' },
  },
});

export const primaryLink = style([contactLink, { color: ink, background: accent, selectors: { '&:hover': { background: '#e9f5d9' } } }]);
export const secondaryLink = style([contactLink, { color: white, background: ink, borderColor: '#718089', selectors: { '&:hover': { background: '#23333d', borderColor: muted } } }]);
export const skipLink = style([contactLink, { width: 'auto', color: muted, fontSize: '.875rem', fontWeight: 400, textDecoration: 'underline', textUnderlineOffset: '4px', padding: '.75rem .5rem', selectors: { '&:hover': { color: white } } }]);

export const stage = style({
  position: 'relative', background: ink,
  selectors: { [`${page}[data-motion="enhanced"] &`]: { height: 'var(--scene-height)', overflow: 'hidden' } },
});

export const intro = style({
  position: 'relative', isolation: 'isolate', display: 'flex', alignItems: 'center',
  minHeight: 'var(--scene-height, calc(100svh - 7rem))', padding: `2.5rem ${gutter} 5rem`,
  selectors: { [`${page}[data-motion="enhanced"] &`]: { height: '100%', minHeight: 0 } },
  '@media': { [mobile]: { padding: '2.5rem 1.5rem 4.5rem' } },
});

export const artwork = style({ position: 'absolute', inset: 0, zIndex: -1, overflow: 'hidden' });
const plate = style({ position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center right' });
export const city = style([plate, { backgroundImage: 'url(/images/city-background.webp)' }]);
export const figure = style([plate, { backgroundImage: 'url(/images/figure.webp)' }]);
export const shade = style({
  position: 'absolute', inset: 0,
  background: 'linear-gradient(90deg, rgba(10,18,26,.98) 0%, rgba(10,18,26,.9) 30%, rgba(10,18,26,.55) 58%, rgba(10,18,26,.12) 100%), linear-gradient(0deg, rgba(10,18,26,.8), transparent 35%)',
  '@media': { [mobile]: { background: 'linear-gradient(90deg, rgba(10,18,26,.94), rgba(10,18,26,.76))' } },
});
export const veil = style({ position: 'absolute', inset: 0, background: ink, opacity: 0 });
export const copy = style({ position: 'relative', width: '100%', minWidth: 0 });

export const eyebrow = style({
  maxWidth: '100%', color: accent, fontSize: '.875rem', fontWeight: 500, lineHeight: 1.6,
  letterSpacing: '.045em', marginBottom: '1.5rem', '@media': { [mobile]: { maxWidth: '18rem' } },
});
export const name = style({
  maxWidth: '100%', fontSize: 'clamp(4.5rem, 9.7vw, 9rem)', lineHeight: '.91', fontWeight: 500,
  letterSpacing: '-.065em', marginLeft: '-.055em', marginBottom: '2rem', overflowWrap: 'anywhere',
  '@media': { [mobile]: { fontSize: 'clamp(3.2rem, 12.5vw, 5.5rem)', marginBottom: '1.75rem' } },
});
export const surname = style({ color: accent, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', letterSpacing: '-.065em' });
export const introduction = style({ maxWidth: '35rem', fontSize: 'clamp(1.375rem, 2.05vw, 1.875rem)', lineHeight: 1.45, letterSpacing: '-.025em' });
export const desktopBreak = style({ '@media': { [mobile]: { display: 'none' } } });
export const experience = style({ maxWidth: '26rem', marginTop: '1rem', color: muted, fontSize: '1rem', lineHeight: 1.75 });

export const bridge = style({
  position: 'relative', display: 'flex', alignItems: 'center', minHeight: 'var(--scene-height, 80svh)', padding: `4rem ${gutter}`,
  selectors: { [`${page}[data-motion="enhanced"] &`]: { position: 'absolute', inset: 0, height: '100%', minHeight: 0, paddingTop: '2.5rem', paddingBottom: '2.5rem' } },
});
export const bridgeCopy = style({ width: '100%', maxWidth: '56rem', minWidth: 0 });
export const bridgeHeading = style({
  fontSize: 'clamp(3rem, 7.5vw, 7rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-.055em', overflowWrap: 'anywhere',
  scrollMarginTop: 'var(--focus-offset, 1.5rem)',
  selectors: { '&:focus-visible': { outline: `2px solid ${accent}`, outlineOffset: '12px' } },
});
export const bridgeEmphasis = style({ display: 'block', fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', color: accent });
export const bridgeDescription = style({ maxWidth: '35rem', color: muted, fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', lineHeight: 1.55, marginTop: '2rem' });
export const bridgeRule = style({ width: '5rem', maxWidth: '100%', height: '2px', background: accent, marginTop: '2.5rem' });

export const footer = style({
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem 2rem',
  margin: `0 ${gutter}`, padding: '1.5rem 0', borderTop: '1px solid #33424b', color: muted,
  '@media': { [mobile]: { gap: '.75rem', padding: '1.25rem 0' } },
});
export const footerLabel = style({ fontSize: '.75rem', lineHeight: 1.6, letterSpacing: '.09em' });
export const artworkNote = style({ fontSize: '.75rem', lineHeight: 1.6, maxWidth: '27rem' });
