import '../styles/experience.css'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import atmospherePhoto from '../assets/restaurant/interior/atmosphere.webp'
import servicePhoto from '../assets/restaurant/interior/service.webp'
import cuisinePhoto from '../assets/restaurant/interior/cuisine.webp'
import detailPhoto from '../assets/restaurant/interior/details.webp'

const features = {
  en: [
    { title: 'Atmosphere', text: 'Warm light, natural textures, and a rhythm made for slow evenings.', image: atmospherePhoto },
    { title: 'Service', text: 'Attentive, relaxed, and rooted in genuine hospitality.', image: servicePhoto },
    { title: 'Cuisine', text: 'Seasonal plates shaped by Italian tradition and modern detail.', image: cuisinePhoto },
    { title: 'Detail', text: 'From the first welcome to the last coffee, every touch is considered.', image: detailPhoto },
  ],
  ru: [
    { title: 'Атмосфера', text: 'Тёплый свет, натуральные материалы и ритм для неспешных вечеров.', image: atmospherePhoto },
    { title: 'Сервис', text: 'Внимательный, спокойный и основанный на настоящем гостеприимстве.', image: servicePhoto },
    { title: 'Кухня', text: 'Сезонные блюда, созданные в духе итальянской традиции и современного взгляда.', image: cuisinePhoto },
    { title: 'Детали', text: 'От первого приветствия до последнего кофе — каждая деталь продумана.', image: detailPhoto },
  ],
  hy: [
    { title: 'Մթնոլորտ', text: 'Ջերմ լույս, բնական նյութեր և հանգիստ երեկոների համար ստեղծված ռիթմ։', image: atmospherePhoto },
    { title: 'Սպասարկում', text: 'Ուշադիր, անկաշկանդ և անկեղծ հյուրընկալության վրա հիմնված։', image: servicePhoto },
    { title: 'Խոհանոց', text: 'Սեզոնային ուտեստներ՝ իտալական ավանդույթի և ժամանակակից մոտեցման համադրությամբ։', image: cuisinePhoto },
    { title: 'Մանրուքներ', text: 'Առաջին ողջույնից մինչև վերջին սուրճը՝ յուրաքանչյուր պահ մտածված է։', image: detailPhoto },
  ],
}

export default function Experience() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'
  const items = features[language]
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section className="exp" id="experience">
      <div className="wrap rv">
        <span className="eyebrow">{ru ? 'Впечатления' : hy ? 'Մթնոլորտը' : 'The Experience'}</span>
        <h2>{ru ? 'Каждый вечер создан с заботой.' : hy ? 'Յուրաքանչյուր երեկո՝ հոգատարությամբ։' : 'Every evening, composed with care.'}</h2>
        <p>{ru ? 'Приходите на долгий обед, неспешный ужин или напиток в баре. От первой встречи до последнего кофе пространство тёплое, ритм — вашим, а каждая деталь продумана.' : hy ? 'Եկեք երկար ճաշի, հանգիստ ընթրիքի կամ բարում ըմպելիքի։ Առաջին ողջույնից մինչև վերջին սուրճը՝ ջերմ տարածք, ձեր նախընտրած ռիթմ և մտածված յուրաքանչյուր մանրուք։' : 'Come for a long lunch, an unhurried dinner, or a drink at the bar. From the first welcome to the last coffee, the room is warm, the pace is yours, and every detail is considered.'}</p>

        <div className="experience-photo" role="img" aria-label={items[activeImage].title}>
          {items.map((item, index) => (
            <img
              className={index === activeImage ? 'active' : ''}
              key={item.title}
              src={item.image}
              alt=""
              aria-hidden="true"
            />
          ))}
          <span className="experience-photo-caption" aria-hidden="true">
            <span>0{activeImage + 1}</span>
            {items[activeImage].title}
          </span>
        </div>

        <div className="feature-grid">
          {items.map((item, index) => (
            <article
              className={`feature-card${index === activeImage ? ' active' : ''}`}
              key={item.title}
              tabIndex={0}
              role="button"
              aria-pressed={index === activeImage}
              onMouseEnter={() => setActiveImage(index)}
              onFocus={() => setActiveImage(index)}
              onClick={() => setActiveImage(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActiveImage(index)
                }
              }}
            >
              <span className="feature-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
