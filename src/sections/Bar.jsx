import { useState } from 'react'
import '../styles/bar.css'
import barPhoto from '../assets/restaurant/bar/bar.png'
import negroniPhoto from '../assets/restaurant/bar/Cockteil Negroni.png'
import oldFashionedPhoto from '../assets/restaurant/bar/Old Fashioned.png'
import espressoMartiniPhoto from '../assets/restaurant/bar/essprero martini.png'
import spritzPhoto from '../assets/restaurant/bar/spritz.png'
import camillePhoto from '../assets/restaurant/bar/Camille De Labrie.png'
import chivasPhoto from '../assets/restaurant/bar/Chivas.png'
import azulPhoto from '../assets/restaurant/bar/Azul.png'
import jagermeisterPhoto from '../assets/restaurant/bar/Jagermeister.png'
import { useLanguage } from '../context/LanguageContext'

const barMenus = [
  {
    en: 'Classic Cocktails',
    ru: 'Классические коктейли',
    items: {
      en: [
        { name: 'Negroni Sbagliato', ingredients: 'Campari, prosecco, orange bitters', price: '3700֏', image: negroniPhoto },
        { name: 'Old Fashioned', ingredients: 'Whiskey, sugar, bitters, orange twist', price: '3500֏', image: oldFashionedPhoto },
        { name: 'Spritz Aperitivo', ingredients: 'Aperol, soda, orange, sparkling wine', price: '4300֏', image: spritzPhoto },
        { name: 'Espresso Martini', ingredients: 'Vodka, espresso, coffee liqueur, crema', price: '3500֏', image: espressoMartiniPhoto },
      ],
      ru: [
        { name: 'Негрони Сбаглиато', ingredients: 'Кампари, просекко, апельсиновые биттеры', price: '3700֏', image: negroniPhoto },
        { name: 'Олд Фэшн', ingredients: 'Виски, сахар, биттер, апельсиновая цедра', price: '3500֏', image: oldFashionedPhoto },
        { name: 'Спритц Аперитиво', ingredients: 'Апероль, содовая, апельсин, игристое вино', price: '4300֏', image: spritzPhoto },
        { name: 'Эспрессо Мартини', ingredients: 'Водка, эспрессо, кофейный ликёр, крема', price: '3500֏', image: espressoMartiniPhoto },
      ],
    },
  },
  {
    en: 'Wine & spirits',
    ru: 'Вино и крепкие напитки',
    items: {
      en: [
        { name: 'Camille De Labrie', ingredients: 'Premium spirit', price: '13000֏', image: camillePhoto },
        { name: 'Chivas Regal 12 - 50ml', ingredients: 'Premium whiskey pour', price: '3500֏', image: chivasPhoto },
        { name: 'Clase Azul Reposado - 50ml', ingredients: 'Tequila shot', price: '17000֏', image: azulPhoto },
        { name: 'Jagermeister - 50ml', ingredients: 'Herbal liqueur', price: '2500֏', image: jagermeisterPhoto },
      ],
      ru: [
        { name: 'Camille De Labrie', ingredients: 'Премиальный напиток', price: '13000֏', image: camillePhoto },
        { name: 'Chivas Regal 12 - 50ml', ingredients: 'Премиальный виски', price: '3500֏', image: chivasPhoto },
        { name: 'Clase Azul Reposado - 50ml', ingredients: 'Текила шот', price: '17000֏', image: azulPhoto },
        { name: 'Jagermeister - 50ml', ingredients: 'Травяной ликер', price: '2500֏', image: jagermeisterPhoto },
      ],
    },
  },
]

export default function Bar() {
  const [active, setActive] = useState(0)
  const { language } = useLanguage()
  const ru = language === 'ru'
  const currentMenu = barMenus[active]
  const currentItems = currentMenu.items[language]

  return (
    <section className="bar" id="bar">
      <div className="wrap">
        <div className="rv bar-copy">
          <span className="eyebrow">{ru ? 'Бар' : 'The Bar'}</span>
          <h2>{ru ? <>Профессиональный бар, <em>сердце Gusto.</em></> : <>A professional bar, <em>at the heart of Gusto.</em></>}</h2>
          <p>{ru ? 'Бар — социальное сердце Gusto: место для первого аперитива, позднего эспрессо и напитков, приготовленных с той же заботой, что и блюда кухни.' : 'The bar is the social heart of Gusto: a place for a first aperitivo, a late espresso, and drinks made with the same care as the kitchen.'}</p>

          <div className="menu-tabs" role="tablist" aria-label={ru ? 'Категории бара' : 'Bar categories'}>
            {barMenus.map((menu, index) => (
              <button key={menu.en} className={active === index ? 'active' : ''} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{ru ? menu.ru : menu.en}</button>
            ))}
          </div>

          <div className="menu-grid bar-menu-grid" key={`${language}-${currentMenu.en}`}>
            {currentItems.map((item) => (
              <article className="dish-card bar-card" key={`${item.name}-${currentMenu.en}`}>
                <div className="dish-image bar-image" style={{ backgroundImage: `url(${item.image})` }} role="img" aria-label={item.name} />
                <div className="dish-body">
                  <div className="dish-header">
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.ingredients}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="btn" href="https://api.msmart.am/s/a_9-6SaPHPJ6pAEPFMJVvg" target="_blank" rel="noreferrer">{ru ? 'Открыть меню' : 'View Menu'}</a>
        </div>
        <div className="ph c rv" role="img" aria-label="The Gusto bar" style={{ backgroundImage: `url(${barPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
    </section>
  )
}
