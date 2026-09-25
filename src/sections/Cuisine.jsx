import { useState } from 'react'
import '../styles/cuisine.css'
import dishPhoto from '../assets/dish.png'
import { useLanguage } from '../context/LanguageContext'

const menus = [
  { en: 'Italian classics', ru: 'Итальянская классика', items: { en: ['Handmade pasta', 'Seasonal risotto', 'Wood-fired favourites'], ru: ['Домашняя паста', 'Сезонное ризотто', 'Блюда из печи'] } },
  { en: 'European dishes', ru: 'Европейские блюда', items: { en: ['Market fish', 'Slow-cooked meats', 'Seasonal vegetables'], ru: ['Рыба с рынка', 'Мясо медленного приготовления', 'Сезонные овощи'] } },
  { en: 'Sweet finish', ru: 'Сладкое завершение', items: { en: ['House desserts', 'Espresso and digestivi', 'A final taste of Italy'], ru: ['Домашние десерты', 'Эспрессо и дижестивы', 'Последний вкус Италии'] } },
]

export default function Cuisine() {
  const [active, setActive] = useState(0)
  const { language } = useLanguage()
  const ru = language === 'ru'
  return (
<section className="cui" id="cuisine"><div className="wrap">
  <div className="rv"><span className="eyebrow">{ru ? 'Кухня' : 'Cuisine'}</span><h2>{ru ? <>Итальянские корни, <em>европейский стол.</em></> : <>Italian roots, <em>European table.</em></>}</h2>
    <p style={{ color: 'var(--mute)', marginTop: '1.4rem', maxWidth: '32rem' }}>{ru ? 'Gusto соединяет итальянский уют и европейскую любознательность, сочетая знакомые рецепты с сезонными продуктами и современным вниманием к деталям.' : 'Gusto brings Italian comfort and European curiosity to the table, balancing familiar recipes with seasonal ingredients and a modern sense of detail.'}</p>
    <div className="menu-tabs" role="tablist" aria-label={ru ? 'Категории кухни' : 'Cuisine categories'}>{menus.map((menu, index) => <button key={menu.en} className={active === index ? 'active' : ''} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{ru ? menu.ru : menu.en}</button>)}</div>
    <ul className="menu-items" key={`${language}-${menus[active].en}`}>{menus[active].items[language].map((item) => <li key={item}>{item}</li>)}</ul>
    <a className="btn" href="https://www.instagram.com/stories/highlights/18139469947491521/" target="_blank" rel="noreferrer">{ru ? 'Открыть меню' : 'View Menu'}</a></div>
  <div className="ph b rv" role="img" aria-label="Signature dish" style={{ backgroundImage: `url(${dishPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}></div>
</div></section>
  )
}
