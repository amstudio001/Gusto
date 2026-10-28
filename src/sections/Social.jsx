import '../styles/social.css'
import interior1 from '../assets/restaurant/interior/Interior1.webp'
import interior2 from '../assets/restaurant/interior/Interior2.webp'
import dishPhoto from '../assets/cuisine/dish.png'
import barPhoto from '../assets/restaurant/bar/bar.png'
import interior3 from '../assets/restaurant/interior/Interior3.webp'
import newInterior from '../assets/restaurant/interior/newinterior.webp'
import { useLanguage } from '../context/LanguageContext'

const socialPhotos = [interior1, dishPhoto, barPhoto, interior2, interior3, newInterior]

export default function Social() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'
  return (
<section className="soc"><div className="wrap rv"><span className="eyebrow">{ru ? 'Следите за нашей историей' : hy ? 'Հետևեք մեր պատմությանը' : 'Follow Our Story'}</span>
  <h2><a href="https://www.instagram.com/gusto.yerevan/" target="_blank" rel="noreferrer">@gusto.yerevan</a></h2>
  <div className="sg">{socialPhotos.map((photo, index) => <a className={`ph social-card ${index % 3 === 1 ? 'b' : ''} ${index % 3 === 2 ? 'c' : ''}`} key={photo} href="https://www.instagram.com/gusto.yerevan/" target="_blank" rel="noreferrer" aria-label={`${ru ? 'Посмотреть момент Gusto' : hy ? 'Տեսնել Gusto-ի պահը' : 'View Gusto moment'} ${index + 1} ${ru ? 'в Instagram' : hy ? 'Instagram-ում' : 'on Instagram'}`} data-bg={photo} style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}><span aria-hidden="true">↗</span></a>)}</div>
  <p className="note" style={{ marginTop: '1rem' }}>{ru ? 'Больше моментов нашего дома — в Instagram.' : hy ? 'Մեր տան ավելի շատ պահեր՝ Instagram-ում։' : 'More moments from the house on Instagram.'}</p></div></section>
  )
}
