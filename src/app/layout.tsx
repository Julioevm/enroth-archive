import type {Metadata} from 'next';
import './globals.css';
import { Spectral, Eagle_Lake } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const fontBody = Spectral({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-body' });
const fontHeadline = Eagle_Lake({ subsets: ['latin'], weight: '400', variable: '--font-headline' });

export const metadata: Metadata = {
  title: 'Enroth Archive',
  description: 'A wiki for the game Might & Magic 6, 7 and 8',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;700&family=Eagle+Lake&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased', fontBody.variable, fontHeadline.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
