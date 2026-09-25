import '../styles/social.css'
import interior1 from '../assets/Interior1.png'
import interior2 from '../assets/Interior2.png'
import dishPhoto from '../assets/dish.png'
import barPhoto from '../assets/bar.png'
import interior3 from '../assets/Interior3.png'
import newInterior from '../assets/newinterior.png'
import { useLanguage } from '../context/LanguageContext'

const socialPhotos = [interior1, dishPhoto, barPhoto, interior2, interior3, newInterior]

export default function Social() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  return (
<section className="soc"><div className="wrap rv"><span className="eyebrow">{ru ? 'Следите за нашей историей' : 'Follow Our Story'}</span>
  <h2><a href="https://www.instagram.com/gusto.yerevan/" target="_blank" rel="noreferrer">@gusto.yerevan</a></h2>
  <div className="sg">{socialPhotos.map((photo, index) => <a className={`ph social-card ${index % 3 === 1 ? 'b' : ''} ${index % 3 === 2 ? 'c' : ''}`} key={photo} href="https://www.instagram.com/gusto.yerevan/" target="_blank" rel="noreferrer" aria-label={`${ru ? 'Посмотреть момент Gusto' : 'View Gusto moment'} ${index + 1} ${ru ? 'в Instagram' : 'on Instagram'}`} style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}><span aria-hidden="true">↗</span></a>)}</div>
  <p className="note" style={{ marginTop: '1rem' }}>{ru ? 'Больше моментов нашего дома — в Instagram.' : 'More moments from the house on Instagram.'}</p></div></section>
  )
}
