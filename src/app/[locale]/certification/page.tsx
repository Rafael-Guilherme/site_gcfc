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
          <div className='bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 py-20 flex items-center justify-center'>
            <div className='flex items-center justify-start max-w-[1500px] w-full'>
                <div className='flex items-center justify-between w-full max-w-[980px]'>
                    <p className='text-black text-sm text-left font-open-sans'>{t("certification.breadcrumb.home")} { '>' } {t("certification.breadcrumb.certification")}</p>
                    <h1 className='text-4xl font-medium text-center text-black uppercase'>{t("certification.title")}</h1>
                </div>
            </div>
          </div>
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">    
                <p className='text-black text-sm text-center font-open-sans'>{t("certification.step1.number")}</p>
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight text-center mb-20">
                    {t("certification.step1.title")}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">                
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-black mb-8">
                                {t("certification.step1.subtitle1")}
                            </h3>
                            
                            <p className="text-base text-gray-800">
                                {t("certification.step1.p1")}
                            </p>
                            
                            <h3 className="text-lg font-medium text-black mb-8">
                                {t("certification.step1.subtitle2")}
                            </h3>
                            
                            <p className="text-base text-gray-800">
                                {t("certification.step1.p2")}
                            </p>
                            
                            <ul className="list-disc list-inside space-y-2 text-base text-gray-800 ml-4">
                                <li>{t("certification.step1.li1")}</li>
                                <li>{t("certification.step1.li2")}</li>
                            </ul>
                            
                            <p className="text-sm text-gray-600 mt-4">
                                {t("certification.step1.validity")}
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                        src="/certification_01.png"
                        alt="Edifício moderno da GCFC com iluminação noturna"
                        width={400}
                        height={600}
                        className="w-full h-auto max-h-[500px] max-w-[400px] object-contain"
                        priority
                        />
                    </div>
                </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className='text-black text-sm text-center font-open-sans'>{t("certification.step2.number")}</p>
                <h2 className="text-4xl font-medium text-[#6a0080]">
                  {t("certification.step2.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="/certification_02.png"
                    alt="Profissional da GCFC analisando dados e relatórios em ambiente corporativo"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[400px] max-w-[400px] object-contain"
                  />
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step2.subtitle1")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step2.p1")}
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step2.subtitle2")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step2.p2")}
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step2.subtitle3")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step2.p3")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-20">
                <p className='text-black text-sm text-center font-open-sans'>{t("certification.step3.number")}</p>
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight">
                  {t("certification.step3.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step3.subtitle1")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step3.p1")}
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step3.subtitle2")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step3.p2")}
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step3.subtitle3")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step3.p3")}
                  </p>
                </div>

                <div className="relative">
                  <Image
                    src="/certification_03.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[600px] max-w-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className='text-black text-sm text-center font-open-sans'>{t("certification.step4.number")}</p>
                <h2 className="text-4xl font-medium text-[#6a0080]">
                  {t("certification.step4.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="/notification_03.png"
                    alt="Globo terrestre transparente sendo segurado por duas mãos, simbolizando a presença global da GCFC"
                    width={600}
                    height={600}
                    className="w-full h-auto "
                  />
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step4.subtitle1")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step4.p1")}
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step4.subtitle2")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step4.p2")}
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step4.subtitle3")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step4.p3")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-20">
                <p className='text-black text-sm text-center font-open-sans'>{t("certification.step5.number")}</p>
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight">
                  {t("certification.step5.title")}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step5.subtitle1")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step5.p1")}
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step5.subtitle2")}
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    {t("certification.step5.p2")}
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    {t("certification.step5.subtitle3")}
                  </h3>
                  
                  <ol className="list-decimal list-inside space-y-2 text-base text-gray-800 ml-4">
                    <li>{t("certification.step5.li1")}</li>
                    <li>{t("certification.step5.li2")}</li>
                    <li>{t("certification.step5.li3")}</li>
                    <li>{t("certification.step5.li4")}</li>
                  </ol>
                </div>

                <div className="relative">
                  <Image
                    src="/certification_05.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[600px] max-w-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[1480px] mx-auto flex flex-col sm:flex-row items-start justify-center bg-[#6a0080] text-white p-12 rounded-xl my-20">
            <div className="flex-shrink-0">
              <Image src="/imagem_20.png" alt="GCFC Building" width={500} height={300} className="rounded-lg object-contain" />
            </div>
            <div className="sm:ml-8 mt-4 sm:mt-8">
              <h2 className="text-2xl font-bold mb-12">{t("certification.about.title")}</h2>
              <p className="text-sm sm:text-lg mb-4">
                {t("certification.about.p1")}
              </p>
              <p className="text-sm sm:text-lg mb-4">
                {t("certification.about.p2")}
              </p>
              <p className="text-sm sm:text-lg">
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
