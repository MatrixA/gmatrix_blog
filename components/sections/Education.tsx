'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Book } from 'lucide-react'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Tech University',
    period: '2017 - 2019',
    description: 'Specialized in Software Engineering and Cloud Computing. GPA: 3.9/4.0',
    achievements: ['Dean\'s List', 'Best Thesis Award', 'Teaching Assistant'],
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'State University',
    period: '2013 - 2017',
    description: 'Focus on Web Development and Database Systems. GPA: 3.7/4.0',
    achievements: ['Cum Laude', 'Programming Competition Winner', 'Student Council Member'],
  },
]

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    year: '2022',
  },
  {
    name: 'React Advanced Patterns',
    issuer: 'Epic React',
    year: '2021',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education & <span className="gradient-text">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <GraduationCap className="mr-3 text-primary-600 flex-shrink-0" size={24} />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
                
                <div className="space-y-2">
                  {edu.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center text-sm">
                      <Award className="mr-2 text-primary-600" size={16} />
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Professional Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Book className="text-primary-600 mb-3" size={24} />
                  <h4 className="font-semibold mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}