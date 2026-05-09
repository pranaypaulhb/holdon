import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background blobs */}
      <div className={styles.blobA} aria-hidden="true" />
      <div className={styles.blobB} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        {/* Text */}
        <div className={styles.content}>
          <span className={`section-tag ${styles.badge}`}>✨ Introducing HoldOn</span>
          <h1 className={styles.headline}>
            Hold On to <br />
            <span className={styles.highlight}>What Matters</span>
          </h1>
          <p className={styles.subheading}>
            HoldOn helps you organize, prioritize, and stay connected with the
            things that truly matter — from life goals to daily habits.
          </p>
          <div className={styles.actions}>
            <a href="#features" className={styles.btnPrimary}>Explore Features</a>
            <a href="#about" className={styles.btnOutline}>Learn More</a>
          </div>
          <div className={styles.stats}>
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '98%',  label: 'Satisfaction' },
              { value: '50+',  label: 'Integrations' },
            ].map(stat => (
              <div key={stat.label} className={styles.stat}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className={styles.illustration} aria-hidden="true">
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.dot} style={{ background: '#ff6584' }} />
              <span className={styles.dot} style={{ background: '#ffc107' }} />
              <span className={styles.dot} style={{ background: '#4caf50' }} />
            </div>
            <div className={styles.cardBody}>
              {['Design system', 'Product roadmap', 'User research', 'Launch plan'].map((item, i) => (
                <div key={item} className={styles.taskRow}>
                  <span className={`${styles.checkbox} ${i < 2 ? styles.checked : ''}`}>
                    {i < 2 ? '✓' : ''}
                  </span>
                  <span className={i < 2 ? styles.strikethrough : ''}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.ring} />
        </div>
      </div>

      {/* Wave divider */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f7f8fc" />
        </svg>
      </div>
    </section>
  )
}
