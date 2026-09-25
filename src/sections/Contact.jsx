import '../styles/contact.css'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  return (
<section className="con" id="contact"><div className="wrap">
  <div className="rv"><span className="eyebrow" style={{ color: '#d9a5ad' }}>{ru ? 'Адрес и контакты' : 'Location & Contact'}</span><h2>{ru ? 'Ждём вас.' : 'Visit us.'}</h2>
    <dl><dt>{ru ? 'Адрес' : 'Address'}</dt><dd><a href="https://www.google.com/maps/search/?api=1&query=Abovyan+13,+Yerevan" target="_blank" rel="noreferrer">Abovyan 13, Yerevan</a></dd><dt>{ru ? 'Телефон' : 'Phone'}</dt><dd><a href="tel:+37495802222">095 802222</a> <span aria-hidden="true">/</span> <a href="tel:+37411202222">011 202222</a></dd><dt>{ru ? 'Часы работы' : 'Opening hours'}</dt><dd>{ru ? 'Ежедневно, 08:30–00:00' : 'Every day, 08:30–00:00'}</dd><dt>Instagram</dt><dd><a href="https://www.instagram.com/gusto.yerevan/" target="_blank" rel="noreferrer">@gusto.yerevan</a></dd></dl>
    <div className="btns"><a className="btn" href="https://www.google.com/maps/search/?api=1&query=Abovyan+13,+Yerevan" target="_blank" rel="noreferrer">{ru ? 'Маршрут' : 'Get Directions'}</a><a className="btn" href="tel:+37495802222">{ru ? 'Позвонить' : 'Call Us'}</a><a className="btn" href="https://www.instagram.com/gusto.yerevan/" target="_blank" rel="noreferrer">Instagram</a></div></div>
  <div className="map rv">
    <iframe
      title="Gusto Italian Restaurant location"
      src="https://www.google.com/maps?q=Abovyan+13,+Yerevan&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div></section>
  )
}
