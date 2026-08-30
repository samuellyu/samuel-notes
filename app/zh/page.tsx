import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = {
  title: 'Samuel — 独立工作笔记',
  description:
    '关于复杂系统、AI 交付、数据治理与项目运营的实用框架和方法笔记。',
  alternates: {
    canonical: '/zh',
    languages: {
      en: '/',
      'zh-CN': '/zh',
    },
  },
};

export default function ChineseHome() {
  return <HomePage locale="zh" />;
}
