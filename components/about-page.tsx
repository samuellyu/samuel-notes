import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

type AboutLocale = 'en' | 'zh';

const content = {
  en: {
    edition: 'About',
    context: 'A limited public profile',
    avatarAlt: 'Editorial illustrated portrait of Samuel',
    avatarCaption: 'Illustrated profile · identifying details abstracted',
    overline: 'ABOUT THIS JOURNAL',
    title: ['A small public surface', 'for useful ideas.'],
    introduction:
      'Samuel writes about making complex work understandable, operable, and easier to improve. The emphasis is on reusable questions and working models—not a detailed personal history.',
    boundaryLabel: 'The public boundary',
    boundaryTitle: 'Enough context to understand the work.',
    includedLabel: '01 · INCLUDED',
    includedTitle: 'What appears here',
    included: [
      'Reusable frameworks and checklists',
      'General operating principles',
      'Questions for complex decisions',
      'Selected professional themes',
    ],
    omittedLabel: '02 · OMITTED',
    omittedTitle: 'What stays private',
    omitted: [
      'Company, client, and colleague names',
      'Specific project titles and commercial terms',
      'Internal documents, data, and timelines',
      'Detailed personal and location information',
    ],
    areasLabel: 'Working areas',
    areasTitle: 'Four recurring themes',
    areasCopy:
      'The site is organized around questions that remain useful even when the original setting is removed.',
    areaLabel: 'Area',
    areas: [
      {
        number: '01',
        title: 'Complex systems',
        copy: 'Making interfaces, dependencies, risks, and operating choices easier to see.',
      },
      {
        number: '02',
        title: 'AI delivery',
        copy: 'Connecting useful AI capabilities with evidence, governance, and real ownership.',
      },
      {
        number: '03',
        title: 'Data and decisions',
        copy: 'Turning data quality, signals, and thresholds into better operating decisions.',
      },
      {
        number: '04',
        title: 'Program operations',
        copy: 'Designing practical rhythms for cross-team delivery, escalation, and recovery.',
      },
    ],
    continueLabel: 'Continue to the public collection',
    continueTitle: 'Read the field notes',
  },
  zh: {
    edition: '关于',
    context: '有限的公开简介',
    avatarAlt: 'Samuel 的编辑风格插画头像',
    avatarCaption: '插画头像 · 识别细节已抽象化',
    overline: '关于这份笔记',
    title: ['有限的公开信息', '保留有用的观点。'],
    introduction:
      'Samuel 关注如何让复杂工作更容易被理解、运营和持续改进。这里强调可复用的问题与工作模型，而不是一份详细的个人履历。',
    boundaryLabel: '公开信息边界',
    boundaryTitle: '只提供理解这些工作所需的背景。',
    includedLabel: '01 · 公开内容',
    includedTitle: '这里会出现什么',
    included: [
      '可复用的框架与检查清单',
      '通用的运营原则',
      '面向复杂决策的问题',
      '经过选择的专业主题',
    ],
    omittedLabel: '02 · 保持私密',
    omittedTitle: '哪些信息不会公开',
    omitted: [
      '公司、客户与同事姓名',
      '具体项目名称与商业条款',
      '内部文档、数据与时间安排',
      '详细的个人信息与位置信息',
    ],
    areasLabel: '关注领域',
    areasTitle: '四个反复出现的主题',
    areasCopy: '网站围绕那些即使移除原始场景，仍然具有复用价值的问题进行组织。',
    areaLabel: '领域',
    areas: [
      {
        number: '01',
        title: '复杂系统',
        copy: '让接口、依赖、风险和运营选择变得更容易被看见。',
      },
      {
        number: '02',
        title: 'AI 交付',
        copy: '把有用的 AI 能力与证据、治理和真实责任连接起来。',
      },
      {
        number: '03',
        title: '数据与决策',
        copy: '把数据质量、信号和阈值转化为更好的运营决策。',
      },
      {
        number: '04',
        title: '项目运营',
        copy: '为跨团队交付、升级和恢复设计可持续的工作节奏。',
      },
    ],
    continueLabel: '继续浏览公开内容',
    continueTitle: '阅读工作笔记',
  },
} as const;

export function AboutPage({ locale }: { locale: AboutLocale }) {
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
        edition={copy.edition}
        context={copy.context}
        locale={locale}
        showLanguageSwitch
        languagePaths={{ en: '/about', zh: '/zh/about' }}
      />

      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-portrait">
          <Image
            src="/samuel-avatar-v2.jpg"
            alt={copy.avatarAlt}
            width={640}
            height={640}
            priority
          />
          <div>
            <strong>Samuel</strong>
            <span>{copy.avatarCaption}</span>
          </div>
        </div>

        <div className="about-hero-copy">
          <p className="overline">{copy.overline}</p>
          <h1 id="about-title">
            {copy.title[0]} <br />
            <em>{copy.title[1]}</em>
          </h1>
          <p>{copy.introduction}</p>
        </div>
      </section>

      <section className="public-boundary" aria-labelledby="boundary-title">
        <header>
          <p className="micro-heading">{copy.boundaryLabel}</p>
          <h2 id="boundary-title">{copy.boundaryTitle}</h2>
        </header>
        <div className="boundary-columns">
          <article>
            <span>{copy.includedLabel}</span>
            <h3>{copy.includedTitle}</h3>
            <ul>
              {copy.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <span>{copy.omittedLabel}</span>
            <h3>{copy.omittedTitle}</h3>
            <ul>
              {copy.omitted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="working-areas" aria-labelledby="working-areas-title">
        <header className="directory-heading">
          <p className="micro-heading">{copy.areasLabel}</p>
          <h2 id="working-areas-title">{copy.areasTitle}</h2>
          <p>{copy.areasCopy}</p>
        </header>
        <div className="working-area-list">
          {copy.areas.map((area) => (
            <article key={area.number}>
              <span>
                {copy.areaLabel} {area.number}
              </span>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <a className="about-notes-link" href={notesPath}>
        <span>{copy.continueLabel}</span>
        <strong>{copy.continueTitle}</strong>
        <ArrowUpRight aria-hidden="true" size={24} />
      </a>

      <SiteFooter locale={locale} />
    </main>
  );
}
