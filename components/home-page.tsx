import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { notes } from '@/lib/notes';
import { notesZh, noteStatusZh } from '@/lib/notes-zh';

export type HomeLocale = 'en' | 'zh';

const content = {
  en: {
    edition: 'Issue No. 01',
    context: 'Systems · AI · Delivery',
    rail: 'FIELD NOTES',
    volume: 'VOL. 01',
    overline: 'On systems, decisions, and the work between them',
    title: ['Making complexity', 'legible.'],
    coverSummary:
      'Practical frameworks for turning complex systems, AI initiatives, and multi-team delivery into work people can understand, operate, and improve.',
    readIssue: 'Read this issue',
    avatarAlt: 'Editorial illustrated portrait of Samuel',
    avatarCaption: 'Illustrated profile · details abstracted',
    issueLabel: 'In this issue',
    issueTopics: [
      'Complex systems',
      'AI delivery',
      'Data governance',
      'Project operations',
    ],
    leadLabel: 'The lead story',
    readingTime: 'Reading time',
    noteLabel: 'Note',
    indexLabel: 'The index',
    indexTitle: 'Notes for complex work',
    indexDescription:
      'Projects become more useful when their lessons can travel. These notes turn experience into questions, checklists, and operating models without exposing the work behind them.',
    collectionEyebrow: 'Continue beyond this issue',
    collectionTitle: 'Browse the full notes collection',
    frameworkSection: 'Inside the lead story',
    frameworkOverline: 'FRAMEWORK 01 · GO-LIVE READINESS',
    frameworkTitle: 'Five questions before the switch.',
    frameworkDescription:
      'A compact review sequence for complex operating environments. It asks what must work together before a launch can be called ready.',
    checkLabel: 'Check',
    continueNote: 'Continue with Note',
    approachLabel: 'A working principle',
    quote:
      '“A system is not ready when the software works. It is ready when people, interfaces, decisions, and fallback paths work together.”',
    principleLabel: 'Principle',
    principles: [
      {
        number: '01',
        title: 'Clarity before velocity',
        copy: 'Speed compounds only after scope, ownership, and decisions are visible.',
      },
      {
        number: '02',
        title: 'Interfaces are responsibilities',
        copy: 'An interface is both a technical contract and an organizational boundary.',
      },
      {
        number: '03',
        title: 'Operations are part of design',
        copy: 'Delivery is incomplete until the people running the system can recover it.',
      },
    ],
    aboutLabel: 'About this journal',
    aboutTitle: 'Useful ideas, with the identifying details removed.',
    aboutCopy:
      'Samuel writes about making complex work manageable. These notes distill practical experience into reusable frameworks while deliberately leaving out company histories, client names, and project-specific information.',
    aboutLink: 'Read the public profile',
  },
  zh: {
    edition: '第 01 期',
    context: '系统 · AI · 交付',
    rail: '工作笔记',
    volume: '第 01 卷',
    overline: '关于系统、决策，以及两者之间的工作',
    title: ['让复杂', '清晰可见。'],
    coverSummary:
      '用实用框架梳理复杂系统、AI 项目与跨团队交付，让工作更容易被理解、运营和持续改进。',
    readIssue: '阅读本期',
    avatarAlt: 'Samuel 的编辑风格插画头像',
    avatarCaption: '插画头像 · 识别细节已抽象化',
    issueLabel: '本期内容',
    issueTopics: ['复杂系统', 'AI 交付', '数据治理', '项目运营'],
    leadLabel: '本期头条',
    readingTime: '阅读时间',
    noteLabel: '笔记',
    indexLabel: '内容目录',
    indexTitle: '复杂工作的方法笔记',
    indexDescription:
      '当经验能够脱离具体项目继续复用，它才会变得更有价值。这里把实践转化为问题、检查清单和运行模型，同时隐去可识别的项目细节。',
    collectionEyebrow: '继续阅读',
    collectionTitle: '浏览全部中文笔记',
    frameworkSection: '头条文章内容预览',
    frameworkOverline: '框架 01 · 上线准备度',
    frameworkTitle: '切换上线前的五个问题。',
    frameworkDescription:
      '一套面向复杂运营环境的简洁检查顺序，用来确认系统上线前必须协同工作的关键部分。',
    checkLabel: '检查',
    continueNote: '继续阅读笔记',
    approachLabel: '一项工作原则',
    quote:
      '“软件能够运行，并不代表系统已经准备就绪。只有人员、接口、决策与回退路径能够共同运转，系统才真正具备上线条件。”',
    principleLabel: '原则',
    principles: [
      {
        number: '01',
        title: '先清晰，再提速',
        copy: '只有范围、责任与决策变得可见，速度才会形成正向积累。',
      },
      {
        number: '02',
        title: '接口也是责任边界',
        copy: '接口既是技术约定，也是组织之间的责任边界。',
      },
      {
        number: '03',
        title: '运营本身就是设计的一部分',
        copy: '只有实际运营系统的人能够处理异常并完成恢复，交付才算真正完成。',
      },
    ],
    aboutLabel: '关于这份笔记',
    aboutTitle: '保留有用的观点，隐去可识别的细节。',
    aboutCopy:
      'Samuel 关注如何让复杂工作变得可理解、可运营、可改进。这里保留可复用的框架与思考，同时主动省略公司、客户、项目名称及其他具体信息。',
    aboutLink: '查看公开简介',
  },
} as const;

export function HomePage({ locale }: { locale: HomeLocale }) {
  const copy = content[locale];
  const localizedNotes = (locale === 'zh' ? notesZh : notes).map((note) => ({
    ...note,
    showStatus: note.status !== 'Note',
    statusLabel: locale === 'zh' ? noteStatusZh[note.status] : note.status,
  }));
  const leadNote = localizedNotes[0];
  const steps = leadNote.sections;
  const notesPath = locale === 'zh' ? '/zh/notes' : '/notes';
  const aboutPath = locale === 'zh' ? '/zh/about' : '/about';

  return (
    <main
      id="top"
      className={locale === 'zh' ? 'locale-zh' : undefined}
      lang={locale === 'zh' ? 'zh-CN' : 'en'}
    >
      <SiteHeader
        locale={locale}
        showLanguageSwitch
        languagePaths={{ en: '/', zh: '/zh' }}
        edition={copy.edition}
        context={copy.context}
      />

      <section className="cover" aria-labelledby="cover-title">
        <aside className="cover-rail" aria-label={copy.edition}>
          <span>{copy.rail}</span>
          <span>{copy.volume}</span>
        </aside>

        <div className="cover-story">
          <p className="overline">{copy.overline}</p>
          <h1 id="cover-title">
            {copy.title[0]} <br />
            <em>{copy.title[1]}</em>
          </h1>
          <div className="cover-summary">
            <p>{copy.coverSummary}</p>
            <a className="text-link" href="#index">
              {copy.readIssue} <ArrowDown aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <aside className="cover-index" aria-label={copy.issueLabel}>
          <figure className="avatar-card">
            <div className="avatar-frame">
              <Image
                src="/samuel-avatar-v2.jpg"
                alt={copy.avatarAlt}
                width={640}
                height={640}
                priority
              />
            </div>
            <figcaption>
              <strong>Samuel</strong>
              <span>{copy.avatarCaption}</span>
            </figcaption>
          </figure>

          <p className="micro-heading">{copy.issueLabel}</p>
          <ol>
            {copy.issueTopics.map((topic, index) => (
              <li key={topic}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{topic}</strong>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="lead-section" id="index">
        <div className="section-bar">
          <span>{copy.leadLabel}</span>
          <span>
            {copy.readingTime} · {leadNote.readingTime}
          </span>
        </div>

        <div className="lead-layout">
          <a className="lead-story" href={`${notesPath}/${leadNote.slug}`}>
            <span className="lead-number">
              {copy.noteLabel} {leadNote.number}
            </span>
            <div className="lead-copy">
              <p className="overline">{leadNote.area}</p>
              <h2>{leadNote.title}</h2>
              <p>{leadNote.summary}</p>
            </div>
            <span className="circle-link" aria-hidden="true">
              <ArrowUpRight size={23} />
            </span>
          </a>

          <div className="side-columns">
            {localizedNotes.slice(1, 3).map((note) => (
              <a
                className="side-note"
                href={`${notesPath}/${note.slug}`}
                key={note.number}
              >
                <div className="note-topline">
                  <span>
                    {copy.noteLabel} {note.number}
                  </span>
                  <span>{note.area}</span>
                </div>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="journal-index" aria-labelledby="journal-title">
        <div className="index-heading">
          <p className="micro-heading">{copy.indexLabel}</p>
          <h2 id="journal-title">{copy.indexTitle}</h2>
          <p>{copy.indexDescription}</p>
        </div>

        <div className="index-list">
          {localizedNotes.map((note) => (
            <a
              className="index-row"
              href={`${notesPath}/${note.slug}`}
              key={note.number}
            >
              <span className="index-number">
                {copy.noteLabel} {note.number}
              </span>
              <span className="index-area">{note.area}</span>
              <h3>{note.title}</h3>
              <p>{note.summary}</p>
              {note.showStatus && (
                <span className="index-status">{note.statusLabel}</span>
              )}
            </a>
          ))}
        </div>

        <a className="index-collection-link" href={notesPath}>
          <span>{copy.collectionEyebrow}</span>
          <strong>{copy.collectionTitle}</strong>
          <ArrowUpRight aria-hidden="true" size={24} />
        </a>
      </section>

      <section className="framework-panel" id="framework">
        <div className="framework-inner">
          <div className="section-bar framework-section-bar">
            <span>{copy.frameworkSection}</span>
            <span>
              {copy.noteLabel} {leadNote.number} · {leadNote.readingTime}
            </span>
          </div>

          <header className="framework-intro">
            <div>
              <p className="overline">{copy.frameworkOverline}</p>
              <h2>{copy.frameworkTitle}</h2>
            </div>
            <p>{copy.frameworkDescription}</p>
          </header>

          <div className="readiness-list">
            {steps.map((step) => (
              <article key={step.number}>
                <span>
                  {copy.checkLabel} {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>

          <a
            className="framework-read-link"
            href={`${notesPath}/${leadNote.slug}`}
          >
            <span>
              {copy.continueNote} {leadNote.number}
            </span>
            <strong>{leadNote.title}</strong>
            <ArrowUpRight aria-hidden="true" size={24} />
          </a>
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="quote-block">
          <p className="micro-heading">{copy.approachLabel}</p>
          <blockquote>{copy.quote}</blockquote>
        </div>

        <div className="principles-list">
          {copy.principles.map((principle) => (
            <article key={principle.number}>
              <span>
                {copy.principleLabel} {principle.number}
              </span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="micro-heading">{copy.aboutLabel}</p>
        <div>
          <h2>{copy.aboutTitle}</h2>
          <p>{copy.aboutCopy}</p>
          <a className="text-link" href={aboutPath}>
            {copy.aboutLink} <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
