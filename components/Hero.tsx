'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col pt-14"
    >
      {/* Meta bar */}
      <motion.div
        variants={reveal}
        custom={0}
        initial="hidden"
        animate="show"
        className="border-b border-ink"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-3 flex items-center justify-between label text-ink/70">
          <span>Portfolio &rsquo;26</span>
          <span className="hidden sm:block">Flutter &amp; Full-Stack Developer</span>
          <span>Pakistan</span>
        </div>
      </motion.div>

      {/* Giant name + portrait */}
      <div className="mx-auto max-w-6xl w-full px-5 sm:px-8 flex-1 flex flex-col justify-center py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: name + statement */}
          <div className="lg:col-span-8">
            <motion.h1
              variants={reveal}
              custom={1}
              initial="hidden"
              animate="show"
              className="display display-xl text-ink"
            >
              Farza
            </motion.h1>
            <motion.h1
              variants={reveal}
              custom={2}
              initial="hidden"
              animate="show"
              className="display display-xl text-ink"
            >
              Shahzad<span className="text-accent">.</span>
            </motion.h1>

            <motion.div
              variants={reveal}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-6 lg:mt-8"
            >
              <p className="text-lg sm:text-xl font-medium tracking-tight leading-[1.3] max-w-xl">
                Flutter &amp; full-stack developer building thoughtful
                mobile and web experiences somewhere between{' '}
                <span className="text-accent">code and curiosity.</span>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="label bg-ink text-paper px-5 py-3 hover:bg-accent transition-colors"
                >
                  View Work ↓
                </a>
                <a
                  href="#contact"
                  className="label border border-ink px-5 py-3 text-ink hover:bg-ink hover:text-paper transition-colors"
                >
                  Get in Touch ↗
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: portrait, top-aligned with the name */}
          <motion.figure
            variants={reveal}
            custom={4}
            initial="hidden"
            animate="show"
            className="lg:col-span-4 lg:justify-self-end w-40 sm:w-48 lg:w-full lg:max-w-[14rem]"
          >
            <div className="group relative border border-ink overflow-hidden aspect-[4/5] w-full">
              <Image
                src="/FarzaShahzad.jpg"
                alt="Farza Shahzad"
                fill
                className="object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                priority
                unoptimized
              />
            </div>
            <figcaption className="label mt-2 flex items-center justify-between text-ink/60">
              <span>Fig.01 — F.S.</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Available
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </div>

      {/* Bottom ticker rule */}
      <div className="border-t border-ink overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0 items-center label text-ink py-3" aria-hidden={dup === 1}>
              {['Flutter', 'Firebase', 'Supabase', 'Next.js', 'BLE / IoT', 'ESP32', 'Dart', 'React', 'TypeScript', 'Python', 'Figma'].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-6">{t}</span>
                  <span className="text-accent">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
