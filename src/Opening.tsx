import { useRef } from 'react';
import { useOpeningTransition } from './useOpeningTransition';
import * as styles from './Opening.css';

export function Opening() {
  const page = useRef<HTMLDivElement>(null);
  const skipAnimation = useOpeningTransition(page);

  return (
    <div ref={page} className={styles.page} data-motion="static">
      <header className={styles.header} data-opening-header>
        <span className={styles.wordmark} aria-label="Ivan Siachoque">
          <svg className={styles.monogram} viewBox="0 0 40 40" aria-hidden="true">
            <path d="M5 5h5v30H5zm15 0h15v5H21v7h14v18H16v-5h14v-8H16V5z" fill="currentColor" />
          </svg>
          <span>IVAN<br />SIACHOQUE</span>
        </span>
        <nav className={styles.actions} aria-label="Contact and experience">
          <a className={styles.skipLink} href="#selected-experience" onClick={skipAnimation}>Skip animation</a>
          <a className={styles.primaryLink} href="mailto:ivanfernandosia@gmail.com">Get in touch</a>
          <a className={styles.secondaryLink} href="https://www.linkedin.com/in/ivan-siachoque-17491247/">LinkedIn</a>
        </nav>
      </header>
      <main>
        <div className={styles.stage} data-opening-stage>
          <section className={styles.intro} aria-labelledby="opening-title" data-opening-intro>
            <div className={styles.artwork} aria-hidden="true">
              <div className={styles.city} data-opening-city />
              <div className={styles.figure} data-opening-figure />
              <div className={styles.shade} />
              <div className={styles.veil} data-opening-veil />
            </div>
            <div className={styles.copy} data-opening-content>
              <p className={styles.eyebrow} data-opening-copy>Senior Frontend Engineer <span aria-hidden="true">·</span> UI &amp; Motion</p>
              <h1 id="opening-title" className={styles.name} data-opening-name>Ivan<br />{' '}<span className={styles.surname}>Siachoque</span></h1>
              <p className={styles.introduction} data-opening-copy>I build thoughtful interfaces<br className={styles.desktopBreak} /> and the systems behind them.</p>
              <p className={styles.experience} data-opening-copy>15+ years turning complex challenges into clear, usable web experiences.</p>
            </div>
            <span className={styles.scrollCue} data-opening-copy aria-hidden="true">Scroll to explore</span>
          </section>
          <section className={styles.bridge} aria-labelledby="selected-experience" data-experience-bridge>
            <div className={styles.bridgeCopy} data-bridge-content>
              <p className={styles.bridgeLabel}>FRONTEND ENGINEERING. INTERFACE CRAFT.</p>
              <h2 id="selected-experience" className={styles.bridgeHeading} tabIndex={-1}>Selected <span className={styles.bridgeEmphasis}>experience</span></h2>
              <p className={styles.bridgeDescription}>Building products at CrowdComfort. Crafting global experiences at Huge.</p>
              <div className={styles.bridgeRule} aria-hidden="true" />
            </div>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <span className={styles.footerLabel}>IVAN SIACHOQUE · FRONTEND &amp; UI</span>
        <span className={styles.artworkNote}>Original city illustration · Conceptual portrait, not a likeness.</span>
      </footer>
    </div>
  );
}
