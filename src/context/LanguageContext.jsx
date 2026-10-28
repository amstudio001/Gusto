import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('gusto-language')
    return ['en', 'ru', 'hy'].includes(storedLanguage) ? storedLanguage : 'en'
  })
  useEffect(() => {
    localStorage.setItem('gusto-language', language)
    document.documentElement.lang = language
  }, [language])
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
