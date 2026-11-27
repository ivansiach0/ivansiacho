import { globalStyle, style } from '@vanilla-extract/css';

const ink = '#0a121a';
const white = '#f3f4ed';
const muted = '#bac5ca';
const accent = '#d5e9b9';
const mobile = 'screen and (max-width: 700px)';

globalStyle('*, *::before, *::after', { boxSizing: 'border-box' });
globalStyle('html', { colorScheme: 'dark', background: ink });
globalStyle('body', {
  margin: 0,
  minWidth: 0,
  color: white,
  background: ink,
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '1rem',
  WebkitFontSmoothing: 'antialiased',
});
globalStyle('body, h1, p', { margin: 0 });
globalStyle('::selection', { color: ink, background: accent });

export const page = style({
  position: 'relative',
  isolation: 'isolate',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100svh',
  background: ink,
});

export const city = style({
  position: 'absolute',
  inset: 0,
  zIndex: -2,
  backgroundImage: 'url(/images/night-city.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center right',
  '@media': {
    [mobile]: { backgroundPosition: '65% center' },
  },
});

export const shade = style({
  position: 'absolute',
  inset: 0,
  zIndex: -1,
  background: 'linear-gradient(90deg, rgba(10,18,26,.98) 0%, rgba(10,18,26,.9) 30%, rgba(10,18,26,.55) 58%, rgba(10,18,26,.12) 100%), linear-gradient(0deg, rgba(10,18,26,.95) 0%, transparent 28%, transparent 80%, rgba(10,18,26,.6) 100%)',
  '@media': {
    [mobile]: {
      background: 'linear-gradient(90deg, rgba(10,18,26,.94), rgba(10,18,26,.70)), linear-gradient(0deg, rgba(10,18,26,.9), transparent)',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',
  padding: '2.25rem clamp(1.5rem, 5vw, 5.5rem)',
  '@media': { [mobile]: { padding: '1.5rem', gap: '1rem' } },
});

export const wordmark = style({
  display: 'inline-flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '.875rem',
  fontSize: '.8125rem',
  lineHeight: 1.25,
  letterSpacing: '.11em',
  fontWeight: 700,
  minWidth: 0,
  maxWidth: '100%',
});

export const monogram = style({ width: '2.5rem', height: '2.5rem', color: accent });

export const headerNote = style({
  color: muted,
  textAlign: 'right',
  fontSize: '.875rem',
  lineHeight: 1.55,
  '@media': { [mobile]: { display: 'none' } },
});

export const main = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '2rem clamp(1.5rem, 5vw, 5.5rem) 3.5rem',
  '@media': { [mobile]: { padding: '2.75rem 1.5rem 3.5rem' } },
});

export const eyebrow = style({
  maxWidth: '100%',
  color: accent,
  fontSize: '.875rem',
  fontWeight: 500,
  lineHeight: 1.6,
  letterSpacing: '.045em',
  marginBottom: '1.5rem',
  '@media': { [mobile]: { fontSize: '.875rem', maxWidth: '18rem' } },
});

export const name = style({
  maxWidth: '100%',
  fontSize: 'clamp(4.5rem, 9.7vw, 9rem)',
  lineHeight: '.91',
  fontWeight: 500,
  letterSpacing: '-.065em',
  marginLeft: '-.055em',
  marginBottom: '2rem',
  overflowWrap: 'anywhere',
  '@media': {
    [mobile]: { fontSize: 'clamp(3.2rem, 12.5vw, 5.5rem)', marginBottom: '1.75rem' },
  },
});

export const surname = style({
  color: accent,
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontStyle: 'italic',
  letterSpacing: '-.065em',
});

export const introduction = style({
  maxWidth: '35rem',
  fontSize: 'clamp(1.375rem, 2.05vw, 1.875rem)',
  lineHeight: 1.45,
  letterSpacing: '-.025em',
});

export const desktopBreak = style({ '@media': { [mobile]: { display: 'none' } } });

export const experience = style({
  maxWidth: '26rem',
  marginTop: '1rem',
  color: muted,
  fontSize: '1rem',
  lineHeight: 1.75,
});

export const actions = style({
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '100%',
  gap: '.875rem',
  marginTop: '2rem',
});

const contactLink = style({
  minHeight: '3.25rem',
  width: '8.75rem',
  minWidth: 0,
  maxWidth: '100%',
  flexShrink: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '.875rem 1.5rem',
  border: '1px solid transparent',
  borderRadius: '3px',
  fontSize: '.9375rem',
  lineHeight: 1.4,
  fontWeight: 600,
  textDecoration: 'none',
  selectors: {
    '&:focus-visible': { outline: '3px solid #ffffff', outlineOffset: '5px' },
  },
  '@media': {
    '(forced-colors: active)': { borderColor: 'ButtonText' },
  },
});

export const primaryLink = style([contactLink, {
  color: ink,
  background: accent,
  selectors: { '&:hover': { background: '#e9f5d9' } },
}]);

export const secondaryLink = style([contactLink, {
  color: white,
  background: 'rgba(10,18,26,.8)',
  borderColor: '#718089',
  selectors: { '&:hover': { background: '#23333d', borderColor: muted } },
}]);

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem 2rem',
  margin: '0 clamp(1.5rem, 5vw, 5.5rem)',
  padding: '1.5rem 0',
  borderTop: '1px solid rgba(186,197,202,.3)',
  color: muted,
  '@media': { [mobile]: { margin: '0 1.5rem', gap: '.75rem', padding: '1.25rem 0' } },
});

export const footerLabel = style({
  fontSize: '.75rem',
  lineHeight: 1.6,
  letterSpacing: '.09em',
});

export const artworkNote = style({
  fontSize: '.75rem',
  lineHeight: 1.6,
  maxWidth: '27rem',
});
