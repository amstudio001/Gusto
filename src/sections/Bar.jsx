import { useState } from 'react'
import '../styles/bar.css'
import barPhoto from '../assets/restaurant/bar/bar.png'
import negroniPhoto from '../assets/restaurant/bar/Cockteil Negroni.png'
import oldFashionedPhoto from '../assets/restaurant/bar/Old Fashioned.png'
import espressoMartiniPhoto from '../assets/restaurant/bar/essprero martini.png'
import spritzPhoto from '../assets/restaurant/bar/spritz.png'
import { useLanguage } from '../context/LanguageContext'

const barMenus = [
  {
    en: 'Signature cocktails',
    ru: 'Авторские коктейли',
    items: {
      en: [
        { name: 'Negroni Sbagliato', ingredients: 'Campari, prosecco, orange bitters', price: '$17', image: negroniPhoto },
        { name: 'Spritz Aperitivo', ingredients: 'Aperol, soda, orange, sparkling wine', price: '$15', image: spritzPhoto },
        { name: 'Old Fashioned', ingredients: 'Whiskey, sugar, bitters, orange twist', price: '$16', image: oldFashionedPhoto },
        { name: 'Espresso Martini', ingredients: 'Vodka, espresso, coffee liqueur, crema', price: '$18', image: espressoMartiniPhoto },
      ],
      ru: [
        { name: 'Негрони Сбаглиато', ingredients: 'Кампари, просекко, апельсиновые биттеры', price: '1700֏', image: negroniPhoto },
        { name: 'Спритц Аперитиво', ingredients: 'Апероль, содовая, апельсин, игристое вино', price: '1500֏', image: spritzPhoto },
        { name: 'Олд Фэшн', ingredients: 'Виски, сахар, биттер, апельсиновая цедра', price: '1600֏', image: oldFashionedPhoto },
        { name: 'Эспрессо Мартини', ingredients: 'Водка, эспрессо, кофейный ликёр, крема', price: '1800֏', image: espressoMartiniPhoto },
      ],
    },
  },
  {
    en: 'Wine & spirits',
    ru: 'Вино и крепкие напитки',
    items: {
      en: [
        { name: 'Italian Pinot Noir', ingredients: 'Light-bodied red, berry finish', price: '$14', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80' },
        { name: 'Sicilian White', ingredients: 'Crisp, mineral, citrus-driven', price: '$13', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80' },
        { name: 'Single Malt Pour', ingredients: 'Smoky, peaty, warm finish', price: '$19', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80' },
        { name: 'Zero Proof Spritz', ingredients: 'Citrus, herbs, sparkling tonic', price: '$9', image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=80' },
      ],
      ru: [
        { name: 'Итальянский Пино Нуар', ingredients: 'Легкое красное вино с ягодным послевкусием', price: '1400֏', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80' },
        { name: 'Сицилийское белое', ingredients: 'Освежающее, минеральное, цитрусовое', price: '1300֏', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80' },
        { name: 'Односолодовый виски', ingredients: 'Дымный, торфяной, теплый финиш', price: '1900֏', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80' },
        { name: 'Безалкогольный Spritz', ingredients: 'Цитрус, травы, игристый тоник', price: '900֏', image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=80' },
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
