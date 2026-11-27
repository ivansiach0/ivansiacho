import * as styles from './Opening.css';

export function Opening() {
  return (
    <div className={styles.page}>
      <div className={styles.city} aria-hidden="true" />
      <div className={styles.shade} aria-hidden="true" />

      <header className={styles.header}>
        <span className={styles.wordmark} aria-label="Ivan Siachoque">
          <svg className={styles.monogram} viewBox="0 0 40 40" aria-hidden="true">
            <path d="M5 5h5v30H5zm15 0h15v5H21v7h14v18H16v-5h14v-8H16V5z" fill="currentColor" />
          </svg>
          <span>IVAN<br />SIACHOQUE</span>
        </span>
        <span className={styles.headerNote}>A considered approach.<br />From code to interface.</span>
      </header>

      <main className={styles.main}>
        <p className={styles.eyebrow}>Senior Frontend Engineer <span aria-hidden="true">·</span> UI &amp; Motion</p>
        <h1 className={styles.name}>Ivan<br />{' '}<span className={styles.surname}>Siachoque</span></h1>
        <p className={styles.introduction}>I build thoughtful interfaces<br className={styles.desktopBreak} /> and the systems behind them.</p>
        <p className={styles.experience}>15+ years turning complex challenges into clear, usable web experiences.</p>

        <nav className={styles.actions} aria-label="Contact Ivan">
          <a className={styles.primaryLink} href="mailto:ivanfernandosia@gmail.com">Get in touch</a>
          <a className={styles.secondaryLink} href="https://www.linkedin.com/in/ivan-siachoque-17491247/">LinkedIn</a>
        </nav>
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerLabel}>FRONTEND ENGINEERING. INTERFACE CRAFT.</span>
        <span className={styles.artworkNote}>Original city illustration · Conceptual portrait, not a likeness.</span>
      </footer>
    </div>
  );
}
