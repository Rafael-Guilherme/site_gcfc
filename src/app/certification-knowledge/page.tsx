'use client'
import Image from 'next/image';
import FormGlobal from '@/components/Form';
import Connect from '@/components/Connect';
import Header from '@/components/Header';
import { useI18n } from '@/components/I18nProvider';

export default function CertificationKnowledge() {
  const { t } = useI18n();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-5 bg-[#6a0080]" />
      <div className="relative z-50 shadow-lg">
        <Header />
      </div>
        <main className="flex flex-col gap-12 sm:gap-16 lg:gap-20 pt-0 pb-8 sm:pb-12 bg-white min-h-screen">
            <section
                className="max-w-[1580px] mx-auto w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white -mt-20"
            >
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex flex-col lg:flex-row items-center px-8 sm:px-16 lg:px-24 py-16 lg:py-24">
                        <div className="flex-1 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight font-bold max-w-2xl">
                                {t("certificationKnowledge.hero.title")}
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-black max-w-xl leading-relaxed">
                                {t("certificationKnowledge.hero.subtitle1")}
                            </p>
                            <p className="text-base sm:text-lg lg:text-xl text-black max-w-xl leading-relaxed">
                                {t("certificationKnowledge.hero.subtitle2")}
                            </p>
                        </div>
                        
                        <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                            <div className="relative w-full max-w-lg lg:max-w-2xl">
                                <Image 
                                    src="/knowledge_01.png" 
                                    alt="Ilustração de certificação GCFC com elementos de reputação e credibilidade" 
                                    width={602} 
                                    height={427} 
                                    className="w-full h-auto object-contain" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image 
                        src="/award_02.png" 
                        alt="publicidade" 
                        width={927} 
                        height={109} 
                        className="w-[927px] max-w-[1480px] mx-auto object-cover" 
                    />
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-[1580px] mx-auto w-full px-8 sm:px-16 lg:px-24">
                    <h2 className="text-3xl sm:text-4xl text-black leading-tight font-medium text-center">
                        {t("certificationKnowledge.why.title")}
                    </h2>
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mt-10">
                        <div className="flex-1 flex flex-col gap-8 order-2 lg:order-1">
                            
                            <div className="flex flex-col gap-6">
                                <div className="bg-gradient-to-r from-[#ea84ff] via-[#efcbf7] to-gray-50 rounded-md p-6 text-black">
                                    <p className="text-lg font-medium">
                                        {t("certificationKnowledge.why.benefit1")}
                                    </p>
                                </div>
                                
                                <div className="bg-gradient-to-r from-[#ea84ff] via-[#efcbf7] to-gray-50 rounded-md p-6 text-black">
                                    <p className="text-lg font-medium">
                                        {t("certificationKnowledge.why.benefit2")}
                                    </p>
                                </div>
                                
                                <div className="bg-gradient-to-r from-[#ea84ff] via-[#efcbf7] to-gray-50 rounded-md p-6 text-black">
                                    <p className="text-lg font-medium">
                                        {t("certificationKnowledge.why.benefit3")}
                                    </p>
                                </div>
                                
                                <div className="bg-gradient-to-r from-[#ea84ff] via-[#efcbf7] to-gray-50 rounded-md p-6 text-black">
                                    <p className="text-lg font-medium">
                                        {t("certificationKnowledge.why.benefit4")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                            <div className="relative w-full max-w-lg lg:max-w-2xl">
                                <Image 
                                    src="/knowledge_03.png" 
                                    alt="Ilustração de certificação GCFC com personagens interagindo com certificado" 
                                    width={600} 
                                    height={500} 
                                    className="w-[420px] h-auto object-contain" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-[1580px] mx-auto w-full px-8 sm:px-16 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl text-black leading-tight font-medium mb-16 text-center">
                            {t("certificationKnowledge.how.title")}
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white border border-gray-200 rounded-xl p-4 py-5 shadow-sm">
                                <h3 className="text-xl text-left font-bold text-black mb-4">{t("certificationKnowledge.how.step1.title")}</h3>
                                <p className="text-sm text-left text-black leading-relaxed">
                                    {t("certificationKnowledge.how.step1.description")}
                                </p>
                            </div>
                            
                            <div className="bg-white border border-gray-200 rounded-xl p-4 py-5 shadow-sm">
                                <h3 className="text-xl text-left font-bold text-black mb-4">{t("certificationKnowledge.how.step2.title")}</h3>
                                <p className="text-sm text-left text-black leading-relaxed">
                                    {t("certificationKnowledge.how.step2.description")}
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-[#6a0080] via-[#ca0ffd] to-[#6a0080] rounded-xl p-4 py-5 shadow-sm">
                                <h3 className="text-xl text-left font-bold text-white mb-4">{t("certificationKnowledge.how.step3.title")}</h3>
                                <p className="text-sm text-left text-white leading-relaxed">
                                    {t("certificationKnowledge.how.step3.description")}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="max-w-[1580px] mx-auto relative flex items-center justify-center rounded-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-300 to-purple-600 rounded-l-xl p-8 lg:p-16 h-40"></div>
                        
                        <div className="absolute left-18 top-1/2 transform -translate-y-1/2 z-10 ">
                            <Image 
                                src="/knowledge_04.png" 
                                alt="Badge de certificação GCFC" 
                                width={80} 
                                height={80} 
                                className="w-16 h-16 lg:w-28 lg:h-28 object-contain" 
                            />
                        </div>
                        
                        <div className="relative  flex flex-col justify-center items-center flex-1 bg-blue-100 h-40 p-5 px-40">
                            <p className="text-xl lg:text-4xl text-black font-medium leading-tight">
                                {t("certificationKnowledge.price.message")}
                            </p>
                        </div>
                        
                        <div className="relative z-20 text-center lg:text-right mt-6 lg:mt-0 p-4 bg-[#6a0080] h-40 w-80">
                            <p className="text-white text-lg mb-2 text-center">{t("certificationKnowledge.price.from")}</p>
                            <div className="flex items-baseline justify-center w-full">
                                <span className="text-white text-2xl lg:text-4xl font-bold">{t("certificationKnowledge.price.currency")}</span>
                                <span className="text-white text-4xl lg:text-7xl font-bold ml-1">249</span>
                                <span className="text-white text-xl ml-1">{t("certificationKnowledge.price.period")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FormGlobal title={t("certificationKnowledge.form.title")}/>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-16">
                        {t("certificationKnowledge.faq.title")}
                    </h2>
                    
                    <div className="space-y-4">
                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    {t("certificationKnowledge.faq.question1")}
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed pt-4">
                                    {t("certificationKnowledge.faq.answer1.p1")}
                                </p>
                                <ul className="text-gray-700 leading-relaxed pt-4 space-y-2">
                                    <li>{t("certificationKnowledge.faq.answer1.li1")}</li>
                                    <li>{t("certificationKnowledge.faq.answer1.li2")}</li>
                                    <li>{t("certificationKnowledge.faq.answer1.li3")}</li>
                                    <li>{t("certificationKnowledge.faq.answer1.li4")}</li>
                                </ul>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    {t("certificationKnowledge.faq.question2")}
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed pt-4">
                                    {t("certificationKnowledge.faq.answer2")}
                                </p>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    {t("certificationKnowledge.faq.question3")}
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <div className="text-gray-700 leading-relaxed pt-4 space-y-3">
                                    <p>{t("certificationKnowledge.faq.answer3.p1")}</p>
                                    <p>{t("certificationKnowledge.faq.answer3.p2")}</p>
                                    <p>{t("certificationKnowledge.faq.answer3.p3")}</p>
                                    <p>{t("certificationKnowledge.faq.answer3.p4")}</p>
                                    <p>{t("certificationKnowledge.faq.answer3.p5")}</p>
                                    <p>{t("certificationKnowledge.faq.answer3.p6")}</p>
                                </div>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    {t("certificationKnowledge.faq.question4")}
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <div className="text-gray-700 leading-relaxed pt-4 space-y-3">
                                    <p>{t("certificationKnowledge.faq.answer4")}</p>
                                </div>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    {t("certificationKnowledge.faq.question5")}
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <div className="text-gray-700 leading-relaxed pt-4 space-y-4">
                                    <div>
                                        <p className="font-semibold text-black">{t("certificationKnowledge.faq.answer5.certification.title")}</p>
                                        <p>{t("certificationKnowledge.faq.answer5.certification.description")}</p>
                                        <ul className="mt-2 space-y-1">
                                            <li>{t("certificationKnowledge.faq.answer5.certification.li1")}</li>
                                            <li>{t("certificationKnowledge.faq.answer5.certification.li2")}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black">{t("certificationKnowledge.faq.answer5.award.title")}</p>
                                        <p>{t("certificationKnowledge.faq.answer5.award.description")}</p>
                                    </div>
                                </div>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    {t("certificationKnowledge.faq.question6")}
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <div className="text-gray-700 leading-relaxed pt-4 space-y-3">
                                    <p>{t("certificationKnowledge.faq.answer6")}</p>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            <Connect />
        </main>
    </>
  );
}
