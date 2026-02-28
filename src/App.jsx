import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import DemoVideo from './components/DemoVideo'
import Comparison from './components/Comparison'
import Metrics from './components/Metrics'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function detectInitialLang() {
  const saved = localStorage.getItem('mamre_lang')
  if (saved === 'he' || saved === 'en') return saved
  return (navigator.language || '').toLowerCase().startsWith('he') ? 'he' : 'en'
}

export default function App() {
  const [lang, setLang] = useState(() => detectInitialLang())

  const handleLangChange = useCallback((newLang) => {
    setLang(newLang)
    localStorage.setItem('mamre_lang', newLang)
    document.documentElement.setAttribute('lang', newLang === 'he' ? 'he' : 'en')
    document.documentElement.setAttribute('dir', newLang === 'he' ? 'rtl' : 'ltr')
    document.body.setAttribute('data-lang', newLang)
  }, [])

  useEffect(() => {
    handleLangChange(lang)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /* Scroll-reveal: every <section> fades in when it enters the viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('section').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div data-lang={lang}>
      <Header lang={lang} onLangChange={handleLangChange} />
      <ScrollToTop />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <DemoVideo lang={lang} />
        <Comparison lang={lang} />
        <Metrics lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}
