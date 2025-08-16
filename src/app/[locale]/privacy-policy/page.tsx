"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";
import Button from "@/components/Button";

export default function PrivacyPolicyPage() {
  const { t } = useI18n();

  return (    
    <main className="flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 pt-0 pb-8 sm:pb-12 bg-white min-h-screen">
      <section
        className="w-full h-[500px] sm:h-[600px] lg:h-[680px] xl:h-[720px] max-h-[720px] flex flex-col justify-between overflow-hidden"
        style={{ backgroundImage: "url('/fundo roxo site 2.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
          <Header backgroundColor="bg-transparent" logoWhite={true} />
        <div className="relative z-10 flex flex-col h-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-8 px-4 sm:px-8 lg:px-[80px] pb-4 sm:pb-6 lg:pb-0 flex-1">
            <div className="flex-1 flex justify-center items-center h-48 sm:h-56 lg:h-64 lg:order-2 -mt-4 lg:-mt-40">
              <Image 
                src="/Imagem 1 - pag POLITICA DE PRIVACIDADE.png" 
                alt="Avaliação do consumidor" 
                width={602} 
                height={427} 
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md lg:w-[602px] h-auto max-h-40 sm:max-h-48 lg:max-h-none lg:h-[427px] object-contain" 
              />
            </div>
            <div className="flex-1 flex flex-col gap-2 sm:gap-3 lg:gap-4 xl:gap-6 lg:pt-8 lg:pb-8 lg:order-1 items-center px-4 sm:px-8 lg:px-0 sm:items-start justify-center text-center sm:text-left">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2 max-w-2xl font-heading">
                {t("privacy.hero.title")}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#e0d6e6] max-w-xl mb-3 sm:mb-4 font-open-sans">
                {t("privacy.hero.description")}
              </p>
              <div className="mt-2">
                <Button
                  text={t("privacy.hero.button")}
                  href="/"
                  padding="px-4 py-2"
                  borderRadius="rounded-2xl"
                  className="w-full sm:w-80 text-base sm:text-lg lg:text-xl xl:text-2xl font-heading"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-[84px] mb-6 sm:mb-8">
        <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-[#4B006E] font-open-sans">{t("privacy.company.name")}</p>
        <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-[#4B006E] font-open-sans">{t("privacy.company.cnpj")}</p>
        <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-[#4B006E] font-open-sans">{t("privacy.company.description")}</p>
      </section>


      <section className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10 text-[#2d2d2d] text-xs sm:text-sm lg:text-base px-4 sm:px-8 lg:px-12 xl:px-[84px] font-open-sans">
        <div>
          <h3 className="text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.hero.subtitle")}</h3>
          <p className="mb-3 sm:mb-4">
            {t("privacy.hero.description")}
            </p>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.sections.title")}</h3>
          <ul className="list-inside ml-0 text-xs sm:text-sm lg:text-base space-y-1">
            <li>{t("privacy.sections.fundamentos")}</li>
            <li>{t("privacy.sections.processamento")}</li>
            <li>{t("privacy.sections.coleta")}</li>
            <li>{t("privacy.sections.outras_fontes")}</li>
            <li>{t("privacy.sections.consentimento")}</li>
            <li>{t("privacy.sections.direitos")}</li>
            <li>{t("privacy.sections.protecao")}</li>
            <li>{t("privacy.sections.transferencia")}</li>
            <li>{t("privacy.sections.armazenamento")}</li>
            <li>{t("privacy.sections.encarregado")}</li>
            <li>{t("privacy.sections.atualizacoes")}</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.fundamentos.title")}</h3>
          <p className="mb-3 sm:mb-4">
            {t("privacy.fundamentos.p1")}
          </p>
          <p className="mb-3 sm:mb-4">
            {t("privacy.fundamentos.p2")}
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.processamento.title")}</h3>
          <p className="mb-3 sm:mb-4">
            {t("privacy.processamento.p1")}
          </p>
          <ul className="list-inside ml-0 text-xs sm:text-sm lg:text-base space-y-1">
            <li>{t("privacy.processamento.l1")}</li>
            <li>{t("privacy.processamento.l2")}</li>
            <li>{t("privacy.processamento.l3")}</li>
          </ul>
          <p className="mb-3 sm:mb-4">
            {t("privacy.processamento.p2")}
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.coleta.title")}</h3>
          <p className="mb-3 sm:mb-4">
            {t("privacy.coleta.p1")}
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.outras_fontes.title")}</h3>
          <p className="mb-3 sm:mb-4">
            {t("privacy.outras_fontes.p1")}
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.consentimento.title")}</h3>
          <p className="mb-3 sm:mb-4">
            {t("privacy.consentimento.p1")}
          </p>
          <ul className="list-inside ml-0 text-xs sm:text-sm lg:text-base space-y-1">
            <li>{t("privacy.consentimento.l1")}</li>
            <li>{t("privacy.consentimento.l2")}</li>
            <li>{t("privacy.consentimento.l3")}</li>
            <li>{t("privacy.consentimento.l4")}</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.direitos.title")}</h3>
          <p>
            {t("privacy.direitos.p1")}
            </p>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.protecao.title")}</h3>
          <p>
            {t("privacy.protecao.p1")}
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.transferencia.title")}</h3>
          <p>
            {t("privacy.transferencia.p1")}
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.encarregado.title")}</h3>
          <p>
            {t("privacy.encarregado.p1")}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.atualizacoes.title")}</h3>
          <p>
            {t("privacy.atualizacoes.p1")}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("privacy.contato.title")}</h3>
          <p>
            {t("privacy.contato.cnpj")}
          </p>
          <p>
            {t("privacy.contato.email")}
          </p>
        </div>
      </section>
    </main>
  );
} 