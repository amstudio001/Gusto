import '../styles/hero.css'
import logo from '../assets/brand/logo.png'
import interior from '../assets/restaurant/interior/bestinterior.png'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  const hy = language === 'hy'
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
    <span className="badge">{ru ? 'Прежний Gusto · Теперь с новым интерьером' : hy ? 'Նախկին Gusto-ն՝ նոր ինտերիերով' : 'The former Gusto · Now with a new interior'}</span>
    <img className="hero-logo" src={logo} alt="Gusto logo" width="420" height="139" />
    <span className="est">{ru ? 'ОСНОВАН В 2006 · Более 20 лет итальянского гостеприимства' : hy ? 'ՀԻՄՆԱԴՐՎԵԼ Է 2006-ԻՆ · Իտալական հյուրընկալության ավելի քան 20 տարի' : 'EST. 2006 · 20+ Years of Italian hospitality'}</span>
    <h1 className="sr">{ru ? 'Gusto — итальянский ресторан, Ереван' : hy ? 'Gusto՝ իտալական ռեստորան Երևանում' : 'Gusto — Italian Restaurant, Yerevan'}</h1>
    <p style={{ font: 'italic 1.6rem var(--serif)' }}>{ru ? 'Два десятилетия итальянской традиции. Вкус, который остаётся.' : hy ? 'Իտալական ավանդույթի երկու տասնամյակ։ Համ, որը մնում է։' : 'Two decades of Italian tradition. A taste that remains.'}</p>
  </div>
  <div className="scroll" aria-hidden="true"></div>
</header>
  )
}
