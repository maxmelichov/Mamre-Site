// Helper: renders children only for the active language
export function T({ lang, en, he }) {
  return lang === 'he' ? he : en
}

// Bilingual paragraph
export function BiP({ lang, en, he, className = '', ...props }) {
  return (
    <p className={className} {...(lang === 'he' ? { lang: 'he' } : {})} {...props}>
      {lang === 'he' ? he : en}
    </p>
  )
}

// Bilingual heading
export function BiH({ level = 2, lang, en, he, className = '', ...props }) {
  const Tag = `h${level}`
  return (
    <Tag className={className} {...(lang === 'he' ? { lang: 'he' } : {})} {...props}>
      {lang === 'he' ? he : en}
    </Tag>
  )
}
