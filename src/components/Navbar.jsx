import { useEffect, useState } from 'react'
import '../styles/nav.css'
import logo from '../assets/logo.png'
import { useLanguage } from '../context/LanguageContext'

const links = [['concept', 'Concept', 'Концепция'], ['history', 'History', 'История'], ['cuisine', 'Cuisine', 'Кухня'], ['bar', 'Bar', 'Бар'], ['experience', 'Experience', 'Атмосфера'], ['gallery', 'Gallery', 'Галерея'], ['contact', 'Contact', 'Контакты']]

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(scrollY > 60)
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  return (
    <>
      <nav className={scrolled ? 's' : ''} aria-label="Main">
        <a className="logo" href="#top" aria-label="Gusto Italian Restaurant — home"><img src={logo} alt="Gusto Italian Restaurant" width="150" height="50" /></a>
        <div className="links">{links.map(([h, en, ru]) => <a key={h} href={`#${h}`}>{language === 'en' ? en : ru}</a>)}</div>
        <div className="nav-actions"><a className="btn" href="https://www.instagram.com/stories/highlights/18139469947491521/" target="_blank" rel="noreferrer" style={{ padding: '.6rem 1.4rem' }}>{language === 'en' ? 'View Menu' : 'Меню'}</a><button className="lang-switch" onClick={toggleLanguage} aria-label={language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}>{language === 'en' ? 'RU' : 'EN'}</button></div>
        <button
          className={`nb ${open ? 'o' : ''}`}
          aria-expanded={open}
          aria-label={open ? (language === 'en' ? 'Close menu' : 'Закрыть меню') : (language === 'en' ? 'Open menu' : 'Открыть меню')}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mm ${open ? 'o' : ''}`}>
        {links.map(([h, en, ru]) => <a key={h} href={`#${h}`} onClick={() => setOpen(false)}>{language === 'en' ? en : ru}</a>)}
        <a href="https://www.instagram.com/stories/highlights/18139469947491521/" target="_blank" rel="noreferrer" style={{ color: '#d9a5ad' }}>{language === 'en' ? 'View Menu' : 'Меню'}</a>
        <button className="lang-switch mobile-language" onClick={toggleLanguage}>{language === 'en' ? 'RU · Русский' : 'EN · English'}</button>
      </div>
    </>
  )
}
