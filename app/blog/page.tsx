import { getSortedPostsData } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'

export const metadata = {
  title: 'Blog - Fernando Jacob',
  description: 'Thoughts and insights on web development, technology, and software engineering.',
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Thoughts and insights on web development, technology, and software engineering.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts published yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}