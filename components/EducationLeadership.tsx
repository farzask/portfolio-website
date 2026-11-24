'use client'

import React from 'react'
import type { Education, VolunteerItem } from '../lib/content'
import SectionHeading from './SectionHeading'

export default function EducationLeadership({
  education,
  volunteer,
}: {
  education: Education
  volunteer: VolunteerItem[]
}) {
  return (
    <section id="education" className="relative border-t border-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 lg:py-24">
        <SectionHeading index="04" eyebrow="Background">
          Learning &amp; <span className="text-accent">leading.</span>
        </SectionHeading>

        <div className="mt-14 border-t border-l border-ink grid grid-cols-1 lg:grid-cols-2">
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
