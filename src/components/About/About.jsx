import styles from './About.module.css'

const pillars = [
  { icon: '🌱', text: 'Built for growth' },
  { icon: '💡', text: 'Insight-driven' },
  { icon: '🌍', text: 'Community-first' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`${styles.inner} container`}>
        {/* Image placeholder */}
        <div className={styles.imgWrap} aria-hidden="true">
          <div className={styles.imgPlaceholder}>
            <span className={styles.imgEmoji}>🚀</span>
          </div>
          <div className={styles.badge}>
            <span>🏆</span> Product of the Year
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <span className="section-tag">About Us</span>
          <h2 className={`section-title ${styles.title}`}>
            We Believe Great <br /> Things Deserve to Last
          </h2>
          <p className={styles.body}>
            HoldOn was born from a simple idea — that the things we care most about
            deserve dedicated attention. We are a passionate team of designers,
            engineers, and dreamers on a mission to help millions of people hold on
            to their goals, memories, and connections.
          </p>
          <p className={styles.body}>
            Since 2023 we have served over 10,000 users across 40+ countries,
            building a product that is thoughtful, fast, and genuinely useful.
          </p>
          <div className={styles.pillars}>
            {pillars.map(({ icon, text }) => (
              <div key={text} className={styles.pillar}>
                <span className={styles.pillarIcon}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className={styles.cta}>Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
