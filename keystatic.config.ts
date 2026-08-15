import { config, fields, singleton } from '@keystatic/core'
import { PROJECT_CATEGORY_OPTIONS } from './lib/categories'

const tech = (label: string) =>
  fields.array(fields.text({ label: 'Tag' }), {
    label,
    itemLabel: (props) => props.value,
  })

// Defaults to 'local' everywhere. Set NEXT_PUBLIC_KEYSTATIC_STORAGE=github once
// the GitHub App exists and its 3 secrets are set (locally to onboard, then in
// Vercel to run live) — otherwise the production build throws, since Keystatic
// requires those secrets whenever github mode is selected.
// Must be a NEXT_PUBLIC_ var: keystatic.config.ts is imported by a 'use client'
// module, so only NEXT_PUBLIC_ vars are guaranteed to resolve in that bundle.
const storageKind = process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE === 'github' ? 'github' : 'local'

export default config({
  storage:
    storageKind === 'local'
      ? { kind: 'local' }
      : { kind: 'github', repo: { owner: 'farzask', name: 'portfolio-website' } },

  ui: {
    brand: { name: 'Farza Shahzad' },
    navigation: {
      Content: ['projects', 'experience', 'skills', 'education', 'volunteer'],
    },
  },

  singletons: {
    projects: singleton({
      label: 'Projects',
      path: 'content/projects',
      format: { data: 'json' },
      schema: {
        items: fields.array(
          fields.object({
            name: fields.text({ label: 'Name', validation: { isRequired: true } }),
            description: fields.text({
              label: 'Description',
              multiline: true,
              validation: { isRequired: true },
            }),
            tech: tech('Tech'),
            category: fields.select({
              label: 'Category',
              options: PROJECT_CATEGORY_OPTIONS,
              defaultValue: 'Full Stack',
            }),
            link: fields.url({
              label: 'Link',
              description: 'Live site, GitHub repo, or Figma file. Leave empty for none.',
            }),
          }),
          {
            label: 'Projects',
            itemLabel: (props) => props.fields.name.value || 'Untitled project',
          }
        ),
      },
    }),

    experience: singleton({
      label: 'Experience',
      path: 'content/experience',
      format: { data: 'json' },
      schema: {
        items: fields.array(
          fields.object({
            role: fields.text({ label: 'Role', validation: { isRequired: true } }),
            company: fields.text({ label: 'Company', validation: { isRequired: true } }),
            date: fields.text({
              label: 'Date',
              description: 'Free text, e.g. "Apr 2026 - Present" or "Aug 2025 — Oct 2025".',
              validation: { isRequired: true },
            }),
            bullets: fields.array(fields.text({ label: 'Bullet', multiline: true }), {
              label: 'Bullets',
              itemLabel: (props) => props.value,
            }),
            tech: tech('Tech'),
          }),
          {
            label: 'Experience',
            itemLabel: (props) =>
              [props.fields.role.value, props.fields.company.value]
                .filter(Boolean)
                .join(' — ') || 'Untitled role',
          }
        ),
      },
    }),

    skills: singleton({
      label: 'Skills',
      path: 'content/skills',
      format: { data: 'json' },
      schema: {
        pillars: fields.array(
          fields.object({
            title: fields.text({ label: 'Title', validation: { isRequired: true } }),
            icon: fields.select({
              label: 'Icon',
              options: [
                { label: 'Smartphone', value: 'Smartphone' },
                { label: 'Code', value: 'Code' },
                { label: 'Cpu', value: 'Cpu' },
              ],
              defaultValue: 'Code',
            }),
            skills: fields.array(fields.text({ label: 'Skill' }), {
              label: 'Skills',
              itemLabel: (props) => props.value,
            }),
          }),
          {
            label: 'Pillars',
            itemLabel: (props) => props.fields.title.value || 'Untitled pillar',
          }
        ),
        otherTools: fields.array(fields.text({ label: 'Tool' }), {
          label: 'Other tools',
          itemLabel: (props) => props.value,
        }),
      },
    }),

    education: singleton({
      label: 'Education',
      path: 'content/education',
      format: { data: 'json' },
      schema: {
        degree: fields.text({ label: 'Degree', validation: { isRequired: true } }),
        school: fields.text({ label: 'School', validation: { isRequired: true } }),
        date: fields.text({ label: 'Date', validation: { isRequired: true } }),
        cgpa: fields.text({
          label: 'CGPA',
          description: 'Shown on the Education card, and as the CGPA stat in the About section.',
          validation: { isRequired: true },
        }),
      },
    }),

    volunteer: singleton({
      label: 'Leadership',
      path: 'content/volunteer',
      format: { data: 'json' },
      schema: {
        items: fields.array(
          fields.object({
            role: fields.text({ label: 'Role', validation: { isRequired: true } }),
            org: fields.text({ label: 'Organisation', validation: { isRequired: true } }),
            date: fields.text({ label: 'Date', validation: { isRequired: true } }),
          }),
          {
            label: 'Leadership',
            itemLabel: (props) => props.fields.role.value || 'Untitled role',
          }
        ),
      },
    }),
  },
})
