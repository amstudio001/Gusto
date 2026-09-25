import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('gusto-language') || 'en')
  useEffect(() => {
    localStorage.setItem('gusto-language', language)
    document.documentElement.lang = language
  }, [language])
  const toggleLanguage = () => setLanguage((current) => current === 'en' ? 'ru' : 'en')
  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
