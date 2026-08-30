import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import type { FieldNote } from '@/lib/notes';
import { noteStatusZh } from '@/lib/notes-zh';

type NoteLocale = 'en' | 'zh';

const content = {
  en: {
    note: 'Note',
    allNotes: 'All notes',
    format: 'Format',
    readingTime: 'Reading time',
    edition: 'Edition',
    publicNote: 'Public note',
    privacy:
      'This essay is intentionally abstracted. Organizations, people, commercial details, and project identifiers have been removed.',
    contents: 'In this note',
    section: 'Section',
    centralIdea: 'The central idea',
    takeaway: 'Working takeaway',
    nextNote: 'Next note',
  },
  zh: {
    note: '笔记',
    allNotes: '全部笔记',
    format: '类型',
    readingTime: '阅读时间',
    edition: '版本',
    publicNote: '公开笔记',
    privacy: '本文已主动抽象处理，机构、人物、商业细节和具体项目标识均已移除。',
    contents: '本文目录',
    section: '章节',
    centralIdea: '核心观点',
    takeaway: '工作结论',
    nextNote: '下一篇笔记',
  },
} as const;

export function NoteArticlePage({
  note,
  nextNote,
  locale,
}: {
  note: FieldNote;
  nextNote: FieldNote;
  locale: NoteLocale;
}) {
  const copy = content[locale];
  const isChinese = locale === 'zh';
  const notesPath = isChinese ? '/zh/notes' : '/notes';

  return (
    <main
      id="top"
      className={`subpage-shell${isChinese ? ' locale-zh' : ''}`}
      lang={isChinese ? 'zh-CN' : 'en'}
    >
      <SiteHeader
        edition={`${copy.note} ${note.number}`}
        context={`${note.area} · ${note.readingTime}`}
        locale={locale}
        showLanguageSwitch
        languagePaths={{
          en: `/notes/${note.slug}`,
          zh: `/zh/notes/${note.slug}`,
        }}
      />

      <article className="article-shell">
        <header className="article-hero">
          <a className="back-link" href={notesPath}>
            <ArrowLeft aria-hidden="true" size={15} /> {copy.allNotes}
          </a>
          <div className="article-title-block">
            <p className="overline">{note.area}</p>
            <h1>{note.title}</h1>
            <p className="article-deck">{note.summary}</p>
          </div>
          <dl className="article-meta">
            <div>
              <dt>{copy.format}</dt>
              <dd>{isChinese ? noteStatusZh[note.status] : note.status}</dd>
            </div>
            <div>
              <dt>{copy.readingTime}</dt>
              <dd>{note.readingTime}</dd>
            </div>
            <div>
              <dt>{copy.edition}</dt>
              <dd>{note.updated}</dd>
            </div>
          </dl>
        </header>

        <div className="privacy-strip">
          <span>{copy.publicNote}</span>
          <p>{copy.privacy}</p>
        </div>

        <div className="article-layout">
          <aside className="article-aside" aria-label={copy.contents}>
            <p className="micro-heading">{copy.contents}</p>
            <ol>
              {note.sections.map((section) => (
                <li key={section.number}>
                  <a href={`#section-${section.number.toLowerCase()}`}>
                    <span>
                      {copy.section} {section.number}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="article-body">
            <section className="article-thesis">
              <p className="micro-heading">{copy.centralIdea}</p>
              <p>{note.thesis}</p>
            </section>

            {note.sections.map((section) => (
              <section
                className="article-section"
                id={`section-${section.number.toLowerCase()}`}
                key={section.number}
              >
                <span className="article-section-number">
                  {copy.section} {section.number}
                </span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.copy}</p>
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}

            <section className="takeaway-block">
              <p className="micro-heading">{copy.takeaway}</p>
              <blockquote>{note.takeaway}</blockquote>
            </section>
          </div>
        </div>
      </article>

      <a className="next-note" href={`${notesPath}/${nextNote.slug}`}>
        <span>
          {copy.nextNote} · {nextNote.number} · {nextNote.area}
        </span>
        <strong>{nextNote.title}</strong>
        <ArrowUpRight aria-hidden="true" size={24} />
      </a>

      <SiteFooter locale={locale} />
    </main>
  );
}
