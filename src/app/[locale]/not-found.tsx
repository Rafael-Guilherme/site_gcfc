'use client';

import { useLocale } from '@/hooks/useLocale';
import Header from '@/components/Header';

export default function NotFound() {
  const { t, navigateTo } = useLocale();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-5 bg-[#6a0080]" />
      <div className="relative z-50 shadow-lg">
        <Header />
      </div>
      
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[#6a0080] mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {t("404.title") || "Página não encontrada"}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              {t("404.description") || "A página que você está procurando não existe ou foi movida."}
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => navigateTo('/')}
              className="bg-[#6a0080] text-white px-8 py-3 rounded-full hover:bg-[#5a0070] transition-colors font-semibold"
            >
              {t("404.backHome") || "Voltar ao início"}
            </button>
            
            <div className="text-sm text-gray-500">
              <p>
                {t("404.or") || "ou"}
              </p>
              <button
                onClick={() => navigateTo('/about-us')}
                className="text-[#6a0080] hover:underline mt-2"
              >
                {t("404.aboutUs") || "Sobre nós"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
