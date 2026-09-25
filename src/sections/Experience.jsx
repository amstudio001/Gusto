import '../styles/experience.css'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  return (
<section className="exp" id="experience"><div className="wrap rv">
  <span className="eyebrow">{ru ? 'Впечатления' : 'The Experience'}</span>
  <h2>{ru ? 'Каждый вечер создан с заботой.' : 'Every evening, composed with care.'}</h2>
  <p>{ru ? 'Приходите на долгий обед, неспешный ужин или напиток в баре. От первой встречи до последнего кофе пространство тёплое, ритм — вашим, а каждая деталь продумана.' : 'Come for a long lunch, an unhurried dinner, or a drink at the bar. From the first welcome to the last coffee, the room is warm, the pace is yours, and every detail is considered.'}</p>
  <div className="tri"><span>{ru ? 'Атмосфера' : 'Atmosphere'}</span><span>{ru ? 'Сервис' : 'Service'}</span><span>{ru ? 'Кухня' : 'Cuisine'}</span><span>{ru ? 'Детали' : 'Detail'}</span></div>
</div></section>
  )
}
