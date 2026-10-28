import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import '../styles/history.css'
import { useLanguage } from '../context/LanguageContext'
import oldGusto from '../assets/history/oldgusto-web.jpg'
import newGusto from '../assets/history/newgusto-web.jpg'
import newInterior from '../assets/restaurant/interior/newinterior.webp'

const historySlides = [oldGusto, newGusto, newInterior]

const milestones = [
  { year: '2006', en: 'The beginning', ru: 'Начало', hy: 'Սկիզբը', text: { en: "Gusto opens its doors and introduces Yerevan to the city's first open-kitchen experience.", ru: 'Gusto открывает двери и знакомит Ереван с первым в городе опытом открытой кухни.', hy: 'Gusto-ն բացում է իր դռները և Երևանին ներկայացնում քաղաքում առաջին բաց խոհանոցը։' } },
  { year: '2015', en: 'A renewed room', ru: 'Обновлённое пространство', hy: 'Նորացված տարածք', text: { en: 'The interior evolves, creating a warmer, more contemporary setting for the same generous hospitality.', ru: 'Интерьер меняется, создавая более тёплое и современное пространство для того же искреннего гостеприимства.', hy: 'Ինտերիերը փոխվում է՝ ստեղծելով ավելի ջերմ ու ժամանակակից միջավայր նույն անկեղծ հյուրընկալության համար։' } },
  { year: '2026', en: 'The next chapter', ru: 'Следующая глава', hy: 'Հաջորդ գլուխը', text: { en: 'Twenty years on, Gusto brings its original spirit together with a fresh vision for the future.', ru: 'Спустя двадцать лет Gusto соединяет свой первоначальный дух со свежим взглядом в будущее.', hy: 'Քսան տարի անց Gusto-ն իր սկզբնական ոգին համադրում է ապագայի նոր տեսլականի հետ։' } },
]

const stats = [
  { value: 20, suffix: '+', en: 'Years of history', ru: 'Лет истории', hy: 'տարվա պատմություն' },
  { value: 1, suffix: 'st', en: 'Open-kitchen pioneer', ru: 'Первопроходец открытой кухни', hy: 'բաց խոհանոցի առաջամարտիկը' },
  { value: 100, suffix: '%', en: 'Recipe authenticity', ru: 'Аутентичность рецептов', hy: 'բաղադրատոմսերի իսկություն' },
]

export default function History() {
  const [active, setActive] = useState(0)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [photoIndex, setPhotoIndex] = useState(0)
  const [storyOpen, setStoryOpen] = useState(false)
  const sectionRef = useRef(null)
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'
  const readMoreLabel = ru ? 'Читать историю полностью' : hy ? 'Կարդալ ամբողջ պատմությունը' : 'Read the full story'
  const story = ru
    ? [
        { text: 'Ресторан Gusto в 2006 году впервые открыл для ереванцев подлинный вкус и аромат итальянских блюд. Годами в нашей открытой кухне повара готовили божественные итальянские пиццы и пасты, а со временем у наших гостей появилась возможность заказывать любимые блюда из ресторана с доставкой на дом.' },
        { text: 'Верный этому почерку, ресторан Gusto всегда оставался предан вкусам своих гостей, учился на отзывах требовательных посетителей и вдохновлялся словами благодарности.' },
        { text: 'Сегодня, отмечая свое 20-летие, Gusto открывает свои гостеприимные двери в обновленном формате: с новым интерьером, профессиональным баром, широким выбором вин и, конечно же, кухней, где старое и новое в фантастическом сочетании вкусов каждый день встречает ереванцев и гостей столицы.' },
        { text: 'Сочетание итальянской пиццы, пасты, ризотто и блюд европейской кухни обещает настоящий вкусовой фейерверк. Gusto создает атмосферу, в которой вино и десерты делают ереванские вечера поистине особенными.' },
        { text: 'Наш гостеприимный персонал ждет именно тебя…' },
        { text: 'С ЛЮБОВЬЮ, КОМАНДА GUSTO', signoff: true },
      ]
    : hy
      ? [
          { text: 'Gusto ռեստորանը 2006թ.-ին առաջին անգամ երևանցիներին ներկայացրեց իտալական ուտեստների համն ու բույրը։' },
          { text: 'Բաց խոհանոցում տարիներ շարունակ մեր խոհարարները պատրաստել են իտալական անմահական պիցցաներն ու պաստաները։ Ժամանակի ընթացքում մեր հյուրերը հնարավորություն են ունեցել ռեստորանից պատվիրելու իրենց սիրելի ուտեստները և առաքման ծառայության շնորհիվ վայելելու դրանք հենց տանը։' },
          { text: 'Հավատարիմ մնալով իր ոճին՝ Gusto ռեստորանը միշտ հաշվի է առել իր հյուրերի նախասիրությունները, սովորել պահանջկոտ այցելուների կարծիքներից և ոգեշնչվել շնորհակալական խոսքերից։' },
          { text: 'Այսօր՝ նշելով իր 20-ամյակը, Gusto-ն իր հյուրընկալ դռներն է բացում նորացված ձևաչափով՝ նոր ինտերիերով, պրոֆեսիոնալ բարով, գինիների լայն ընտրանիով և, իհարկե, խոհանոցով, որտեղ հինն ու նորը ֆանտաստիկ համադրությամբ ամեն օր դիմավորում են երևանցիներին և մայրաքաղաքի հյուրերին։' },
          { text: 'Իտալական պիցցաների, պաստաների, ռիզոտոյի և եվրոպական խոհանոցի համադրությունը խոստանում է իսկական համային հրավառություն։ Gusto-ն ստեղծում է մի միջավայր, որտեղ գինին ու աղանդերը երևանյան երեկոները դարձնում են իսկապես առանձնահատուկ։' },
          { text: 'Մեր հյուրընկալ անձնակազմը սպասում է հենց քեզ…' },
          { text: 'ՍԻՐՈՎ՝ GUSTO-Ի ԱՆՁՆԱԿԱԶՄԸ', signoff: true },
        ]
      : [
            { text: 'In 2006, Gusto first introduced Yerevan to the authentic taste and aroma of Italian cuisine. For years, our chefs prepared wonderful Italian pizzas and pastas in our open kitchen. In time, guests could order their favorite dishes from the restaurant and enjoy them at home with our delivery service.' },
            { text: 'True to its roots, Gusto has always stayed close to its guests’ tastes, learning from the feedback of discerning diners and drawing inspiration from their words of appreciation.' },
            { text: 'Today, as we celebrate our 20th anniversary, Gusto opens its welcoming doors in a renewed format: with a new interior, a professional bar, a wide selection of wines, and, of course, a kitchen where old and new come together in a wonderful harmony of flavors for Yerevan residents and visitors alike.' },
            { text: 'Italian pizza, pasta, risotto, and European cuisine promise a true celebration of flavor. Gusto creates an atmosphere where wine and desserts make evenings in Yerevan truly special.' },
            { text: 'Our welcoming team is waiting just for you…' },
            { text: 'WITH LOVE, THE GUSTO TEAM', signoff: true },
          ]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhotoIndex((current) => (current + 1) % historySlides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!storyOpen) return undefined
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setStoryOpen(false)
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [storyOpen])

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
  <div className="wrap history-intro">
    <div className="history-feature rv">
      <div className="history-feature-slides" aria-hidden="true">
        {historySlides.map((image, index) => (
          <img className={photoIndex === index ? 'active' : ''} key={image} src={image} alt="" />
        ))}
      </div>
      <div className="history-feature-copy">
        <div className="history-mark"><div className="num">20+<small>{ru ? 'ЛЕТ' : hy ? 'ՏԱՐԻ' : 'YEARS'}</small></div><span className="mark-caption">{ru ? 'С 2006 года · Ереван' : hy ? '2006-ից · Երևան' : 'Since 2006 · Yerevan'}</span></div>
        <span className="eyebrow">{ru ? 'Наша история' : hy ? 'Մեր պատմությունը' : 'Our History'}</span>
        <h2>{ru ? 'История длиной более двух десятилетий.' : hy ? 'Ավելի քան երկու տասնամյակի պատմություն։' : 'A story written over two decades.'}</h2>
        {story.slice(0, 1).map(({ text }) => <p key={text}>{text}</p>)}
        <button className="history-story-toggle" type="button" aria-haspopup="dialog" onClick={() => setStoryOpen(true)}>
          {readMoreLabel}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <div className="history-photo-controls" role="group" aria-label={ru ? 'Фотографии истории Gusto' : hy ? 'Gusto-ի պատմության լուսանկարները' : 'Gusto history photos'}>
        {historySlides.map((image, index) => (
          <button
            key={image}
            type="button"
            className={photoIndex === index ? 'active' : ''}
            aria-label={`${ru ? 'Фото' : hy ? 'Լուսանկար' : 'Photo'} ${index + 1}`}
            aria-pressed={photoIndex === index}
            onClick={() => setPhotoIndex(index)}
          />
        ))}
      </div>
    </div>
  </div>
  <div className="history-photos wrap rv">
    <div className="history-photo-heading"><span>2006 — 2026</span><strong>{ru ? 'Два десятилетия — одно место.' : hy ? 'Երկու տասնամյակ՝ մեկ վայր։' : 'Two decades, one place.'}</strong></div>
    <figure className="history-photo history-photo-archive">
      <img src={oldGusto} alt={ru ? 'Прежний фасад ресторана Gusto' : hy ? 'Gusto ռեստորանի նախկին ճակատային հատվածը' : 'The former Gusto restaurant facade'} loading="lazy" decoding="async" />
      <span className="history-photo-year">2006</span>
      <figcaption><span>{ru ? 'Первые годы' : hy ? 'Առաջին տարիները' : 'The early years'}</span><strong>{ru ? 'Gusto тогда' : hy ? 'Gusto-ն այն ժամանակ' : 'Gusto then'}</strong></figcaption>
    </figure>
    <figure className="history-photo">
      <img src={newGusto} alt={ru ? 'Новый фасад ресторана Gusto' : hy ? 'Gusto ռեստորանի նոր ճակատային հատվածը' : 'The new Gusto restaurant facade'} loading="lazy" decoding="async" />
      <span className="history-photo-year">2026</span>
      <figcaption><span>{ru ? 'Новая глава' : hy ? 'Նոր գլուխ' : 'A new chapter'}</span><strong>{ru ? 'Gusto сегодня' : hy ? 'Gusto-ն այսօր' : 'Gusto today'}</strong></figcaption>
    </figure>
  </div>
  <div className="history-continuation wrap" aria-hidden="true"><span /><span /></div>
  <div className="history-lower wrap">
    <div className="timeline rv" aria-label={ru ? 'Этапы истории Gusto' : hy ? 'Gusto-ի պատմության կարևոր փուլերը' : 'Gusto history milestones'}>
      <div className="timeline-tabs" role="tablist" aria-label={ru ? 'Вехи истории' : hy ? 'Պատմության կարևոր փուլերը' : 'History milestones'}>
        {milestones.map((milestone, index) => <button key={milestone.year} className={active === index ? 'active' : ''} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{milestone.year}</button>)}
      </div>
      <div className="timeline-story" role="tabpanel">
        <span>{ru ? milestones[active].ru : hy ? milestones[active].hy : milestones[active].en}</span>
        <p>{milestones[active].text[language]}</p>
      </div>
    </div>
    <div className="stats rv" aria-label={ru ? 'Факты о Gusto' : hy ? 'Փաստեր Gusto-ի մասին' : 'Gusto facts'}>
      {stats.map((stat, index) => <div className="stat" key={stat.en}><strong>{counts[index]}<small>{index === 1 && (ru || hy) ? '' : stat.suffix}</small></strong><span>{ru ? stat.ru : hy ? stat.hy : stat.en}</span></div>)}
    </div>
  </div>
  <blockquote className="history-quote rv"><p>{ru ? '«Годы меняют пространство, меню и детали. Но неизменным остаётся чувство, что тебе здесь рады».' : hy ? '«Տարիները փոխում են տարածքը, ճաշացանկն ու մանրուքները։ Բայց անփոփոխ է մնում այստեղ ձեզ սպասված զգալու ջերմությունը»։' : '“The years change the room, the menu, and the details. What stays is the feeling of being welcomed.”'}</p><cite>{ru ? '— Команда Gusto' : hy ? '— Gusto-ի թիմը' : '— The Gusto team'}</cite></blockquote>
  {storyOpen && createPortal(
    <div className="history-story-modal" role="presentation" onClick={(event) => {
      if (event.target === event.currentTarget) setStoryOpen(false)
    }}>
      <section className="history-story-dialog" role="dialog" aria-modal="true" aria-labelledby="history-story-title">
        <button className="history-story-close" type="button" aria-label={ru ? 'Закрыть историю' : hy ? 'Փակել պատմությունը' : 'Close story'} onClick={() => setStoryOpen(false)}>×</button>
        <span className="eyebrow">{ru ? 'Наша история' : hy ? 'Մեր պատմությունը' : 'Our History'}</span>
        <h2 id="history-story-title">{ru ? 'История длиной более двух десятилетий.' : hy ? 'Ավելի քան երկու տասնամյակի պատմություն։' : 'A story written over two decades.'}</h2>
        <div className="history-story-dialog-copy">
          {story.map(({ text, signoff }) => <p key={text}>{signoff ? <strong>{text}</strong> : text}</p>)}
        </div>
      </section>
    </div>,
    document.body,
  )}
</section>
  )
}
