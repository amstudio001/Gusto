import './styles/base.css'
import './styles/responsive.css'
import useReveal from './hooks/useReveal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import History from './sections/History'
import About from './sections/About'
import Philosophy from './sections/Philosophy'
import Concept from './sections/Concept'
import Cuisine from './sections/Cuisine'
import Bar from './sections/Bar'
import Interior from './sections/Interior'
import Experience from './sections/Experience'
import Gallery from './sections/Gallery'
import Social from './sections/Social'
import Contact from './sections/Contact'
import BackToTop from './components/BackToTop'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero /><Concept /><History /><About /><Philosophy /><Cuisine /><Bar /><Interior />
        <Experience /><Gallery /><Social /><Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
