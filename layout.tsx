import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Piece of Cake — Luxury Cake Atelier',
  description: 'Bespoke luxury wedding and custom cakes crafted with artisan precision. South Africa\'s premier cake atelier.',
  keywords: ['luxury cakes', 'wedding cakes', 'custom cakes', 'cake atelier', 'South Africa', 'Johannesburg'],
  openGraph: {
    title: 'Piece of Cake — Luxury Cake Atelier',
    description: 'Bespoke luxury wedding and custom cakes crafted with artisan precision.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
