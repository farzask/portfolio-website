'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const contactInfo = [
  { label: 'Email', value: 'shahzad.farza@gmail.com', href: 'mailto:shahzad.farza@gmail.com' },
  { label: 'Phone', value: '+92 346 8222882', href: 'tel:+923468222882' },
  { label: 'GitHub', value: 'github.com/farzask', href: 'https://github.com/farzask' },
  { label: 'LinkedIn', value: 'in/farza-shahzad', href: 'https://www.linkedin.com/in/farza-shahzad/' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 2400)
    }, 900)
  }

  const inputClass =
    'w-full bg-transparent border-b border-ink/40 py-2.5 text-base text-ink placeholder:text-ink/30 focus:outline-none focus:border-accent transition-colors'

  return (
    <section id="contact" className="relative border-t border-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 lg:py-24">
        <SectionHeading index="05" eyebrow="Contact">
          Let&apos;s build<br />
          <span className="text-accent">something.</span>
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — details */}
          <div>
            <p className="text-lg sm:text-xl font-medium tracking-tight max-w-md">
              Got a project, a role, or just want to say hi? I read everything.
            </p>

            <div className="mt-10 border-t border-ink">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-ink px-1 py-5 hover:bg-ink transition-colors"
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
            </div>
          </div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="space-y-8"
          >
            <div>
              <label className="label text-ink/50">Name / 01</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="label text-ink/50">Email / 02</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="you@domain.com"
                required
              />
            </div>
            <div>
              <label className="label text-ink/50">Message / 03</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="What are you working on?"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="label w-full sm:w-auto bg-ink text-paper px-8 py-4 hover:bg-accent transition-colors disabled:opacity-60"
            >
              {status === 'sent'
                ? '✓ Message Sent'
                : status === 'sending'
                ? 'Sending…'
                : 'Send Message ↗'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
