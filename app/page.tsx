import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Publications from '@/components/sections/Publications'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
    </div>
  )
}