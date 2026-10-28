import { useEffect, useState } from 'react'
import '../styles/back-to-top.css'
import { useLanguage } from '../context/LanguageContext'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { language } = useLanguage()
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560)
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])
  const label = language === 'ru' ? 'Наверх' : language === 'hy' ? 'Վերև' : 'Back to top'
  return <button className={`back-top ${visible ? 'show' : ''}`} aria-label={label} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
}