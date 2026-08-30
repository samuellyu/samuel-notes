import type { Metadata } from 'next';
import { AboutPage } from '@/components/about-page';

export const metadata: Metadata = {
  title: '关于 — Samuel',
  description: '一份经过主动限制的公开简介，以及独立工作笔记背后的思考方式。',
  alternates: {
    canonical: '/zh/about',
    languages: { en: '/about', 'zh-CN': '/zh/about' },
  },
};

export default function ChineseAboutPage() {
  return <AboutPage locale="zh" />;
}
