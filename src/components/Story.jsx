import { BiH } from './Lang'

export default function Story({ lang }) {
  const isHe = lang === 'he'
  return (
    <section className="story">
      <div className="container">
        <BiH level={2} lang={lang} en='Why "Mamre"?' he='"למה "Mamre' />
        <div className="story-grid">
          <div className="card">
            <h3>{isHe ? 'שיחה אנושית, לא הצהרה מרוחקת' : 'A conversation, not a proclamation'}</h3>
            {isHe ? (
              <p lang="he">
                השם MamreVoice מגיע מהסיפור התנ"כי על אברהם באלוני ממרא (בראשית י"ח, א).
                במקום לדבר מהשמים, האלוהי מתגלה כשיחה פשוטה, ברורה ואנושית.
                זה משקף את הפילוסופיה שלנו: טכנולוגיה צריכה לדבר באופן טבעי, חם ואותנטי.
              </p>
            ) : (
              <p>
                The name MamreVoice comes from the biblical story of Abraham at the oaks of Mamre (Genesis 18:1),
                where the divine appears not as a distant voice from the heavens but as a simple, clear, human conversation.
                This reflects our philosophy: technology should speak naturally, warmly, and authentically.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
