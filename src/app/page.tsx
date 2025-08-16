'use client'
import Image from 'next/image';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import Connect from '@/components/Connect';
import { useI18n } from '@/components/I18nProvider';

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-5 bg-[#6a0080]" />
      <div className="relative z-50 shadow-lg">
        <Header />
      </div>
      <div className="">
        <main className="flex flex-col gap-16 sm:gap-20 lg:gap-24 lg:pt-12 pb-8 sm:pb-12 px-4 sm:px-[72px] lg:px-0 bg-white">
          <section className="max-w-[1680px] mx-auto px-4 sm:px-5 w-full flex flex-col lg:flex-row items-center mt-10 lg:-mt-10 gap-6 sm:gap-8 lg:gap-0 lg:justify-between bg-white min-h-[480px] sm:min-h-[520px] lg:min-h-[480px]" id="hero">
              <div className="flex-1 flex flex-col gap-4 sm:gap-6 lg:pl-16 px-4 sm:px-0">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#6a0080] leading-tight mb-2 font-heading uppercase">
                  {t("home.hero.title")}
                </h1>
                <p className="text-black text-base sm:text-xl max-w-2xl font-open-sans">
                  {t("home.hero.subtitle")}
                </p>
                
                <div className="flex justify-center items-center lg:hidden">
                  <Image 
                    src={`/imagem_01.png`}
                    alt="Hero GCFC" 
                    width={840} 
                    height={840} 
                    className="w-full max-w-sm sm:max-w-lg h-auto object-cover" 
                    priority 
                    //key={`hero-mobile-${language.flag}`}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 max-w-xl">
                  <button className="text-black py-3 px-5 rounded-3xl border-2 border-black">
                    <Link href="/saiba-mais">{t("home.hero.button1")}</Link>
                  </button>
                  <Button text={t("home.hero.button2")} href="/certification" padding='py-3 px-5' borderRadius="rounded-2xl" className="hidden lg:block text-white text-base font-bold shadow-lg" />
                </div>
              </div>
              
              <div className="hidden lg:flex flex-1 justify-center items-center lg:pr-8">
                <Image 
                  src={`/imagem_01.png`}
                  alt="Hero GCFC" 
                  width={840} 
                  height={840} 
                  className="w-full max-w-xl h-auto object-cover rounded-br-[120px] rounded-tl-[120px]" 
                  priority 
                  //key={`hero-desktop-${language.flag}`}
                />
              </div>
          </section>

          <section className="max-w-[1680px] mx-auto px-4 sm:px-5 w-full flex flex-col gap-8 sm:gap-12 items-center relative" id="empresas">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-center text-[#6a0080] tracking-tight mb-2 sm:mb-4 lg:mb- max-w-[36rem] font-heading uppercase">{t("home.services.title")}</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">{t("home.services.subtitle")}</p>
            <div className="w-full flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 lg:gap-32 relative">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_02.png" alt="Diagnóstico" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-40 lg:w-56" />
                <span className="font-semibold text-black text-center uppercase text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[18rem] font-heading">
                  {t("home.services.service1")}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px] z-10 relative">
                <Image src="/imagem_03.png" alt="Certificação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-28 sm:w-32 md:w-36 lg:w-40 relative z-10" />
                <span className="font-semibold text-black text-center uppercase text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[18rem] relative z-10 font-heading">
                  {t("home.services.service2")}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_04.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-44" />
                <span className="-mt-4 font-semibold text-black text-center uppercase text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[18rem] font-heading">
                  {t("home.services.service3")}
                </span>
              </div>
            </div>
          </section>

          <section className="my-8 w-full flex items-center justify-center">
            <div className="w-1/2 bg-gray-300">
              <div className="flex items-center justify-center gap-10">
                <Image src="/imagem_05.png" alt="Resultado" width={360} height={360} />
                <div className="flex flex-col items-start justify-center max-w-60 gap-4">
                  <h3 className="text-[#6a0080] text-3xl font-bold uppercase">{t("home.recognition.title")}</h3>
                  <p className="text-[#6a0080] text-base">{t("home.recognition.subtitle")}</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-[#6a0080]">
              <div className="flex items-center justify-center gap-10">
                <div className="flex flex-col items-start justify-center max-w-60 gap-4">
                  <h3 className="text-white text-3xl font-bold uppercase">{t("home.global.title")}</h3>
                  <p className="text-white text-base">{t("home.global.subtitle")}</p>
                </div>
                <Image src="/imagem_06.png" alt="Certificado" width={364} height={364} />
              </div>
            </div>
          </section>

          <section className="max-w-[1680px] mx-auto px-4 sm:px-5 w-full flex flex-col items-center relative" id="empresas">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-[#6a0080] mb-4 max-w-[36rem] font-heading uppercase">{t("home.certification.title")}</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">{t("home.certification.subtitle")}</p>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 relative mt-20">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_07.png" alt="Diagnóstico" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-40 lg:w-56" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">{t("home.certification.step1.title")}</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  {t("home.certification.step1.description")}
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px] z-10 relative">
                <Image src="/imagem_08.png" alt="Certificação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-28 sm:w-32 md:w-36 lg:w-40 relative z-10" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">{t("home.certification.step2.title")}</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  {t("home.certification.step2.description")}
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_09.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-44" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">{t("home.certification.step3.title")}</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  {t("home.certification.step3.description")}
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px] rounded-">
                <Image src="/imagem_10.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-44" />
              </div>
            </div>
            <Button text={t("home.certification.button")} href="/certification" padding='py-6 px-28' borderRadius="rounded-4xl" className="hidden lg:block text-white text-2xl font-bold shadow-lg mt-10" />
          </section>

          <section className="my-8 bg-gray-100 py-32">
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-center text-[#6a0080] mb-4 font-heading uppercase">{t("home.certified.title")}</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">{t("home.certified.subtitle")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-6">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_11.png" alt="Sobre a GCFC" width={480} height={400} />
                <h3 className="text-black text-xl sm:text-2xl font-heading text-center">{t("home.certified.company1.name")}</h3>
                <p className="text-black text-sm sm:text-lg font-open-sans text-center max-w-[24rem]">&quot;{t("home.certified.company1.testimonial")}&quot;</p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_12.png" alt="Sobre a GCFC" width={480} height={400} />
                <h3 className="text-black text-xl sm:text-2xl font-heading text-center">{t("home.certified.company2.name")}</h3>
                <p className="text-black text-sm sm:text-lg font-open-sans text-center max-w-[24rem]">&quot;{t("home.certified.company2.testimonial")}&quot;</p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_13.png" alt="Sobre a GCFC" width={480} height={400} />
                <h3 className="text-black text-xl sm:text-2xl font-heading text-center">{t("home.certified.company3.name")}</h3>
                <p className="text-black text-sm sm:text-lg font-open-sans text-center max-w-[24rem]">&quot;{t("home.certified.company3.testimonial")}&quot;</p>
              </div>
            </div>
          </section>

          <section className="max-w-[1680px] mx-auto px-4 sm:px-5 w-full flex flex-col items-center relative" id="empresas">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-[#6a0080] mb-4 max-w-[36rem] font-heading uppercase">{t("home.award.title")}</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">{t("home.award.subtitle")}</p>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 relative mt-20">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_14.png" alt="Diagnóstico" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-40 lg:w-48" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">{t("home.award.step1.title")}</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  {t("home.award.step1.description")}
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px] z-10 relative">
                <Image src="/imagem_15.png" alt="Certificação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-28 sm:w-32 md:w-36 lg:w-40 relative z-10" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">{t("home.award.step2.title")}</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  {t("home.award.step2.description")}
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_16.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-48" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">{t("home.award.step3.title")}</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  {t("home.award.step3.description")}
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_17.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-44" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">{t("home.award.step4.title")}</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  {t("home.award.step4.description")}
                </span>
              </div>
            </div>
            <Button text={t("home.award.button")} href="/award" padding='py-6 px-28' borderRadius="rounded-4xl" className="hidden lg:block text-white text-2xl font-bold shadow-lg mt-10" />
          </section>

          <section className="my-8 bg-gray-100 py-20">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-[#6a0080] mb-4 font-heading uppercase">{t("home.comparison.title")}</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">{t("home.comparison.subtitle")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-40">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_18.png" alt="Certificação" width={180} height={300} className="mb-4 -mt-9" />
                <h2 className="text-xl sm:text-2xl font-semibold text-center text-black mb-4 font-heading uppercase">{t("home.comparison.certification.title")}</h2>
                <div className="flex flex-col items-center justify-between">
                  <div className="flex flex-col items-start text-left max-w-md">
                    <div className="flex items-center mb-4">
                      <Image src="/icone interrogacoes.png" alt="Benefícios" width={40} height={40} />
                      <p className="text-black font-bold text-base">{t("home.comparison.certification.what.title")}</p>
                    </div>
                    <p className="mb-4 text-black text-sm ml-5">{t("home.comparison.certification.what.description")}</p>
                    <div className="flex items-center mb-4">
                        <Image src="/icone beneficios.png" alt="Benefícios" width={40} height={40} />
                      <p className="text-black font-bold text-base">{t("home.comparison.certification.benefits.title")}</p>
                    </div>
                    <ul className="list-disc text-black pl-5 mb-4 text-sm ml-5">
                      <li>{t("home.comparison.certification.benefits.li1")}</li>
                      <li>{t("home.comparison.certification.benefits.li2")}</li>
                      <li>{t("home.comparison.certification.benefits.li3")}</li>
                      <li>{t("home.comparison.certification.benefits.li4")}</li>
                    </ul>
                    <div className="flex items-center mb-4">
                      <Image src="/icone selo.png" alt="Como obtê-lo" width={40} height={40} />
                      <p className="text-black font-bold text-base">{t("home.comparison.certification.how.title")}</p>
                    </div>
                    <ul className="list-disc text-black pl-5 mb-4 text-sm ml-5">
                      <li>{t("home.comparison.certification.how.li1")}</li>
                      <li>{t("home.comparison.certification.how.li2")}</li>
                      <li>{t("home.comparison.certification.how.li3")}</li>
                      <li>{t("home.comparison.certification.how.li4")}</li>
                    </ul>
                  </div>
                  <Button text={t("home.comparison.certification.button")} href="/certification" padding='py-3 px-5' borderRadius="rounded-4xl" className="hidden lg:block text-white text-xl font-bold shadow-lg mt-10" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_19.png" alt="Premiação" width={200} height={300} className="mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold text-center text-black mb-4 font-heading uppercase">{t("home.comparison.award.title")}</h2>
                <div className="flex flex-col items-center justify-between">
                  <div className="flex flex-col items-start text-left max-w-md">
                    <div className="flex items-center mb-4">
                      <Image src="/icone interrogacoes.png" alt="Benefícios" width={20} height={20} />
                      <p className="text-black font-bold text-base">{t("home.comparison.award.what.title")}</p>
                    </div>
                    <p className="mb-4 text-black text-sm ml-5">{t("home.comparison.award.what.description")}</p>
                    <div className="flex items-center mb-4">
                      <Image src="/icone beneficios.png" alt="Benefícios" width={20} height={20} />
                      <p className="text-black font-bold text-base">{t("home.comparison.award.benefits.title")}</p>
                    </div>
                    <ul className="list-disc text-black pl-5 mb-4 text-sm ml-5">
                      <li>{t("home.comparison.award.benefits.li1")}</li>
                      <li>{t("home.comparison.award.benefits.li2")}</li>
                      <li>{t("home.comparison.award.benefits.li3")}</li>
                      <li>{t("home.comparison.award.benefits.li4")}</li>
                    </ul>
                    <div className="flex items-center mb-4">
                      <Image src="/icone trofeu.png" alt="Como obtê-lo" width={20} height={20} />
                      <p className="text-black font-bold text-base">{t("home.comparison.award.how.title")}</p>
                    </div>
                    <ul className="list-disc text-black pl-5 mb-4 text-sm ml-5">
                      <li>{t("home.comparison.award.how.li1")}</li>
                      <li>{t("home.comparison.award.how.li2")}</li>
                      <li>{t("home.comparison.award.how.li3")}</li>
                      <li>{t("home.comparison.award.how.li4")}</li>
                    </ul>
                  </div>
                  <Button text={t("home.comparison.award.button")} href="/award" padding='py-3 px-5' borderRadius="rounded-4xl" className="hidden lg:block text-white text-xl font-bold shadow-lg mt-10" />
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[1480px] mx-auto flex flex-col sm:flex-row items-start justify-center bg-[#6a0080] text-white p-12 rounded-xl">
            <div className="flex-shrink-0">
              <Image src="/imagem_20.png" alt="GCFC Building" width={500} height={300} className="rounded-lg object-contain" />
            </div>
            <div className="sm:ml-8 mt-4 sm:mt-8">
              <h2 className="text-2xl font-bold mb-12">{t("home.about.title")}</h2>
              <p className="text-sm sm:text-lg mb-4">
                {t("home.about.p1")}
              </p>
              <p className="text-sm sm:text-lg mb-4">
                {t("home.about.p2")}
              </p>
              <p className="text-sm sm:text-lg">
                {t("home.about.p3")}
              </p>
            </div>
          </section>

          <Connect />
        </main>
      </div>
    </>
  );
}
