import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { BlogPostMetadata } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMetadata
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="mr-1" size={16} />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="mr-1" size={16} />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded"
            >
              <Tag className="mr-1" size={12} />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            By {post.author}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}