'use client'

import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const filters = ['All', 'Flutter', 'Full Stack', 'Side Quests'] as const
type Filter = (typeof filters)[number]

export default function Projects() {
  const [active, setActive] = useState<Filter>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.category === active)
  }, [active])

  return (
    <section id="projects" className="relative border-t border-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading index="04" eyebrow="Index">
            Selected <span className="text-accent">work.</span>
          </SectionHeading>

          <div className="flex border border-ink self-start md:self-auto">
            {filters.map((f, i) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`label px-4 py-2.5 transition-colors ${i > 0 ? 'border-l border-ink' : ''} ${
                  active === f ? 'bg-ink text-paper' : 'text-ink hover:bg-ink/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Index list */}
        <div className="mt-14 border-t border-ink">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group border-b border-ink hover:bg-ink transition-colors"
              >
                <a
                  href={p.github || '#'}
                  target={p.github ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="block px-1 sm:px-2 py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline"
                >
                  <span className="md:col-span-1 label text-ink/40 group-hover:text-paper/50 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="md:col-span-4 text-lg sm:text-xl font-semibold tracking-tight text-ink group-hover:text-paper transition-colors">
                    {p.name}
                  </h3>

                  <p className="md:col-span-4 text-sm text-ink/70 group-hover:text-paper/80 transition-colors leading-relaxed">
                    {p.description}
                  </p>

                  <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end items-baseline">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="label border border-ink/30 px-2 py-1 text-ink/60 group-hover:border-paper/30 group-hover:text-paper/70 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="label text-ink/40 group-hover:text-accent transition-colors ml-1">↗</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
