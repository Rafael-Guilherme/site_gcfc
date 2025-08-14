"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './Translations';

export type Language = {
  code: string;
  label: string;
  flag: string;
};

export const languages: Language[] = [
  { code: "br", label: "Brasil (Português)", flag: "br" },
  { code: "us", label: "United States (English)", flag: "us" },
  { code: "us", label: "África do Sul (English)", flag: "za" },
  { code: "ae", label: "Emirados Árabes (Árabe)", flag: "ae" },
  { code: "es", label: "Costa Rica (Espanol)", flag: "cr" },
  { code: "us", label: "Nova Zelândia (English)", flag: "nz" },
  { code: "us", label: "Hong Kong (English)", flag: "hk" },
  { code: "us", label: "Índia (English)", flag: "in" },
  { code: "us", label: "Singapura (English)", flag: "sg" },
  { code: "es", label: "España (Español)", flag: "es" },
  { code: "fr", label: "France (Français)", flag: "fr" },
  { code: "de", label: "Deutschland (Deutsch)", flag: "de" },
  { code: "it", label: "Italia (Italiano)", flag: "it" },
  { code: "br", label: "Portugal (Português)", flag: "pt" },
  { code: "us", label: "Canada (English)", flag: "ca" },
  { code: "us", label: "Australia (English)", flag: "au" },
  { code: "us", label: "United Kingdom (English)", flag: "gb" },
  { code: "es", label: "México (Español)", flag: "mx" },
  { code: "es", label: "Argentina (Español)", flag: "ar" },
  { code: "es", label: "Chile (Español)", flag: "cl" },
  { code: "es", label: "Colombia (Español)", flag: "co" },
  { code: "es", label: "Perú (Español)", flag: "pe" },
  { code: "es", label: "Venezuela (Español)", flag: "ve" },
  { code: "es", label: "Uruguay (Español)", flag: "uy" },
  { code: "es", label: "Paraguay (Español)", flag: "py" },
  { code: "es", label: "Bolivia (Español)", flag: "bo" },
  { code: "es", label: "Ecuador (Español)", flag: "ec" },
  { code: "nl", label: "Nederland (Nederlands)", flag: "nl" },
  { code: "nl", label: "België (Nederlands)", flag: "be" },
  { code: "de", label: "Schweiz (Deutsch)", flag: "ch" },
  { code: "de", label: "Deutschland (Deutsch)", flag: "de" },
  { code: "de", label: "Österreich (Deutsch)", flag: "at" },
  { code: "dk", label: "Danmark (Dansk)", flag: "dk" },
  { code: "fi", label: "Suomi (Suomi)", flag: "fi" },
  { code: "pl", label: "Polska (Polski)", flag: "pl" },
  { code: "cz", label: "Česká republika (Čeština)", flag: "cz" },
  { code: "hu", label: "Magyarország (Magyar)", flag: "hu" },
  { code: "ro", label: "România (Română)", flag: "ro" },
  { code: "bg", label: "България (Български)", flag: "bg" },
  { code: "gr", label: "Ελλάδα (Ελληνικά)", flag: "gr" },
  { code: "tr", label: "Türkiye (Türkçe)", flag: "tr" },
  { code: "ru", label: "Россия (Русский)", flag: "ru" },
  { code: "cn", label: "中国 (中文)", flag: "cn" },
  { code: "jp", label: "日本 (日本語)", flag: "jp" },
  { code: "kr", label: "한국 (한국어)", flag: "kr" },
  { code: "id", label: "Indonesia (Bahasa Indonesia)", flag: "id" },
  { code: "th", label: "ไทย (ไทย)", flag: "th" },
  { code: "my", label: "Malaysia (Bahasa Malaysia)", flag: "my" },
];



languages.forEach(lang => {
  if (!translations[lang.code]) {
    translations[lang.code] = translations.us;
  }
});

type I18nContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(languages[0]);

  const t = (key: string): string => {
    const currentTranslations = translations[language.code];
    if (!currentTranslations) {
      const fallbackTranslations = translations.br;
      return fallbackTranslations[key] || key;
    }
    return currentTranslations[key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
} 