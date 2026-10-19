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
    <div className="ph m1 rv" role="img" aria-label="Gusto dining room" data-bg={interior1} style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    <div className="ph b m2 rv" role="img" aria-label="Gusto interior detail" data-bg={interior2} style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    <div className="ph c m3 rv" role="img" aria-label="Gusto bar and seating" data-bg={interior3} style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    <div className="ph m4 rv" role="img" aria-label="Gusto dining room" data-bg={interior4} style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  </div>
</section>
  )
}
