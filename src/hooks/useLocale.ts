"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useI18n, languages } from '@/components/I18nProvider';
import { useEffect, useCallback } from 'react';
import type { Language } from '@/components/I18nProvider';

export function useLocale() {
  const router = useRouter();
  const pathname = usePathname();
  const { language, setLanguage, t } = useI18n();

  const getCurrentLocale = useCallback(() => {
    if (!pathname) return 'br';
    const segments = pathname.split('/').filter(Boolean);
    return segments[0] || 'br';
  }, [pathname]);

  const navigateTo = useCallback((path: string) => {
    const currentFlag = getCurrentLocale();
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const newUrl = `/${currentFlag}${cleanPath}`;
    router.push(newUrl);
  }, [router, getCurrentLocale]);

  const changeLanguage = useCallback((newLanguage: Language) => {
    //const currentFlag = getCurrentLocale();
    const segments = pathname.split('/').filter(Boolean);
    
    if (segments.length === 0) {
      router.push(`/${newLanguage.flag}`);
      return;
    }
    
    segments[0] = newLanguage.flag;
    const newPath = `/${segments.join('/')}`;
    
    setLanguage(newLanguage);
    
    router.push(newPath);
    
    localStorage.setItem('preferredLanguage', newLanguage.flag);
  }, [pathname, setLanguage, router]);

  useEffect(() => {
    const currentFlag = getCurrentLocale();
    const savedFlag = localStorage.getItem('preferredLanguage');
    
    if (currentFlag !== language.flag) {
      const newLanguage = languages.find(lang => lang.flag === currentFlag);
      if (newLanguage) {
        setLanguage(newLanguage);
        localStorage.setItem('preferredLanguage', currentFlag);
      }
    }
    
    if (!savedFlag) {
      localStorage.setItem('preferredLanguage', currentFlag);
    }
  }, [pathname, language.flag, setLanguage, getCurrentLocale]);

  return {
    currentLocale: getCurrentLocale(),
    language,
    setLanguage,
    changeLanguage,
    navigateTo,
    t,
  };
}
