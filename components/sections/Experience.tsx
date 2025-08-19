'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading development of cloud-native applications using Next.js, Node.js, and AWS. Mentoring junior developers and implementing CI/CD pipelines.',
    technologies: ['Next.js', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations Inc.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using React and Express.js. Improved application performance by 40% through optimization.',
    technologies: ['React', 'Express.js', 'MongoDB', 'Redis', 'Jest'],
  },
  {
    title: 'Frontend Developer',
    company: 'WebCraft Agency',
    period: '2019 - 2020',
    description: 'Created responsive web applications and implemented modern UI/UX designs. Collaborated with design team to deliver pixel-perfect implementations.',
    technologies: ['React', 'Vue.js', 'SASS', 'Webpack', 'Git'],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2018 - 2019',
    description: 'Assisted in developing web applications and learned best practices in software development. Contributed to open-source projects.',
    technologies: ['JavaScript', 'HTML/CSS', 'jQuery', 'Bootstrap', 'PHP'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full"></div>
                
                <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className={`flex items-center mb-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <Briefcase className="mr-2 text-primary-600" size={20} />
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                  </div>
                  
                  <div className={`flex items-center text-gray-600 dark:text-gray-400 mb-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Calendar className="mr-1" size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
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