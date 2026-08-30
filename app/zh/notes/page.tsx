import type { Metadata } from 'next';
import { NotesIndexPage } from '@/components/notes-index-page';

export const metadata: Metadata = {
  title: '笔记 — Samuel',
  description: '关于复杂系统、AI、数据与交付的可复用问题、框架和运行模型。',
  alternates: {
    canonical: '/zh/notes',
    languages: { en: '/notes', 'zh-CN': '/zh/notes' },
  },
};

export default function ChineseNotesPage() {
  return <NotesIndexPage locale="zh" />;
}
