# portfolio-steam

A personal portfolio website styled after a Steam Community profile page. Built with Next.js and Tailwind CSS, deployed on Vercel.

## Features

- Steam Community profile aesthetic — dark navy theme, section boxes, game-art activity cards
- **Recent Activity** — live GitHub repositories pulled from the GitHub API
- **Recent Writing** — live Substack articles parsed from the RSS feed
- **Badges** — AWS certifications displayed as Steam-style badges
- **Socials** — LinkedIn, Twitter/X, and GitHub displayed as a Steam friends grid
- Profile header with background art, avatar, Years of Service badge, and Engineer Level XP bar
- ISR (Incremental Static Regeneration) — content refreshes every hour automatically
- Responsive layout — certifications stack above the activity feed on mobile

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Deployed on [Vercel](https://vercel.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Project Structure

```
app/
  page.tsx          # Server component — fetches GitHub + Substack data
  layout.tsx        # Root layout and metadata
  globals.css       # Steam theme, custom properties, scrollbar styling
components/
  SteamNav.tsx      # Sticky top navigation bar
  ProfileHeader.tsx # Background art, avatar, bio, level, years of service
  RecentActivity.tsx# GitHub repos + Substack articles as Steam game cards
  BadgeShowcase.tsx # AWS certifications as Steam badges
  Socials.tsx       # Social links as Steam friends grid
lib/
  github.ts         # GitHub public API helper
  substack.ts       # Substack RSS feed parser
public/
  avatar.jpg        # Profile photo
  favicon.ico       # Site favicon / nav logo
```

## Deployment

The project is configured for zero-config deployment on Vercel. Push to GitHub and import the repository at [vercel.com/new](https://vercel.com/new).
