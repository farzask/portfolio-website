import 'server-only'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../keystatic.config'
import type { ProjectCategory } from './categories'

const reader = createReader(process.cwd(), keystaticConfig)

export type Project = {
  name: string
  description: string
  tech: string[]
  category: ProjectCategory
  link?: string
}

export type ExperienceItem = {
  role: string
  company: string
  date: string
  bullets: string[]
  tech: string[]
}

export type SkillPillar = {
  title: string
  icon: string
  skills: string[]
}

export type Education = {
  degree: string
  school: string
  date: string
  cgpa: string
}

export type VolunteerItem = {
  role: string
  org: string
  date: string
}

export type Stat = {
  label: string
  value: string
  suffix: string
}

function required<T>(value: T | null, name: string): T {
  if (value === null) {
    throw new Error(
      `Missing content for "${name}". Expected content/${name}.json — run the Keystatic admin at /keystatic to create it.`
    )
  }
  return value
}

/**
 * Reads every content singleton at build time and normalises the reader's
 * readonly arrays and nullable fields into the plain shapes the components use.
 */
export async function getContent() {
  const [projectsDoc, experienceDoc, skillsDoc, educationDoc, volunteerDoc] = await Promise.all([
    reader.singletons.projects.read(),
    reader.singletons.experience.read(),
    reader.singletons.skills.read(),
    reader.singletons.education.read(),
    reader.singletons.volunteer.read(),
  ])

  const projects: Project[] = required(projectsDoc, 'projects').items.map((p) => ({
    name: p.name,
    description: p.description,
    tech: [...p.tech],
    category: p.category,
    link: p.link ?? undefined,
  }))

  const experiences: ExperienceItem[] = required(experienceDoc, 'experience').items.map((e) => ({
    role: e.role,
    company: e.company,
    date: e.date,
    bullets: [...e.bullets],
    tech: [...e.tech],
  }))

  const skills = required(skillsDoc, 'skills')
  const skillPillars: SkillPillar[] = skills.pillars.map((p) => ({
    title: p.title,
    icon: p.icon,
    skills: [...p.skills],
  }))
  const otherTools: string[] = [...skills.otherTools]

  const education: Education = { ...required(educationDoc, 'education') }

  const volunteer: VolunteerItem[] = required(volunteerDoc, 'volunteer').items.map((v) => ({
    role: v.role,
    org: v.org,
    date: v.date,
  }))

  // Derived so the counters stay accurate as content is added through the CMS.
  const stats: Stat[] = [
    { label: 'CGPA', value: education.cgpa.split('/')[0].trim(), suffix: '' },
    { label: 'Projects Built', value: String(projects.length), suffix: '+' },
    { label: 'Work Experiences', value: String(experiences.length), suffix: '+' },
  ]

  return { projects, experiences, skillPillars, otherTools, education, volunteer, stats }
}
