import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NoteArticlePage } from '@/components/note-article-page';
import { getNextNoteZh, getNoteZh, notesZh } from '@/lib/notes-zh';

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notesZh.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteZh(slug);

  if (!note) {
    return { title: '未找到笔记 — Samuel' };
  }

  return {
    title: `${note.title} — Samuel`,
    description: note.summary,
    alternates: {
      canonical: `/zh/notes/${note.slug}`,
      languages: {
        en: `/notes/${note.slug}`,
        'zh-CN': `/zh/notes/${note.slug}`,
      },
    },
  };
}

export default async function ChineseNotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteZh(slug);

  if (!note) {
    notFound();
  }

  return (
    <NoteArticlePage note={note} nextNote={getNextNoteZh(slug)} locale="zh" />
  );
}
