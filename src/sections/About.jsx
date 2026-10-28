import '../styles/about.css'
import aboutPhoto from '../assets/restaurant/interior/about.webp'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'
  return (
<section className="about" id="about"><div className="wrap">
  <div className="ph rv" role="img" aria-label="Gusto restaurant" data-bg={aboutPhoto} style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="about-copy">
    <span className="eyebrow rv about-reveal-1">{ru ? 'О нас' : hy ? 'Մեր մասին' : 'About'}</span>
    <h2 className="rv about-reveal-2">{ru ? <>Традиция, <em>переосмысленная.</em></> : hy ? <>Ավանդույթը՝ <em>նորովի։</em></> : <>Tradition, <em>refined.</em></>}</h2>
    <p className="rv about-reveal-3">{ru ? 'Более двух десятилетий мы соединяем тепло традиционного гостеприимства с современным взглядом на ужин.' : hy ? 'Ավելի քան երկու տասնամյակ մենք համադրում ենք ավանդական հյուրընկալության ջերմությունն ու ճաշելու ժամանակակից մոտեցումը։' : 'For more than two decades, our restaurant has brought together the warmth of traditional hospitality and a contemporary approach to dining.'}</p>
    <p className="rv about-reveal-4">{ru ? 'Мы верим, что впечатление рождается в деталях — от тщательно приготовленной кухни до внимательного сервиса и атмосферы, в которой каждому гостю рады.' : hy ? 'Հավատում ենք՝ անմոռանալի պահերը ծնվում են մանրուքներից․ խնամքով պատրաստված ուտեստներից, ուշադիր սպասարկումից և մթնոլորտից, որտեղ ուրախ են յուրաքանչյուր հյուրի համար։' : 'We believe that a memorable experience is found in the details — from carefully prepared cuisine to attentive service and an atmosphere designed to make every guest feel welcome.'}</p>
    <p className="rv about-reveal-5">{ru ? 'Опираясь на традиции и двигаясь вперёд, мы создаём место, где вечные ценности встречаются с современным видением.' : hy ? 'Հենվելով ավանդույթների վրա և նայելով առաջ՝ ստեղծում ենք մի վայր, որտեղ հավերժական արժեքները հանդիպում են ժամանակակից մտածողությանը։' : 'Rooted in tradition, yet always moving forward, we continue to create a place where timeless values meet a modern vision.'}</p>
  </div>
</div></section>
  )
}
