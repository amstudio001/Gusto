import { useEffect, useState } from 'react'
import '../styles/nav.css'
import logo from '../assets/brand/logo.png'
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
  useEffect(() => {
    if (!open) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') setOpen(false) }
    addEventListener('keydown', closeOnEscape)
    return () => removeEventListener('keydown', closeOnEscape)
  }, [open])
  return (
    <>
      <nav className={`${scrolled ? 's' : ''} ${open ? 'menu-open' : ''}`} aria-label="Main">
        <a className="logo" href="#top" aria-label="Gusto Italian Restaurant — home"><img src={logo} alt="Gusto Italian Restaurant" width="150" height="50" /></a>
        <div className="links">{links.map(([h, en, ru]) => <a key={h} href={`#${h}`}>{language === 'en' ? en : ru}</a>)}</div>
        <div className="nav-actions"><a className="btn" href="https://api.msmart.am/s/a_9-6SaPHPJ6pAEPFMJVvg" target="_blank" rel="noreferrer" style={{ padding: '.6rem 1.4rem' }}>{language === 'en' ? 'View Menu' : 'Меню'}</a><button className="lang-switch" onClick={toggleLanguage} aria-label={language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}>{language === 'en' ? 'RU' : 'EN'}</button></div>
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
      <div className={`mm ${open ? 'o' : ''}`} aria-hidden={!open}>
        <div className="mm-panel">
          <div className="mm-meta"><span>{language === 'en' ? 'RISTORANTE · YEREVAN' : 'РЕСТОРАН · ЕРЕВАН'}</span><span>2006 — 2026</span></div>
          <div className="mm-links" role="navigation" aria-label={language === 'en' ? 'Mobile navigation' : 'Мобильная навигация'}>
            {links.map(([h, en, ru], index) => (
              <a className="mm-link" key={h} href={`#${h}`} onClick={() => setOpen(false)}>
                <span className="mm-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{language === 'en' ? en : ru}</span>
                <span className="mm-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <div className="mm-footer">
            <a className="mm-menu-link" href="https://api.msmart.am/s/a_9-6SaPHPJ6pAEPFMJVvg" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              <span>{language === 'en' ? 'View Menu' : 'Открыть меню'}</span><span aria-hidden="true">↗</span>
            </a>
            <button className="lang-switch mobile-language" onClick={toggleLanguage} aria-label={language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}>{language === 'en' ? 'RU · Русский' : 'EN · English'}</button>
          </div>
        </div>
      </div>
    </>
  )
}
