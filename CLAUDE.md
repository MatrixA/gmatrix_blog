# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website for Fernando Jacob built with Next.js 15, TypeScript, and Tailwind CSS. It features a complete blog system, dark/light mode theming, contact forms, and is optimized for Vercel deployment.

## Development Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000
npm run build        # Build for production (required before deployment)
npm run start        # Start production server (after build)
npm run lint         # Run Next.js ESLint

# Testing build locally
npm run build && npm run start
```

## Architecture Overview

### Next.js 15 App Router Structure
- **App Router**: Uses Next.js 15 app directory structure with TypeScript
- **Server Components**: Most components are server-side by default
- **Client Components**: Marked with `'use client'` for interactivity (theme toggle, animations, forms)
- **Static Generation**: Blog posts are statically generated using `generateStaticParams`

### Key Architectural Patterns

**Blog System**: 
- Markdown files in `content/posts/` with frontmatter metadata
- `lib/blog.ts` handles file reading, parsing with gray-matter, and HTML conversion with remark
- Dynamic routes at `/blog/[slug]` with static generation
- Reading time calculation and tag support

**Theme System**:
- `next-themes` provider in `components/providers/ThemeProvider.tsx`
- Root layout wraps entire app with theme context
- CSS variables in `app/globals.css` adapt to light/dark mode
- Theme toggle component preserves user preference

**Section-Based Homepage**:
- Homepage (`app/page.tsx`) imports and renders section components
- Each section is a self-contained component in `components/sections/`
- Navigation uses hash anchors (`/#section`) to work across different pages
- Fixed header with scroll detection and mobile menu

**Contact Form**:
- API route at `app/api/contact/route.ts` handles form submissions
- Client-side form validation and loading states
- Ready for email service integration

### Content Management

**Blog Posts**:
- Add new posts as `.md` files in `content/posts/`
- Required frontmatter: `title`, `date`, `excerpt`, `tags`, `author`
- Slug generated from filename
- Automatically sorted by date in blog listing

**Personal Data Updates**:
- Hero section: `components/sections/Hero.tsx`
- Work experience: `components/sections/Experience.tsx` 
- Projects: `components/sections/Projects.tsx`
- SEO metadata: `app/layout.tsx`

### Styling System

**Tailwind Configuration**:
- Custom blue color palette defined in `tailwind.config.ts`
- Typography plugin for prose content
- Custom animations and utilities
- Dark mode via `class` strategy

**Component Patterns**:
- Responsive design with mobile-first approach
- Consistent spacing with Tailwind utilities
- Icon system using Lucide React and React Icons
- Hover states and transitions throughout

### Next.js 15 Specific Considerations

**Async Params**: Blog post pages use `await params` pattern for Next.js 15 compatibility:
```typescript
interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  // ...
}
```

**Client Component Boundaries**: Framer Motion and other interactive libraries require `'use client'` directive and careful component boundaries.

### Comments System

Comments are currently disabled with placeholder UI. To enable:
1. Set up GitHub repository with Discussions enabled
2. Configure Giscus app
3. Replace `components/blog/Comments.tsx` with `Comments.giscus.example.tsx` and update credentials

### Deployment Configuration

**Vercel Optimized**:
- `vercel.json` includes security headers and routing configuration
- Vercel Analytics integrated in root layout
- Automatic static optimization for blog posts
- Image optimization through Next.js Image component

The codebase follows Next.js 15 best practices with proper TypeScript typing, responsive design, and performance optimizations.