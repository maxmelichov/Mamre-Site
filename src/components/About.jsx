import { BiH } from './Lang'

export default function About({ lang }) {
  const isHe = lang === 'he'
  return (
    <section className="about" id="about">
      <div className="container">
        <BiH level={2} lang={lang} en="About the Model" he="על המודל" />
        <div className="model-grid">
          <div className="model-text">
            {isHe ? (
              <>
                <p lang="he">
                  MamreVoice מופעל על ידי DiffMamba, ארכיטקטורה חדשנית המשלבת את היעילות של מודלים של מרחב מצבים
                  עם היציבות של תהליכי דיפוזיה. גישה היברידית זו מאפשרת סינתזת קול באיכות גבוהה עם עומס חישובי מופחת,
                  המאפשר המרת קול וטקסט לדיבור בזמן אמת על חומרה מודרנית.
                </p>
                <p lang="he">
                  המודל מצטיין בשימור פרוזודיה, שמירה על זהות הדובר, ויצירת דיבור טבעי במספר שפות,
                  עם אופטימיזציה מיוחדת לעיבוד שפה עברית.
                </p>
                <p className="muted small" lang="he">
                  מבוסס על: <a href="https://github.com/Zyphra/Zonos" target="_blank" rel="noopener">Zonos TTS</a> (עם DiffMamba במקום Mamba רגיל)
                  · מאמר מחקר: <a href="https://arxiv.org/html/2507.06204v1" target="_blank" rel="noopener">מאמר DiffMamba</a>
                  · בלוקי DiffMamba: <a href="https://github.com/maxmelichov/DiffMamba" target="_blank" rel="noopener">GitHub</a>
                </p>
                <p className="muted small" lang="he" style={{ marginTop: 8 }}>
                  🔗 <strong>קוד:</strong>{' '}
                  <a href="https://github.com/maxmelichov/Mamre-TTS" target="_blank" rel="noopener">github.com/maxmelichov/Mamre-TTS</a>
                  &nbsp;&nbsp;⚖️ <strong>משקולות:</strong>{' '}
                  <a href="https://huggingface.co/notmax123/MamreTTS" target="_blank" rel="noopener">huggingface.co/notmax123/MamreTTS</a>
                </p>
              </>
            ) : (
              <>
                <p>
                  MamreVoice is powered by DiffMamba, an innovative architecture that combines the efficiency of state-space models
                  with the stability of diffusion processes. This hybrid approach enables high-quality voice synthesis with reduced
                  computational overhead, making real-time voice conversion and text-to-speech possible on modern hardware.
                </p>
                <p>
                  The model excels in preserving prosody, maintaining speaker identity, and generating natural-sounding speech
                  across multiple languages, with particular optimization for Hebrew language processing.
                </p>
                <p className="muted small">
                  Based on: <a href="https://github.com/Zyphra/Zonos" target="_blank" rel="noopener">Zonos TTS</a> (using DiffMamba instead of regular Mamba)
                  · Research Paper: <a href="https://arxiv.org/html/2507.06204v1" target="_blank" rel="noopener">DiffMamba Paper</a>
                  · DiffMamba Blocks: <a href="https://github.com/maxmelichov/DiffMamba" target="_blank" rel="noopener">GitHub</a>
                </p>
                <p className="muted small" style={{ marginTop: 8 }}>
                  🔗 <strong>Code:</strong>{' '}
                  <a href="https://github.com/maxmelichov/Mamre-TTS" target="_blank" rel="noopener">github.com/maxmelichov/Mamre-TTS</a>
                  &nbsp;&nbsp;⚖️ <strong>Weights:</strong>{' '}
                  <a href="https://huggingface.co/notmax123/MamreTTS" target="_blank" rel="noopener">huggingface.co/notmax123/MamreTTS</a>
                </p>
              </>
            )}
          </div>
          <div className="model-image">
            <figure className="fig-card">
              <img src="assets/diffmamba.PNG" alt="DiffMamba architecture" />
              <figcaption className="muted small">
                {isHe ? 'ארכיטקטורה של DiffMamba' : 'DiffMamba Architecture'}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
