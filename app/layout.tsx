import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from './contexts/LanguageContext';
import Sidebar from './components/sidebar/Sidebar';

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Muh Reyy",
  description: "Your Portfolio Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="flex">
              <Sidebar />
              <main className="flex-1 lg:ml-64">{children}</main>
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}