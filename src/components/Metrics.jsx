import { BiH } from './Lang'

export default function Metrics({ lang }) {
  const isHe = lang === 'he'
  return (
    <section className="metrics-section" id="metrics">
      <div className="container">
        <div className="section-header">
          <BiH level={2} lang={lang} en="Accuracy &amp; WER Metrics" he="מדדי דיוק ו-WER" />
        </div>
        <p className="metrics-intro">
          {isHe
            ? 'הערכה על TTS עברי עם מודעות לפונמות. WER ו-CER מודדים דיוק תעתיק — נמוך יותר עדיף. דיוק הדגש מודד הנחת הדגש הלקסיקלי הנכון — גבוה יותר עדיף.'
            : 'Evaluation on Hebrew phoneme-aware TTS. WER (Word Error Rate) and CER (Character Error Rate) measure transcription accuracy; lower is better. Stress accuracy measures correct lexical stress placement; higher is better.'}
        </p>
        <div className="metrics-table-wrap">
          <table className="metrics-table">
            <thead>
              <tr>
                <th>{isHe ? 'מודל' : 'Model'}</th>
                <th>{isHe ? 'דיוק (WER)' : 'Accuracy (WER)'}</th>
                <th>WER</th>
                <th>CER</th>
                <th>{isHe ? 'דיוק הדגש' : 'Stress Accuracy'}</th>
                <th>{isHe ? 'WER הדגש' : 'Stress WER'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="metrics-row metrics-row--zonos">
                <td className="metrics-model-name">
                  <a href="https://github.com/Zyphra/Zonos" target="_blank" rel="noopener">zonos-phonikud</a>
                  <span className="metrics-lang-tag">Hebrew</span>
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
                  <a href="https://github.com/maxmelichov/Mamre-TTS" target="_blank" rel="noopener">mamre-phonikud</a>
                  <span className="metrics-lang-tag metrics-lang-tag--brand">Hebrew</span>
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
            <><strong>Mamre</strong> עולה על Zonos בכל המדדים — <strong>+8.3 נק'</strong> דיוק WER, CER <strong>נמוך ב-44%</strong>, ו<strong>+5.9 נק'</strong> דיוק הדגש.</>
          ) : (
            <><strong>Mamre</strong> outperforms Zonos across all metrics — <strong>+8.3 pp</strong> WER accuracy, <strong>44% lower</strong> CER, and <strong>+5.9 pp</strong> stress accuracy.</>
          )}
        </p>
      </div>
    </section>
  )
}
