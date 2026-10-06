import '../styles/interior.css'
import interior1 from '../assets/restaurant/interior/Interior1.png'
import interior2 from '../assets/restaurant/interior/Interior2.png'
import interior3 from '../assets/restaurant/interior/Interior3.png'
import interior4 from '../assets/restaurant/interior/Interior4.png'

export default function Interior() {
  return (
<section className="int" id="atmosphere">
  <header className="rv"><span className="eyebrow">Interior</span><h2>Step inside.</h2></header>
  <div className="mos">
    <div className="ph m1 rv" role="img" aria-label="Gusto dining room" style={{ backgroundImage: `url(${interior1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    <div className="ph b m2 rv" role="img" aria-label="Gusto interior detail" style={{ backgroundImage: `url(${interior2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    <div className="ph c m3 rv" role="img" aria-label="Gusto bar and seating" style={{ backgroundImage: `url(${interior3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    <div className="ph m4 rv" role="img" aria-label="Gusto dining room" style={{ backgroundImage: `url(${interior4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  </div>
</section>
  )
}
