export type Project = {
  name: string
  description: string
  tech: string[]
  category: 'Flutter' | 'Side Projects'
  github?: string
}

export type ExperienceItem = {
  role: string
  company: string
  date: string
  bullets: string[]
  tech: string[]
}

export const stats = [
  { label: 'CGPA', value: '4.0', suffix: '' },
  { label: 'Projects Built', value: '8', suffix: '+' },
  { label: 'Work Experiences', value: '5', suffix: '+' },
  { label: 'Customers Reached', value: '1000', suffix: '+' },
]

export const skillPillars = [
  {
    title: 'App Development',
    icon: 'Smartphone',
    skills: [
      'Flutter',
      'Dart',
      'Firebase',
      'Supabase',
      'REST APIs',
      'State Management',
      'Provider',
    ],
  },
  {
    title: 'Hardware & IoT',
    icon: 'Cpu',
    skills: [
      'Arduino',
      'ESP32',
      'Sensor Integration',
      'Bluetooth Communication',
      'Smart Systems',
    ],
  },
  {
    title: 'Full Stack',
    icon: 'Code',
    skills: [
      'Next.js',
      'Tailwind CSS',
      'PostgreSQL',
      'React',
      'TypeScript',
      
    ],
  },
]

export const otherTools = [
  'HTML/CSS',
  'JavaScript',
  'Vercel',
  'Streamlit',
  'Docker',
  'Notion',
  'Git',
  'GitHub',
  'Version Control',
  'Figma',
  'UI/UX Design',
  'Agile/Scrum',
  'Railway',
  'Python',
  'Google Colab',
  'Jupyter Notebooks',
  'Selenium',
  'Selectolax',
  'Scikit-learn',
  'Matplotlib',
  'C++',
  'Arduino',
  'ESP32',
  
]

export const experiences: ExperienceItem[] = [
  {
    role: 'Full Stack Development Intern',
    company: 'CDGAI, CECOS University',
    date: 'Apr 2026 — Present',
    bullets: [
      'Developing internal full-stack tooling and APIs for AI product workflows',
      'Collaborating with ML engineers to surface model outputs in production UIs',
    ],
    tech: ['Flutter', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    role: 'IoT Course Consultant',
    company: 'NAVTTC & British Council',
    date: 'Jan 2026 — Apr 2026',
    bullets: [
      'Designed and delivered IoT curriculum for a nationwide training cohort',
      'Mentored students on Arduino, ESP32, and sensor integration projects',
    ],
    tech: ['Arduino', 'ESP32', 'Curriculum Design'],
  },
  {
    role: 'Freelance Flutter Developer',
    company: 'Self-employed',
    date: '2025 — Present',
    bullets: [
      'Shipped production Flutter apps to 50+ active monthly users',
      'Handled end-to-end delivery: design, development, deployment, support',
    ],
    tech: ['Flutter', 'Firebase', 'BLE', 'REST APIs'],
  },
  {
    role: 'App & Hardware Integration Intern',
    company: 'ASTechSolutions, NIC Peshawar',
    date: 'Aug 2025 — Oct 2025',
    bullets: [
      'Built Flutter companion app for a Bluetooth-enabled hardware product',
      'Implemented BLE communication layer and OTA firmware update flow',
    ],
    tech: ['Flutter', 'BLE', 'ESP32', 'Dart'],
  },
  {
    role: 'Business Development Manager',
    company: 'Nebula X',
    date: 'Aug 2023 — Nov 2024',
    bullets: [
      'Led B2B outreach and partnership pipeline for new product launch',
      'Built sales playbook that closed first 12 enterprise pilots',
    ],
    tech: ['Strategy', 'Sales', 'Operations'],
  },
  {
    role: 'Owner / Founder',
    company: 'Pocket Sized Stories',
    date: 'Oct 2020 — Present',
    bullets: [
      'Ran independent e-commerce brand reaching 1000+ customers',
      'Managed inventory, marketing, fulfillment, and customer support',
    ],
    tech: ['E-commerce', 'Marketing', 'Operations'],
  },
]

export const education = {
  school: 'CECOS University, Peshawar',
  degree: 'BS Computer Science',
  cgpa: '4.0 / 4.0',
  date: 'Oct 2022 — July 2026',
}

export const volunteer = [
  {
    role: 'Campus Director',
    org: 'Zindigi Prize CECOS',
    date: '2024 — Present',
  },
  {
    role: 'Vice President',
    org: 'CECOS International Mathematical Union',
    date: '2023 — 2024',
  },
  { role: 'Event Lead', org: 'University Tech Society', date: '2022 — 2023' },
]

export const projects: Project[] = [
  {
    name: 'Aqua Sentinel',
    description:
      'IoT water quality monitoring app with real-time sensor dashboards, Streamlit analytics, and Gemini API alerts.',
    tech: ['Flutter', 'Firebase', 'ESP32', 'Streamlit', 'Gemini API'],
    category: 'Flutter',
    github: 'https://github.com/farzask',
  },
  {
    name: 'Tap to Care',
    description:
      'Bluetooth-enabled sanitary pad dispenser with fingerprint authentication and a companion Flutter control app.',
    tech: ['Flutter', 'BLE', 'Arduino', 'Fingerprint'],
    category: 'Flutter',
    github: 'https://github.com/farzask',
  },
  {
    name: 'DNA Gen',
    description:
      'Paid image authentication app — verifies originality and detects manipulation. 50+ active users.',
    tech: ['Flutter', 'Stripe', 'REST APIs'],
    category: 'Flutter',
    github: 'https://github.com/farzask',
  },
  {
    name: 'Home Automation System',
    description:
      'Smart home IoT prototype controlling lights, locks, and climate from one app.',
    tech: ['Flutter', 'ESP32', 'MQTT'],
    category: 'Flutter',
    github: 'https://github.com/farzask',
  },
  {
    name: 'Attend.io',
    description:
      'Attendance management system with QR check-in and admin analytics dashboard.',
    tech: ['Flutter', 'Firebase', 'Charts'],
    category: 'Flutter',
    github: 'https://github.com/farzask',
  },
  {
    name: 'Portfolio Site',
    description:
      'This very site — built with React, Tailwind, and Framer Motion.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    category: 'Side Projects',
    github: 'https://github.com/farzask',
  },
  {
    name: 'ScrapeKit',
    description:
      'Python web scraper toolkit with configurable selectors and export pipelines.',
    tech: ['Python', 'BeautifulSoup', 'CLI'],
    category: 'Side Projects',
    github: 'https://github.com/farzask',
  },
  {
    name: 'UI Studies',
    description:
      'A collection of Figma-to-code UI design explorations and component studies.',
    tech: ['Figma', 'UI/UX', 'Design'],
    category: 'Side Projects',
    github: 'https://github.com/farzask',
  },
  {
    name: 'CryptoPulse',
    description:
      'Lightweight crypto price tracker with watchlist and threshold alerts.',
    tech: ['Flutter', 'REST APIs', 'Charts'],
    category: 'Flutter',
    github: 'https://github.com/farzask',
  },
]
