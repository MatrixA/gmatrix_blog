'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface CommentsProps {
  slug: string
}

// EXAMPLE COMPONENT - Rename to Comments.tsx when ready to use
// Follow these steps to enable Giscus comments:
// 1. Create a public GitHub repository for your portfolio
// 2. Enable GitHub Discussions in Settings > General > Features
// 3. Install the Giscus app: https://github.com/apps/giscus
// 4. Go to https://giscus.app and follow the configuration steps
// 5. Replace the values below with your configuration

export default function Comments({ slug }: CommentsProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-semibold mb-6">Comments</h3>
      <Giscus
        id="comments"
        repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME" // e.g., "fernandojacob/portfolio"
        repoId="YOUR_REPO_ID" // Get from https://giscus.app
        category="Announcements" // or "General"
        categoryId="YOUR_CATEGORY_ID" // Get from https://giscus.app
        mapping="pathname" // or "url", "title", "og:title", "specific", "number"
        term={slug}
        reactionsEnabled="1" // Enable reactions
        emitMetadata="0" // Emit discussion metadata
        inputPosition="top" // or "bottom"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}