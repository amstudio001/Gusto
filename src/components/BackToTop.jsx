import { useEffect, useState } from 'react'
import '../styles/back-to-top.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560)
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])
  return <button className={`back-top ${visible ? 'show' : ''}`} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
}