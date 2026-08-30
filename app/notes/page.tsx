import type { Metadata } from 'next';
import { NotesIndexPage } from '@/components/notes-index-page';

export const metadata: Metadata = {
  title: 'Notes — Samuel',
  description:
    'Reusable questions, frameworks, and operating models for complex systems, AI, data, and delivery.',
  alternates: {
    canonical: '/notes',
    languages: { en: '/notes', 'zh-CN': '/zh/notes' },
  },
};

export default function NotesPage() {
  return <NotesIndexPage locale="en" />;
}
