'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { SkillPillar } from '../lib/content'
import SectionHeading from './SectionHeading'

export default function Skills({
  skillPillars,
  otherTools,
}: {
  skillPillars: SkillPillar[]
  otherTools: string[]
}) {
  return (
    <section id="skills" className="relative border-t border-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 lg:py-24">
        <SectionHeading index="02" eyebrow="Capabilities">
          What I work <span className="text-accent">with.</span>
        </SectionHeading>

        {/* Pillars */}
        <div className="mt-14 border-t border-l border-ink grid grid-cols-1 md:grid-cols-3">
          {skillPillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-r border-b border-ink p-8 group hover:bg-ink transition-colors"
            >
              <div className="label text-accent">({String(i + 1).padStart(2, '0')})</div>
              <h3 className="display text-xl sm:text-2xl mt-4 text-ink group-hover:text-paper transition-colors">
                {p.title}
              </h3>
              <ul className="mt-6 space-y-2">
                {p.skills.map((s) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-3 text-lg text-ink/80 group-hover:text-paper/90 transition-colors"
                  >
                    <span className="label text-ink/40 group-hover:text-paper/50 transition-colors">
                      ›
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-12">
          <p className="label text-ink/50 mb-4">[ Other Tools ]</p>
          <div className="flex flex-wrap gap-2">
            {otherTools.map((t) => (
              <span
                key={t}
                className="label border border-ink px-3 py-2 text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
