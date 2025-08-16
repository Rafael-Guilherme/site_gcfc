'use client'

import { useState } from 'react'
import { useI18n } from './I18nProvider'

interface FormData {
  fullName: string
  email: string
  cnpj: string
  whatsapp: string
  sector: string
  employees: string
}

const FormGlobal = ({ title }: { title: string }) => {
  const { t } = useI18n();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    cnpj: '',
    whatsapp: '',
    sector: '',
    employees: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage(t("form.message.success"))
        setFormData({
          fullName: '',
          email: '',
          cnpj: '',
          whatsapp: '',
          sector: '',
          employees: ''
        })
      } else {
        const errorData = await response.json()
        setMessage(t("form.message.error.details").replace('{message}', errorData.message || ''))
      }
    } catch (error) {
      setMessage(t("form.message.error"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="form" className="relative my-20">
        <div className="py-20 bg-gray-50 max-w-[1480px] mx-auto rounded-4xl min-h-[480px] lg:min-h-[600px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 h-full">
                    {/* Texto e título - em telas menores fica acima */}
                    <div className="space-y-6 text-center lg:text-left lg:w-1/2 order-1 lg:order-1 lg:py-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                            {title}
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            {t("form.subtitle")}
                        </p>
                    </div>

                    {/* Formulário - em telas menores fica abaixo */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg lg:w-[480px] order-2 lg:order-2 lg:relative lg:-top-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {message && (
                              <div className={`p-3 rounded-lg text-sm ${
                                message.includes('sucesso') || message.includes('successfully')
                                  ? 'bg-green-100 text-green-800 border border-green-200' 
                                  : 'bg-red-100 text-red-800 border border-red-200'
                              }`}>
                                {message}
                              </div>
                            )}

                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t("form.label.fullName")}
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full py-2 sm:py-3 pl-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t("form.label.email")}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full py-2 sm:py-3 pl-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t("form.label.cnpj")}
                                </label>
                                <input
                                    type="text"
                                    id="cnpj"
                                    name="cnpj"
                                    value={formData.cnpj}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full py-2 sm:py-3 pl-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t("form.label.whatsapp")}
                                </label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full py-2 sm:py-3 pl-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t("form.label.sector")}
                                </label>
                                <select
                                    id="sector"
                                    name="sector"
                                    value={formData.sector}
                                    onChange={handleInputChange}
                                    className="w-full py-2 sm:py-3 pl-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                >
                                    <option value=""></option>
                                    <option value="tecnologia">{t("form.option.sector.tecnologia")}</option>
                                    <option value="saude">{t("form.option.sector.saude")}</option>
                                    <option value="educacao">{t("form.option.sector.educacao")}</option>
                                    <option value="varejo">{t("form.option.sector.varejo")}</option>
                                    <option value="servicos">{t("form.option.sector.servicos")}</option>
                                    <option value="industria">{t("form.option.sector.industria")}</option>
                                    <option value="financeiro">{t("form.option.sector.financeiro")}</option>
                                    <option value="outros">{t("form.option.sector.outros")}</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t("form.label.employees")}
                                </label>
                                <select
                                    id="employees"
                                    name="employees"
                                    value={formData.employees}
                                    onChange={handleInputChange}
                                    className="w-full py-2 sm:py-3 pl-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                >
                                    <option value=""></option>
                                    <option value="1-10">{t("form.option.employees.1-10")}</option>
                                    <option value="11-50">{t("form.option.employees.11-50")}</option>
                                    <option value="51-200">{t("form.option.employees.51-200")}</option>
                                    <option value="201-500">{t("form.option.employees.201-500")}</option>
                                    <option value="501-1000">{t("form.option.employees.501-1000")}</option>
                                    <option value="1000+">{t("form.option.employees.1000+")}</option>
                                </select>
                            </div>

                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="w-full text-white text-sm sm:text-base font-bold rounded-lg h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
                            >
                                {isLoading ? t("form.button.loading") : t("form.button.submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FormGlobal