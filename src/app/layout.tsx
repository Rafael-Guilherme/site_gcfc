import type { Metadata, Viewport } from "next";
import { Ubuntu, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/components/I18nProvider";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial", "sans-serif"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "GCFC - Great Company for Consumers",
  description: "Certificação e reconhecimento de empresas que oferecem excelente experiência ao consumidor",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${ubuntu.variable} ${openSans.variable} antialiased min-h-screen`}
      >
        <I18nProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
