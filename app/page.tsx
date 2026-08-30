import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      'zh-CN': '/zh',
    },
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
