'use client'

import React from 'react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/farzask' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farza-shahzad/' },
  { label: 'Email', href: 'mailto:shahzad.farza@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-8">
        <div className="overflow-hidden">
          <h2 className="display text-[11vw] leading-[0.8] text-paper">
            Farza<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="mt-12 pt-6 border-t border-paper/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="label text-paper/60">
            © {new Date().getFullYear()} Pakistan
          </div>

          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label text-paper/70 hover:text-accent transition-colors"
              >
                {s.label} ↗
              </a>
            ))}
          </div>

          <a href="#home" className="label text-paper/70 hover:text-accent transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
