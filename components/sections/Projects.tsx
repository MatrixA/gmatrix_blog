'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/fernandojacob/ecommerce',
    live: 'https://ecommerce-demo.vercel.app',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/fernandojacob/taskmanager',
    live: 'https://taskmanager-demo.vercel.app',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool using OpenAI API for creating blog posts, social media content, and marketing copy.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'OpenAI API', 'Prisma', 'TypeScript'],
    github: 'https://github.com/fernandojacob/ai-content',
    live: 'https://ai-content-demo.vercel.app',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with data visualization, scheduling, and performance tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'D3.js', 'Express', 'Redis'],
    github: 'https://github.com/fernandojacob/social-dashboard',
    live: 'https://social-dashboard-demo.vercel.app',
  },
  {
    title: 'Video Streaming Platform',
    description: 'Video streaming platform with adaptive bitrate streaming, user subscriptions, and content management system.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'AWS S3', 'FFmpeg', 'PostgreSQL'],
    github: 'https://github.com/fernandojacob/video-stream',
    live: 'https://video-stream-demo.vercel.app',
  },
  {
    title: 'Real Estate Marketplace',
    description: 'Property listing platform with advanced search filters, virtual tours, and integrated messaging system.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    technologies: ['React', 'Mapbox', 'Node.js', 'Elasticsearch'],
    github: 'https://github.com/fernandojacob/realestate',
    live: 'https://realestate-demo.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Folder className="text-white" size={24} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Github className="mr-1" size={18} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink className="mr-1" size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}