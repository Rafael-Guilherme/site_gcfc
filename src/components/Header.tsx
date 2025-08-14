"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useI18n, languages } from "./I18nProvider";
import Button from './Button';
import ButtonNotified from "./ButtonNotified";

function Header({ backgroundColor = "bg-white", logoWhite = false }: { backgroundColor?: string, logoWhite?: boolean }) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsLanguageOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageOpen) {
        const target = event.target as Element;
        if (!target.closest('.language-dropdown')) {
          setIsLanguageOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageOpen]);

  useEffect(() => {
    if (isLanguageOpen) {
      document.body.classList.add('dropdown-open');
    } else {
      document.body.classList.remove('dropdown-open');
    }

    return () => {
      document.body.classList.remove('dropdown-open');
    };
  }, [isLanguageOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLanguageToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageSelect = (lang: typeof languages[0]) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  const handleDropdownScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const target = e.currentTarget as HTMLElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;
    const deltaY = e.deltaY;
    
    if ((deltaY > 0 && scrollTop < scrollHeight - clientHeight) || 
        (deltaY < 0 && scrollTop > 0)) {
      target.scrollTop += deltaY;
    }
  };

  return (
    <header className={`w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'fixed top-0 left-0 bg-white pt-4 shadow-lg border-b border-gray-200/50 sm:px-8' 
        : `${backgroundColor} mt-6 mx-auto sm:px-8`
    }`}>
      <div className="px-12 2xl:px-6 max-w-[1570px] mx-auto w-full">
        {!isScrolled && (
          <div className="flex items-center justify-end">
            <div className={`hidden lg:flex gap-6 items-center text-sm font-open-sans ${
              logoWhite ? 'text-white' : 'text-zinc-700'
            }`}>      
              <div className="relative language-dropdown">
                <button
                  onClick={handleLanguageToggle}
                  className={`flex items-center gap-2 hover:text-[#a000d6] transition-colors ${
                    logoWhite ? 'text-white' : 'text-zinc-700'
                  }`}
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="true"
                >
                  <span className={`fi fi-${language.flag}`} />
                  <span className="hidden sm:inline">{language.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLanguageOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-64 max-h-[300px] overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    onWheel={handleDropdownScroll}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {languages.map((lang) => (
                        <button
                          key={lang.flag}
                          onClick={() => handleLanguageSelect(lang)}
                          className={`flex items-center gap-2 w-full px-4 py-2 text-xs text-left hover:bg-gray-100 font-open-sans ${
                            language.code === lang.code ? 'text-[#a000d6]' : 'text-zinc-700'
                          }`}
                          role="menuitem"
                        >
                          <span className={`fi fi-${lang.flag}`} />
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <nav
          className={`flex items-center justify-between ${
            isScrolled ? 'py-2' : 'py-5'
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src={isScrolled ? "/logo.png" : (logoWhite ? "/logo_branco.png" : "/logo.png")} 
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
          </Link>
          
          {/* Desktop Navigation */}
          <ul className={`hidden lg:flex gap-8 lg:gap-12 items-center text-base font-open-sans ${
            isScrolled ? 'text-zinc-900' : (logoWhite ? 'text-white' : 'text-zinc-900')
          }`}>
            <li><Link href="/" className={`hover:text-[#a000d6] transition-colors ${
              isScrolled ? 'text-base' : 'text-xl lg:text-lg'
            } ${
              isScrolled ? '' : (logoWhite ? 'text-white' : '')
            }`}>INÍCIO</Link></li>
            <li><Link href="about-us" className={`hover:text-[#a000d6] transition-colors ${
              isScrolled ? 'text-base' : 'text-xl lg:text-lg'
            } ${
              isScrolled ? '' : (logoWhite ? 'text-white' : '')
            }`}>QUEM SOMOS</Link></li>
            <li><Link href="/certification" className={`hover:text-[#a000d6] transition-colors ${
              isScrolled ? 'text-base' : 'text-xl lg:text-lg'
            } ${
              isScrolled ? '' : (logoWhite ? 'text-white' : '')
            }`}>CERTICAÇÃO GCFC</Link></li>
            <li><Link href="evaluation" className={`hover:text-[#a000d6] transition-colors ${
              isScrolled ? 'text-base' : 'text-xl lg:text-lg'
            } ${
              isScrolled ? '' : (logoWhite ? 'text-white' : '')
            }`}>PREMIAÇÃO</Link></li>
          </ul>

          <div className="flex gap-4">
            <ButtonNotified
              text="FUI NOTIFICADO"
              href="/notifcation"
              padding='px-4 py-2'
              borderRadius="rounded-full"
              className="hidden lg:block text-zinc-900 shadow-lg"
            />
            <Button
              text="CONQUISTE A CERTIFICAÇÃO"
              href="/certification"
              padding='px-4 py-2'
              borderRadius="rounded-full"
              className="hidden lg:block text-white text-base font-bold shadow-lg"
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
                  src="/logo.png" 
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
                    <Link 
                      href="/" 
                      onClick={closeMobileMenu}
                      className="block text-base font-medium text-zinc-900 hover:text-[#a000d6] transition-colors font-open-sans"
                    >
                      INÍCIO
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="about-us" 
                      onClick={closeMobileMenu}
                      className="block text-base font-medium text-zinc-900 hover:text-[#a000d6] transition-colors font-open-sans"
                    >
                      Quem somos
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/certification" 
                      onClick={closeMobileMenu}
                      className="block text-base font-medium text-zinc-900 hover:text-[#a000d6] transition-colors font-open-sans"
                    >
                      CERTICAÇÃO GC
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="evaluation" 
                      onClick={closeMobileMenu}
                      className="block text-base font-medium text-zinc-900 hover:text-[#a000d6] transition-colors font-open-sans"
                    >
                      PREMIAÇÃO
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Language Selector */}
              <div className="mb-8 language-dropdown">
                <h3 className="text-xs font-medium text-zinc-500 mb-3 font-open-sans">Idioma / Language</h3>
                <div 
                  className="space-y-2 max-h-[200px] overflow-y-auto"
                  onWheel={handleDropdownScroll}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang);
                        closeMobileMenu();
                      }}
                      className={`flex items-center gap-3 w-full p-3 rounded-lg text-left transition-colors font-open-sans ${
                        language.code === lang.code 
                          ? 'bg-[#a000d6] text-white' 
                          : 'text-zinc-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className={`fi fi-${lang.flag}`} />
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Button */}
                <button className="w-full cursor-pointer rounded-2xl px-6 py-3 font-bold text-zinc-900 shadow bg-gradient-to-r from-[#bfa100] via-[#ffe066] to-[#bfa100] hover:from-[#ffe066] hover:to-[#bfa100] transition-all duration-300 text-base font-open-sans">
                    <Link href="about-us" className="hover:text-[#a000d6] transition-colors">
                    CONQUISTE A CERTIFICAÇÃO
                    </Link>
                </button>
                <button className="w-full cursor-pointer rounded-2xl px-6 py-3 font-bold text-zinc-900 shadow bg-gradient-to-r from-[#bfa100] via-[#ffe066] to-[#bfa100] hover:from-[#ffe066] hover:to-[#bfa100] transition-all duration-300 text-base font-open-sans">
                    <Link href="about-us" className="hover:text-[#a000d6] transition-colors">
                    CONQUISTE A CERTIFICAÇÃO
                    </Link>
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header; 