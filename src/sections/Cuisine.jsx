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
        { name: 'Carbonara', ingredients: 'Spaghetti, pancetta, egg, parmesan, black pepper', price: '$24', image: carbonaraPhoto },
        { name: 'Chicken Milanese', ingredients: 'Crispy chicken, arugula, cherry tomatoes, lemon', price: '$22', image: milanesePhoto },
        { name: 'Eggplant Parmigiana', ingredients: 'Baked eggplant, tomato, mozzarella, parmesan', price: '$31', image: parmigianaPhoto },
        { name: 'Prosciutto Pizza', ingredients: 'Tomato, prosciutto, creamy cheese, arugula', price: '$19', image: pizzaPhoto },
      ],
      ru: [
        { name: 'Карбонара', ingredients: 'Спагетти, панчетта, яйцо, пармезан, чёрный перец', price: '2400֏', image: carbonaraPhoto },
        { name: 'Курица по-милански', ingredients: 'Хрустящая курица, руккола, томаты черри, лимон', price: '2200֏', image: milanesePhoto },
        { name: 'Баклажаны пармиджана', ingredients: 'Запечённые баклажаны, томаты, моцарелла, пармезан', price: '3100֏', image: parmigianaPhoto },
        { name: 'Пицца с прошутто', ingredients: 'Томаты, прошутто, нежный сыр, руккола', price: '1900֏', image: pizzaPhoto },
      ],
    },
  },
  {
    en: 'Seafood & grill',
    ru: 'Море и гриль',
    items: {
      en: [
        { name: 'Pork Ribs with Funchoza', ingredients: 'Pork ribs served with funchoza', price: '$28', image: porkRibsPhoto },
        { name: 'Tagliata with Grilled Vegetables', ingredients: 'Beef tagliata, grilled vegetables', price: '$29', image: tagliataPhoto },
        { name: 'Grilled Salmon', ingredients: 'Salmon, grilled', price: '$26', image: salmonPhoto },
        { name: 'Grilled Steak', ingredients: 'Steak, grilled', price: '$25', image: steakPhoto },
      ],
      ru: [
        { name: 'Свиные рёбра с фунчозой', ingredients: 'Свиные рёбра, фунчоза', price: '2800֏', image: porkRibsPhoto },
        { name: 'Тальята с овощами гриль', ingredients: 'Говяжья тальята, овощи гриль', price: '2900֏', image: tagliataPhoto },
        { name: 'Лосось на гриле', ingredients: 'Лосось, приготовленный на гриле', price: '2600֏', image: salmonPhoto },
        { name: 'Стейк на гриле', ingredients: 'Стейк, приготовленный на гриле', price: '2500֏', image: steakPhoto },
      ],
    },
  },
  {
    en: 'Sweet finish',
    ru: 'Сладкое завершение',
    items: {
      en: [
        { name: 'Cheesecake', ingredients: 'Classic cheesecake', price: '$14', image: cheesecakePhoto },
        { name: 'Crème Brûlée', ingredients: 'Vanilla custard, caramelized sugar', price: '$13', image: cremeBruleePhoto },
        { name: 'Honey Cake', ingredients: 'Honey-layered cake', price: '$11', image: honeyCakePhoto },
        { name: 'Rum Baba', ingredients: 'Rum-soaked baba', price: '$15', image: rumBabaPhoto },
      ],
      ru: [
        { name: 'Чизкейк', ingredients: 'Классический чизкейк', price: '1400֏', image: cheesecakePhoto },
        { name: 'Крем-брюле', ingredients: 'Ванильный крем, карамельная корочка', price: '1300֏', image: cremeBruleePhoto },
        { name: 'Медовик', ingredients: 'Медовый слоёный торт', price: '1100֏', image: honeyCakePhoto },
        { name: 'Ромовая баба', ingredients: 'Баба, пропитанная ромом', price: '1500֏', image: rumBabaPhoto },
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
