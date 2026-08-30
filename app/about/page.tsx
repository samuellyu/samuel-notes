import type { Metadata } from 'next';
import { AboutPage } from '@/components/about-page';

export const metadata: Metadata = {
  title: 'About — Samuel',
  description:
    'A deliberately limited introduction to Samuel and the thinking behind Independent Field Notes.',
  alternates: {
    canonical: '/about',
    languages: { en: '/about', 'zh-CN': '/zh/about' },
  },
};

export default function AboutRoute() {
  return <AboutPage locale="en" />;
}
