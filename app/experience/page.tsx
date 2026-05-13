'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const workExperiences = [
    {
      role: 'Full Stack Development Intern',
      company: 'CDGAI, Peshawar',
      period: 'Apr 2026 – Present',
      description: [
        'Built a responsive university admission portal in Next.js, streamlining the end-to-end student onboarding flow from form submission to confirmation. ',
      ],
    },
    {
      role: 'IoT Course Consultant',
      company: 'NAVTTC & British Council, Peshawar',
      period: 'Jan 2026',
      description: [
        'Engaged as an individual industry consultant to co-design an IoT curriculum integrating Flutter-based mobile application development with hardware systems.',
      ],
    },
    {
      role: 'Freelance Flutter Developer',
      company: 'Remote — International Client',
      period: 'Jan 2026 – Feb 2026',
      description: [
        'Delivered a paid Flutter application for image authentication, connecting Cloudinary-hosted assets to a Railway-deployed Python backend with real-time Firebase data synchronization for approximately 50 active users.',
      ],
    },
    {
      role: 'App & Hardware Development Intern',
      company: 'ASTechSolutions, NIC Peshawar',
      period: 'Aug 2025 – Oct 2025',
      description: [
        'Shipped a Flutter application integrating Bluetooth communication with a sanitary pad dispenser, featuring fingerprint enrollment for hardware access control and a Firebase-backed admin panel for real-time user management.',
      ],
    },
    {
      role: 'Business Development Manager',
      company: 'Nebula X, Peshawar',
      period: 'Aug 2023 – Nov 2024',
      description: [
        'Sourced and matched freelance projects on Upwork to appropriate developers, coordinating project alignment across a team of freelancers.',
      ],
    },
    {
      role: 'Owner',
      company: 'Pocket Sized Stories',
      period: 'Oct 2020 – Present',
      description: [
        'Successfully launched and monitored a small business specializing in custom made Polaroid prints.',
        'Leveraged social media marketing to reach 1000+ customers nationwide.',
      ],
    },
  ]

  const volunteerExperiences = [
    {
      role: 'Campus Director',
      company: 'Zindigi Prize Society, CECOS University',
      period: 'Dec 2024 – Present',
      description: [
        'Lead the CECOS chapter of the Zindigi Prize student society, affiliated with Zindigi by JS Bank, active across multiple universities nationwide.',
      ],
    },
    {
      role: 'Vice President',
      company: 'CECOS International Mathematical Union',
      period: 'Dec 2024 – Present',
      description: [],
    },
    {
      role: 'Female President',
      company: 'CECOS Sports Society',
      period: 'Jan 2023 – Present',
      description: [],
    },
    {
      role: 'Volunteer',
      company: 'CECOS Career Development Center',
      period: 'Feb 2024 – Present',
      description: [],
    },
  ]

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-dark-50">Work</span>
            <span className="ml-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            From full-stack development and IoT consulting to freelance projects and entrepreneurship
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-transparent" />

          {/* Timeline items */}
          <div className="space-y-12">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 bg-dark-900/60 border border-dark-200/20 hover:border-blue-400/50 rounded-xl transition-all"
                  >
                    <h3 className="text-2xl font-bold text-dark-50 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-dark-300 text-sm mb-4">{exp.period}</p>

                    {exp.description.length > 0 && (
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-dark-300 text-sm">
                            <span className="text-blue-400 mt-1">&#9656;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-500 border-4 border-dark-900 items-center justify-center flex-shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full bg-dark-900" />
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-dark-50">Education</span>
          </h2>
          <div className="space-y-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-dark-900/60 border border-dark-200/20 hover:border-blue-400/50 rounded-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-dark-50 mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-blue-400 font-semibold mb-2">CECOS University of IT and Emerging Sciences, Peshawar</p>
              <div className="flex flex-wrap gap-4 text-dark-300 text-sm">
                <span>Oct 2022 – Jul 2026</span>
                <span className="text-blue-400 font-semibold">CGPA: 4.0</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-dark-900/60 border border-dark-200/20 hover:border-blue-400/50 rounded-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-dark-50 mb-2">Higher Secondary School Certificate</h3>
              <p className="text-blue-400 font-semibold mb-2">Army Public School and College (Girls), Peshawar</p>
              <p className="text-dark-300 text-sm">Aug 2017 – Jul 2019</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Volunteer Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-dark-50">Volunteer </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="space-y-6">
            {volunteerExperiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-dark-900/60 border border-dark-200/20 hover:border-blue-400/50 rounded-xl transition-all"
              >
                <h3 className="text-xl font-bold text-dark-50 mb-1">{exp.role}</h3>
                <p className="text-blue-400 font-semibold mb-2">{exp.company}</p>
                <p className="text-dark-300 text-sm mb-2">{exp.period}</p>
                {exp.description.length > 0 && (
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-dark-300 text-sm">
                        <span className="text-blue-400 mt-1">&#9656;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
