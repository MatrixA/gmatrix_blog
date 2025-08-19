'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, ExternalLink } from 'lucide-react'

const publications = [
  {
    title: 'Modern React Patterns: A Comprehensive Guide to Building Scalable Applications',
    journal: 'Journal of Web Development',
    date: '2024',
    description: 'An in-depth exploration of advanced React patterns including hooks, context, and state management strategies for large-scale applications.',
    link: 'https://example.com/publications/react-patterns',
    type: 'Journal Article',
  },
  {
    title: 'Optimizing Performance in Next.js Applications: From Theory to Practice',
    journal: 'Frontend Quarterly',
    date: '2023',
    description: 'A practical guide to performance optimization techniques in Next.js, covering server-side rendering, static generation, and image optimization.',
    link: 'https://example.com/publications/nextjs-performance',
    type: 'Technical Article',
  },
  {
    title: 'The Future of Web Development: Emerging Technologies and Trends',
    journal: 'Tech Innovation Review',
    date: '2023',
    description: 'Analysis of emerging web technologies including WebAssembly, Progressive Web Apps, and the impact of AI on frontend development.',
    link: 'https://example.com/publications/web-future',
    type: 'Research Paper',
  },
  {
    title: 'Building Accessible Web Applications: A Developer\'s Handbook',
    journal: 'Accessibility Today',
    date: '2022',
    description: 'Comprehensive guide to implementing accessibility best practices in modern web applications, with real-world examples and testing strategies.',
    link: 'https://example.com/publications/accessibility-handbook',
    type: 'Technical Guide',
  },
  {
    title: 'Serverless Architecture Patterns for Modern Web Applications',
    journal: 'Cloud Computing Insights',
    date: '2022',
    description: 'Exploration of serverless architecture patterns, best practices, and real-world case studies of successful serverless implementations.',
    link: 'https://example.com/publications/serverless-patterns',
    type: 'Technical Article',
  },
]

const conferences = [
  {
    title: 'React Summit 2024',
    talk: 'Advanced State Management Patterns in React',
    location: 'Amsterdam, Netherlands',
    date: 'June 2024',
  },
  {
    title: 'JSConf EU 2023',
    talk: 'Performance Optimization in Modern JavaScript Applications',
    location: 'Berlin, Germany',
    date: 'September 2023',
  },
  {
    title: 'Next.js Conf 2023',
    talk: 'Building Scalable Applications with Next.js 13',
    location: 'San Francisco, CA (Virtual)',
    date: 'October 2023',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Publications & <span className="gradient-text">Speaking</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <BookOpen className="mr-3 text-primary-600" />
                Publications
              </h3>

              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded">
                        {pub.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="mr-1" size={14} />
                        {pub.date}
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold mb-1">{pub.title}</h4>
                    <p className="text-primary-600 dark:text-primary-400 text-sm mb-3">
                      {pub.journal}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {pub.description}
                    </p>

                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink className="mr-1" size={16} />
                      Read Article
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <svg className="mr-3 text-primary-600" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Conference Speaking
              </h3>

              <div className="space-y-6">
                {conferences.map((conf, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-950 dark:to-blue-950 p-6 rounded-lg border border-primary-100 dark:border-primary-800"
                  >
                    <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-1">
                      {conf.title}
                    </h4>
                    <p className="font-medium mb-2">{conf.talk}</p>
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                      <span>{conf.location}</span>
                      <span>{conf.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-primary-600 text-white rounded-lg"
              >
                <h4 className="text-lg font-semibold mb-2">Available for Speaking</h4>
                <p className="text-primary-100 mb-4">
                  I'm available for conference talks, workshops, and technical presentations on web development topics.
                </p>
                <a
                  href="/#contact"
                  className="inline-block bg-white text-primary-600 px-4 py-2 rounded-md hover:bg-primary-50 transition-colors"
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}