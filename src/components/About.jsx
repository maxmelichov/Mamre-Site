import { BiH } from './Lang'

export default function About({ lang }) {
  const isHe = lang === 'he'
  return (
    <section className="about" id="about">
      <div className="container">
        <BiH level={2} lang={lang} en="About the Model" he="על המודל" />

        {/* Zonos vs Mamre side-by-side explainer */}
        <div className="diff-explainer">
          <div className="diff-card diff-card--zonos">
            <div className="diff-card__label">
              {isHe ? '⬡ מודל בסיס' : '⬡ BASE MODEL'}
            </div>
            <h3 className="diff-card__title">Zonos TTS</h3>
            {isHe ? (
              <div className="diff-card__body" lang="he">
                <p>מודל טקסט-לדיבור בקוד פתוח מבית <a href="https://github.com/Zyphra/Zonos" target="_blank" rel="noopener">Zyphra</a> שמשתמש בארכיטקטורת <strong>Mamba</strong> (מודל מרחב מצבים) עם דיפוזיה ליצירת דיבור.</p>
                <ul>
                  <li>עיבוד רציף עם Mamba</li>
                  <li>תמיכה בסיסית בעברית</li>
                  <li>WER של 28% על טקסטים עבריים</li>
                </ul>
              </div>
            ) : (
              <div className="diff-card__body">
                <p>An open-source text-to-speech model by <a href="https://github.com/Zyphra/Zonos" target="_blank" rel="noopener">Zyphra</a> that uses <strong>Mamba</strong> (a state-space model architecture) with diffusion for speech generation.</p>
                <ul>
                  <li>Sequential processing with Mamba</li>
                  <li>Basic Hebrew support</li>
                  <li>28% WER on Hebrew text</li>
                </ul>
              </div>
            )}
          </div>

          <div className="diff-card diff-card--mamre">
            <div className="diff-card__label">
              {isHe ? '✦ מודל משופר' : '✦ IMPROVED MODEL'}
            </div>
            <h3 className="diff-card__title">Mamre TTS</h3>
            {isHe ? (
              <div className="diff-card__body" lang="he">
                <p>מחליף את ליבת ה-Mamba ב-<strong>DiffMamba</strong> — ארכיטקטורה חדשנית שמשלבת יעילות של מודלי מרחב מצבים עם יציבות של תהליכי דיפוזיה. התוצאה: דיבור מדויק וטבעי יותר.</p>
                <div className="improvement-badges">
                  <span className="improvement-badge improvement-badge--green">↓ 30% פחות שגיאות מילים</span>
                  <span className="improvement-badge improvement-badge--green">↓ 44% פחות שגיאות תווים</span>
                  <span className="improvement-badge improvement-badge--brand">↑ דיוק הדגש טוב יותר</span>
                </div>
              </div>
            ) : (
              <div className="diff-card__body">
                <p>Replaces the Mamba core with <strong>DiffMamba</strong> — an architecture that combines state-space model efficiency with diffusion process stability. The result: more accurate and natural-sounding speech.</p>
                <div className="improvement-badges">
                  <span className="improvement-badge improvement-badge--green">↓ 30% fewer word errors</span>
                  <span className="improvement-badge improvement-badge--green">↓ 44% fewer char errors</span>
                  <span className="improvement-badge improvement-badge--brand">↑ Better stress accuracy</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="model-grid">
          <div className="model-text">
            {isHe ? (
              <>
                <p lang="he">
                  <strong>מה זה DiffMamba?</strong> ארכיטקטורת DiffMamba מוסיפה שכבות דיפוזיה בתוך בלוקי Mamba עצמם,
                  במקום להשתמש בהם בנפרד. זה מאפשר למודל ללמוד דפוסי דיבור עדינים יותר — כמו הדגשות,
                  קצב, ואינטונציה — תוך שמירה על מהירות ויעילות.
                </p>
                <p className="muted small" lang="he">
                  מאמר מחקר: <a href="https://arxiv.org/html/2507.06204v1" target="_blank" rel="noopener">מאמר DiffMamba</a>
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
                  <strong>What is DiffMamba?</strong> The DiffMamba architecture embeds diffusion layers inside the Mamba blocks themselves,
                  rather than using them separately. This lets the model learn finer speech patterns — like stress placement,
                  rhythm, and intonation — while maintaining speed and efficiency.
                </p>
                <p className="muted small">
                  Research Paper: <a href="https://arxiv.org/html/2507.06204v1" target="_blank" rel="noopener">DiffMamba Paper</a>
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
