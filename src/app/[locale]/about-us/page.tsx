'use client'
import Image from 'next/image';
import Header from '@/components/Header';
import Connect from '@/components/Connect';
import { useI18n } from '@/components/I18nProvider';

export default function AboutUs() {
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
                <div className='flex flex-col sm:flex-row items-center justify-between w-full max-w-[836px] gap-4 sm:gap-0'>
                    <p className='text-black text-xs sm:text-sm text-center sm:text-left font-open-sans'>{t("about.breadcrumb.home")} { '>' } {t("about.breadcrumb.about")}</p>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-black uppercase'>{t("about.title")}</h1>
                </div>
            </div>
          </div>
          <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">    
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080] leading-tight text-center mb-12 sm:mb-16 lg:mb-20">
                    {t("about.section1.title")}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
                <div className="relative order-2 lg:order-1">
                    <Image
                    src="/about_01.png"
                    alt="Edifício moderno da GCFC com iluminação noturna"
                    width={400}
                    height={600}
                    className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
                    priority
                    />
                </div>
                
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                    <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                        {t("about.section1.subtitle")}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                        {t("about.section1.p1")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                        {t("about.section1.p2")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                        {t("about.section1.p3")}
                    </p>
                    </div>
                </div>
                </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080]">
                  {t("about.section2.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                  <h3 className="text-base sm:text-lg font-medium text-black">
                    {t("about.section2.subtitle")}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section2.p1")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section2.p2")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section2.p3")}
                    </p>
                  </div>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <Image
                    src="/about_02.png"
                    alt="Profissional da GCFC analisando dados e relatórios em ambiente corporativo"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080] leading-tight">
                  {t("about.section3.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                  <Image
                    src="/about_03.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
                  />
                </div>
                
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <h3 className="text-base sm:text-lg font-medium text-black">
                    {t("about.section3.subtitle")}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section3.p1")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section3.p2")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section3.p3")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section3.p4")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section3.p5")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080]">
                  {t("about.section4.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                  <h3 className="text-base sm:text-lg font-medium text-black">
                    {t("about.section4.subtitle")}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section4.p1")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section4.p2")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section4.p3")}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-800">
                      {t("about.section4.p4")}
                    </p>
                  </div>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <Image
                    src="/about_04.png"
                    alt="Globo terrestre transparente sendo segurado por duas mãos, simbolizando a presença global da GCFC"
                    width={600}
                    height={600}
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <Connect />
        </main>
      </div>
    </>
  );
}
