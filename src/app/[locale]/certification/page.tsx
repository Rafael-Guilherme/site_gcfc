'use client'
import Image from 'next/image';
import Header from '@/components/Header';
import Connect from '@/components/Connect';
import { useI18n } from '@/components/I18nProvider';

export default function Certification() {
  const { t } = useI18n();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-5 bg-[#6a0080]" />
      <div className="relative z-50 shadow-lg">
        <Header />
      </div>
      <div >
        <main className="flex flex-col">
          <div className='bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 py-12 sm:py-16 lg:py-20 flex items-center justify-center px-4'>
            <div className='flex items-center justify-start max-w-[1500px] w-full'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full max-w-[980px] gap-4 sm:gap-0'>
                    <p className='text-black text-xs sm:text-sm text-center sm:text-left font-open-sans'>{t("certification.breadcrumb.home")} { '>' } {t("certification.breadcrumb.certification")}</p>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-black uppercase'>{t("certification.title")}</h1>
                </div>
            </div>
          </div>
          <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">    
                <p className='text-black text-xs sm:text-sm text-center font-open-sans'>{t("certification.step1.number")}</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080] leading-tight text-center mb-12 sm:mb-16 lg:mb-20">
                    {t("certification.step1.title")}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">                
                    <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("certification.step1.subtitle1")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("certification.step1.p1")}
                            </p>
                            
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("certification.step1.subtitle2")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("certification.step1.p2")}
                            </p>
                            
                            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-800 ml-4">
                                <li>{t("certification.step1.li1")}</li>
                                <li>{t("certification.step1.li2")}</li>
                            </ul>
                            
                            <p className="text-xs sm:text-sm text-gray-600 mt-4">
                                {t("certification.step1.validity")}
                            </p>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <Image
                        src="/certification_01.png"
                        alt="Edifício moderno da GCFC com iluminação noturna"
                        width={400}
                        height={600}
                        className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
                        priority
                        />
                    </div>
                </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <p className='text-black text-xs sm:text-sm text-center font-open-sans'>{t("certification.step2.number")}</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080]">
                  {t("certification.step2.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="relative order-1 lg:order-1">
                  <Image
                    src="/certification_02.png"
                    alt="Profissional da GCFC analisando dados e relatórios em ambiente corporativo"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
                  />
                </div>

                <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step2.subtitle1")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step2.p1")}
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step2.subtitle2")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step2.p2")}
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step2.subtitle3")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step2.p3")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <p className='text-black text-xs sm:text-sm text-center font-open-sans'>{t("certification.step3.number")}</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080] leading-tight">
                  {t("certification.step3.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step3.subtitle1")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step3.p1")}
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step3.subtitle2")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step3.p2")}
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step3.subtitle3")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step3.p3")}
                  </p>
                </div>

                <div className="relative order-1 lg:order-2">
                  <Image
                    src="/certification_03.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <p className='text-black text-xs sm:text-sm text-center font-open-sans'>{t("certification.step4.number")}</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080]">
                  {t("certification.step4.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="relative order-1 lg:order-1">
                  <Image
                    src="/notification_03.png"
                    alt="Globo terrestre transparente sendo segurado por duas mãos, simbolizando a presença global da GCFC"
                    width={600}
                    height={600}
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto object-contain"
                  />
                </div>

                <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step4.subtitle1")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step4.p1")}
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step4.subtitle2")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step4.p2")}
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step4.subtitle3")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step4.p3")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <p className='text-black text-xs sm:text-sm text-center font-open-sans'>{t("certification.step5.number")}</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080] leading-tight">
                  {t("certification.step5.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step5.subtitle1")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step5.p1")}
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step5.subtitle2")}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-800">
                    {t("certification.step5.p2")}
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                    {t("certification.step5.subtitle3")}
                  </h3>
                  
                  <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-800 ml-4">
                    <li>{t("certification.step5.li1")}</li>
                    <li>{t("certification.step5.li2")}</li>
                    <li>{t("certification.step5.li3")}</li>
                    <li>{t("certification.step5.li4")}</li>
                  </ol>
                </div>

                <div className="relative order-1 lg:order-2">
                  <Image
                    src="/certification_05.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[1480px] mx-auto flex flex-col lg:flex-row items-start justify-center bg-[#6a0080] text-white p-6 sm:p-8 lg:p-12 rounded-xl my-12 sm:my-16 lg:my-20 mx-4 sm:mx-6 lg:mx-8">
            <div className="flex-shrink-0 w-full lg:w-auto">
              <Image src="/imagem_20.png" alt="GCFC Building" width={500} height={300} className="rounded-lg object-contain w-full max-w-sm lg:max-w-none" />
            </div>
            <div className="lg:ml-8 mt-4 sm:mt-6 lg:mt-8 w-full lg:w-auto">
              <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12">{t("certification.about.title")}</h2>
              <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                {t("certification.about.p1")}
              </p>
              <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                {t("certification.about.p2")}
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                {t("certification.about.p3")}
              </p>
            </div>
          </section>

          <Connect />
        </main>
      </div>
    </>
  );
}
