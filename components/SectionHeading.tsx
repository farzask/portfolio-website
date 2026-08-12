'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  index: string
  eyebrow: string
  children: React.ReactNode
  className?: string
}

/**
 * Brutalist section header: (NN) ------ LABEL  then a large display title.
 */
export default function SectionHeading({ index, eyebrow, children, className = '' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <div className="flex items-center gap-4 pb-5">
        <span className="label text-accent">({index})</span>
        <span className="h-px flex-1 bg-ink/30" />
        <span className="label text-ink/60">{eyebrow}</span>
      </div>
      <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-ink">
        {children}
      </h2>
    </motion.div>
  )
}
