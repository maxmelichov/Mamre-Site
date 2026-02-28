import { BiH } from './Lang'

export default function Metrics({ lang }) {
  const isHe = lang === 'he'
  return (
    <section className="metrics-section" id="metrics">
      <div className="container">
        <div className="section-header">
          <BiH level={2} lang={lang} en="Mamre vs Zonos: Accuracy Metrics" he="Mamre מול Zonos: מדדי דיוק" />
        </div>
        <p className="metrics-intro">
          {isHe
            ? 'שני המודלים הוערכו על אותה קבוצת טקסטים עבריים. ההבדל היחיד בין Zonos ל-Mamre הוא החלפת בלוקי Mamba ב-DiffMamba. כל שאר הרכיבים — הנתונים, הפונמות, הקולות — זהים לחלוטין.'
            : 'Both models were evaluated on the same Hebrew text set. The only difference between Zonos and Mamre is swapping Mamba blocks for DiffMamba blocks. Everything else — training data, phonemes, voices — is identical.'}
        </p>
        <div className="metrics-table-wrap">
          <table className="metrics-table">
            <thead>
              <tr>
                <th>{isHe ? 'מודל' : 'Model'}</th>
                <th>{isHe ? 'דיוק (WER)' : 'Accuracy (WER)'}</th>
                <th>WER ↓</th>
                <th>CER ↓</th>
                <th>{isHe ? 'דיוק הדגש ↑' : 'Stress Accuracy ↑'}</th>
                <th>{isHe ? 'WER הדגש ↓' : 'Stress WER ↓'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="metrics-row metrics-row--zonos">
                <td className="metrics-model-name">
                  <a href="https://github.com/Zyphra/Zonos" target="_blank" rel="noopener">Zonos</a>
                  <span className="metrics-lang-tag">Mamba</span>
                </td>
                <td>
                  <div className="metrics-bar-wrap">
                    <div className="metrics-bar" style={{ '--pct': '72%' }} />
                    <span className="metrics-val">72.0%</span>
                  </div>
                </td>
                <td><span className="metrics-num metrics-num--bad">0.280</span></td>
                <td><span className="metrics-num metrics-num--bad">0.107</span></td>
                <td>
                  <div className="metrics-bar-wrap">
                    <div className="metrics-bar" style={{ '--pct': '82.5%' }} />
                    <span className="metrics-val">82.5%</span>
                  </div>
                </td>
                <td><span className="metrics-num metrics-num--mid">0.175</span></td>
              </tr>
              <tr className="metrics-row metrics-row--mamre">
                <td className="metrics-model-name">
                  <a href="https://github.com/maxmelichov/Mamre-TTS" target="_blank" rel="noopener">Mamre</a>
                  <span className="metrics-lang-tag metrics-lang-tag--brand">DiffMamba</span>
                </td>
                <td>
                  <div className="metrics-bar-wrap">
                    <div className="metrics-bar metrics-bar--brand" style={{ '--pct': '80.3%' }} />
                    <span className="metrics-val metrics-val--brand">80.3%</span>
                  </div>
                </td>
                <td><span className="metrics-num metrics-num--good">0.197</span></td>
                <td><span className="metrics-num metrics-num--good">0.060</span></td>
                <td>
                  <div className="metrics-bar-wrap">
                    <div className="metrics-bar metrics-bar--brand" style={{ '--pct': '88.4%' }} />
                    <span className="metrics-val metrics-val--brand">88.4%</span>
                  </div>
                </td>
                <td><span className="metrics-num metrics-num--good">0.110</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="metrics-note">
          {isHe ? (
            <>↑ = גבוה יותר עדיף &nbsp; ↓ = נמוך יותר עדיף &nbsp;·&nbsp; <strong>WER</strong> = שיעור שגיאות מילים &nbsp;·&nbsp; <strong>CER</strong> = שיעור שגיאות תווים</>
          ) : (
            <>↑ = higher is better &nbsp; ↓ = lower is better &nbsp;·&nbsp; <strong>WER</strong> = Word Error Rate &nbsp;·&nbsp; <strong>CER</strong> = Character Error Rate</>
          )}
        </p>

        <div className="metrics-improvements">
          <div className="metric-improve-card">
            <p className="metric-improve-card__value">+8.3%</p>
            <p className="metric-improve-card__label">{isHe ? 'דיוק WER' : 'WER Accuracy'}</p>
            <p className="metric-improve-card__desc">
              {isHe
                ? 'יותר מילים מתועתקות נכון מהדיבור שנוצר'
                : 'More words correctly transcribed from generated speech'}
            </p>
          </div>
          <div className="metric-improve-card">
            <p className="metric-improve-card__value">-44%</p>
            <p className="metric-improve-card__label">{isHe ? 'שגיאות תווים' : 'Character Errors'}</p>
            <p className="metric-improve-card__desc">
              {isHe
                ? 'פחות תווים שגויים — הגייה מדויקת יותר ברמת ההברה'
                : 'Fewer wrong characters — more precise syllable-level pronunciation'}
            </p>
          </div>
          <div className="metric-improve-card">
            <p className="metric-improve-card__value">+5.9%</p>
            <p className="metric-improve-card__label">{isHe ? 'דיוק הדגש' : 'Stress Accuracy'}</p>
            <p className="metric-improve-card__desc">
              {isHe
                ? 'הדגשה לקסיקלית נכונה יותר — משפיע על טבעיות הצליל'
                : 'Better lexical stress placement — directly affects how natural speech sounds'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
