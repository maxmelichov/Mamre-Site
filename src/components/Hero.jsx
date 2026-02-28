import { BiH, BiP } from './Lang'

export default function Hero({ lang }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <BiH
          level={1}
          lang={lang}
          en="Welcome to MamreVoice"
          he="ברוכים הבאים ל-MamreVoice"
        />
        <BiP
          className="sub"
          lang={lang}
          en="An improved Hebrew text-to-speech model. Mamre replaces the Mamba backbone in Zonos TTS with DiffMamba — delivering more accurate pronunciation, better stress placement, and natural-sounding speech."
          he="מודל טקסט-לדיבור עברי משופר. Mamre מחליף את ליבת ה-Mamba במודל Zonos TTS ב-DiffMamba — ומספק הגייה מדויקת יותר, הדגשות טובות יותר, ודיבור טבעי."
        />
      </div>
    </section>
  )
}
