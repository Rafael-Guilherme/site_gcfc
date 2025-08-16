'use client';
import Image from 'next/image';
import { useI18n } from './I18nProvider';

const Connect = () => {
  const { t } = useI18n();

  return (
    <section className="my-20 max-w-[1480px] mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-[#6a0080] mb-8 font-heading uppercase">{t("connect.title")}</h2>
        <p className="text-black text-sm sm:text-base font-open-sans text-center mb-16">{t("connect.subtitle")}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="flex flex-row items-center">
            <div className="-mr-16 h-full max-h-[250px] bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 text-black flex flex-col justify-center items-start pl-2">
                <p className="text-2xl font-semibold mb-2 w-32">{t("connect.work.title")}</p>
                <p className="text-base text-left">{t("connect.work.description")} <strong>people@gcfc.global</strong></p>
            </div>
            <Image src="/imagem_21.png" alt="Trabalhe na GCFC" width={300} height={200} />
            </div>
            <div className="flex flex-row items-center">
            <div className="-mr-16 h-full max-h-[250px] bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 text-black flex flex-col justify-center items-start pl-2">
                <p className="text-2xl font-semibold mb-2 w-32">{t("connect.press.title")}</p>
                <p className="text-base text-left">{t("connect.press.description")} <strong>press@gcfc.global</strong></p>
            </div>
            <Image src="/imagem_22.png" alt="Imprensa e Mídia" width={300} height={200} />
            </div>
            <div className="flex flex-row items-center">
            <div className="-mr-16 h-full max-h-[250px] bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 text-black flex flex-col justify-center items-start pl-2">
                <p className="text-2xl font-semibold mb-2 w-32">{t("connect.contact.title")}</p>
                <p className="text-base text-left">{t("connect.contact.description")} <strong>info@gcfc.global</strong></p>
            </div>
            <Image src="/imagem_23.png" alt="Fale com a Gente" width={300} height={200} />
            </div>
        </div>
    </section>
  )
}

export default Connect