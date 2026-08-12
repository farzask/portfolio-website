'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const PHONE = '923468222882'
const EMAIL = 'shahzad.farza@gmail.com'

const waText = encodeURIComponent(
  'Hi Farza, I came across your portfolio and wanted to reach out'
)
const mailSubject = encodeURIComponent('Hi Farza from your portfolio')
const mailBody = encodeURIComponent(
  'Hi Farza,\n\nI came across your portfolio and wanted to reach out about '
)

const contactInfo = [
  { label: 'WhatsApp', value: '+92 346 8222882', href: `https://wa.me/${PHONE}?text=${waText}` },
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}?subject=${mailSubject}&body=${mailBody}` },
  { label: 'LinkedIn', value: 'in/farza-shahzad', href: 'https://www.linkedin.com/in/farza-shahzad/' },
  { label: 'GitHub', value: 'github.com/farzask', href: 'https://github.com/farzask' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 lg:py-24">
        <SectionHeading index="05" eyebrow="Contact">
          Let&apos;s build<br />
          <span className="text-accent">something.</span>
        </SectionHeading>

        <div className="mt-14 max-w-3xl">
          <p className="text-lg sm:text-xl font-medium tracking-tight max-w-md">
            Got a project, a role, or just want to say hi? Pick whatever&apos;s
            easiest. I read everything.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-10 border-t border-ink"
          >
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-ink px-1 py-6 hover:bg-ink transition-colors"
              >
                <span className="label text-ink/50 group-hover:text-paper/60 transition-colors">
                  {c.label}
                </span>
                <span className="text-base sm:text-lg font-medium tracking-tight text-ink group-hover:text-paper transition-colors flex items-center gap-2">
                  {c.value}
                  <span className="text-accent">↗</span>
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
