import { useEffect, useState } from 'react'
import '../styles/gallery.css'
import bestInterior from '../assets/bestinterior.png'
import newInterior from '../assets/newinterior.png'
import aboutPhoto from '../assets/about.png'
import interior1 from '../assets/Interior1.png'
import interior2 from '../assets/Interior2.png'
import interior3 from '../assets/Interior3.png'
import interior4 from '../assets/Interior4.png'
import barPhoto from '../assets/bar.png'
import { useLanguage } from '../context/LanguageContext'

const photos = [
  { image: bestInterior, v: '', en: 'The house at first light', ru: 'Дом на рассвете' },
  { image: interior1, v: 'b', en: 'The dining room', ru: 'Обеденный зал' },
  { image: interior2, v: 'c', en: 'A table detail', ru: 'Деталь стола' },
  { image: newInterior, v: '', en: 'The new Gusto', ru: 'Новый Gusto' },
  { image: interior3, v: 'c', en: 'An evening at the bar', ru: 'Вечер в баре' },
  { image: aboutPhoto, v: '', en: 'The room between courses', ru: 'Зал между блюдами' },
  { image: interior4, v: 'b', en: 'A seat in the house', ru: 'Место в нашем доме' },
  { image: barPhoto, v: 'c', en: 'Behind the bar', ru: 'За баром' },
]

export default function Gallery() {
  const [open, setOpen] = useState(null)
  const { language } = useLanguage()
  const ru = language === 'ru'
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setOpen(null)
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [])
  return (
    <>
      <section className="gal" id="gallery">
        <div className="wrap rv">
          <span className="eyebrow">{ru ? 'Галерея' : 'Gallery'}</span>
          <h2>{ru ? 'Моменты нашего дома.' : 'Moments from the house.'}</h2>
          <div className="gg">
            {photos.map((p) => (
              <div key={p.en} className={`ph ${p.v}`} role="img" aria-label={ru ? p.ru : p.en} style={{ backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => setOpen(p)} />
            ))}
          </div>
        </div>
      </section>
      <div className={`lb ${open ? 'o' : ''}`} role="dialog" aria-label="Photo viewer" onClick={() => setOpen(null)}>
        <button className="lbx" aria-label="Close">×</button>
        {open && <div className={`ph ${open.v}`} role="img" aria-label={ru ? open.ru : open.en} style={{ backgroundImage: `url(${open.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />}
      </div>
    </>
  )
}
