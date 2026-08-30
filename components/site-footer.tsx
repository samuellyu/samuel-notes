export function SiteFooter({ locale = 'en' }: { locale?: 'en' | 'zh' }) {
  const isChinese = locale === 'zh';

  return (
    <footer className="site-footer">
      <a className="footer-brand" href={isChinese ? '/zh' : '/'}>
        Samuel
      </a>
      <span>{isChinese ? '独立工作笔记' : 'Independent field notes'}</span>
      <a href="#top">{isChinese ? '回到顶部 ↑' : 'Back to top ↑'}</a>
    </footer>
  );
}
