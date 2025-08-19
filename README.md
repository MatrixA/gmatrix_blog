# Fernando Jacob - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring a blog, dark mode, and optimized for Vercel deployment.

## Features

- **Modern Design**: Clean, professional design with blue color scheme
- **Dark/Light Mode**: Toggle between themes with next-themes
- **Responsive**: Mobile-first design that works on all devices
- **Blog System**: Markdown-based blog with syntax highlighting
- **Comments**: Giscus integration for blog comments
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Performance**: Optimized images, lazy loading, and code splitting
- **Analytics**: Vercel Analytics integration
- **Contact Form**: Working contact form with API endpoint

## Sections

- **Hero**: Introduction with profile photo and social links
- **About**: Personal bio and mission statement
- **Experience**: Timeline of work experience
- **Education**: Academic background and certifications
- **Projects**: Portfolio of featured projects
- **Skills**: Technical skills with progress indicators
- **Publications**: Articles and conference talks
- **Blog**: Technical blog posts
- **Contact**: Contact form and information

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety
- **Content**: Markdown with gray-matter and remark
- **Icons**: Lucide React and React Icons
- **Analytics**: Vercel Analytics
- **Comments**: Giscus (GitHub Discussions)
- **Deployment**: Optimized for Vercel

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## Deployment on Vercel

1. **Connect to Vercel:**
   - Push code to GitHub
   - Connect repository to Vercel
   - Deploy automatically

2. **Environment Variables:**
   - No environment variables required for basic functionality
   - Add email service credentials for contact form if needed

3. **Custom Domain:**
   - Configure custom domain in Vercel dashboard
   - Update social media links and metadata accordingly

## Customization

### Personal Information
Update personal details in:
- `components/sections/Hero.tsx` - Name and title
- `components/sections/About.tsx` - Bio and mission
- `components/sections/Experience.tsx` - Work history
- `components/sections/Education.tsx` - Education and certifications
- `components/sections/Projects.tsx` - Portfolio projects
- `components/sections/Publications.tsx` - Articles and talks
- `app/layout.tsx` - SEO metadata

### Content
- **Blog Posts**: Add markdown files to `content/posts/`
- **Resume**: Replace `public/resume.pdf` with actual resume
- **Images**: Add profile and project images to `public/images/`

### Styling
- **Colors**: Update `tailwind.config.ts` for different color schemes
- **Fonts**: Change fonts in `app/layout.tsx`
- **Theme**: Customize CSS variables in `app/globals.css`

### Comments (Giscus)
1. Enable GitHub Discussions on your repository
2. Install the Giscus app
3. Update `components/blog/Comments.tsx` with your:
   - Repository name
   - Repository ID
   - Category ID

## Performance

- **Lighthouse Score**: 100/100 (when properly configured)
- **Core Web Vitals**: Optimized for LCP, CLS, and FID
- **Bundle Size**: Under 200KB first load
- **Images**: Next.js Image optimization with lazy loading

## SEO Features

- **Metadata**: Dynamic metadata for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatically generated
- **Robots.txt**: SEO-friendly crawling rules

## License

MIT License - feel free to use this template for your own portfolio.

## Support

For questions or issues:
- Create an issue on GitHub
- Email: contact@fernandojacob.com
- LinkedIn: linkedin.com/in/fernandojacob