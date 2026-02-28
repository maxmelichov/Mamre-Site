import { useState, useEffect } from 'react'
import { BiH } from './Lang'

const TEXT_EXAMPLES = [
  {
    en: "ברוכים הבאים. כל מילה שאתם שומעים עכשיו נוצרה על-ידי מודל קול שפיתחתי שהופך טקסט לדיבור. לראשונה, דיבור שנשמע באמת אנושי: מהנגינה, ההדגשות ונשימות תחושה טבעית לחלוטין.",
    he: "ברוכים הבאים. כל מילה שאתם שומעים עכשיו נוצרה על-ידי מודל קול שפיתחתי שהופך טקסט לדיבור. לראשונה, דיבור שנשמע באמת אנושי: מהנגינה, ההדגשות ונשימות תחושה טבעית לחלוטין.",
  },
  {
    en: "!אם אתם או אתן שואלים או שואלות אם המודל עובד עבור קולות של נשים, אז התשובה היא כן",
    he: "!אם אתם או אתן שואלים או שואלות אם המודל עובד עבור קולות של נשים, אז התשובה היא כן",
  },
  {
    en: "ʔomʁˈim ʃeʃo'wa'ʁma bebeʔˈeʁ ʃˈeva haχˈi teʔimˈa, mˈa hasˈod ʃelaχˈem",
    he: "ʔomʁˈim ʃeʃo'wa'ʁma bebeʔˈeʁ ʃˈeva haχˈi teʔimˈa, mˈa hasˈod ʃelaχˈem",
  },
]

async function urlExists(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', cache: 'no-cache' })
    return res.ok
  } catch {
    return false
  }
}

async function pickFirst(candidates) {
  for (const url of candidates) {
    if (await urlExists(url)) return url
  }
  return null
}

async function loadRows() {
  const exts = ['mp3', 'wav', 'm4a', 'ogg']
  const rows = []

  for (let i = 1; i <= 20; i++) {
    const targetUrl = await pickFirst(exts.map(e => `recordings/${i}_target.${e}`))
    const predUrl = await pickFirst(exts.map(e => `recordings/${i}_prediction.${e}`))
    if (!targetUrl || !predUrl) break
    const textContent = TEXT_EXAMPLES[i - 1] || {
      en: `Example ${i}: Demonstrating voice conversion capabilities.`,
      he: `דוגמה ${i}: הדגמת יכולות המרת קול.`,
    }
    rows.push({ targetUrl, predUrl, text: textContent })
  }
  return rows
}

export default function VoiceConversion({ lang }) {
  const [rows, setRows] = useState([])
  const isHe = lang === 'he'

  useEffect(() => {
    loadRows().then(setRows)
  }, [])

  return (
    <section className="voice-conversion" id="voice-conversion">
      <div className="container">
        <div className="section-header">
          <BiH level={2} lang={lang} en="Voice Conversion" he="המרת קול" />
        </div>
        <div className="speed-note">
          <p>
            {isHe ? (
              <><strong>⚡ קצב דיבור:</strong> כל ההקלטות למטה משתמשות בקצב דיבור <span className="speed-highlight">9</span> (טווח: 5-20, כאשר 10 = מהירות רגילה)</>
            ) : (
              <><strong>⚡ Speaking Rate:</strong> All recordings below use speaking rate <span className="speed-highlight">9</span> (scale: 5-20, where 10 = normal speed)</>
            )}
          </p>
        </div>
        <div className="vc-table">
          <div className="vc-row vc-header">
            <div className="vc-cell"><strong>{isHe ? 'טקסט' : 'Text'}</strong></div>
            <div className="vc-cell"><strong>{isHe ? 'מטרה' : 'Target'}</strong></div>
            <div className="vc-cell"><strong>{isHe ? 'חזוי' : 'Prediction'}</strong></div>
          </div>
          <div className="vc-body">
            {rows.length === 0 ? (
              <div className="vc-empty">
                {isHe ? 'אין הקלטות זמינות' : 'No recordings available'}
              </div>
            ) : (
              rows.map((row, i) => (
                <div className="vc-row" key={i}>
                  <div className="vc-cell">
                    <div className="static-text">{isHe ? row.text.he : row.text.en}</div>
                  </div>
                  <div className="vc-cell">
                    <audio controls preload="none" controlsList="nodownload">
                      <source src={row.targetUrl} />
                    </audio>
                  </div>
                  <div className="vc-cell">
                    <audio controls preload="none" controlsList="nodownload">
                      <source src={row.predUrl} />
                    </audio>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
