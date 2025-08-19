'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Palette, Wrench, Users } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 93 },
      { name: 'Express.js', level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'GraphQL', level: 82 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 87 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 88 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Vercel', level: 92 },
    ],
  },
  {
    title: 'Design & UX',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Accessibility', level: 88 },
      { name: 'Framer Motion', level: 87 },
    ],
  },
  {
    title: 'Tools & Testing',
    icon: Wrench,
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Jest/Testing', level: 85 },
      { name: 'Webpack', level: 82 },
      { name: 'VS Code', level: 98 },
      { name: 'Postman', level: 90 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Team Leadership', level: 90 },
      { name: 'Communication', level: 92 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Project Management', level: 85 },
      { name: 'Mentoring', level: 88 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="mr-3 text-primary-600" size={24} />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}