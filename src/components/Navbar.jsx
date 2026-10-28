import { useEffect, useRef, useState } from 'react'
import '../styles/nav.css'
import logo from '../assets/brand/logo.png'
import { useLanguage } from '../context/LanguageContext'

const links = [
  ['concept', 'Concept', 'Концепция', 'Գաղափարը'],
  ['history', 'History', 'История', 'Պատմություն'],
  ['cuisine', 'Cuisine', 'Кухня', 'Խոհանոց'],
  ['bar', 'Bar', 'Бар', 'Բար'],
  ['experience', 'Experience', 'Атмосфера', 'Մթնոլորտ'],
  ['gallery', 'Gallery', 'Галерея', 'Պատկերասրահ'],
  ['contact', 'Contact', 'Контакты', 'Կապ'],
]

const translations = {
  en: { menu: 'View Menu', openMenu: 'Open menu', closeMenu: 'Close menu', restaurant: 'RISTORANTE · YEREVAN', nav: 'Mobile navigation', language: 'Choose language' },
  ru: { menu: 'Меню', openMenu: 'Открыть меню', closeMenu: 'Закрыть меню', restaurant: 'РЕСТОРАН · ЕРЕВАН', nav: 'Мобильная навигация', language: 'Выбрать язык' },
  hy: { menu: 'Մենյու', openMenu: 'Բացել մենյուն', closeMenu: 'Փակել մենյուն', restaurant: 'ՌԵՍՏՈՐԱՆ · ԵՐԵՎԱՆ', nav: 'Բջջային նավիգացիա', language: 'Ընտրել լեզուն' },
}

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'hy', label: 'Հայերեն' },
]

function LanguagePicker({ language, setLanguage, label, mobile = false }) {
  const [expanded, setExpanded] = useState(false)
  const pickerRef = useRef(null)
  const currentLanguage = languages.find((option) => option.code === language)

  useEffect(() => {
    if (!expanded) return undefined
    const closeOnOutsideClick = (event) => {
      if (!pickerRef.current?.contains(event.target)) setExpanded(false)
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setExpanded(false)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [expanded])

  if (mobile) {
    return (
      <div className="mobile-language-picker">
        <span className="mobile-language-label">{label}</span>
        <div className="mobile-language-options" role="radiogroup" aria-label={label}>
          {languages.map((option) => (
            <button
              key={option.code}
              className="mobile-language-option"
              type="button"
              role="radio"
              aria-checked={language === option.code}
              onClick={() => setLanguage(option.code)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="language-picker" ref={pickerRef}>
      <button
        className="lang-switch"
        type="button"
        aria-label={`${label}: ${currentLanguage.label}`}
        aria-expanded={expanded}
        aria-haspopup="true"
        onClick={() => setExpanded((current) => !current)}
      >
        {language.toUpperCase()}
        <span className="language-chevron" aria-hidden="true">⌄</span>
      </button>
      {expanded && (
        <div className="language-options" role="group" aria-label={label}>
          {languages.map((option) => (
            <button
              key={option.code}
              className="language-option"
              type="button"
              aria-pressed={language === option.code}
              onClick={() => {
                setLanguage(option.code)
                setExpanded(false)
              }}
            >
              <span>{option.label}</span>
              <span className="language-code">{option.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
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
        <div className="links">{links.map(([h, en, ru, hy]) => <a key={h} href={`#${h}`}>{({ en, ru, hy })[language]}</a>)}</div>
        <div className="nav-actions"><a className="btn" href="https://api.msmart.am/s/a_9-6SaPHPJ6pAEPFMJVvg" target="_blank" rel="noreferrer" style={{ padding: '.6rem 1.4rem' }}>{t.menu}</a><LanguagePicker language={language} setLanguage={setLanguage} label={t.language} /></div>
        <button
          className={`nb ${open ? 'o' : ''}`}
          aria-expanded={open}
          aria-label={open ? t.closeMenu : t.openMenu}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mm ${open ? 'o' : ''}`} aria-hidden={!open}>
        <div className="mm-panel">
          <div className="mm-meta"><span>{t.restaurant}</span><span>2006 — 2026</span></div>
          <div className="mm-links" role="navigation" aria-label={t.nav}>
            {links.map(([h, en, ru, hy], index) => (
              <a className="mm-link" key={h} href={`#${h}`} onClick={() => setOpen(false)}>
                <span className="mm-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{({ en, ru, hy })[language]}</span>
                <span className="mm-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <div className="mm-footer">
            <a className="mm-menu-link" href="https://api.msmart.am/s/a_9-6SaPHPJ6pAEPFMJVvg" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              <span>{t.openMenu}</span><span aria-hidden="true">↗</span>
            </a>
            <LanguagePicker language={language} setLanguage={setLanguage} label={t.language} mobile />
          </div>
        </div>
      </div>
    </>
  )
}
