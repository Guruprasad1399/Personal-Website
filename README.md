# Guruprasad Venkatraman - Professional Portfolio

A modern engineering portfolio focused on AI-enabled platforms, cloud-native services, and full-stack product work.

## Stack

- Next.js 16 App Router and React 19
- Material UI 9 with system-aware light and dark themes
- Motion for interface animation
- TypeScript and Tailwind CSS
- GitHub REST API with hourly revalidation and local fallback data

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Career content and project curation live in `app/data/portfolio.ts`. All displayed date ranges and tenure values are derived from structured dates, so they advance automatically.

GitHub profile and repository metadata are refreshed hourly through `app/lib/github.ts`. This includes repository counts, followers, descriptions, languages, links, stars, forks, homepages, and activity dates. An optional `GITHUB_TOKEN` environment variable raises GitHub API rate limits; the site still works without one.

Employment and education facts stay in the repository because LinkedIn does not provide a dependable public profile API. They only need editing when the underlying career information changes, not as time passes.

## Dynamic resume

The navigation provides PDF and Word downloads generated on demand:

- `/api/resume/pdf`
- `/api/resume/docx`

Both formats use the same typed portfolio data and current GitHub metadata as the website. No resume file is stored in `public/`, so dates, experience duration, skills, education, projects, and repository statistics stay synchronized automatically.
