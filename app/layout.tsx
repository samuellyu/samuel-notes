import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Samuel — Independent Field Notes',
  description:
    'Practical frameworks for complex systems, AI delivery, data governance, and project operations.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
