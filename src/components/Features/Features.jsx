import styles from './Features.module.css'

const features = [
  {
    icon: '🎯',
    title: 'Smart Goals',
    desc: 'Set, track, and achieve your goals with AI-powered suggestions and progress tracking built right in.',
  },
  {
    icon: '🔔',
    title: 'Smart Reminders',
    desc: 'Never miss a beat with context-aware notifications that adapt to your schedule and habits.',
  },
  {
    icon: '📊',
    title: 'Insightful Analytics',
    desc: 'Visualise your progress with beautiful charts and meaningful metrics that motivate you daily.',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    desc: 'Share goals, assign tasks, and celebrate wins together — perfect for teams of any size.',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    desc: 'Your data stays yours. End-to-end encryption and full control over what you share.',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Built for performance — instant sync across all devices so you are always up-to-date.',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Features</span>
          <h2 className="section-title">Everything You Need to Succeed</h2>
          <p className="section-subtitle">
            Powerful tools that help you stay focused, organised, and motivated —
            all in one beautifully simple app.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map(({ icon, title, desc }) => (
            <article key={title} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
