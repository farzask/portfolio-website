export type Project = {
  name: string
  description: string
  tech: string[]
  category: 'Flutter' | 'Full Stack' | 'Side Quests'
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
  {
    title: 'Hardware & IoT',
    icon: 'Cpu',
    skills: [
      'ESP32',
      'BLE / Bluetooth',
      'Sensors Integration',
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
    date: 'Apr 2026 - Present',
    bullets: [
      'Built and deployed full stack web apps including a dynamic CECOS Admission Portal.',
      'Collaborating with cross-functional teams to design scalable solutions and optimize performance.',
    ],
    tech: ['Next.js', 'PostgreSQL', 'REST APIs', 'Flutter'],
  },
  {
    role: 'IoT Course Consultant',
    company: 'NAVTTC & British Council',
    date: 'Jan 12–16, 2026',
    bullets: [
      'Participated as a Flutter developer with IoT integration experience',
      'Helped in designing and delivering IoT curriculum with Flutter Integration for a nationwide training cohort',
    ],
    tech: ['Flutter', 'Arduino', 'ESP32', 'Curriculum Design'],
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
      'Bidded for assigned freelancer and agency projects on Upwork, converting $100+ projects',
    ],
    tech: ['Strategy', 'Sales', 'Bidding', 'Upwork', 'Proposal Writing'],
  },
  {
    role: 'Founder',
    company: 'Pocket Sized Stories',
    date: 'Oct 2020 — Present',
    bullets: [
      'Ran independent e-commerce art and craft store reaching 1000+ customers',
      'Sold custimized polaroids, stickers, frames, and more through Instagram and WhatsApp',
      'Managed inventory, marketing, fulfillment, and customer support',
    ],
    tech: ['E-commerce', 'Marketing', 'Operations', 'Adobe Illustrator', 'Canva'],
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
    date: '2024 — 2026',
  },
  {
    role: 'Vice President',
    org: 'CECOS International Mathematical Union',
    date: '2023 — 2024',
  },
  { role: 'Event Lead', org: 'DigTech 2026', date: 'June 2026 - July 2026' },
]

export const projects: Project[] = [
  {
    name: 'CECOS Admission Portal',
    description:
      'A dynamic web application for managing admissions at CECOS University, connected with Supabase.',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Full Stack',
    github: 'https://admissions.cecos.edu.pk/',
  },
  {
    name: 'Forge — Multi-Agent AI App Builder',
    description:
      'In-browser multi-agent system that generates working apps from natural language, coordinating five agents (Clarifier, Designer, Data Agent, Builder, Verifier) with a self-healing loop that detects and repairs build failures autonomously. Built at the CMPO x CDGAI Agentic Hackathon.',
    tech: ['Next.js', 'TypeScript', 'Multi-Agent Systems', 'LLM'],
    category: 'Full Stack',
    github: 'https://github.com/farzask',
  },
  {
    name: 'Hunar Stori Landing Page',
    description:
      'A landing page for Hunar Stori, a Charsadda based Vocational Training Center for women, built with Next.js and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS'],
    category: 'Full Stack',
    github: 'https://hunar-storee.vercel.app/',
  },
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
    name: 'TOOP Certificate Generator and Verification Portal',
    description:
      'Secure certificate admin portal built for Devthon Hackathon (TOOP) — generates themed certificates with live preview and PDF export, supports CSV-driven batch generation, and pairs with a verification portal that authenticates each certificate via its unique ID and embedded QR code.',
    tech: ['Next.js', 'Tailwind CSS', 'Local Storage', 'CSV Parsing', 'PDF Generation'],
    category: 'Full Stack',
    github: 'https://toop-certificate-generator.vercel.app/',
  },
  {
    name: 'DNA Gen',
    description:
      'Image authentication app that captures and authenticates images. 50+ active users.',
    tech: ['Flutter', 'Firebase', 'REST APIs'],
    category: 'Flutter',
    github: 'https://github.com/farzask',
  },
  {
    name: 'Home Automation System',
    description:
      'Smart home IoT prototype controlling lights, locks, and climate from one app.',
    tech: ['Flutter', 'ESP32', 'MQTT'],
    category: 'Side Quests',
    github: 'https://github.com/farzask',
  },
  {
    name: 'Portfolio Site',
    description:
      'This very site built with React, Tailwind, and Framer Motion.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    category: 'Full Stack',
    github: 'https://farza-shahzad.vercel.app/',
  },
  {
    name: 'Python Web Scraper Toolkit',
    description:
      'Python web scraper toolkit for extracting data from around 250 University websites and storing it into a JSON file.',
    tech: ['Python', 'Selectolax', 'Selenium','JSON'],
    category: 'Side Quests',
    github: 'https://github.com/farzask',
  },
  {
    name: 'SAHA (NGO) Website UI Design',
    description:
      'Designed a modern, user friendly website UI for SAHA, a local NGO focused on Sustainability',
    tech: ['Figma', 'UI/UX', 'Design'],
    category: 'Side Quests',
    github: 'https://www.figma.com/design/dZLt3eNJf0sTsOtzOvQy6t/SAHA?node-id=0-1&t=CXcWM9i8j8sl2xBG-1',
  },
  {
    name: 'Quran App',
    description:
      'A mobile app for reading to the Quran, in a GenZ style keeping a person hooked to reciting, bookmarks the ayat where you left off, built with Flutter, for personal use.',
    tech: ['Flutter', 'Firebase'],
    category: 'Side Quests',
    github: 'https://github.com/farzask/quran-app',
  },
]
