import { BiH } from './Lang'

const EXAMPLES = [
  {
    he: '"הוא צפה בס֫רט וראה חיה שצ֫פה במ֫ים 🐸"',
    enTrans: '"He watched a movie and saw an animal that was watching the water 🐸"',
    heTrans: '"הוא צפה בסרט וראה חיה שצפתה במים 🐸"',
    mamre: 'phonikud_examples/mamre_1.wav',
    google: { src: 'phonikud_examples/google_1.opus', type: 'audio/ogg; codecs=opus' },
    phonikud: { src: 'phonikud_examples/phonikud_1.mp4', type: 'audio/mp4' },
    eleven: { src: 'phonikud_examples/eleven_1.mp3', type: 'audio/mp3' },
    roboshaul: { src: 'phonikud_examples/roboshaul_1.opus', type: 'audio/ogg; codecs=opus' },
  },
  {
    he: '"הוא רצה את זה גם אבל היא ר֫צה מהר והקד֫ימה אותו 🏃‍♀️"',
    enTrans: '"He wanted it too, but she ran fast and overtook him 🏃‍♀️"',
    heTrans: '"הוא רצה את זה גם, אבל היא רצה מהר והקדימה אותו 🏃‍♀️"',
    mamre: 'phonikud_examples/mamre_2.wav',
    google: { src: 'phonikud_examples/google_2.opus', type: 'audio/ogg; codecs=opus' },
    phonikud: { src: 'phonikud_examples/phonikud_2.mp4', type: 'audio/mp4' },
    eleven: { src: 'phonikud_examples/eleven_2.opus', type: 'audio/ogg; codecs=opus' },
    roboshaul: { src: 'phonikud_examples/roboshaul_2.opus', type: 'audio/ogg; codecs=opus' },
  },
  {
    he: '"בוא תרד לאכול יש בור֫קס עם ת֫רד 🥬"',
    enTrans: '"Come down to eat, there\'s burekas with chard 🥬"',
    heTrans: '"בוא תרד לאכול, יש בורקס עם תרד 🥬"',
    mamre: 'phonikud_examples/mamre_3.wav',
    google: { src: 'phonikud_examples/google_3.opus', type: 'audio/ogg; codecs=opus' },
    phonikud: { src: 'phonikud_examples/phonikud_3.mp4', type: 'audio/mp4' },
    eleven: { src: 'phonikud_examples/eleven_3.opus', type: 'audio/ogg; codecs=opus' },
    roboshaul: { src: 'phonikud_examples/roboshaul_3.opus', type: 'audio/ogg; codecs=opus' },
  },
]

function AudioCell({ src, type }) {
  return (
    <div className="phonikud-cell">
      <audio controls preload="none" controlsList="nodownload">
        <source src={src} type={type} />
        <p className="audio-fallback">Your browser doesn't support this audio format.</p>
      </audio>
    </div>
  )
}

export default function Comparison({ lang }) {
  const isHe = lang === 'he'

  return (
    <section className="phonikud-comparison" id="comparison">
      <div className="container">
        <div className="section-header">
          <BiH
            level={2}
            lang={lang}
            en="Model Comparison: Mamre vs Others"
            he="השוואת מודלים: ממרא מול אחרים"
          />
        </div>

        <div className="comparison-intro">
          <div className="speed-info">
            <p>
              {isHe ? (
                <>
                  <strong>📊 קצב דיבור:</strong> ממרא משתמש ב<span className="speed-highlight">קריאת פונמות</span> עם קצבי דיבור משתנים.
                  טווח: 5-20 (10 = מהירות רגילה).
                </>
              ) : (
                <>
                  <strong>📊 Speaking Rate:</strong> Mamre uses <span className="speed-highlight">phoneme reading</span> with variable speaking rates.
                  Scale: 5-20 (10 = normal speed).
                </>
              )}
            </p>
          </div>
        </div>

        <div className="phonikud-table-wrap">
          <div className="phonikud-table">
            {/* Header */}
            <div className="phonikud-row phonikud-header">
              <div className="phonikud-cell">
                <strong>{isHe ? 'טקסט עברי' : 'Hebrew Text'}</strong>
              </div>
              <div className="phonikud-cell">
                <strong>{isHe ? <>ממרא <span className="speed-tag">קצב 11.5</span></> : <>Mamre <span className="speed-tag">rate 11.5</span></>}</strong>
              </div>
              <div className="phonikud-cell"><strong>Google TTS</strong></div>
              <div className="phonikud-cell"><strong>Phonikud</strong></div>
              <div className="phonikud-cell"><strong>ElevenLabs</strong></div>
              <div className="phonikud-cell"><strong>RoboShaul</strong></div>
            </div>

            {EXAMPLES.map((ex, i) => (
              <div className="phonikud-row" key={i}>
                <div className="phonikud-cell text-cell">
                  <div className="example-text">
                    <p className="hebrew-text">{ex.he}</p>
                    <p className="translation">{isHe ? ex.heTrans : ex.enTrans}</p>
                  </div>
                </div>
                <div className="phonikud-cell">
                  <audio controls preload="none" controlsList="nodownload">
                    <source src={ex.mamre} type="audio/wav" />
                  </audio>
                </div>
                <AudioCell src={ex.google.src} type={ex.google.type} />
                <AudioCell src={ex.phonikud.src} type={ex.phonikud.type} />
                <AudioCell src={ex.eleven.src} type={ex.eleven.type} />
                <AudioCell src={ex.roboshaul.src} type={ex.roboshaul.type} />
              </div>
            ))}
          </div>
        </div>

        <div className="comparison-note">
          {isHe ? (
            <p lang="he">
              <strong>הערה:</strong> Zonos אינו כלול בדוגמאות השמע למעלה — הפלט שלו על דוגמאות אלו כמעט זהה לזה של Mamre,
              מכיוון ש-Mamre מבוסס ישירות על Zonos. <a href="#metrics">טבלת המדדים למטה</a> מכמתת את ההבדלים.
            </p>
          ) : (
            <p>
              <strong>Note:</strong> Zonos is not included in the audio samples above — its output on these examples is nearly identical to Mamre's,
              since Mamre is directly based on Zonos. The <a href="#metrics">metrics table below</a> quantifies the differences.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
