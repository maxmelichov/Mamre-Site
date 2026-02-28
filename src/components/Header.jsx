import { useState, useEffect, useRef } from 'react'
import { T } from './Lang'

const NAV_ITEMS = [
  { href: '#home',            en: 'Home',            he: 'בית' },
  { href: '#about',           en: 'About',           he: 'אודות' },
  { href: '#demo',            en: 'Demo',            he: 'הדגמה' },
  { href: '#comparison',      en: 'Comparison',      he: 'השוואה' },
  { href: '#voice-conversion',en: 'Voice Conversion',he: 'המרת קול' },
  { href: '#metrics',         en: 'Metrics',         he: 'מדדים' },
]

export default function Header({ lang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const headerRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.pageYOffset > 50)

      // Active section tracking
      const sections = document.querySelectorAll('section[id]')
      const pos = window.pageYOffset + 100
      sections.forEach(sec => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close nav on outside click
  useEffect(() => {
    function handle(e) {
      if (navOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setNavOpen(false)
      }
    }
    document.addEventListener('click', handle)
    return () => document.removeEventListener('click', handle)
  }, [navOpen])

  function scrollTo(e, href) {
    e.preventDefault()
    setNavOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const headerH = headerRef.current?.offsetHeight ?? 72
    window.scrollTo({ top: target.offsetTop - headerH, behavior: 'smooth' })
  }

  return (
    <header ref={headerRef} className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="brand">
          <img src="assets/logo.png" alt="MamreVoice" className="logo" />
          <span className="brand-text">MamreVoice</span>
        </div>

        <button
          className={`nav-toggle${navOpen ? ' active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(v => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`main-nav${navOpen ? ' active' : ''}`}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${activeSection === item.href.slice(1) ? ' active' : ''}`}
              onClick={(e) => scrollTo(e, item.href)}
            >
              <T lang={lang} en={item.en} he={item.he} />
            </a>
          ))}
        </nav>

        <div className="lang-switch" aria-label="Language switcher">
          <button
            className={`chip${lang === 'en' ? ' active' : ''}`}
            onClick={() => onLangChange('en')}
            aria-pressed={lang === 'en'}
          >EN</button>
          <button
            className={`chip${lang === 'he' ? ' active' : ''}`}
            onClick={() => onLangChange('he')}
            aria-pressed={lang === 'he'}
          >עב</button>
        </div>
      </div>
    </header>
  )
}
