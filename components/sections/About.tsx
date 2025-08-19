'use client'

import { motion } from 'framer-motion'
import { User, Heart, Target } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-2 text-primary-600" />
                Who I Am
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate Full Stack Developer with over 5 years of experience in building 
                scalable web applications. My journey in tech started with a curiosity about how 
                things work on the internet, and it has evolved into a career dedicated to creating 
                meaningful digital experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I specialize in JavaScript/TypeScript ecosystems, with expertise in React, Next.js, 
                Node.js, and various cloud platforms. I believe in writing clean, maintainable code 
                and constantly learning new technologies to stay at the forefront of web development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Heart className="mr-2 text-primary-600" />
                What I Love
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▸</span>
                  Building user-centric applications that solve real problems
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▸</span>
                  Contributing to open-source projects and the developer community
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▸</span>
                  Exploring new technologies and frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▸</span>
                  Mentoring junior developers and sharing knowledge
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▸</span>
                  Photography, hiking, and reading tech blogs in my free time
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-950 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Target className="mr-2 text-primary-600" />
              My Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To leverage technology to create innovative solutions that make a positive impact on 
              people's lives. I strive to bridge the gap between complex technical challenges and 
              elegant, user-friendly applications that deliver exceptional experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}