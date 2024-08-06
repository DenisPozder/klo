import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importing both translation files
import englishTranslation from './locales/en/translation.json'
import serbiaTranslation from './locales/sr/translation.json'

const storedLanguage = localStorage.getItem('i18nextLng') || 'sr';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            sr: {
                translation: serbiaTranslation
            },
            en: {
                translation: englishTranslation
            }
        },
        lng: storedLanguage,
        fallbackLng: 'sr',
        detection: {
            order: ['localStorage', 'navigator']
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n