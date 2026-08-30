# Samuel Notes

A bilingual editorial website for publishing reusable ideas about complex
systems, AI delivery, data governance, and program operations—without exposing
identifying project or personal details.

一份中英文双语的个人方法笔记网站，关注复杂系统、AI 交付、数据治理与项目运营.

## Highlights

- English and Chinese homepages, indexes, profiles, and six complete articles
- Page-to-page language switching with matching URLs
- Editorial magazine layout with responsive typography and subtle motion
- Abstracted illustrated profile and explicit public-information boundaries
- Content stored locally in typed data files for straightforward maintenance

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The Chinese edition is
available at [http://localhost:3000/zh](http://localhost:3000/zh).

## Content maintenance

- English notes: `lib/notes.ts`
- Chinese notes: `lib/notes-zh.ts`
- Shared bilingual page structures: `components/`
- Routes and page metadata: `app/`

## Privacy approach

The public content intentionally excludes company, client, colleague, project,
commercial, location, and other identifying details. Only reusable reasoning,
frameworks, and general professional themes are included.

## Deployment

The project uses Vinext and is designed for a server-capable runtime. This
repository contains the source code; GitHub Pages is not enabled.
