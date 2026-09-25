import '../styles/hero.css'
import logo from '../assets/logo.png'
import interior from '../assets/bestinterior.png'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  return (
<header className="hero">
  <div
    className="ph"
    data-l="Gusto interior"
    role="img"
    aria-label="Gusto restaurant interior"
    style={{ backgroundImage: `url(${interior})` }}
  ></div>
  <div className="in">
    <span className="badge">{ru ? 'Прежний Gusto · Теперь с новым интерьером' : 'The former Gusto · Now with a new interior'}</span>
    <img className="hero-logo" src={logo} alt="Gusto logo" width="420" height="139" />
    <span className="est">{ru ? 'ОСНОВАН В 2006 · Более 20 лет итальянского гостеприимства' : 'EST. 2006 · 20+ Years of Italian hospitality'}</span>
    <h1 className="sr">{ru ? 'Gusto — итальянский ресторан, Ереван' : 'Gusto — Italian Restaurant, Yerevan'}</h1>
    <p style={{ font: 'italic 1.6rem var(--serif)' }}>{ru ? 'Два десятилетия итальянской традиции. Вкус, который остаётся.' : 'Two decades of Italian tradition. A taste that remains.'}</p>
  </div>
  <div className="scroll" aria-hidden="true"></div>
</header>
  )
}
