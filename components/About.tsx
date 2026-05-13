'use client'

import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { label: 'CGPA', value: '4.0' },
    { label: 'Projects Built', value: '8+' },
    { label: 'Work Experiences', value: '5+' },
    { label: 'Customers Reached', value: '1000+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-6 bg-dark-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-dark-50">About</span>
          <span className="ml-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-dark-300 text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto"
        >
          I&apos;m Farza Shahzad, a Flutter developer with hands-on experience building and shipping mobile applications integrated with Firebase, IoT hardware, and Python backends.
          Skilled in full-stack development across Flutter, Dart, and cloud services, with a track record of delivering real-world solutions for local and international clients.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-dark-900/80 border border-dark-200/20 rounded-lg hover:border-blue-400/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <p className="text-dark-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
