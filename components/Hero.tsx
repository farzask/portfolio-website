'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const words = ['Flutter Developer']

const codeLines = [
  { key: 'const', value: ' developer = {' },
  { key: '  name:', value: ' "Farza Shahzad",' },
  { key: '  role:', value: ' "Flutter Developer",' },
  { key: '  based:', value: ' "Peshawar, PK",' },
  { key: '};', value: '' },
]

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const word = words[currentWord]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < word.length) {
          setDisplayedText(word.substring(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(word.substring(0, displayedText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWord((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWord])

  // Animate code lines appearing one by one
  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
      }, 800 + visibleLines * 400)
      return () => clearTimeout(timeout)
    }
  }, [visibleLines])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-dark-50">I&apos;m a</span>
              <br />
              <span className="h-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block min-w-max">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-2"
                >
                  |
                </motion.span>
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-dark-300 text-lg md:text-xl mb-12 max-w-xl"
            >
              Flutter developer with hands-on experience building and shipping mobile applications integrated with Firebase and Python backends. Skilled in full-stack development across Flutter, Dart, and cloud services, with a track record of delivering real-world solutions for local and international clients.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
              >
                View My Projects
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Developer Card with Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Animated gradient rings behind the card */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-2xl opacity-20"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #3b82f6)',
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-3xl opacity-10"
                style={{
                  background: 'conic-gradient(from 180deg, #06b6d4, #3b82f6, #06b6d4)',
                }}
              />

              {/* Terminal window card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[300px] md:w-[340px] bg-[#111111] border border-dark-200/20 rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10"
              >
                {/* Terminal title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-dark-200/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-dark-300 text-xs font-mono">farza.dev</span>
                </div>

                {/* Photo area */}
                <div className="relative w-full aspect-square bg-dark-900">
                  <Image
                    src="/FarzaShahzad.jpg"
                    alt="Farza Shahzad"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                  {/* Subtle gradient overlay at bottom for blending */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] to-transparent" />
                </div>

                {/* Code snippet below photo */}
                <div className="px-4 py-3 font-mono text-xs leading-relaxed">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        index < visibleLines
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -10 }
                      }
                      transition={{ duration: 0.3 }}
                      className="flex"
                    >
                      <span className="text-blue-400">{line.key}</span>
                      <span className="text-cyan-300">{line.value}</span>
                    </motion.div>
                  ))}
                  {/* Blinking cursor on last visible line */}
                  {visibleLines >= codeLines.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-blue-400 ml-1"
                    />
                  )}
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-blue-500/10 border-t border-dark-200/10">
                  <span className="text-[10px] text-dark-300 font-mono">CECOS University</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-green-400 font-mono">available</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 text-center"
        >
          <p className="text-dark-300 text-sm mb-2">Scroll to explore</p>
          <div className="flex justify-center">
            <div className="w-6 h-10 border-2 border-dark-300 rounded-full flex items-start justify-center p-2">
              <motion.div className="w-1 h-2 bg-blue-400 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
