'use client';

import { useI18n } from './I18nProvider';

const AwardFaq = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-16">
                {t("award.faq.title")}
            </h2>
            
            <div className="space-y-4">
                <details className="border border-gray-300 rounded-lg bg-white group">
                    <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                        <span className="text-base font-medium text-black">
                            {t("award.faq.question1")}
                        </span>
                        <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed pt-4">
                            {t("award.faq.answer1.p1")}
                        </p>
                        <ul className="text-gray-700 leading-relaxed pt-4 space-y-2">
                            <li>{t("award.faq.answer1.l1")}</li>
                            <li>{t("award.faq.answer1.l2")}</li>
                            <li>{t("award.faq.answer1.l3")}</li>
                            <li>{t("award.faq.answer1.l4")}</li>
                        </ul>
                    </div>
                </details>

                <details className="border border-gray-300 rounded-lg bg-white group">
                    <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                        <span className="text-base font-medium text-black">
                            {t("award.faq.question2")}
                        </span>
                        <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed pt-4">
                            {t("award.faq.answer2")}
                        </p>
                    </div>
                </details>

                <details className="border border-gray-300 rounded-lg bg-white group">
                    <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                        <span className="text-base font-medium text-black">
                            {t("award.faq.question3")}
                        </span>
                        <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-4 border-t border-gray-100">
                        <div className="text-gray-700 leading-relaxed pt-4 space-y-3">
                            <p>{t("award.faq.answer3.p1")}</p>
                            <p>{t("award.faq.answer3.p2")}</p>
                            <p>{t("award.faq.answer3.p3")}</p>
                            <p>{t("award.faq.answer3.p4")}</p>
                            <p>{t("award.faq.answer3.p5")}</p>
                            <p>{t("award.faq.answer3.p6")}</p>
                        </div>
                    </div>
                </details>

                <details className="border border-gray-300 rounded-lg bg-white group">
                    <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                        <span className="text-base font-medium text-black">
                            {t("award.faq.question4")}
                        </span>
                        <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-4 border-t border-gray-100">
                        <div className="text-gray-700 leading-relaxed pt-4 space-y-3">
                            <p>{t("award.faq.answer4.p1")}</p>
                            <p>{t("award.faq.answer4.p2")}</p>
                            <p>{t("award.faq.answer4.p3")}</p>
                        </div>
                    </div>
                </details>

                <details className="border border-gray-300 rounded-lg bg-white group">
                    <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                        <span className="text-base font-medium text-black">
                            {t("award.faq.question5")}
                        </span>
                        <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-4 border-t border-gray-100">
                        <div className="text-gray-700 leading-relaxed pt-4 space-y-4">
                            <div>
                                <p className="font-semibold text-black">{t("award.faq.answer5.certification.title")}</p>
                                <p>{t("award.faq.answer5.certification.p")}</p>
                                <ul className="mt-2 space-y-1">
                                    <li>{t("award.faq.answer5.certification.l1")}</li>
                                    <li>{t("award.faq.answer5.certification.l2")}</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-black">{t("award.faq.answer5.award.title")}</p>
                                <p>{t("award.faq.answer5.award.p")}</p>
                            </div>
                        </div>
                    </div>
                </details>

                <details className="border border-gray-300 rounded-lg bg-white group">
                    <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                        <span className="text-base font-medium text-black">
                            {t("award.faq.question6")}
                        </span>
                        <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-4 border-t border-gray-100">
                        <div className="text-gray-700 leading-relaxed pt-4 space-y-4">
                            <p>{t("award.faq.answer6.p1")}</p>
                            <div>
                                <p className="font-semibold text-black">{t("award.faq.answer6.invite.title")}</p>
                                <p>{t("award.faq.answer6.invite.p")}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-black">{t("award.faq.answer6.registration.title")}</p>
                                <p>{t("award.faq.answer6.registration.p")}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-black">{t("award.faq.answer6.national.title")}</p>
                                <p>{t("award.faq.answer6.national.p")}</p>
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </section>
  )
}

export default AwardFaq