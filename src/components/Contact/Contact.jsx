import styles from './Contact.module.css'

const contactDetails = [
  { icon: '✉️', label: 'Email',  value: 'hello@holdon.app',    href: 'mailto:hello@holdon.app' },
  { icon: '📞', label: 'Phone',  value: '+1 (555) 123-4567',   href: 'tel:+15551234567' },
  { icon: '📍', label: 'Office', value: 'San Francisco, CA',   href: null },
]

const socials = [
  { label: 'Twitter',  href: '#', icon: '𝕏' },
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'GitHub',   href: '#', icon: '⌥' },
  { label: 'Discord',  href: '#', icon: '💬' },
]

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for your message! We will be in touch soon.')
    e.target.reset()
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.inner} container`}>
        {/* Info */}
        <div className={styles.info}>
          <span className="section-tag">Contact</span>
          <h2 className={`section-title ${styles.title}`}>Let's Start a Conversation</h2>
          <p className={styles.body}>
            Have a question, partnership proposal, or just want to say hello?
            We would love to hear from you. Our team typically responds within 24 hours.
          </p>

          <ul className={styles.detailList}>
            {contactDetails.map(({ icon, label, value, href }) => (
              <li key={label} className={styles.detailItem}>
                <span className={styles.detailIcon}>{icon}</span>
                <div>
                  <p className={styles.detailLabel}>{label}</p>
                  {href
                    ? <a href={href} className={styles.detailValue}>{value}</a>
                    : <p className={styles.detailValue}>{value}</p>
                  }
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.socials}>
            {socials.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label} className={styles.socialBtn}>{icon}</a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <h3 className={styles.formTitle}>Send a Message</h3>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" className={styles.input} placeholder="Jane" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" className={styles.input} placeholder="Doe" required />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className={styles.input} placeholder="jane@example.com" required />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" className={styles.input} placeholder="How can we help?" required />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea id="message" name="message" className={`${styles.input} ${styles.textarea}`} placeholder="Tell us more…" rows={5} required />
          </div>

          <button type="submit" className={styles.submitBtn}>Send Message →</button>
        </form>
      </div>
    </section>
  )
}
