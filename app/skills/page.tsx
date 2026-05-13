'use client'

import { motion } from 'framer-motion'
import { FiSmartphone, FiCpu, FiZap } from 'react-icons/fi'

const Skills = () => {
  const skillPillars = [
    {
      title: 'Flutter & Mobile',
      icon: FiSmartphone,
      color: 'from-blue-400 to-blue-600',
      skills: [
        'Flutter & Dart',
        'Firebase (Auth, Firestore, Cloud Functions)',
        'Provider State Management',
        'Bluetooth Communication',
        'REST APIs',
        'Real-time Data Sync',
        'UI/UX Implementation',
        'Cross-Platform Apps',
      ],
    },
    {
      title: 'IoT & Hardware',
      icon: FiCpu,
      color: 'from-cyan-400 to-cyan-600',
      skills: [
        'Bluetooth Integration',
        'Hardware-Software Bridging',
        'Sensor Integration (pH, TDS, Turbidity, Flow)',
        'Smart Device Communication',
        'Embedded Systems',
        'IoT Solutions',
      ],
    },
    {
      title: 'Tools & Other Skills',
      icon: FiZap,
      color: 'from-green-400 to-green-600',
      skills: [
        'Python',
        'C/C++',
        'SQL',
        'Gemini API',
        'Streamlit',
        'Railway & Supabase',
        'Figma (UI/UX Design)',
        'Git & GitHub',
        'Android Studio',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-dark-50">My</span>
            <span className="ml-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Specialized expertise across Flutter development, IoT & hardware integration, and software tools
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillPillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                />

                {/* Card content */}
                <div className="relative p-8 bg-dark-900/60 border border-dark-200/20 group-hover:border-blue-400/50 rounded-xl backdrop-blur-sm transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${pillar.color} p-3 mb-6 flex items-center justify-center`}>
                    <Icon size={28} className="text-dark-50" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-6 text-dark-50">
                    {pillar.title}
                  </h3>

                  {/* Skills list */}
                  <div className="space-y-3">
                    {pillar.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="text-dark-300 text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-dark-900/60 border border-dark-200/20 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Flutter',
              'Dart',
              'Python',
              'C/C++',
              'SQL',
              'Firebase',
              'Supabase',
              'Streamlit',
              'Railway',
              'Gemini API',
              'Figma',
              'Git',
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-dark-900/80 border border-dark-200/20 rounded-lg text-center hover:border-blue-400/50 transition-colors"
              >
                <span className="text-dark-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
