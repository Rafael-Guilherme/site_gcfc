"use client";

import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { languages } from './I18nProvider';
import { ChevronDownIcon } from 'lucide-react';

export function LanguageSelector() {
  const { language, changeLanguage } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLanguage: typeof languages[0]) => {
    console.log('Mudando idioma para:', newLanguage.flag, newLanguage.label);
    changeLanguage(newLanguage);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.flag === language.flag) || languages[0];
  
  console.log('LanguageSelector - language atual:', language.flag, language.label);
  console.log('LanguageSelector - currentLanguage encontrado:', currentLanguage.flag, currentLanguage.label);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className={`fi fi-${currentLanguage.flag}`} />
        <span className="hidden sm:inline">{currentLanguage.label}</span>
        <span className="sm:hidden">{currentLanguage.flag.toUpperCase()}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 w-64 max-h-60 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={`${lang.code}-${lang.flag}`}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  language.flag === lang.flag ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`fi fi-${lang.flag}`} />
                  <span>{lang.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}