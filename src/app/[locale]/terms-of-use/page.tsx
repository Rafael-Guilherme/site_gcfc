"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";
import Button from "@/components/Button";

export default function TermsOfUse() {
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
                src="/Site 2 - Topo, banner.png" 
                alt="Avaliação do consumidor" 
                width={602} 
                height={427} 
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md lg:w-[602px] h-auto max-h-40 sm:max-h-48 lg:max-h-none lg:h-[427px] object-contain" 
              />
            </div>
            <div className="flex-1 flex flex-col gap-2 sm:gap-3 lg:gap-4 xl:gap-6 lg:pt-8 lg:pb-8 lg:order-1 items-center px-4 sm:px-8 lg:px-0 sm:items-start justify-center text-center sm:text-left">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2 max-w-2xl font-heading">
                {t("legal.subtitle")}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#e0d6e6] max-w-xl mb-3 sm:mb-4 font-open-sans">
                {t("legal.description")}
              </p>
              <div className="mt-2">
                <Button
                  text={t("legal.button")}
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

      <nav className="w-full max-w-7xl mx-auto mb-6 sm:mb-8 px-4 sm:px-8 lg:px-12 xl:px-[84px]">
        <span className="block text-[#4B006E] font-semibold mb-2 text-sm sm:text-base md:text-xl font-heading">{t("legal.index")}</span>
        <ul className="list-inside space-y-1 text-[#4B006E] text-xs sm:text-sm md:text-base lg:text-lg font-open-sans">
          <li><a href="#esclarecimentos" className="hover:underline font-medium">{t("legal.section.esclarecimentos.title")}</a></li>
          <li><a href="#processamento" className="hover:underline font-medium">{t("legal.section.processamento.title")}</a></li>
          <li><a href="#coleta-plataformas" className="hover:underline font-medium">{t("legal.section.coleta-plataformas.title")}</a></li>
          <li><a href="#coleta-canais" className="hover:underline font-medium">{t("legal.section.coleta-canais.title")}</a></li>
          <li><a href="#objetivos" className="hover:underline font-medium">{t("legal.section.objetivos.title")}</a></li>
          <li><a href="#direito" className="hover:underline font-medium">{t("legal.section.direito.title")}</a></li>
          <li><a href="#protecao" className="hover:underline font-medium">{t("legal.section.protecao.title")}</a></li>
          <li><a href="#transferencia" className="hover:underline font-medium">{t("legal.section.transferencia.title")}</a></li>
          <li><a href="#armazenamento" className="hover:underline font-medium">{t("legal.section.armazenamento.title")}</a></li>
          <li><a href="#consentimento" className="hover:underline font-medium">{t("legal.section.consentimento.title")}</a></li>
          <li><a href="#revogacao" className="hover:underline font-medium">{t("legal.section.revogacao.title")}</a></li>
          <li><a href="#responsabilidade" className="hover:underline font-medium">{t("legal.section.responsabilidade.title")}</a></li>
          <li><a href="#atualizacoes" className="hover:underline font-medium">{t("legal.section.atualizacoes.title")}</a></li>
          <li><a href="#contato" className="hover:underline font-medium">{t("legal.section.contato.title")}</a></li>
        </ul>
      </nav>

      <section className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10 text-[#2d2d2d] text-xs sm:text-sm lg:text-base px-4 sm:px-8 lg:px-12 xl:px-[84px] font-open-sans">
        <div id="esclarecimentos">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.esclarecimentos.title")}</h3>
          <p className="mb-3 sm:mb-4">{t("legal.section.esclarecimentos.p1")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.esclarecimentos.p2")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.esclarecimentos.p3")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.esclarecimentos.p4")}</p>
          <p>{t("legal.section.esclarecimentos.p5")}</p>
        </div>
        
        <div id="processamento">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.processamento.title")}</h3>
          <p className="mb-3 sm:mb-4">{t("legal.section.processamento.p1")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.processamento.p2")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.processamento.p3")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.processamento.p4")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.processamento.p5")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.processamento.p6")}</p>
          <p>{t("legal.section.processamento.p7")}</p>
        </div>
        
        <div id="coleta-plataformas">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.coleta-plataformas.title")}</h3>
          <p className="mb-3 sm:mb-4">{t("legal.section.coleta-plataformas.p1")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.coleta-plataformas.p2")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.coleta-plataformas.p3")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.coleta-plataformas.p4")}</p>
          <p>{t("legal.section.coleta-plataformas.p5")}</p>
        </div>
        
        <div id="coleta-canais">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.coleta-canais.title")}</h3>
          <p>{t("legal.section.coleta-canais.p1")}</p>
        </div>
        
        <div id="objetivos">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.objetivos.title")}</h3>
          <p className="mb-3 sm:mb-4">{t("legal.section.objetivos.p1")}</p>
          <ul className="list-inside ml-0 text-xs sm:text-sm lg:text-base space-y-1">
            <li>{t("legal.section.objetivos.l1")}</li>
            <li>{t("legal.section.objetivos.l2")}</li>
            <li>{t("legal.section.objetivos.l3")}</li>
            <li>{t("legal.section.objetivos.l4")}</li>
            <li>{t("legal.section.objetivos.l5")}</li>
            <li>{t("legal.section.objetivos.l6")}</li>
            <li>{t("legal.section.objetivos.l7")}</li>
            <li>{t("legal.section.objetivos.l8")}</li>
            <li>{t("legal.section.objetivos.l9")}</li>
            <li>{t("legal.section.objetivos.l10")}</li>
            <li>{t("legal.section.objetivos.l11")}</li>
            <li>{t("legal.section.objetivos.l12")}</li>
            <li>{t("legal.section.objetivos.l13")}</li>
            <li>{t("legal.section.objetivos.l14")}</li>
            <li>{t("legal.section.objetivos.l15")}</li>
            <li>{t("legal.section.objetivos.l16")}</li>
          </ul>
        </div>
        
        <div id="direito">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.direito.title")}</h3>
          <p className="mb-3 sm:mb-4">{t("legal.section.direito.p1")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.direito.p2")}</p>
          <ul className="list-inside ml-0 text-xs sm:text-sm lg:text-base space-y-1">
            <li>{t("legal.section.direito.l1")}</li>
            <li>{t("legal.section.direito.l2")}</li>
            <li>{t("legal.section.direito.l3")}</li>
            <li>{t("legal.section.direito.l4")}</li>
            <li>{t("legal.section.direito.l5")}</li>
            <li>{t("legal.section.direito.l6")}</li>
          </ul>
          <p className="mb-3 sm:mb-4">{t("legal.section.direito.p3")}</p>
          <p>{t("legal.section.direito.p4")}</p>
        </div>
        
        <div id="protecao">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.protecao.title")}</h3>
          <p className="mb-3 sm:mb-4">{t("legal.section.protecao.p1")}</p>
          <p className="mb-3 sm:mb-4">{t("legal.section.protecao.p2")}</p>
          <p>{t("legal.section.protecao.p3")}</p>
        </div>
        
        <div id="transferencia">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.transferencia.title")}</h3>
          <p className="mb-3 sm:mb-4">{t("legal.section.transferencia.p1")}</p>
          <p>{t("legal.section.transferencia.p2")}</p>
        </div>
        
        <div id="armazenamento">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.armazenamento.title")}</h3>
          <p className="mb-3 sm:mb-4">{t("legal.section.armazenamento.p1")}</p>
          <p>{t("legal.section.armazenamento.p2")}</p>
        </div>
        
        <div id="consentimento">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.consentimento.title")}</h3>
          <p>{t("legal.section.consentimento.p1")}</p>
        </div>
        
        <div id="revogacao">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.revogacao.title")}</h3>
          <p className="mb-3 sm:mb-4">{t("legal.section.revogacao.p1")}</p>
          <p>{t("legal.section.revogacao.p2")}</p>
        </div>
        
        <div id="responsabilidade">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.responsabilidade.title")}</h3>
          <p>{t("legal.section.responsabilidade.p1")}</p>
        </div>
        
        <div id="atualizacoes">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.atualizacoes.title")}</h3>
          <p>{t("legal.section.atualizacoes.p1")}</p>
        </div>
        
        <div id="contato">
          <h3 className="font-bold text-[#4B006E] mb-6 sm:mb-8 text-sm sm:text-base font-heading">{t("legal.section.contato.title")}</h3>
          <p>{t("legal.section.contato.p1")}</p>
        </div>
      </section>
    </main>
  );
}
