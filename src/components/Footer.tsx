"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "./I18nProvider";
import socialMedias from "./socialmedias.json";

function Footer() {
  const { language } = useI18n();

  const currentSocialMedia = socialMedias.find(media => media.idioma === language.flag) || socialMedias[0];

  return (
    <footer className="w-full bg-gray-800 text-white mt-12 sm:mt-16 pt-8 sm:pt-10 pb-4 text-xs sm:text-sm font-open-sans p-2">
      <div className="max-w-[1680px] mx-auto px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8">
          <div className="flex flex-1 flex-col sm:flex-row justify-between gap-6 sm:gap-8 text-center md:text-left">
            <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[150px]">
              <span className="font-bold text-sm sm:text-base mb-1 font-heading">INSTITUCIONAL</span>
              <a href="/about-us" className="hover:underline text-xs sm:text-sm font-open-sans">Sobre o GCFC</a>
              <a href="/award" className="hover:underline text-xs sm:text-sm font-open-sans">Entenda a Certificação</a>
              <a href="/notification" className="hover:underline text-xs sm:text-sm font-open-sans">Fui Notificado por E-mail</a>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[150px]">
              <span className="font-bold text-sm sm:text-base mb-1 font-heading">SERVIÇOS</span>
              <Link href="/certification" className="hover:underline text-xs sm:text-sm font-open-sans">Certificação GCFC</Link>
              <Link href="/awards" className="hover:underline text-xs sm:text-sm font-open-sans">Premiação GCFC</Link>
              <Link href="/events" className="hover:underline text-xs sm:text-sm font-open-sans">Eventos GCFC</Link>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[150px]">
              <span className="font-bold text-sm sm:text-base mb-1 font-heading">LEGAL</span>
              <a href="/service-agreement" className="hover:underline text-xs sm:text-sm font-open-sans">Termos de Uso</a>
              <a href="/privacy-policy" className="hover:underline text-xs sm:text-sm font-open-sans">Política de Privacidade</a>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[150px]">
              <span className="font-bold text-sm sm:text-base mb-1 font-heading">ATENDIMENTO</span>
              <p className="hover:underline text-xs sm:text-sm font-open-sans">Segunda à Sexta-feira - 9h às 18h</p>
              <p className="hover:underline text-xs sm:text-sm font-open-sans">info@gcfc.global</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 mt-32">
          <div className="flex items-center gap-2">
            <Image src="/logo_branco.png" alt="Logo GCFC" width={215} height={59} className="h-10 sm:h-12 lg:h-14 w-auto" />
          </div>
          <span className="text-xs text-center sm:text-sm font-open-sans">© 2025 Todos os direitos reservados - GCFC Brasil LTDA</span>
          <div className="flex gap-3 sm:gap-4 mt-2 lg:mt-0">
            <a href={`https://${currentSocialMedia.linkedin}`} aria-label="LinkedIn" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href={currentSocialMedia.instagram === "#" ? "#" : `https://${currentSocialMedia.instagram}`} aria-label="Instagram" className="hover:opacity-80" target={currentSocialMedia.instagram === "#" ? "_self" : "_blank"} rel={currentSocialMedia.instagram === "#" ? "" : "noopener noreferrer"}>
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;