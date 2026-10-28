import '../styles/experience.css'
import { useLanguage } from '../context/LanguageContext'

const features = {
  en: [
    { title: 'Atmosphere', text: 'Warm light, natural textures, and a rhythm made for slow evenings.' },
    { title: 'Service', text: 'Attentive, relaxed, and rooted in genuine hospitality.' },
    { title: 'Cuisine', text: 'Seasonal plates shaped by Italian tradition and modern detail.' },
    { title: 'Detail', text: 'From the first welcome to the last coffee, every touch is considered.' },
  ],
  ru: [
    { title: 'Атмосфера', text: 'Тёплый свет, натуральные материалы и ритм для неспешных вечеров.' },
    { title: 'Сервис', text: 'Внимательный, спокойный и основанный на настоящем гостеприимстве.' },
    { title: 'Кухня', text: 'Сезонные блюда, созданные в духе итальянской традиции и современного взгляда.' },
    { title: 'Детали', text: 'От первого приветствия до последнего кофе — каждая деталь продумана.' },
  ],
  hy: [
    { title: 'Մթնոլորտ', text: 'Ջերմ լույս, բնական նյութեր և հանգիստ երեկոների համար ստեղծված ռիթմ։' },
    { title: 'Սպասարկում', text: 'Ուշադիր, անկաշկանդ և անկեղծ հյուրընկալության վրա հիմնված։' },
    { title: 'Խոհանոց', text: 'Սեզոնային ուտեստներ՝ իտալական ավանդույթի և ժամանակակից մոտեցման համադրությամբ։' },
    { title: 'Մանրուքներ', text: 'Առաջին ողջույնից մինչև վերջին սուրճը՝ յուրաքանչյուր պահ մտածված է։' },
  ],
}

export default function Experience() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'
  const items = features[language]

  return (
    <section className="exp" id="experience">
      <div className="wrap rv">
        <span className="eyebrow">{ru ? 'Впечатления' : hy ? 'Մթնոլորտը' : 'The Experience'}</span>
        <h2>{ru ? 'Каждый вечер создан с заботой.' : hy ? 'Յուրաքանչյուր երեկո՝ հոգատարությամբ։' : 'Every evening, composed with care.'}</h2>
        <p>{ru ? 'Приходите на долгий обед, неспешный ужин или напиток в баре. От первой встречи до последнего кофе пространство тёплое, ритм — вашим, а каждая деталь продумана.' : hy ? 'Եկեք երկար ճաշի, հանգիստ ընթրիքի կամ բարում ըմպելիքի։ Առաջին ողջույնից մինչև վերջին սուրճը՝ ջերմ տարածք, ձեր նախընտրած ռիթմ և մտածված յուրաքանչյուր մանրուք։' : 'Come for a long lunch, an unhurried dinner, or a drink at the bar. From the first welcome to the last coffee, the room is warm, the pace is yours, and every detail is considered.'}</p>

        <div className="feature-grid">
          {items.map((item) => (
            <article className="feature-card" key={item.title}>
              <span className="feature-index">0{items.indexOf(item) + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
