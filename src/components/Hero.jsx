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
          en="MamreVoice is a cutting-edge text-to-speech and voice conversion system that brings human-like naturalness to synthetic speech. Built on advanced AI architecture, it delivers expressive, clear, and lifelike voice synthesis for applications ranging from accessibility tools to creative content generation."
          he="MamreVoice הוא מערכת מתקדמת להמרת טקסט לדיבור והמרת קול המביאה טבעיות אנושית לדיבור סינתטי. הוא בנוי על ארכיטקטורה מתקדמת של בינה מלאכותית ומספק סינתזת קול ביטויית, ברורה וחיה עבור יישומים החל מכלי נגישות ועד יצירת תוכן יצירתי."
        />
      </div>
    </section>
  )
}
