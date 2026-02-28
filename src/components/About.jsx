import { BiH } from './Lang'

export default function About({ lang }) {
  const isHe = lang === 'he'
  return (
    <section className="about" id="about">
      <div className="container">
        <BiH level={2} lang={lang} en="About the Model" he="על המודל" />

        <div className="about-simple">
          {isHe ? (
            <p lang="he">
              Mamre TTS הוא מודל טקסט-לדיבור לעברית, מבוסס על <a href="https://github.com/Zyphra/Zonos" target="_blank" rel="noopener">Zonos</a> עם ארכיטקטורת <strong>DiffMamba</strong> — שמשלבת שכבות דיפוזיה בתוך בלוקי Mamba ליצירת דיבור מדויק וטבעי יותר.
            </p>
          ) : (
            <p>
              Mamre TTS is a Hebrew text-to-speech model, built on <a href="https://github.com/Zyphra/Zonos" target="_blank" rel="noopener">Zonos</a> with <strong>DiffMamba</strong> architecture — embedding diffusion layers inside Mamba blocks for more accurate and natural-sounding speech.
            </p>
          )}
          <div className="about-links">
            <a href="https://arxiv.org/html/2507.06204v1" target="_blank" rel="noopener">📄 {isHe ? 'מאמר' : 'Paper'}</a>
            <a href="https://github.com/maxmelichov/Mamre-TTS" target="_blank" rel="noopener">💻 {isHe ? 'קוד' : 'Code'}</a>
            <a href="https://huggingface.co/notmax123/MamreTTS" target="_blank" rel="noopener">🤗 {isHe ? 'משקולות' : 'Weights'}</a>
            <a href="https://github.com/maxmelichov/DiffMamba" target="_blank" rel="noopener">🧩 DiffMamba</a>
          </div>
        </div>
      </div>
    </section>
  )
}
