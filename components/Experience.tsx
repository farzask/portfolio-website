'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { experiences, education, volunteer } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 lg:py-24">
        <SectionHeading index="03" eyebrow="Career">
          Where I&apos;ve <span className="text-accent">worked.</span>
        </SectionHeading>

        {/* Index list */}
        <div className="mt-14 border-t border-ink">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group border-b border-ink hover:bg-ink transition-colors"
            >
              <div className="px-1 sm:px-2 py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="md:col-span-3 flex items-baseline gap-3">
                  <span className="label text-ink/40 group-hover:text-paper/50 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="label text-accent">{exp.date}</span>
                </div>

                <div className="md:col-span-6">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-ink group-hover:text-paper transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base text-ink/60 group-hover:text-paper/70 transition-colors">
                    {exp.company}
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-ink/70 group-hover:text-paper/80 transition-colors max-w-xl">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="label border border-ink/30 px-2 py-1 text-ink/60 group-hover:border-paper/30 group-hover:text-paper/70 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education + Leadership */}
        <div className="mt-16 border-t border-l border-ink grid grid-cols-1 lg:grid-cols-2">
          <div className="border-r border-b border-ink p-8">
            <div className="label text-accent mb-6">[ Education ]</div>
            <div className="text-xl font-semibold tracking-tight">{education.degree}</div>
            <div className="text-base text-ink/60 mt-0.5">{education.school}</div>
            <div className="mt-5 flex items-center gap-3 label text-ink/60">
              <span>{education.date}</span>
              <span className="h-1 w-1 rounded-full bg-ink/30" />
              <span className="text-accent">CGPA {education.cgpa}</span>
            </div>
          </div>

          <div className="border-r border-b border-ink p-8">
            <div className="label text-accent mb-6">[ Leadership ]</div>
            <ul className="divide-y divide-ink/15">
              {volunteer.map((v) => (
                <li key={v.role} className="flex items-start justify-between gap-4 py-3 first:pt-0">
                  <div>
                    <div className="text-base font-medium">{v.role}</div>
                    <div className="text-sm text-ink/50">{v.org}</div>
                  </div>
                  <div className="label text-ink/50 whitespace-nowrap">{v.date}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
