import { useState } from 'react'
import '../styles/cuisine.css'
import dishPhoto from '../assets/cuisine/dish.jpg'
import carbonaraPhoto from '../assets/cuisine/italian/carbonara.jpg'
import milanesePhoto from '../assets/cuisine/italian/milanese.jpg'
import parmigianaPhoto from '../assets/cuisine/italian/parmigiano.jpg'
import pizzaPhoto from '../assets/cuisine/italian/pizza.jpg'
import porkRibsPhoto from '../assets/cuisine/seafood-grill/Pork ribs with funchoza.jpg'
import tagliataPhoto from '../assets/cuisine/seafood-grill/Tagliata with grilled vegetables.png'
import salmonPhoto from '../assets/cuisine/seafood-grill/salmon.jpg'
import steakPhoto from '../assets/cuisine/seafood-grill/steak.jpg'
import cheesecakePhoto from '../assets/cuisine/desserts/Cheesecake.jpg'
import cremeBruleePhoto from '../assets/cuisine/desserts/Crème brulee.jpg'
import honeyCakePhoto from '../assets/cuisine/desserts/Honey cake.jpg'
import rumBabaPhoto from '../assets/cuisine/desserts/Rum Baba.jpg'
import { useLanguage } from '../context/LanguageContext'

const menus = [
  {
    en: 'Italian classics',
    ru: 'Итальянская классика',
    hy: 'Իտալական դասական ուտեստներ',
    items: {
      en: [
        { name: 'Carbonara', image: carbonaraPhoto },
        { name: 'Chicken Milanese', ingredients: 'Crispy chicken, arugula, cherry tomatoes, lemon', price: '3800֏', image: milanesePhoto },
        { name: 'Parmigiano Reggiano', ingredients: 'Baked eggplant, tomato, mozzarella, parmesan', price: '3600֏', image: parmigianaPhoto },
        { name: 'Prosciutto Pizza', ingredients: 'Tomato, prosciutto, creamy cheese, arugula', price: '5200֏', image: pizzaPhoto },
      ],
      ru: [
        { name: 'Карбонара', image: carbonaraPhoto },
        { name: 'Курица по-милански', ingredients: 'Хрустящая курица, руккола, томаты черри, лимон', price: '3800֏', image: milanesePhoto },
        { name: 'Пармиджано Реджано', ingredients: 'Запечённые баклажаны, томаты, моцарелла, пармезан', price: '3600֏', image: parmigianaPhoto },
        { name: 'Пицца с прошутто', ingredients: 'Томаты, прошутто, нежный сыр, руккола', price: '5200֏', image: pizzaPhoto },
      ],
      hy: [
        { name: 'Կարբոնարա', ingredients: 'Սպագետտի, պանչետա, ձու, պարմեզան, սև պղպեղ', price: '3500֏', image: carbonaraPhoto },
        { name: 'Միլանյան հավ', ingredients: 'Խրթխրթան հավ, ռուկոլա, չերի լոլիկ, կիտրոն', price: '3800֏', image: milanesePhoto },
        { name: 'Պարմիջիանո Ռեջիանո', ingredients: 'Թխած սմբուկ, լոլիկ, մոցարելլա, պարմեզան', price: '3600֏', image: parmigianaPhoto },
        { name: 'Պիցցա պրոշուտտոյով', ingredients: 'Լոլիկ, պրոշուտտո, նուրբ պանիր, ռուկոլա', price: '5200֏', image: pizzaPhoto },
      ],
    },
  },
  {
    en: 'Seafood & grill',
    ru: 'Море и гриль',
    hy: 'Ծովամթերք և գրիլ',
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
      hy: [
        { name: 'Խոզի կողիկներ ֆունչոզայով', ingredients: 'Խոզի կողիկներ, մատուցվում են ֆունչոզայով', price: '5200֏', image: porkRibsPhoto },
        { name: 'Տալյատա գրիլ բանջարեղենով', ingredients: 'Տավարի տալիատա, գրիլ բանջարեղեն', price: '7500֏', image: tagliataPhoto },
        { name: 'Սաղմոն փաք-չոյով', ingredients: 'Սաղմոն, փաք-չոյ կաղամբ', price: '9500֏', image: salmonPhoto },
        { name: 'Սթեյք', ingredients: 'Գրիլի վրա պատրաստված սթեյք', price: '7800֏', image: steakPhoto },
      ],
    },
  },
  {
    en: 'Sweet finish',
    ru: 'Сладкое завершение',
    hy: 'Քաղցր ավարտ',
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
      hy: [
        { name: 'Չիզքեյք', ingredients: 'Դասական չիզքեյք', price: '3700֏', image: cheesecakePhoto },
        { name: 'Կրեմ բրյուլե', ingredients: 'Վանիլային կրեմ, կարամելացված շաքար', price: '3200֏', image: cremeBruleePhoto },
        { name: 'Մեղրով տորթ', ingredients: 'Մեղրային շերտերով տորթ', price: '2800֏', image: honeyCakePhoto },
        { name: 'Ռոմով բաբա', ingredients: 'Ռոմով թրջված բաբա', price: '3200֏', image: rumBabaPhoto },
      ],
    },
  },
]

export default function Cuisine() {
  const [active, setActive] = useState(0)
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'

  const currentMenu = menus[active]
  const currentItems = currentMenu.items[language]

  return (
    <section className="cui" id="cuisine">
      <div className="wrap">
        <div className="rv cuisine-copy">
          <span className="eyebrow">{ru ? 'Кухня' : hy ? 'Խոհանոց' : 'Cuisine'}</span>
          <h2>{ru ? <>Итальянские корни, <em>европейский стол.</em></> : hy ? <>Իտալական արմատներ, <em>եվրոպական սեղան։</em></> : <>Italian roots, <em>European table.</em></>}</h2>
          <p>{ru ? 'Gusto соединяет итальянский уют и европейскую любознательность, сочетая знакомые рецепты с сезонными продуктами и современным вниманием к деталям.' : hy ? 'Gusto-ն համադրում է իտալական ջերմությունն ու եվրոպական հետաքրքրասիրությունը՝ ծանոթ բաղադրատոմսերը միավորելով սեզոնային մթերքի և մանրուքների հանդեպ ժամանակակից ուշադրության հետ։' : 'Gusto brings Italian comfort and European curiosity to the table, balancing familiar recipes with seasonal ingredients and a modern sense of detail.'}</p>

          <div className="menu-tabs" role="tablist" aria-label={ru ? 'Категории кухни' : hy ? 'Խոհանոցի բաժինները' : 'Cuisine categories'}>
            {menus.map((menu, index) => (
              <button
                key={menu.en}
                className={active === index ? 'active' : ''}
                role="tab"
                aria-selected={active === index}
                onClick={() => setActive(index)}
              >
                {ru ? menu.ru : hy ? menu.hy : menu.en}
              </button>
            ))}
          </div>

          <div className="menu-grid" key={`${language}-${currentMenu.en}`}>
            {currentItems.map((item) => (
              <article className="dish-card" key={`${item.name}-${currentMenu.en}`}>
                <div className="dish-image" data-bg={item.image || dishPhoto} role="img" aria-label={item.name} />
                <div className="dish-body">
                  <h3>{item.name}</h3>
                </div>
              </article>
            ))}
          </div>

          <a className="btn" href="https://api.msmart.am/s/a_9-6SaPHPJ6pAEPFMJVvg" target="_blank" rel="noreferrer">
            {ru ? 'Открыть меню' : hy ? 'Դիտել մենյուն' : 'View Menu'}
          </a>
        </div>

        <div className="ph b rv" role="img" aria-label="Signature dish" data-bg={dishPhoto} style={{ backgroundSize: 'cover', backgroundPosition: 'center top' }}></div>
      </div>
    </section>
  )
}
