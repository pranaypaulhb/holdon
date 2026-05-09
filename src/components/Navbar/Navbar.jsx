import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'Features',  href: '#features' },
  { label: 'About',     href: '#about' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoIcon}>H</span>
          <span>HoldOn</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={styles.navLink}>{label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className={styles.ctaBtn}>Get Started</a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={styles.mobileLink} onClick={closeMenu}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className={styles.mobileCta} onClick={closeMenu}>Get Started</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
