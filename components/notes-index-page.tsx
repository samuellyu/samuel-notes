import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { notes } from '@/lib/notes';
import { notesZh, noteStatusZh } from '@/lib/notes-zh';

type NotesLocale = 'en' | 'zh';

const content = {
  en: {
    edition: 'Public index',
    context: 'Six field notes',
    kicker: 'NOTES',
    volume: 'VOL. 01',
    overline: 'A public index of reusable questions',
    title: ['Ideas that can travel', 'without the details.'],
    ruleLabel: 'Publication rule',
    ruleCopy:
      'Every note removes identifying organizations, people, commercial terms, and project-specific facts. Only the reusable reasoning remains.',
    featured: 'Featured note',
    readingSuffix: 'read',
    noteLabel: 'Note',
    collection: 'The collection',
    collectionTitle: 'All field notes',
    collectionCopy:
      'Short essays and working frameworks, organized around the kinds of questions that recur across complex work.',
    readNote: 'Read note',
  },
  zh: {
    edition: '公开目录',
    context: '六篇工作笔记',
    kicker: '笔记',
    volume: '第 01 卷',
    overline: '可复用问题的公开目录',
    title: ['可以脱离细节', '继续传播的观点。'],
    ruleLabel: '发布原则',
    ruleCopy:
      '每篇笔记都会移除可识别的机构、人物、商业条款和具体项目信息，只保留能够复用的思考与方法。',
    featured: '精选笔记',
    readingSuffix: '阅读',
    noteLabel: '笔记',
    collection: '全部内容',
    collectionTitle: '全部工作笔记',
    collectionCopy:
      '围绕复杂工作中反复出现的问题，整理成短文、检查清单和可直接使用的工作框架。',
    readNote: '阅读笔记',
  },
} as const;

export function NotesIndexPage({ locale }: { locale: NotesLocale }) {
  const copy = content[locale];
  const isChinese = locale === 'zh';
  const noteList = isChinese ? notesZh : notes;
  const [featured, ...remaining] = noteList;
  const notesPath = isChinese ? '/zh/notes' : '/notes';

  return (
    <main
      id="top"
      className={`subpage-shell${isChinese ? ' locale-zh' : ''}`}
      lang={isChinese ? 'zh-CN' : 'en'}
    >
      <SiteHeader
        edition={copy.edition}
        context={copy.context}
        locale={locale}
        showLanguageSwitch
        languagePaths={{ en: '/notes', zh: '/zh/notes' }}
      />

      <section className="notes-hero" aria-labelledby="notes-title">
        <div className="page-kicker">
          <span>{copy.kicker}</span>
          <span>{copy.volume}</span>
        </div>
        <div className="notes-hero-copy">
          <p className="overline">{copy.overline}</p>
          <h1 id="notes-title">
            {copy.title[0]} <br />
            <em>{copy.title[1]}</em>
          </h1>
        </div>
        <aside className="publication-rule">
          <p className="micro-heading">{copy.ruleLabel}</p>
          <p>{copy.ruleCopy}</p>
        </aside>
      </section>

      <section className="featured-note" aria-labelledby="featured-note-title">
        <div className="section-bar">
          <span>{copy.featured}</span>
          <span>
            {featured.readingTime} {copy.readingSuffix}
          </span>
        </div>
        <a
          href={`${notesPath}/${featured.slug}`}
          className="featured-note-link"
        >
          <span className="featured-note-number">
            {copy.noteLabel} {featured.number}
          </span>
          <div>
            <p className="overline">{featured.area}</p>
            <h2 id="featured-note-title">{featured.title}</h2>
            <p>{featured.summary}</p>
          </div>
          <span className="circle-link" aria-hidden="true">
            <ArrowUpRight size={23} />
          </span>
        </a>
      </section>

      <section className="notes-directory" aria-labelledby="all-notes-title">
        <header className="directory-heading">
          <p className="micro-heading">{copy.collection}</p>
          <h2 id="all-notes-title">{copy.collectionTitle}</h2>
          <p>{copy.collectionCopy}</p>
        </header>

        <div className="notes-card-grid">
          {remaining.map((note) => (
            <a
              className="note-card"
              href={`${notesPath}/${note.slug}`}
              key={note.slug}
            >
              <div className="note-card-meta">
                <span>
                  {copy.noteLabel} {note.number}
                </span>
                {note.status !== 'Note' && (
                  <span>
                    {isChinese ? noteStatusZh[note.status] : note.status}
                  </span>
                )}
              </div>
              <p className="overline">{note.area}</p>
              <h3>{note.title}</h3>
              <p>{note.summary}</p>
              <span className="note-card-read">
                {copy.readNote} <ArrowUpRight aria-hidden="true" size={15} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
