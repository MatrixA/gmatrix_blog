'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Download, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Fernando Jacob</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Passionate about creating innovative web solutions with modern technologies. 
              Specialized in React, Next.js, Node.js, and cloud architectures.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-950 transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/fernandojacob"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/fernandojacob"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://twitter.com/fernandojacob"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Fernando Jacob"
                width={320}
                height={320}
                className="relative z-10 rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}