'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/farzask', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/farza-shahzad/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:shahzad.farza@gmail.com', label: 'Email' },
  ]

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/skills', label: 'Skills' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-dark-900/50 border-t border-dark-200/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {'<Farza Shahzad />'}
            </h3>
            <p className="text-dark-300 text-sm">
              Flutter Developer | IoT Enthusiast | Hardware Integrator
            </p>
          </motion.div>

          {/* Nav Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h4 className="font-semibold mb-4 text-dark-50">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-dark-300 hover:text-blue-400 transition-colors text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h4 className="font-semibold mb-4 text-dark-50">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="text-dark-300 hover:text-blue-400 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-dark-200/10 pt-8 text-center text-dark-300 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Farza Shahzad. Built with Next.js, Tailwind, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
