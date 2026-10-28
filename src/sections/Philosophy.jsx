import { useEffect, useRef, useState } from 'react'
import '../styles/philosophy.css'
import { useLanguage } from '../context/LanguageContext'
import traditionPhoto from '../assets/restaurant/interior/tradition.webp'
import qualityPhoto from '../assets/restaurant/interior/quality.webp'
import hospitalityPhoto from '../assets/restaurant/interior/Interior1.webp'
import experiencePhoto from '../assets/restaurant/interior/experience.webp'

const principles = {
  en: [
    { title: 'Tradition', text: 'Recipes, culture, and experience are carried forward with respect and a light modern touch.', image: traditionPhoto, alt: 'A beautifully set table at Gusto' },
    { title: 'Quality', text: 'We pay attention to the ingredient, the preparation, and the small details that make a table memorable.', image: qualityPhoto, alt: 'Italian cuisine prepared at Gusto' },
    { title: 'Hospitality', text: 'A warm welcome begins at the door and continues through every course and conversation.', image: hospitalityPhoto, alt: 'The warm dining room at Gusto' },
    { title: 'Experience', text: 'Food, space, service, and atmosphere come together as one generous expression of Gusto.', image: experiencePhoto, alt: 'The renewed interior at Gusto' },
  ],
  ru: [
    { title: 'Традиция', text: 'Рецепты, культура и опыт бережно передаются дальше с лёгким современным акцентом.', image: traditionPhoto, alt: 'Красивая сервировка стола в Gusto' },
    { title: 'Качество', text: 'Мы внимательно относимся к продукту, приготовлению и маленьким деталям, которые делают стол особенным.', image: qualityPhoto, alt: 'Итальянское блюдо, приготовленное в Gusto' },
    { title: 'Гостеприимство', text: 'Тёплый приём начинается у двери и продолжается в каждом блюде и разговоре.', image: hospitalityPhoto, alt: 'Уютный зал ресторана Gusto' },
    { title: 'Впечатление', text: 'Еда, пространство, сервис и атмосфера соединяются в единое выражение Gusto.', image: experiencePhoto, alt: 'Обновлённый интерьер Gusto' },
  ],
  hy: [
    { title: 'Ավանդույթ', text: 'Բաղադրատոմսերը, մշակույթն ու փորձը փոխանցում ենք՝ պահպանելով դրանք և ավելացնելով ժամանակակից նուրբ շեշտ։', image: traditionPhoto, alt: 'Gusto-ում գեղեցիկ ձևավորված սեղան' },
    { title: 'Որակ', text: 'Ուշադրություն ենք դարձնում մթերքին, պատրաստման եղանակին և այն փոքր մանրուքներին, որոնք սեղանն առանձնահատուկ են դարձնում։', image: qualityPhoto, alt: 'Gusto-ում պատրաստված իտալական ուտեստ' },
    { title: 'Հյուրընկալություն', text: 'Ջերմ ընդունելությունը սկսվում է դռան մոտ և շարունակվում յուրաքանչյուր ուտեստի ու զրույցի ընթացքում։', image: hospitalityPhoto, alt: 'Gusto-ի ջերմ ճաշասրահը' },
    { title: 'Տպավորություն', text: 'Սնունդը, տարածքը, սպասարկումն ու մթնոլորտը միավորվում են՝ դառնալով Gusto-ի ամբողջական փորձառությունը։', image: experiencePhoto, alt: 'Gusto-ի նորացված ինտերիերը' },
  ],
}

const sectionText = {
  en: { eyebrow: 'Our Philosophy', title: 'What guides us.', tabs: 'Our principles' },
  ru: { eyebrow: 'Наша философия', title: 'Что нас ведёт.', tabs: 'Наши принципы' },
  hy: { eyebrow: 'Մեր փիլիսոփայությունը', title: 'Ինչն է մեզ ոգեշնչում։', tabs: 'Մեր սկզբունքները' },
}

export default function Philosophy() {
  const { language } = useLanguage()
  const [active, setActive] = useState(0)
  const [preview, setPreview] = useState(null)
  const pausedRef = useRef(false)
  const items = principles[language]
  const labels = sectionText[language]
  const displayed = preview ?? active

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => {
      if (!pausedRef.current) setActive((current) => (current + 1) % items.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [items.length])

  const pauseOnFocus = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return
    pausedRef.current = event.type === 'focus'
  }

  const onTabKeyDown = (event, index) => {
    let nextIndex
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % items.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + items.length) % items.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = items.length - 1
    if (nextIndex === undefined) return
    event.preventDefault()
    setActive(nextIndex)
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[nextIndex].focus()
  }

  return (
    <section className="phi">
      <div className="wrap">
        <div className="phi-heading rv">
          <span className="eyebrow">{labels.eyebrow}</span>
          <h2>{labels.title}</h2>
        </div>
        <div
          className="philosophy-showcase rv"
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
          onFocus={pauseOnFocus}
          onBlur={pauseOnFocus}
        >
          <div className="philosophy-visual">
            {items.map((item, index) => (
              <img
                key={item.title}
                className={index === displayed ? 'active' : ''}
                src={item.image}
                alt={index === displayed ? item.alt : ''}
                aria-hidden={index !== displayed}
              />
            ))}
            <span className="philosophy-watermark" aria-hidden="true">{String(displayed + 1).padStart(2, '0')}</span>
            <div className="philosophy-photo-caption">
              <span>{labels.eyebrow}</span>
              <strong>{items[displayed].title}</strong>
            </div>
            <div className="philosophy-progress" aria-hidden="true">
              {items.map((item, index) => (
                <span className={index === active ? 'active' : index < active ? 'complete' : ''} key={item.title}>
                  {index === active && <i key={active} />}
                </span>
              ))}
            </div>
          </div>
          <div className="philosophy-content">
            <div className="philosophy-tabs" role="tablist" aria-label={labels.tabs}>
              {items.map((item, index) => (
                <button
                  id={`philosophy-tab-${language}-${index}`}
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  tabIndex={index === active ? 0 : -1}
                  aria-controls={`philosophy-panel-${language}`}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setPreview(index)}
                  onMouseLeave={() => setPreview(null)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.title}
                </button>
              ))}
            </div>
            <div id={`philosophy-panel-${language}`} className="philosophy-copy" role="tabpanel" aria-labelledby={`philosophy-tab-${language}-${active}`}>
              <span className="philosophy-content-index">{String(active + 1).padStart(2, '0')}</span>
              <h3>{items[active].title}</h3>
              <p>{items[active].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
