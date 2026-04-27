// Single source of truth for portfolio content.
// All values were extracted from Paramjit_Kaur_Portfolio.html.
// Edit this file to update the site.

export const profile = {
  name: 'Paramjit Kaur',
  initials: 'PK',
  title: 'Software Quality Assurance Engineer',
  location: 'Canada',
  yearsExperience: '4+',
  tagline: 'Canada • Software Quality Assurance Engineer • 4+ Years Experience',
  availability: 'Available for Opportunities',
  // Roles cycled in the Hero typed-text effect.
  roles: [
    'Software Quality Assurance Engineer',
    'Automation Test Engineer',
    'ISTQB® Certified Tester',
    'Selenium & Cypress Expert',
    'API Testing Specialist',
    'Agile QA Professional',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/paramjit-kaur-81952b229/',
    linkedinHandle: 'linkedin.com/in/paramjit-kaur-81952b229',
    // TODO: replace with your real email + GitHub when ready
    email: 'sahiarma@gmail.com',
    github: '#',
  },
  // Profile image lives in /public. BASE_URL prepends Vite's `base` so the
  // path works on GitHub Pages (served under /<repo-name>/) and in dev (served at /).
  avatar: `${import.meta.env.BASE_URL}MyImage.png`,
}

export const stats = [
  { num: 4, label: 'Years Exp.' },
  { num: 20, label: 'Tech Skills' },
  { num: 3, label: 'Certifications' },
  { num: 375, label: 'Connections' },
]

export const about = {
  heading: 'Software Quality Assurance Engineer',
  company: 'BMM Testlabs',
  paragraphs: [
    'Software Quality Assurance Engineer with strong experience in manual and automated testing across SaaS, cloud and enterprise applications. Skilled in front-end, back-end, API and mobile testing using Selenium, Cypress, Appium and Playwright.',
    'Strong understanding of Agile, CI/CD and QA processes, with a focus on improving test coverage, identifying issues early and ensuring high-quality releases. Proven ability to collaborate with cross-functional teams, mentor junior members and deliver reliable, user-friendly and compliant products.',
  ],
  highlights: [
    { icon: 'MapPin', label: 'Location', value: 'Canada' },
    { icon: 'Briefcase', label: 'Current Role', value: 'BMM Testlabs' },
    { icon: 'GraduationCap', label: 'Education', value: 'BTech, CS & Engineering' },
    { icon: 'Award', label: 'Certifications', value: 'ISTQB • LambdaTest' },
    { icon: 'GitBranch', label: 'Methodology', value: 'Agile / Scrum' },
    { icon: 'Linkedin', label: 'LinkedIn', value: '375 Followers' },
  ],
  floatCards: [
    { icon: 'CheckCircle2', color: 'text-accent', title: 'ISTQB® Certified', subtitle: 'CTFL Foundation' },
    { icon: 'Bot', color: 'text-primary', title: 'Automation Expert', subtitle: 'Selenium • Cypress • Playwright' },
  ],
}

export const experience = [
  {
    role: 'Software Quality Assurance Engineer',
    company: 'BMM Testlabs',
    logo: '🔬',
    period: 'Oct 2021 – Present',
    type: 'Full-time · 4 yrs 7 mos',
    description:
      'Leading software quality assurance for gaming and enterprise applications at BMM Testlabs — a global gaming testing and certification leader. Responsible for manual and automated testing across front-end, back-end, API, and mobile platforms. Ensuring regulatory compliance and seamless UI/UX for clients worldwide.',
    skills: [
      'Selenium',
      'Agile Methodologies',
      'API Testing',
      'Cypress',
      'Playwright',
      'Appium',
      'Jira',
      'CI/CD',
      'Defect Tracking',
    ],
  },
]

export const skillCategories = [
  {
    title: 'Testing Frameworks',
    icon: 'FlaskConical',
    accent: 'from-purple-500 to-indigo-500',
    type: 'bars',
    items: [
      { name: 'Selenium', pct: 90 },
      { name: 'Cypress', pct: 82 },
      { name: 'Playwright', pct: 80 },
      { name: 'Appium', pct: 75 },
      { name: 'JMeter', pct: 70 },
    ],
  },
  {
    title: 'API & Tools',
    icon: 'Plug',
    accent: 'from-emerald-500 to-teal-500',
    type: 'bars',
    items: [
      { name: 'Postman API', pct: 88 },
      { name: 'API Testing', pct: 85 },
      { name: 'Jira', pct: 90 },
      { name: 'Defect Tracking', pct: 92 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: 'Code2',
    accent: 'from-orange-500 to-amber-500',
    type: 'pills',
    pillColor: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    items: ['JavaScript', 'JSON', 'Kotlin', 'PHP', 'C++', 'C', 'MySQL'],
  },
  {
    title: 'QA Methodologies',
    icon: 'ListChecks',
    accent: 'from-pink-500 to-rose-500',
    type: 'bars',
    items: [
      { name: 'Agile / Scrum', pct: 93 },
      { name: 'Software Testing', pct: 95 },
      { name: 'CI/CD', pct: 78 },
    ],
  },
  {
    title: 'Other Technologies',
    icon: 'Network',
    accent: 'from-sky-500 to-blue-500',
    type: 'pills',
    pillColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    items: [
      'Networking',
      'Microsoft Office',
      'Communication',
      'Test Automation',
      'Mobile Testing',
      'Cloud Testing',
      'SaaS Testing',
      'UI/UX Testing',
    ],
  },
]

export const education = [
  {
    icon: '🎓',
    school: 'Sri Guru Granth Sahib World University',
    degree: 'Bachelor of Technology – BTech, Computer Science & Engineering',
    period: 'May 2013 – May 2017',
  },
  {
    icon: '🧪',
    school: 'Matrix College',
    degree: 'AEC – Software Testing',
    period: 'May 2019 – Jan 2021',
  },
  {
    icon: '💻',
    school: 'Mastermind Institute',
    degree: 'Diploma – Computer Hardware & Networking',
    period: 'Aug 2017 – Feb 2018',
  },
]

export const certifications = [
  {
    icon: '🏅',
    title: 'ISTQB® Foundation Level (CTFL)',
    issuer: 'iSQI Group',
    date: 'Certified – CTFL',
  },
  {
    icon: '🤖',
    title: 'LambdaTest Test Automation Professional Certificate',
    issuer: 'LambdaTest (now TestMu AI)',
    date: 'Issued: April 2024',
  },
  {
    icon: '📋',
    title: 'ServiceNow IT Leadership Professional Certificate',
    issuer: 'LinkedIn Learning',
    date: 'Completed 2024',
  },
]

export const contact = {
  heading: 'Get in touch',
  intro:
    "I'm always open to exciting QA opportunities, collaborations, or just a friendly chat about software quality. Reach out!",
  items: [
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/paramjit-kaur-81952b229',
      href: 'https://www.linkedin.com/in/paramjit-kaur-81952b229/',
    },
    { icon: 'MapPin', label: 'Location', value: 'Canada' },
    { icon: 'Briefcase', label: 'Current Company', value: 'BMM Testlabs' },
    {
      icon: 'BadgeCheck',
      label: 'Certifications',
      value: 'ISTQB® CTFL • LambdaTest Certified',
    },
  ],
}

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]
