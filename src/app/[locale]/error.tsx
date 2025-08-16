'use client';

import { useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';

export default function LocaleError({
  //error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { navigateTo } = useLocale();

  useEffect(() => {
    navigateTo('/');
  }, [navigateTo]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Algo deu errado!
        </h2>
        <button
          onClick={() => reset()}
          className="bg-[#6a0080] text-white px-6 py-2 rounded-full hover:bg-[#5a0070] transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
