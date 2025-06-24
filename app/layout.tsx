// app/layout.tsx
import './global.css';
import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import CustomCursor from './components/CustomCursor';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: 'Trishala Jain - Portfolio',
  description: 'I build communication tools, support personal brand creation, and ship human-centric products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ '--font-instrument-serif': instrumentSerif.style.fontFamily } as React.CSSProperties}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}