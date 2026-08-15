import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { getContent } from '@/lib/content'

export default async function Home() {
  const { projects, experiences, skillPillars, otherTools, education, volunteer, stats } =
    await getContent()

  return (
    <>
      <Hero />
      <About stats={stats} />
      <Skills skillPillars={skillPillars} otherTools={otherTools} />
      <Experience experiences={experiences} education={education} volunteer={volunteer} />
      <Projects projects={projects} />
      <Contact />
    </>
  )
}
