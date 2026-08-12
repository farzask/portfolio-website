'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { stats } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative border-t border-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 lg:py-24">
        <SectionHeading index="01" eyebrow="About">
          Code, curiosity &amp;<br />
          things that <span className="text-accent">ship.</span>
        </SectionHeading>

        {/* Asymmetric lead */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <p className="label text-ink/50">[ Bio 001 ]</p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 text-lg sm:text-xl font-medium tracking-tight leading-[1.4]"
          >
            I&apos;m a final-year CS student at CECOS University with a bias for{' '}
            <span className="underline decoration-accent decoration-2 underline-offset-4">
              building things that ship
            </span>{' '}
            from Flutter apps with 50+ users to full-stack web products. I care
            about clean architecture, calm interfaces, and the details that make
            software feel trustworthy.
          </motion.p>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-l border-ink grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-r border-b border-ink p-6 sm:p-8 group hover:bg-ink transition-colors"
            >
              <div className="display text-3xl sm:text-4xl text-ink group-hover:text-paper transition-colors">
                {s.value}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="label mt-3 text-ink/60 group-hover:text-paper/70 transition-colors">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
