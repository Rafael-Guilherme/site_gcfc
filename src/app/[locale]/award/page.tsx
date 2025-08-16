'use client'
import Image from 'next/image';
import HeaderAward from '@/components/HeaderAward';
import FormGlobal from '@/components/Form';
import Connect from '@/components/Connect';
import AwardFaq from '@/components/AwardFaq';
import { useI18n } from '@/components/I18nProvider';

export default function Award() {
  const { t } = useI18n();

  return (
        <main className="flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 pt-0 pb-8 sm:pb-12 bg-white min-h-screen">
            <section
                className="w-full h-[500px] sm:h-[600px] lg:h-[680px] xl:h-[720px] max-h-[720px] flex flex-col justify-between overflow-hidden"
                style={{ backgroundImage: "url('/award_hero.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            >
                <HeaderAward logoWhite  backgroundColor='bg-transparent'/>
                <div className="relative z-10 flex flex-col h-full mt-20 sm:mt-28 lg:mt-40">
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-8 px-4 sm:px-8 lg:px-[60px] pb-4 sm:pb-6 lg:pb-0 flex-1">
                        <div className="flex-1 flex justify-center items-center h-48 sm:h-56 lg:h-64 lg:order-1 -mt-4 lg:-mt-40">
                            <Image 
                                src="/award_01.png" 
                                alt="3 prêmios GCFC" 
                                width={602} 
                                height={427} 
                                className="w-full max-w-xs sm:max-w-sm lg:max-w-md lg:w-[550px] h-auto max-h-40 sm:max-h-48 lg:max-h-none lg:h-[400px] object-contain" 
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-2 sm:gap-3 lg:gap-4 xl:gap-6 lg:pt-8 lg:pb-8 lg:order-2 items-center px-4 sm:px-8 lg:px-0 sm:items-start justify-center text-center sm:text-left">
                            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-2 max-w-2xl font-heading">
                                {t("award.hero.title")}
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-[#e0d6e6] max-w-xl mb-3 sm:mb-4 font-open-sans">
                                {t("award.hero.subtitle")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="px-4 sm:px-6 lg:px-8">
                <Image 
                    src="/award_02.png" 
                    alt="publicidade" 
                    width={927} 
                    height={109} 
                    className="w-full max-w-[1480px] mx-auto object-cover" 
                />
            </div>
            <div className="max-w-[1480px] mx-auto border-2 border-black rounded-xl mx-4 sm:mx-6 lg:mx-8">
                <div className='w-full bg-gray-50 rounded-t-xl'>
                    <h2 className='text-xl sm:text-2xl font-medium text-center text-black py-6 sm:py-8'>{t("award.howItWorks.title")}</h2>
                </div>
                <div className='p-4 sm:p-6 lg:p-8'>
                    <section className="py-12 sm:py-16 lg:py-20 bg-white">
                        <div className="max-w-7xl mx-auto w-full">    
                            <p className='text-black text-xs sm:text-sm text-center font-open-sans'>{t("award.step1.number")}</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080] leading-tight text-center mb-12 sm:mb-16 lg:mb-20">
                                {t("award.step1.title")}
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
                            <div className="relative order-2 lg:order-1">
                                <Image
                                src="/notification_01.png"
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
                                        {t("award.step1.subtitle1")}
                                    </h3>
                                    
                                    <p className="text-sm sm:text-base text-gray-800">
                                        {t("award.step1.p1")}
                                    </p>
                                    
                                    <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                        {t("award.step1.subtitle2")}
                                    </h3>
                                    
                                    <p className="text-sm sm:text-base text-gray-800">
                                        {t("award.step1.p2")}
                                    </p>
                                    
                                    <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                        {t("award.step1.subtitle3")}
                                    </h3>
                                    
                                    <p className="text-sm sm:text-base text-gray-800">
                                        {t("award.step1.p3")}
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 rounded-xl">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <p className='text-black text-xs sm:text-sm text-center font-open-sans'>{t("award.step2.number")}</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080]">
                            {t("award.step2.title")}
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("award.step2.subtitle1")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("award.step2.p1")}
                            </p>
                            
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("award.step2.subtitle2")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("award.step2.p2")}
                            </p>
                            
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("award.step2.subtitle3")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("award.step2.p3")}
                            </p>
                            </div>
                            
                            <div className="relative order-1 lg:order-2">
                            <Image
                                src="/notification_02.png"
                                alt="Profissional da GCFC analisando dados e relatórios em ambiente corporativo"
                                width={400}
                                height={400}
                                className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
                            />
                            </div>
                        </div>
                        </div>
                    </section>


                    <section className="py-12 sm:py-16 lg:py-20 bg-white">
                        <div className="max-w-7xl mx-auto w-full">
                        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                            <p className='text-black text-xs sm:text-sm text-center font-open-sans'>{t("award.step3.number")}</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080] leading-tight">
                            {t("award.step3.title")}
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                            <div className="relative order-2 lg:order-1">
                            <Image
                                src="/notification_03.png"
                                alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                                width={400}
                                height={400}
                                className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
                            />
                            </div>
                            
                            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("award.step3.subtitle1")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("award.step3.p1")}
                            </p>
                            
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("award.step3.subtitle2")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("award.step3.p2")}
                            </p>
                            
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("award.step3.subtitle3")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("award.step3.p3")}
                            </p>
                            </div>
                        </div>
                        </div>
                    </section>


                    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 rounded-xl">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <p className='text-black text-xs sm:text-sm text-center font-open-sans'>{t("award.step4.number")}</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#6a0080]">
                            {t("award.step4.title")}
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("award.step4.subtitle1")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("award.step4.p1")}
                            </p>
                            
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("award.step4.subtitle2")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("award.step4.p2")}
                            </p>
                            
                            <h3 className="text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
                                {t("award.step4.subtitle3")}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-800">
                                {t("award.step4.p3")}
                            </p>
                            </div>
                            
                            <div className="relative order-1 lg:order-2">
                            <Image
                                src="/notification_04.png"
                                alt="Globo terrestre transparente sendo segurado por duas mãos, simbolizando a presença global da GCFC"
                                width={600}
                                height={600}
                                className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto object-contain"
                            />
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
            </div>

            <FormGlobal title={t("award.form.title")} />

            <AwardFaq />

            <Connect />
        </main>
  );
}
