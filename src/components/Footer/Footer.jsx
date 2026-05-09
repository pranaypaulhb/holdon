import styles from './Footer.module.css'

const quickLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  
]

const socials = [
  { label: 'Twitter',  href: '#', icon: '𝕏' },
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'GitHub',   href: '#', icon: '⌥' },
  { label: 'Twitter',  href: '#', icon: '𝕏' },
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'GitHub',   href: '#', icon: '⌥' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`${styles.top} container`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            <span className={styles.logoIcon}>H</span>
            <span>HoldOn</span>
          </a>
          <p className={styles.tagline}>
            The smarter way to hold on to what matters. Build habits, track goals,
            and live with intention.
          </p>
          <div className={styles.socials}>
            {socials.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label} className={styles.socialIcon}>{icon}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map(({ label, href }) => (
              <li key={label}><a href={href} className={styles.link}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Legal</h4>
          <ul className={styles.linkList}>
            {legal.map(({ label, href }) => (
              <li key={label}><a href={href} className={styles.link}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Stay Updated</h4>
          <p className={styles.newsletterText}>Get tips, updates and news right to your inbox.</p>
          <form className={styles.newsletter} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" className={styles.newsletterInput} aria-label="Email for newsletter" />
            <button type="submit" className={styles.newsletterBtn}>→</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>© {year} HoldOn. All rights reserved.</p>
          <p className={styles.made}>Made with ❤️ by the HoldOn team</p>
        </div>
      </div>
    </footer>
  )
}
