import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NoteArticlePage } from '@/components/note-article-page';
import { getNextNote, getNote, notes } from '@/lib/notes';

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    return { title: 'Note not found — Samuel' };
  }

  return {
    title: `${note.title} — Samuel`,
    description: note.summary,
    alternates: {
      canonical: `/notes/${note.slug}`,
      languages: {
        en: `/notes/${note.slug}`,
        'zh-CN': `/zh/notes/${note.slug}`,
      },
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    notFound();
  }

  return (
    <NoteArticlePage note={note} nextNote={getNextNote(slug)} locale="en" />
  );
}
