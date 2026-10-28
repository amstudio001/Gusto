import '../styles/concept.css'
import interior from '../assets/restaurant/interior/concept.webp'

import { useLanguage } from '../context/LanguageContext'

export default function Concept() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'
  return (
    <section className="cpt" id="concept">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">{ru ? 'Концепция' : hy ? 'Մեր գաղափարը' : 'The Concept'}</span>
          <h2>{ru ? <>Прежний Gusto, <em>переосмысленный.</em></> : hy ? <>Նորովի <em>վերաիմաստավորված Gusto-ն։</em></> : <>The former Gusto, <em>reimagined.</em></>}</h2>
        </div>
        <div className="cpt-grid">
          <div className="rv">
            <p className="lead">{ru ? 'Gusto обрёл новый интерьер и обновлённую концепцию: профессиональный бар и итальянская и европейская кухня за одним столом.' : hy ? 'Gusto-ն ստացել է նոր ինտերիեր և թարմացված գաղափար․ պրոֆեսիոնալ բար, ինչպես նաև իտալական ու եվրոպական խոհանոց՝ մեկ սեղանի շուրջ։' : 'Gusto has a new interior and a renewed concept, with a professional bar and a table of Italian and European cuisine.'}</p>
            <p className="note">{ru ? 'Обновлённый Gusto сохраняет тепло своего характера в более светлом и продуманном пространстве, где кухня, зал и бар звучат в одном ритме.' : hy ? 'Թարմացված Gusto-ն պահպանում է իր ջերմ ոգին ավելի լուսավոր ու մտածված տարածքում, որտեղ խոհանոցը, սրահն ու բարն աշխատում են մեկ ռիթմով։' : 'A renewed Gusto brings the warmth of its original spirit into a brighter, more considered space, where the kitchen, dining room, and bar share one generous rhythm.'}</p>
          </div>
          <div
            className="ph b rv"
            role="img"
            aria-label="The new Gusto interior"
            data-bg={interior}
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </div>
        <ul className="pillars rv">
          <li><i>01</i><b>{ru ? 'Новый интерьер' : hy ? 'Նոր ինտերիեր' : 'A new interior'}</b><span>{ru ? 'Тёплые фактуры, продуманный свет и атмосфера для вечера от аперитива до последнего блюда.' : hy ? 'Ջերմ նյութեր, մտածված լուսավորություն և մթնոլորտ՝ ապերիտիվից մինչև վերջին ուտեստը վայելելու համար։' : 'Warm textures, considered lighting, and an atmosphere designed to carry an evening from aperitivo to the final course.'}</span></li>
          <li><i>02</i><b>{ru ? 'Профессиональный бар' : hy ? 'Պրոֆեսիոնալ բար' : 'A professional bar'}</b><span>{ru ? 'Уверенная барная карта, точные коктейли, внимательная подача и лёгкая беседа за стойкой.' : hy ? 'Ընտրված ըմպելիքներ, ճշգրիտ կոկտեյլներ, հոգատար մատուցում և հաճելի զրույց բարում։' : 'A confident drinks programme built around precise cocktails, thoughtful pours, and the easy conversation of a good bar.'}</span></li>
          <li><i>03</i><b>{ru ? 'Итальянская и европейская кухня' : hy ? 'Իտալական և եվրոպական խոհանոց' : 'Italian & European cuisine'}</b><span>{ru ? 'Итальянская классика встречается с европейским столом, сезонными продуктами и блюдами для компании.' : hy ? 'Իտալական դասականը միանում է եվրոպական խոհանոցին, սեզոնային մթերքներին և ընկերների հետ կիսելու ուտեստներին։' : 'Classic Italian foundations meet a wider European table, with seasonal ingredients and recipes made for sharing.'}</span></li>
        </ul>
      </div>
    </section>
  )
}
