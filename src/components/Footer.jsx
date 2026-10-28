import '../styles/footer.css'
import logo from '../assets/brand/logo.png'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'
  return (
    <footer>
      <div>
        <img className="flogo" src={logo} alt="Gusto Italian Restaurant" width="180" height="60" />
        <p>{ru ? 'Итальянская традиция с новым теплом.' : hy ? 'Իտալական ավանդույթը՝ նոր ջերմությամբ։' : 'Italian tradition, warmly reimagined.'}</p>
      </div>
      <div>
        Abovyan 13, Yerevan<br />
        <a href="tel:+37495802222">095 802222</a> / <a href="tel:+37411202222">011 202222</a><br />
        {ru ? 'Ежедневно, 08:30–00:00' : hy ? 'Ամեն օր՝ 08:30–00:00' : 'Every day, 08:30–00:00'}
      </div>
      <div>
        <a href="https://www.instagram.com/gusto.yerevan/" target="_blank" rel="noreferrer">Instagram</a><br />
        <a href="https://www.facebook.com/gustoyerevan" target="_blank" rel="noreferrer">Facebook</a><br />
        <a href="https://api.msmart.am/s/a_9-6SaPHPJ6pAEPFMJVvg" target="_blank" rel="noreferrer">{ru ? 'Меню' : hy ? 'Մենյու' : 'Menu'}</a><br />
        <a href="#about">{ru ? 'О нас' : hy ? 'Մեր մասին' : 'About'}</a>
      </div>
      <div>© {new Date().getFullYear()} Gusto Italian Restaurant</div>
    </footer>
  )
}