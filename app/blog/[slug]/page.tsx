import { getPostData, getAllPostSlugs } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'
import Comments from '@/components/blog/Comments'

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.params.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)
  
  return {
    title: `${post.title} - Fernando Jacob`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const post = await getPostData(slug)

  return (
    <article className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center">
              <Calendar className="mr-2" size={16} />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2" size={16} />
              <span>{post.readingTime} min read</span>
            </div>
            <div className="text-gray-500">
              By {post.author}
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded"
                >
                  <Tag className="mr-1" size={14} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-gray-100
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-strong:text-gray-900 dark:prose-strong:text-gray-100
              prose-code:text-primary-600 dark:prose-code:text-primary-400
              prose-code:bg-gray-100 dark:prose-code:bg-gray-800
              prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-blockquote:border-primary-500
              prose-a:text-primary-600 dark:prose-a:text-primary-400
              prose-a:hover:text-primary-700 dark:prose-a:hover:text-primary-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <Comments slug={slug} />
      </div>
    </article>
  )
}