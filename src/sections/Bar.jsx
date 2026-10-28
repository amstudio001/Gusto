import '../styles/bar.css'
import barPhoto from '../assets/restaurant/bar/bar.png'
import negroniPhoto from '../assets/restaurant/bar/Cockteil Negroni.png'
import oldFashionedPhoto from '../assets/restaurant/bar/Old Fashioned.png'
import espressoMartiniPhoto from '../assets/restaurant/bar/essprero martini.png'
import spritzPhoto from '../assets/restaurant/bar/spritz.png'
import { useLanguage } from '../context/LanguageContext'

const cocktails = {
  en: [
    { name: 'Negroni Sbagliato', image: negroniPhoto },
    { name: 'Old Fashioned', image: oldFashionedPhoto },
    { name: 'Spritz Aperitivo', image: spritzPhoto },
    { name: 'Espresso Martini', image: espressoMartiniPhoto },
  ],
  ru: [
    { name: 'Негрони Сбаглиато', image: negroniPhoto },
    { name: 'Олд Фэшн', image: oldFashionedPhoto },
    { name: 'Спритц Аперитиво', image: spritzPhoto },
    { name: 'Эспрессо Мартини', image: espressoMartiniPhoto },
  ],
  hy: [
    { name: 'Նեգրոնի Սբալյատո', image: negroniPhoto },
    { name: 'Օլդ Ֆեշնդ', image: oldFashionedPhoto },
    { name: 'Սպրից Ապերիտիվո', image: spritzPhoto },
    { name: 'Էսպրեսսո Մարտինի', image: espressoMartiniPhoto },
  ],
}

export default function Bar() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'
  const currentItems = cocktails[language]

  return (
    <section className="bar" id="bar">
      <div className="wrap">
        <div className="rv bar-copy">
          <span className="eyebrow">{ru ? 'Бар' : hy ? 'Բար' : 'The Bar'}</span>
          <h2>{ru ? <>Профессиональный бар, <em>сердце Gusto.</em></> : hy ? <>Պրոֆեսիոնալ բար՝ <em>Gusto-ի սիրտը։</em></> : <>A professional bar, <em>at the heart of Gusto.</em></>}</h2>
          <p>{ru ? 'Бар — социальное сердце Gusto: место для первого аперитива, позднего эспрессо и напитков, приготовленных с той же заботой, что и блюда кухни.' : hy ? 'Բարը Gusto-ի հանդիպումների սիրտն է․ այստեղ կարելի է վայելել առաջին ապերիտիվը, ուշ երեկոյան էսպրեսսոն և նույն հոգատարությամբ պատրաստված ըմպելիքները։' : 'The bar is the social heart of Gusto: a place for a first aperitivo, a late espresso, and drinks made with the same care as the kitchen.'}</p>

          <div className="menu-grid bar-menu-grid" key={language}>
            {currentItems.map((item) => (
              <article className="dish-card bar-card" key={item.name}>
                <div className="dish-image bar-image" data-bg={item.image} role="img" aria-label={item.name} />
                <div className="dish-body">
                  <h3>{item.name}</h3>
                </div>
              </article>
            ))}
          </div>

          <a className="btn" href="https://api.msmart.am/s/a_9-6SaPHPJ6pAEPFMJVvg" target="_blank" rel="noreferrer">{ru ? 'Открыть меню' : hy ? 'Դիտել մենյուն' : 'View Menu'}</a>
        </div>
        <div className="ph c rv" role="img" aria-label="The Gusto bar" data-bg={barPhoto} style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
    </section>
  )
}
