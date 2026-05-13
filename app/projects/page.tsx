'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Aqua Sentinel',
      description: 'Engineered an end-to-end IoT pipeline integrating flow, pH, TDS, and turbidity sensors for real-time water leakage detection and potability analysis. Deployed an ANN prediction model on Streamlit Community Cloud, surfacing Gemini API-generated insights on water consumption patterns to a Flutter mobile application via Firebase.',
      category: 'flutter',
      image: '💧',
      tech: ['Flutter', 'IoT', 'Streamlit', 'Gemini API', 'Firebase'],
      featured: true,
      period: 'Oct 2025 – Present',
      links: {
        github: 'https://github.com/farzask',
      },
    },
    {
      id: 2,
      title: 'Tap to Care',
      description: 'Shipped a Flutter application integrating Bluetooth communication with a sanitary pad dispenser, featuring fingerprint enrollment for hardware access control and a Firebase-backed admin panel for real-time user management.',
      category: 'flutter',
      image: '🤲',
      tech: ['Flutter', 'Bluetooth', 'Firebase', 'IoT'],
      featured: true,
      period: 'Aug 2025 – Oct 2025',
      links: {
        github: 'https://github.com/farzask',
      },
    },
    {
      id: 3,
      title: 'DNA Gen',
      description: 'Delivered a paid Flutter application for image authentication, connecting Cloudinary-hosted assets to a Railway-deployed Python backend with real-time Firebase data synchronization for approximately 50 active users.',
      category: 'flutter',
      image: '🧬',
      tech: ['Flutter', 'Firebase', 'Python', 'Railway', 'Cloudinary'],
      featured: true,
      period: 'Jan 2026 – Feb 2026',
      links: {
        github: 'https://github.com/farzask',
      },
    },
    {
      id: 4,
      title: 'Home Automation System',
      description: 'Guided Forward Public School Girls students in building a smart home prototype with temperature monitoring, light/fan control, door locks, and laser-based security. Developed a companion Flutter app for full IoT device control over the internet.',
      category: 'flutter',
      image: '🏠',
      tech: ['Flutter', 'IoT', 'Sensors', 'Bluetooth'],
      featured: true,
      period: 'Oct 2025',
      links: {
        github: 'https://github.com/farzask',
      },
    },
    {
      id: 5,
      title: 'SAHA NGO Website UI',
      description: 'Redesigned the complete UI of a non-profit website in Figma, optimizing donor-facing layouts for cross-platform engagement.',
      category: 'side-project',
      image: '🎨',
      tech: ['Figma', 'UI/UX Design', 'Responsive Design'],
      period: 'Feb 2026',
      links: {},
    },
    {
      id: 6,
      title: 'University Web Scraper',
      description: 'Built a hybrid scraping pipeline in Python using Selectolax and Selenium to extract and structure data from 200 universities into standardized JSON format.',
      category: 'side-project',
      image: '🕷️',
      tech: ['Python', 'Selectolax', 'Selenium', 'JSON'],
      featured: true,
      period: 'Sept 2025 – Nov 2025',
      links: {
        github: 'https://github.com/farzask',
      },
    },
    {
      id: 7,
      title: 'Student Attendance System',
      description: 'Designed and implemented a student attendance tracking system using Oracle Database, ensuring efficient and secure data management for academic institutions.',
      category: 'side-project',
      image: '📋',
      tech: ['Oracle Database', 'SQL', 'Data Management'],
      period: 'July 2024',
      links: {},
    },
    {
      id: 8,
      title: 'ATM Prototype',
      description: 'Developed a functional ATM prototype using Assembly Language, implementing core banking operations such as cash deposits, withdrawals, and balance inquiries.',
      category: 'side-project',
      image: '🏧',
      tech: ['Assembly Language', 'Low-Level Programming'],
      period: 'Feb 2024',
      links: {},
    },
    {
      id: 9,
      title: 'Art Gallery UI',
      description: 'Designed a responsive user interface for an art gallery using Figma, creating an optimized experience for both web and mobile platforms.',
      category: 'side-project',
      image: '🖼️',
      tech: ['Figma', 'UI Design', 'Responsive Design'],
      period: 'Feb 2024',
      links: {},
    },
    {
      id: 10,
      title: 'Car Rental System',
      description: 'Developed a Car Rental Application in C++, leveraging Object-Oriented Programming principles to ensure modularity, scalability, and efficient functionality.',
      category: 'side-project',
      image: '🚗',
      tech: ['C++', 'OOP', 'Data Structures'],
      period: 'July 2023',
      links: {},
    },
  ]

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter)

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

  const projectVariants = {
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
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-dark-50">Featured</span>
            <span className="ml-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            A selection of projects demonstrating expertise across Flutter, hardware integration, and software development
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { label: 'All', value: 'all' },
            { label: 'Flutter', value: 'flutter' },
            { label: 'Side Projects', value: 'side-project' },
          ].map((btn) => (
            <motion.button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === btn.value
                  ? 'bg-blue-500 text-dark-50'
                  : 'border border-dark-200/20 text-dark-300 hover:border-blue-400/50'
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-xl border border-dark-200/20 hover:border-blue-400/50 transition-all ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card content */}
              <div className="relative p-6 h-full bg-dark-900/60 backdrop-blur-sm flex flex-col">
                {/* Icon/Image */}
                <div className="text-6xl mb-4">{project.image}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-50 mb-1">
                  {project.title}
                </h3>

                {/* Period */}
                {project.period && (
                  <p className="text-blue-400 text-xs font-medium mb-2">{project.period}</p>
                )}

                {/* Description */}
                <p className="text-dark-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {'github' in project.links && (
                  <div className="flex gap-3 pt-4 border-t border-dark-200/20">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-dark-300 hover:text-blue-400 transition-colors"
                    >
                      <FiGithub size={18} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
