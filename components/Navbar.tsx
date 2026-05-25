'use client'

import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Skills', href: '#skills' },
  { num: '03', label: 'Work', href: '#experience' },
  { num: '04', label: 'Projects', href: '#projects' },
  { num: '05', label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map((l) => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive('#' + sections[i])
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper border-b border-ink">
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="label font-bold text-ink">
          Farza Shahzad<span className="text-accent">®</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`label inline-flex items-center gap-1.5 transition-colors ${
                  active === l.href ? 'text-accent' : 'text-ink/60 hover:text-ink'
                }`}
              >
                <span className="opacity-50">{l.num}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <span className="label flex items-center gap-1.5 text-ink/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available
          </span>
          <a
            href="/Farza_Shahzad_CV.pdf"
            download
            className="label border border-ink px-3 py-1.5 text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            CV ↗
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-1 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-14 bg-paper"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href} className="border-b border-ink/20">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display text-4xl flex items-baseline gap-3 px-5 py-4 text-ink hover:bg-ink hover:text-paper transition-colors"
                  >
                    <span className="label text-accent">{l.num}</span>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="p-5">
                <a
                  href="/Farza_Shahzad_CV.pdf"
                  download
                  className="label border border-ink inline-block px-4 py-2 text-ink"
                >
                  Download CV ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
