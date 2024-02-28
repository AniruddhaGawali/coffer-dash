import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/provider/theme-provider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DataLens',
  description: 'DataLens is a data visualization tool.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
