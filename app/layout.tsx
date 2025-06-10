// app/layout.tsx
import './global.css'; // Import the global CSS
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Or your chosen font
import { Bricolage_Grotesque } from 'next/font/google';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures text is visible during font loading
  variable: '--font-bricolage-grotesque', // Define a CSS variable for easier use with Tailwind
});

export const metadata: Metadata = {
  title: 'Trishala Jain - Portfolio',
  description: 'Trishala Jain - I build communication tools, ideate strategy playbooks, and ship human-centric products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.className} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}