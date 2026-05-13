'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Replace with your email service (Resend, EmailJS, etc.)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'shahzad.farza@gmail.com',
      href: 'mailto:shahzad.farza@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+92 346 8222882',
      href: 'tel:+923468222882',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Peshawar, Pakistan',
      href: '#',
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
            <span className="text-dark-50">Let&apos;s</span>
            <span className="ml-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 bg-dark-900/60 border border-dark-200/20 hover:border-blue-400/50 rounded-xl transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 mb-4">
                  <Icon size={24} className="text-blue-400" />
                </div>
                <h3 className="font-semibold text-dark-50 mb-2">{info.label}</h3>
                <p className="text-dark-300 text-sm">{info.value}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 bg-dark-900/60 border border-dark-200/20 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-50 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-900/80 border border-dark-200/20 focus:border-blue-400/50 rounded-lg text-dark-50 placeholder-dark-300 focus:outline-none focus:ring-1 focus:ring-blue-400/50 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-50 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-900/80 border border-dark-200/20 focus:border-blue-400/50 rounded-lg text-dark-50 placeholder-dark-300 focus:outline-none focus:ring-1 focus:ring-blue-400/50 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-dark-50 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-dark-900/80 border border-dark-200/20 focus:border-blue-400/50 rounded-lg text-dark-50 placeholder-dark-300 focus:outline-none focus:ring-1 focus:ring-blue-400/50 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-green-400 text-sm"
            >
              Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-400/50 rounded-lg text-red-400 text-sm"
            >
              ✗ Something went wrong. Please try again or email me directly.
            </motion.div>
          )}

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-dark-300 text-dark-50 font-semibold rounded-lg transition-all disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
