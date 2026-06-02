import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const playfairMono = Playfair_Display({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dra. Jackeline Castro — Neuróloga Pediátrica',
  description: 'Consultorio de Neurología Pediátrica de la Dra. Jackeline Castro.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${playfairMono.variable} antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
