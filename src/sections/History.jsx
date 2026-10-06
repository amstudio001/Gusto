import { useEffect, useRef, useState } from 'react'
import '../styles/history.css'
import { useLanguage } from '../context/LanguageContext'
import oldGusto from '../assets/history/oldgusto-web.jpg'
import newGusto from '../assets/history/newgusto-web.jpg'

const milestones = [
  { year: '2006', en: 'The beginning', ru: 'Начало', text: { en: "Gusto opens its doors and introduces Yerevan to the city's first open-kitchen experience.", ru: 'Gusto открывает двери и знакомит Ереван с первым в городе опытом открытой кухни.' } },
  { year: '2015', en: 'A renewed room', ru: 'Обновлённое пространство', text: { en: 'The interior evolves, creating a warmer, more contemporary setting for the same generous hospitality.', ru: 'Интерьер меняется, создавая более тёплое и современное пространство для того же искреннего гостеприимства.' } },
  { year: '2026', en: 'The next chapter', ru: 'Следующая глава', text: { en: 'Twenty years on, Gusto brings its original spirit together with a fresh vision for the future.', ru: 'Спустя двадцать лет Gusto соединяет свой первоначальный дух со свежим взглядом в будущее.' } },
]

const stats = [
  { value: 20, suffix: '+', en: 'Years of history', ru: 'Лет истории' },
  { value: 1, suffix: 'st', en: 'Open-kitchen pioneer', ru: 'Первопроходец открытой кухни' },
  { value: 100, suffix: '%', en: 'Recipe authenticity', ru: 'Аутентичность рецептов' },
]

export default function History() {
  const [active, setActive] = useState(0)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef(null)
  const { language } = useLanguage()
  const ru = language === 'ru'

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined
    let frame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const started = performance.now()
      const animate = (now) => {
        const progress = Math.min((now - started) / 1400, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCounts(stats.map((stat) => Math.round(stat.value * eased)))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }
      frame = requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.25 })
    observer.observe(section)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined
    const move = (event) => {
      const bounds = section.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2
      const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2
      section.style.setProperty('--history-x', `${x * 8}px`)
      section.style.setProperty('--history-y', `${y * 8}px`)
    }
    section.addEventListener('pointermove', move)
    return () => section.removeEventListener('pointermove', move)
  }, [])

  return (
<section className="hist" id="history" ref={sectionRef}>
  <div className="big" aria-hidden="true">20</div>
  <div className="wrap">
    <div className="rv history-mark"><div className="num">20+<small>{ru ? 'ЛЕТ' : 'YEARS'}</small></div><span className="mark-caption">{ru ? 'С 2006 года · Ереван' : 'Since 2006 · Yerevan'}</span></div>
    <div className="rv"><span className="eyebrow">{ru ? 'Наша история' : 'Our History'}</span><h2>{ru ? 'История длиной более двух десятилетий.' : 'A story written over two decades.'}</h2>
      <p>{ru ? 'Более двух десятилетий наш ресторан соединяет традиции, гостеприимство и любовь к хорошей кухне.' : 'For more than two decades, our restaurant has been a place where tradition, hospitality, and a passion for great food come together.'}</p>
      <p>{ru ? 'Простая идея выросла в место, сформированное годами опыта, бесчисленными встречами и глубоким уважением к нашим гостям.' : 'What began as a simple idea has grown into a place shaped by years of experience, countless shared moments, and a deep respect for our guests.'}</p>
      <p>{ru ? 'Мы менялись, сохраняя главное — искреннее гостеприимство, продуманную кухню и атмосферу, в которую хочется возвращаться.' : 'Through the years, we have evolved while staying true to what matters most — authentic hospitality, thoughtful cuisine, and an atmosphere that makes every visit memorable.'}</p>
      <p>{ru ? 'Сегодня мы продолжаем эту историю с той же самоотдачей, соединяя традиции прошлого и современный взгляд в будущее.' : 'Today, we continue the story with the same dedication, bringing together the traditions of the past and a modern vision for the future.'}</p></div>
  </div>
  <div className="history-photos wrap rv">
    <div className="history-photo-heading"><span>2006 — 2026</span><strong>{ru ? 'Два десятилетия — одно место.' : 'Two decades, one place.'}</strong></div>
    <figure className="history-photo history-photo-archive">
      <img src={oldGusto} alt={ru ? 'Прежний фасад ресторана Gusto' : 'The former Gusto restaurant facade'} />
      <span className="history-photo-year">2006</span>
      <figcaption><span>{ru ? 'Первые годы' : 'The early years'}</span><strong>{ru ? 'Gusto тогда' : 'Gusto then'}</strong></figcaption>
    </figure>
    <figure className="history-photo">
      <img src={newGusto} alt={ru ? 'Новый фасад ресторана Gusto' : 'The new Gusto restaurant facade'} />
      <span className="history-photo-year">2026</span>
      <figcaption><span>{ru ? 'Новая глава' : 'A new chapter'}</span><strong>{ru ? 'Gusto сегодня' : 'Gusto today'}</strong></figcaption>
    </figure>
  </div>
  <div className="history-continuation wrap" aria-hidden="true"><span /><span /></div>
  <div className="history-lower wrap">
    <div className="timeline rv" aria-label="Gusto history milestones">
      <div className="timeline-tabs" role="tablist" aria-label={ru ? 'Вехи истории' : 'History milestones'}>
        {milestones.map((milestone, index) => <button key={milestone.year} className={active === index ? 'active' : ''} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{milestone.year}</button>)}
      </div>
      <div className="timeline-story" role="tabpanel">
        <span>{ru ? milestones[active].ru : milestones[active].en}</span>
        <p>{milestones[active].text[language]}</p>
      </div>
    </div>
    <div className="stats rv" aria-label={ru ? 'Факты о Gusto' : 'Gusto facts'}>
      {stats.map((stat, index) => <div className="stat" key={stat.en}><strong>{counts[index]}<small>{index === 1 && ru ? '' : stat.suffix}</small></strong><span>{ru ? stat.ru : stat.en}</span></div>)}
    </div>
  </div>
  <blockquote className="history-quote rv"><p>{ru ? '«Годы меняют пространство, меню и детали. Но неизменным остаётся чувство, что тебе здесь рады».' : '“The years change the room, the menu, and the details. What stays is the feeling of being welcomed.”'}</p><cite>{ru ? '— Команда Gusto' : '— The Gusto team'}</cite></blockquote>
</section>
  )
}
