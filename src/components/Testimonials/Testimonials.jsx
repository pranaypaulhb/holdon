import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Designer at Notion',
    avatar: 'SJ',
    rating: 5,
    text: 'HoldOn completely changed how I manage my design projects. The clean interface and smart reminders keep me on track without feeling overwhelmed.',
  },
  {
    name: 'Marcus Lee',
    role: 'Software Engineer at Stripe',
    avatar: 'ML',
    rating: 5,
    text: "I've tried dozens of productivity apps. HoldOn is the only one that actually sticks because it adapts to how I work, not the other way around.",
  },
  {
    name: 'Priya Sharma',
    role: 'Startup Founder',
    avatar: 'PS',
    rating: 5,
    text: 'Our whole team switched to HoldOn for goal tracking. The collaboration features are outstanding and the analytics help us course-correct quickly.',
  },
  {
    name: 'David Chen',
    role: 'Freelance Consultant',
    avatar: 'DC',
    rating: 5,
    text: 'The privacy-first approach sold me immediately. My client data is safe, and the app is blazingly fast. Absolutely worth every penny.',
  },
]

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">⭐</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Loved by People Like You</h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear what our users have to say.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map(({ name, role, avatar, rating, text }) => (
            <article key={name} className={styles.card}>
              <Stars count={rating} />
              <blockquote className={styles.quote}>&ldquo;{text}&rdquo;</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{avatar}</div>
                <div>
                  <p className={styles.authorName}>{name}</p>
                  <p className={styles.authorRole}>{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
