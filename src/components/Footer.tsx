"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "./I18nProvider";
import socialMedias from "./socialmedias.json";

function Footer() {
  const { language, t } = useI18n();

  const currentSocialMedia = socialMedias.find(media => media.idioma === language.flag) || socialMedias[0];

  return (
    <footer className="w-full bg-gray-800 text-white mt-12 sm:mt-16 pt-8 sm:pt-10 pb-4 text-xs sm:text-sm font-open-sans p-2">
      <div className="max-w-[1680px] mx-auto px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8">
          <div className="flex flex-1 flex-col sm:flex-row justify-between gap-6 sm:gap-8 text-center md:text-left">
            <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[150px]">
              <span className="font-bold text-sm sm:text-base mb-1 font-heading">{t("footer.section.institutional")}</span>
              <a href="/about-us" className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.link.about")}</a>
              <a href="/certification-knowledge" className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.link.certification.knowledge")}</a>
              <a href="/notification" className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.link.notification")}</a>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[150px]">
              <span className="font-bold text-sm sm:text-base mb-1 font-heading">{t("footer.section.services")}</span>
              <Link href="/certification" className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.link.certification")}</Link>
              <Link href="/award" className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.link.award")}</Link>
              <Link href="/events" className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.link.events")}</Link>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[150px]">
              <span className="font-bold text-sm sm:text-base mb-1 font-heading">{t("footer.section.legal")}</span>
              <a href="/terms-of-use" className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.link.terms")}</a>
              <a href="/privacy-policy" className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.link.privacy")}</a>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[150px]">
              <span className="font-bold text-sm sm:text-base mb-1 font-heading">{t("footer.section.support")}</span>
              <p className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.support.schedule")}</p>
              <p className="hover:underline text-xs sm:text-sm font-open-sans">{t("footer.support.email")}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 mt-32">
          <div className="flex items-center gap-2">
            <Image src="/logo_branco.png" alt="Logo GCFC" width={215} height={59} className="h-10 sm:h-12 lg:h-14 w-auto" />
          </div>
          <span className="text-xs text-center sm:text-sm font-open-sans">{t("footer.copyright")}</span>
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