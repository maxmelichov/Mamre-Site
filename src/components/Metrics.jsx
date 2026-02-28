import { BiH } from './Lang'

const METRICS = [
  { key: 'wer',    label: 'Word Error Rate',    labelHe: 'שגיאות מילים',    zonos: 0.280, mamre: 0.197, lower: true },
  { key: 'cer',    label: 'Character Error Rate', labelHe: 'שגיאות תווים',    zonos: 0.107, mamre: 0.060, lower: true },
  { key: 'stress', label: 'Stress Accuracy',      labelHe: 'דיוק הדגש',       zonos: 82.5,  mamre: 88.4,  lower: false, pct: true },
]

function delta(z, m, lower) {
  if (lower) return `-${Math.round((1 - m / z) * 100)}%`
  return `+${(m - z).toFixed(1)}%`
}

export default function Metrics({ lang }) {
  const isHe = lang === 'he'
  return (
    <section className="metrics-section" id="metrics">
      <div className="container">
        <div className="section-header">
          <BiH level={2} lang={lang} en="Mamre vs Zonos" he="Mamre מול Zonos" />
        </div>

        <div className="mx-grid">
          {METRICS.map(m => (
            <div className="mx-card" key={m.key}>
              <p className="mx-card__title">{isHe ? m.labelHe : m.label}</p>

              <div className="mx-card__delta">{delta(m.zonos, m.mamre, m.lower)}</div>

              <div className="mx-card__bars">
                <div className="mx-bar mx-bar--zonos">
                  <span className="mx-bar__label">Zonos</span>
                  <div className="mx-bar__track">
                    <div
                      className="mx-bar__fill mx-bar__fill--zonos"
                      style={{ width: m.lower ? `${(m.zonos / 0.30) * 100}%` : `${m.zonos}%` }}
                    />
                  </div>
                  <span className="mx-bar__val">{m.pct ? `${m.zonos}%` : m.zonos.toFixed(3)}</span>
                </div>
                <div className="mx-bar mx-bar--mamre">
                  <span className="mx-bar__label">Mamre</span>
                  <div className="mx-bar__track">
                    <div
                      className="mx-bar__fill mx-bar__fill--mamre"
                      style={{ width: m.lower ? `${(m.mamre / 0.30) * 100}%` : `${m.mamre}%` }}
                    />
                  </div>
                  <span className="mx-bar__val">{m.pct ? `${m.mamre}%` : m.mamre.toFixed(3)}</span>
                </div>
              </div>

              <p className="mx-card__hint">
                {m.lower
                  ? (isHe ? '↓ נמוך יותר = טוב יותר' : '↓ Lower is better')
                  : (isHe ? '↑ גבוה יותר = טוב יותר' : '↑ Higher is better')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
