import { useState } from 'react'
import '../styles/bar.css'
import barPhoto from '../assets/bar.png'
import { useLanguage } from '../context/LanguageContext'

const barMenus = [
  { en: 'Signature cocktails', ru: 'Авторские коктейли', items: { en: ['Aperitivo-led classics', 'Seasonal house creations', 'Spirit-forward after-dinner pours'], ru: ['Классика аперитива', 'Сезонные коктейли дома', 'Дижестивы с характером'] } },
  { en: 'Wine & spirits', ru: 'Вино и крепкие напитки', items: { en: ['Italian bottles', 'European discoveries', 'Thoughtful non-alcoholic choices'], ru: ['Итальянские вина', 'Европейские открытия', 'Продуманные безалкогольные варианты'] } },
]

export default function Bar() {
  const [active, setActive] = useState(0)
  const { language } = useLanguage()
  const ru = language === 'ru'
  return (
    <section className="bar" id="bar">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">{ru ? 'Бар' : 'The Bar'}</span>
          <h2>{ru ? <>Профессиональный бар, <em>сердце Gusto.</em></> : <>A professional bar, <em>at the heart of Gusto.</em></>}</h2>
          <p>{ru ? 'Бар — социальное сердце Gusto: место для первого аперитива, позднего эспрессо и напитков, приготовленных с той же заботой, что и блюда кухни.' : 'The bar is the social heart of Gusto: a place for a first aperitivo, a late espresso, and drinks made with the same care as the kitchen.'}</p>
          <div className="menu-tabs" role="tablist" aria-label={ru ? 'Категории бара' : 'Bar categories'}>{barMenus.map((menu, index) => <button key={menu.en} className={active === index ? 'active' : ''} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{ru ? menu.ru : menu.en}</button>)}</div>
          <ul className="menu-items" key={`${language}-${barMenus[active].en}`}>{barMenus[active].items[language].map((item) => <li key={item}>{item}</li>)}</ul>
          <a className="btn" href="https://www.instagram.com/stories/highlights/18139469947491521/" target="_blank" rel="noreferrer">{ru ? 'Открыть меню' : 'View Menu'}</a>
        </div>
        <div className="ph c rv" role="img" aria-label="The Gusto bar" style={{ backgroundImage: `url(${barPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
    </section>
  )
}
