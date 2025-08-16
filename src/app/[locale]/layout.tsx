import { I18nProvider } from '@/components/I18nProvider';
import Footer from '@/components/Footer';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // locale agora representa a flag
}) {
  return (
    <I18nProvider>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
