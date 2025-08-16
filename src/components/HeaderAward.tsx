"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLocale } from "@/hooks/useLocale";
import ButtonNotified from "./ButtonNotified";
import { LanguageSelector } from './LanguageSelector';

function HeaderAward({ backgroundColor = "bg-white", logoWhite = false }: { backgroundColor?: string, logoWhite?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, navigateTo } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'fixed top-0 left-0 bg-white pt-4 shadow-lg border-b border-gray-200/50 sm:px-8' 
        : `${backgroundColor} mt-6 mx-auto sm:px-8 border-b border-gray-900/10 shadow-2xl`
    }`}>
      <div className="px-12 2xl:px-6 max-w-[1570px] mx-auto w-full">
        {!isScrolled && (
          <div className="flex items-center justify-end">
            <div className={`hidden lg:flex gap-6 items-center text-sm font-open-sans ${
              logoWhite ? 'text-white' : 'text-zinc-700'
            }`}>      
              <LanguageSelector />
            </div>
          </div>
        )}
        <nav
          className={`flex items-center justify-between ${
            isScrolled ? 'py-2' : 'py-5'
          }`}
        >
          <button onClick={() => navigateTo('/')} className="flex items-center gap-3">
            <Image 
              src={isScrolled ? "/logo.png" : (logoWhite ? "/logo_award.png"  : "/logo.png")} 
              alt="GCFC Logo" 
              width={220} 
              height={72}
              style={{
                height: 'auto',
                width: 'auto',
                transition: 'all 0.3s ease'
              }}
              className="transition-all duration-300 h-10 sm:h-12 md:h-14 lg:h-14 w-auto"
            />
          </button>
          
          {/* Desktop Navigation */}
          <ul className={`hidden lg:flex gap-8 lg:gap-12 items-center text-base font-open-sans ${
            isScrolled ? 'text-zinc-900' : (logoWhite ? 'text-white' : 'text-zinc-900')
          }`}>
            <li><button onClick={() => navigateTo('/')} className={`hover:text-[#a000d6] transition-colors ${
              isScrolled ? 'text-base' : 'text-xl lg:text-lg'
            } ${
              isScrolled ? '' : (logoWhite ? 'text-white' : '')
            }`}>{t("header.nav.home")}</button></li>
            <li><button onClick={() => navigateTo('/about-us')} className={`hover:text-[#a000d6] transition-colors ${
              isScrolled ? 'text-base' : 'text-xl lg:text-lg'
            } ${
              isScrolled ? '' : (logoWhite ? 'text-white' : '')
            }`}>{t("header.nav.about")}</button></li>
            <li><button onClick={() => navigateTo('/certification')} className={`hover:text-[#a000d6] transition-colors ${
              isScrolled ? 'text-base' : 'text-xl lg:text-lg'
            } ${
              isScrolled ? '' : (logoWhite ? 'text-white' : '')
            }`}>{t("header.nav.certification")}</button></li>
            <li><button onClick={() => navigateTo('/award')} className={`hover:text-[#a000d6] transition-colors ${
              isScrolled ? 'text-base' : 'text-xl lg:text-lg'
            } ${
              isScrolled ? '' : (logoWhite ? 'text-white' : '')
            }`}>{t("header.nav.award")}</button></li>
          </ul>

          <div className="flex gap-4">
            <ButtonNotified
              text={t("header.button.notified")}
              href="/notification"
              padding='px-4 py-2'
              borderRadius="rounded-full"
              className="hidden lg:block text-zinc-900 font-medium text-base"
            />
            <ButtonNotified
              text={t("header.button.certification")}
              href="/certification"
              padding='px-4 py-2'
              borderRadius="rounded-full"
              className="hidden lg:block text-zinc-900 text-base font-medium"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-zinc-900' : (logoWhite ? 'text-white' : 'text-zinc-900')
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-transparent" onClick={closeMobileMenu}>
          <div 
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <Image 
                  src="/logo_award.png" 
                  alt="GCFC Logo" 
                  width={180} 
                  height={50} 
                  className="h-10 w-auto" 
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-zinc-600 hover:text-zinc-900"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="mb-8">
                <ul className="space-y-4">
                  <li>
                    <button 
                      onClick={() => {
                        navigateTo('/');
                        closeMobileMenu();
                      }}
                      className="block text-base font-medium text-zinc-900 hover:text-[#a000d6] transition-colors font-open-sans text-left w-full"
                    >
                      {t("header.nav.home")}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        navigateTo('/about-us');
                        closeMobileMenu();
                      }}
                      className="block text-base font-medium text-zinc-900 hover:text-[#a000d6] transition-colors font-open-sans text-left w-full"
                    >
                      {t("header.mobile.about")}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        navigateTo('/certification');
                        closeMobileMenu();
                      }}
                      className="block text-base font-medium text-zinc-900 hover:text-[#a000d6] transition-colors font-open-sans text-left w-full"
                    >
                      {t("header.mobile.certification")}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        navigateTo('/award');
                        closeMobileMenu();
                      }}
                      className="block text-base font-medium text-zinc-900 hover:text-[#a000d6] transition-colors font-open-sans text-left w-full"
                    >
                      {t("header.nav.award")}
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Mobile Language Selector */}
              <div className="mb-8">
                <h3 className="text-xs font-medium text-zinc-500 mb-3 font-open-sans">{t("header.mobile.language.title")}</h3>
                <LanguageSelector />
              </div>

              {/* Mobile CTA Button */}
                <ButtonNotified
                    text={t("header.button.notified")}
                    href="/notification"
                    padding='px-4 py-2'
                    borderRadius="rounded-full"
                    className="hidden lg:block text-zinc-900 font-medium text-base"
                />
                <ButtonNotified
                    text={t("header.button.certification")}
                    href="/certification"
                    padding='px-4 py-2'
                    borderRadius="rounded-full"
                    className="hidden lg:block text-zinc-900 text-base font-medium"
                />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderAward; 