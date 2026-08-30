type SiteHeaderProps = {
  edition?: string;
  context?: string;
  locale?: 'en' | 'zh';
  showLanguageSwitch?: boolean;
  languagePaths?: { en: string; zh: string };
};

export function SiteHeader({
  edition = 'Issue No. 01',
  context = 'Systems · AI · Delivery',
  locale = 'en',
  showLanguageSwitch = false,
  languagePaths = { en: '/', zh: '/zh' },
}: SiteHeaderProps) {
  const isChinese = locale === 'zh';

  return (
    <header className="masthead">
      <a
        className="brand"
        href={isChinese ? '/zh' : '/'}
        aria-label={isChinese ? 'Samuel，返回中文主页' : 'Samuel, home'}
      >
        <span className="brand-name">Samuel</span>
        <span className="brand-subtitle">
          {isChinese ? '独立工作笔记' : 'Independent field notes'}
        </span>
      </a>

      <div className="issue-meta" aria-label="Publication context">
        <span>{edition}</span>
        <span>{context}</span>
      </div>

      <div className="masthead-actions">
        <nav
          className="masthead-nav"
          aria-label={isChinese ? '主导航' : 'Primary navigation'}
        >
          <a href={isChinese ? '/zh/notes' : '/notes'}>
            {isChinese ? '笔记' : 'Notes'}
          </a>
          <a href={isChinese ? '/zh#approach' : '/#approach'}>
            {isChinese ? '方法' : 'Approach'}
          </a>
          <a href={isChinese ? '/zh/about' : '/about'}>
            {isChinese ? '关于' : 'About'}
          </a>
        </nav>

        {showLanguageSwitch && (
          <nav
            className="language-switch"
            aria-label={isChinese ? '选择语言' : 'Choose language'}
          >
            <a
              href={languagePaths.en}
              aria-current={!isChinese ? 'page' : undefined}
            >
              EN
            </a>
            <span aria-hidden="true">/</span>
            <a
              href={languagePaths.zh}
              aria-current={isChinese ? 'page' : undefined}
            >
              中文
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
