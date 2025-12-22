import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'

import fr from './trad/fr.json'
import en from './trad/en.json'

i18n
  // .use(LanguageDetector) // détecte la langue du navigateur
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
