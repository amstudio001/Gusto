import '../styles/concept.css'
import interior from '../assets/newinterior.png'
import { useLanguage } from '../context/LanguageContext'

export default function Concept() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  return (
    <section className="cpt" id="concept">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">{ru ? 'Концепция' : 'The Concept'}</span>
          <h2>{ru ? <>Прежний Gusto, <em>переосмысленный.</em></> : <>The former Gusto, <em>reimagined.</em></>}</h2>
        </div>
        <div className="cpt-grid">
          <div className="rv">
            <p className="lead">{ru ? 'Gusto обрёл новый интерьер и обновлённую концепцию: профессиональный бар и итальянская и европейская кухня за одним столом.' : 'Gusto has a new interior and a renewed concept, with a professional bar and a table of Italian and European cuisine.'}</p>
            <p className="note">{ru ? 'Обновлённый Gusto сохраняет тепло своего характера в более светлом и продуманном пространстве, где кухня, зал и бар звучат в одном ритме.' : 'A renewed Gusto brings the warmth of its original spirit into a brighter, more considered space, where the kitchen, dining room, and bar share one generous rhythm.'}</p>
          </div>
          <div
            className="ph b rv"
            role="img"
            aria-label="The new Gusto interior"
            style={{ backgroundImage: `url(${interior})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </div>
        <ul className="pillars rv">
          <li><i>01</i><b>{ru ? 'Новый интерьер' : 'A new interior'}</b><span>{ru ? 'Тёплые фактуры, продуманный свет и атмосфера для вечера от аперитива до последнего блюда.' : 'Warm textures, considered lighting, and an atmosphere designed to carry an evening from aperitivo to the final course.'}</span></li>
          <li><i>02</i><b>{ru ? 'Профессиональный бар' : 'A professional bar'}</b><span>{ru ? 'Уверенная барная карта, точные коктейли, внимательная подача и лёгкая беседа за стойкой.' : 'A confident drinks programme built around precise cocktails, thoughtful pours, and the easy conversation of a good bar.'}</span></li>
          <li><i>03</i><b>{ru ? 'Итальянская и европейская кухня' : 'Italian & European cuisine'}</b><span>{ru ? 'Итальянская классика встречается с европейским столом, сезонными продуктами и блюдами для компании.' : 'Classic Italian foundations meet a wider European table, with seasonal ingredients and recipes made for sharing.'}</span></li>
        </ul>
      </div>
    </section>
  )
}
