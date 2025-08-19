'use client'

import Giscus from '@giscus/react'
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
      <Giscus
        id="comments"
        repo="MatrixA/gmatrix_blog"
        repoId="R_kgDOPgqwTw"
        category="Announcements"
        categoryId="DIC_kwDOPgqwT84CuWfd"
        mapping="pathname"
        term={slug}
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}