import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Story from './components/Story'
import DemoVideo from './components/DemoVideo'
import Comparison from './components/Comparison'
import Metrics from './components/Metrics'
import VoiceConversion from './components/VoiceConversion'
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

  return (
    <div data-lang={lang}>
      <Header lang={lang} onLangChange={handleLangChange} />
      <ScrollToTop />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Story lang={lang} />
        <DemoVideo lang={lang} />
        <Comparison lang={lang} />
        <Metrics lang={lang} />
        <VoiceConversion lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}
