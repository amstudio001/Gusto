import '../styles/interior.css'
import interior1 from '../assets/restaurant/interior/Interior2.webp'
import interior2 from '../assets/restaurant/interior/Interior1.webp'
import interior3 from '../assets/restaurant/interior/Interior3.webp'
import interior4 from '../assets/restaurant/interior/Interior5.webp'
import { useLanguage } from '../context/LanguageContext'

export default function Interior() {
  const { language } = useLanguage()
  const title = language === 'ru' ? 'Интерьер' : language === 'hy' ? 'Ինտերիեր' : 'Interior'
  const subtitle = language === 'ru' ? 'Загляните внутрь.' : language === 'hy' ? 'Բացահայտեք մեր ինտերիերը։' : 'Step inside.'
  const roomLabel = language === 'ru' ? 'Обеденный зал Gusto' : language === 'hy' ? 'Gusto-ի ճաշասրահը' : 'Gusto dining room'
  const detailLabel = language === 'ru' ? 'Деталь интерьера Gusto' : language === 'hy' ? 'Gusto-ի ինտերիերի դետալը' : 'Gusto interior detail'
  const barLabel = language === 'ru' ? 'Бар и гостиная Gusto' : language === 'hy' ? 'Gusto-ի բարն ու հյուրասրահը' : 'Gusto bar and seating'
  return (
    <section className="int" id="atmosphere">
      <header className="rv">
        <span className="eyebrow">{title}</span>
        <h2>{subtitle}</h2>
      </header>
      <div className="mos">
        <div 
          className="ph m1 rv" 
          role="img" 
          aria-label={roomLabel}
          data-bg={interior1} 
          style={{ 
            backgroundImage: `url(${interior1})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>
        
        <div 
          className="ph b m2 rv" 
          role="img" 
          aria-label={detailLabel}
          data-bg={interior2} 
          style={{ 
            backgroundImage: `url(${interior2})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center 80%' 
          }}
        ></div>
        
        <div 
          className="ph c m3 rv" 
          role="img" 
          aria-label={barLabel}
          data-bg={interior3} 
          style={{ 
            backgroundImage: `url(${interior3})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>
        
        <div 
          className="ph m4 rv" 
          role="img" 
          aria-label={roomLabel}
          data-bg={interior4} 
          style={{ 
            backgroundImage: `url(${interior4})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>
      </div>
    </section>
  )
}