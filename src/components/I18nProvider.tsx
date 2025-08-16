"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations } from '../locales';
import type { LanguageCode } from '../locales/types';

export type Language = {
  code: LanguageCode;
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

const flagToTranslationMap: Record<string, LanguageCode> = {
  // Português
  'br': 'br', // Brasil
  'pt': 'br', // Portugal usa tradução do Brasil
  
  // Inglês
  'us': 'us', // Estados Unidos
  'gb': 'us', // Reino Unido usa tradução dos EUA
  'ca': 'us', // Canadá usa tradução dos EUA
  'au': 'us', // Austrália usa tradução dos EUA
  'nz': 'us', // Nova Zelândia usa tradução dos EUA
  'za': 'us', // África do Sul usa tradução dos EUA
  'in': 'us', // Índia usa tradução dos EUA
  'sg': 'us', // Singapura usa tradução dos EUA
  'hk': 'us', // Hong Kong usa tradução dos EUA
  
  // Espanhol
  'es': 'es', // Espanha
  'mx': 'es', // México usa tradução da Espanha
  'ar': 'es', // Argentina usa tradução da Espanha
  'cl': 'es', // Chile usa tradução da Espanha
  'co': 'es', // Colômbia usa tradução da Espanha
  'pe': 'es', // Peru usa tradução da Espanha
  've': 'es', // Venezuela usa tradução da Espanha
  'uy': 'es', // Uruguai usa tradução da Espanha
  'py': 'es', // Paraguai usa tradução da Espanha
  'bo': 'es', // Bolívia usa tradução da Espanha
  'ec': 'es', // Equador usa tradução da Espanha
  'cr': 'es', // Costa Rica usa tradução da Espanha
  
  // Francês
  'fr': 'fr', // França
  
  // Alemão
  'de': 'de', // Alemanha
  'at': 'de', // Áustria usa tradução da Alemanha
  'ch': 'de', // Suíça usa tradução da Alemanha
  
  // Italiano
  'it': 'it', // Itália
  
  // Holandês
  'nl': 'nl', // Holanda
  'be': 'nl', // Bélgica usa tradução da Holanda
  
  // Dinamarquês
  'dk': 'dk', // Dinamarca
  
  // Finlandês
  'fi': 'fi', // Finlândia
  
  // Polonês
  'pl': 'pl', // Polônia
  
  // Tcheco
  'cz': 'cz', // República Tcheca
  
  // Húngaro
  'hu': 'hu', // Hungria
  
  // Romeno
  'ro': 'ro', // Romênia
  
  // Búlgaro
  'bg': 'bg', // Bulgária
  
  // Grego
  'gr': 'gr', // Grécia
  
  // Turco
  'tr': 'tr', // Turquia
  
  // Russo
  'ru': 'ru', // Rússia
  
  // Chinês
  'cn': 'cn', // China
  
  // Japonês
  'jp': 'jp', // Japão
  
  // Coreano
  'kr': 'kr', // Coreia do Sul
  
  // Indonésio
  'id': 'id', // Indonésia
  
  // Tailandês
  'th': 'th', // Tailândia
  
  // Malaio
  'my': 'my', // Malásia
  
  // Árabe
  'ae': 'ae', // Emirados Árabes
};

type I18nContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFlag = localStorage.getItem('preferredLanguage');
      console.log('I18nProvider - Flag salva no localStorage:', savedFlag);
      
      if (savedFlag) {
        const foundLanguage = languages.find(lang => lang.flag === savedFlag);
        console.log('I18nProvider - Idioma encontrado para flag', savedFlag, ':', foundLanguage);
        
        if (foundLanguage) {
          setLanguage(foundLanguage);
          console.log('I18nProvider - Idioma definido:', foundLanguage.flag, foundLanguage.label);
        }
      } else {
        console.log('I18nProvider - Definindo idioma padrão (Brasil)');
        setLanguage(languages[0]); 
        localStorage.setItem('preferredLanguage', 'br');
      }
    }
  }, []);

  const t = (key: string): string => {
    const translationCode = flagToTranslationMap[language.flag];
    const currentTranslations = translations[translationCode];
    
    console.log('I18nProvider - Função t - Flag:', language.flag, 'Code:', translationCode);
    
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