import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Авто в аренду под выкуп',
  description: 'Современный сайт для аренды автомобилей под выкуп.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
