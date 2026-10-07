import { useState } from 'react'
import '../styles/cuisine.css'
import dishPhoto from '../assets/cuisine/dish.png'
import carbonaraPhoto from '../assets/cuisine/italian/carbonara.png'
import milanesePhoto from '../assets/cuisine/italian/milanese.png'
import parmigianaPhoto from '../assets/cuisine/italian/parmigiano.png'
import pizzaPhoto from '../assets/cuisine/italian/pizza.png'
import porkRibsPhoto from '../assets/cuisine/seafood-grill/Pork ribs with funchoza.png'
import tagliataPhoto from '../assets/cuisine/seafood-grill/Tagliata with grilled vegetables.png'
import salmonPhoto from '../assets/cuisine/seafood-grill/salmon.png'
import steakPhoto from '../assets/cuisine/seafood-grill/steak.png'
import cheesecakePhoto from '../assets/cuisine/desserts/Cheesecake.png'
import cremeBruleePhoto from '../assets/cuisine/desserts/Crème brulee.png'
import honeyCakePhoto from '../assets/cuisine/desserts/Honey cake.png'
import rumBabaPhoto from '../assets/cuisine/desserts/Rum Baba.png'
import { useLanguage } from '../context/LanguageContext'

const menus = [
  {
    en: 'Italian classics',
    ru: 'Итальянская классика',
    items: {
      en: [
        { name: 'Carbonara', ingredients: 'Spaghetti, pancetta, egg, parmesan, black pepper', price: '3500֏', image: carbonaraPhoto },
        { name: 'Chicken Milanese', ingredients: 'Crispy chicken, arugula, cherry tomatoes, lemon', price: '3800֏', image: milanesePhoto },
        { name: 'Parmigiano Reggiano', ingredients: 'Baked eggplant, tomato, mozzarella, parmesan', price: '3600֏', image: parmigianaPhoto },
        { name: 'Prosciutto Pizza', ingredients: 'Tomato, prosciutto, creamy cheese, arugula', price: '5200֏', image: pizzaPhoto },
      ],
      ru: [
        { name: 'Карбонара', ingredients: 'Спагетти, панчетта, яйцо, пармезан, чёрный перец', price: '3500֏', image: carbonaraPhoto },
        { name: 'Курица по-милански', ingredients: 'Хрустящая курица, руккола, томаты черри, лимон', price: '3800֏', image: milanesePhoto },
        { name: 'Пармиджано Реджано', ingredients: 'Запечённые баклажаны, томаты, моцарелла, пармезан', price: '3600֏', image: parmigianaPhoto },
        { name: 'Пицца с прошутто', ingredients: 'Томаты, прошутто, нежный сыр, руккола', price: '5200֏', image: pizzaPhoto },
      ],
    },
  },
  {
    en: 'Seafood & grill',
    ru: 'Море и гриль',
    items: {
      en: [
        { name: 'Pork Ribs with Funchoza', ingredients: 'Pork ribs served with funchoza', price: '5200֏', image: porkRibsPhoto },
        { name: 'Tagliata with Grilled Vegetables', ingredients: 'Beef tagliata, grilled vegetables', price: '7500֏', image: tagliataPhoto },
        { name: 'Salmon with Bok Choy', ingredients: 'Salmon with bok choy', price: '9500֏', image: salmonPhoto },
        { name: 'Steak', ingredients: 'Steak, grilled', price: '7800֏', image: steakPhoto },
      ],
      ru: [
        { name: 'Свиные рёбра с фунчозой', ingredients: 'Свиные рёбра, фунчоза', price: '5200֏', image: porkRibsPhoto },
        { name: 'Тальята с овощами гриль', ingredients: 'Говяжья тальята, овощи гриль', price: '7500֏', image: tagliataPhoto },
        { name: 'Лосось с капустой пак-чой', ingredients: 'Лосось с капустой пак-чой', price: '9500֏', image: salmonPhoto },
        { name: 'Стейк', ingredients: 'Стейк, приготовленный на гриле', price: '7800֏', image: steakPhoto },
      ],
    },
  },
  {
    en: 'Sweet finish',
    ru: 'Сладкое завершение',
    items: {
      en: [
        { name: 'Cheesecake', ingredients: 'Classic cheesecake', price: '3700֏', image: cheesecakePhoto },
        { name: 'Crème Brûlée', ingredients: 'Vanilla custard, caramelized sugar', price: '3200֏', image: cremeBruleePhoto },
        { name: 'Honey Cake', ingredients: 'Honey-layered cake', price: '2800֏', image: honeyCakePhoto },
        { name: 'Rum Baba', ingredients: 'Rum-soaked baba', price: '3200֏', image: rumBabaPhoto },
      ],
      ru: [
        { name: 'Чизкейк', ingredients: 'Классический чизкейк', price: '3700֏', image: cheesecakePhoto },
        { name: 'Крем-брюле', ingredients: 'Ванильный крем, карамельная корочка', price: '3200֏', image: cremeBruleePhoto },
        { name: 'Медовик', ingredients: 'Медовый слоёный торт', price: '2800֏', image: honeyCakePhoto },
        { name: 'Ромовая баба', ingredients: 'Баба, пропитанная ромом', price: '3200֏', image: rumBabaPhoto },
      ],
    },
  },
]

export default function Cuisine() {
  const [active, setActive] = useState(0)
  const { language } = useLanguage()
  const ru = language === 'ru'

  const currentMenu = menus[active]
  const currentItems = currentMenu.items[language]

  return (
    <section className="cui" id="cuisine">
      <div className="wrap">
        <div className="rv cuisine-copy">
          <span className="eyebrow">{ru ? 'Кухня' : 'Cuisine'}</span>
          <h2>{ru ? <>Итальянские корни, <em>европейский стол.</em></> : <>Italian roots, <em>European table.</em></>}</h2>
          <p>{ru ? 'Gusto соединяет итальянский уют и европейскую любознательность, сочетая знакомые рецепты с сезонными продуктами и современным вниманием к деталям.' : 'Gusto brings Italian comfort and European curiosity to the table, balancing familiar recipes with seasonal ingredients and a modern sense of detail.'}</p>

          <div className="menu-tabs" role="tablist" aria-label={ru ? 'Категории кухни' : 'Cuisine categories'}>
            {menus.map((menu, index) => (
              <button
                key={menu.en}
                className={active === index ? 'active' : ''}
                role="tab"
                aria-selected={active === index}
                onClick={() => setActive(index)}
              >
                {ru ? menu.ru : menu.en}
              </button>
            ))}
          </div>

          <div className="menu-grid" key={`${language}-${currentMenu.en}`}>
            {currentItems.map((item) => (
              <article className="dish-card" key={`${item.name}-${currentMenu.en}`}>
                <div className="dish-image" style={{ backgroundImage: `url(${item.image || dishPhoto})` }} role="img" aria-label={item.name} />
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

          <a className="btn" href="https://api.msmart.am/s/a_9-6SaPHPJ6pAEPFMJVvg" target="_blank" rel="noreferrer">
            {ru ? 'Открыть меню' : 'View Menu'}
          </a>
        </div>

        <div className="ph b rv" role="img" aria-label="Signature dish" style={{ backgroundImage: `url(${dishPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}></div>
      </div>
    </section>
  )
}
