

import './globals.css'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gaming Portal',
  description: 'Gaming news portal by Nikita Zholudiev',
  icons: {
    icon: 'https://cdn-icons-png.flaticon.com/512/1076/1076928.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

