import type { Metadata } from 'next';
import './globals.css';
import { Spectral, Eagle_Lake } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { FestiveProvider } from '@/components/festive-provider';
import { SnowEffect } from '@/components/ui/snow-effect';


const fontBody = Spectral({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});
const fontHeadline = Eagle_Lake({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'Enroth Archives',
  description: 'A wiki for the game Might & Magic 6: The Mandate of Heaven',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;700&family=Eagle+Lake&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontBody.variable,
          fontHeadline.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FestiveProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <SnowEffect />
          </FestiveProvider>
          <Toaster />
        </ThemeProvider>

      </body>
    </html>
  );
}
