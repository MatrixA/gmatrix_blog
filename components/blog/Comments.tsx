'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface CommentsProps {
  slug: string
}

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
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Comments are currently disabled. To enable comments:
        </p>
        <ol className="text-left max-w-md mx-auto text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>1. Create a GitHub repository for your portfolio</li>
          <li>2. Enable GitHub Discussions in the repository settings</li>
          <li>3. Install the Giscus app from <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">github.com/apps/giscus</a></li>
          <li>4. Configure Giscus at <a href="https://giscus.app" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">giscus.app</a></li>
          <li>5. Update this component with your repository details</li>
        </ol>
        <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-950 rounded-md">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            For development, you can safely ignore this message. Comments will work once properly configured with your GitHub repository.
          </p>
        </div>
      </div>
    </div>
  )
}