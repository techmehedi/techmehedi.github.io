import { Project, Experience, Education, Skill, Activity } from './types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Reimbursement Platform',
    subtitle: 'Next.js, TypeScript, Tailwind, Supabase, Claude API, LangChain, Locus MCP',
    description: 'Reimburse.me is a modern, AI-powered employee reimbursement SaaS platform that businesses use to automate expense claims and pay employees instantly via Locus payments.',
    image: '/assets/reimb.png',
    githubUrl: 'https://github.com/techmehedi/Autopay-Agent',
    liveUrl: 'https://reimburseme-git-main-techmehedis-projects.vercel.app?_vercel_share=FVpGBHFiS88Pxar1yAXiHSkXxlKcWTwR',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase']
  },
  {
    id: '2',
    title: 'Crypto Tax Calculator Platform',
    subtitle: 'Next.js, Tailwind, Prisma, Postgres, Helius API, Covalent API, CoinGecko API',
    description: 'Built data pipelines that aggregate blockchain transactions across multiple networks. Designed APIs to automate cost basis calculations and reporting for IRS-compliant tax forms including Form 8949 and Schedule D.',
    image: '/assets/CryptoTax.png',
    githubUrl: 'https://github.com/techmehedi/CryptoTaxCalculator',
    technologies: ['Next.js', 'Tailwind', 'Prisma', 'Postgres', 'Helius API', 'Covalent API', 'CoinGecko API']
  },
  {
    id: '3',
    title: 'Live News Platform',
    subtitle: 'HTML, CSS, JavaScript',
    description: 'Live news web application that displays news & blog articles, topics, and content based on user search.',
    image: '/assets/livenews.png',
    githubUrl: 'https://github.com/techmehedi/Newzer',
    liveUrl: 'https://sparkling-mochi-8f956b.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: '4',
    title: 'AI Spam Detector',
    subtitle: 'Python, Pandas, Streamlit, Scikit-learn',
    description: 'AI-powered spam detection system using machine learning and Streamlit, enabling real-time classification of messages as spam or not spam with a user-friendly web interface',
    image: '/assets/SpamDetector.png',
    githubUrl: 'https://github.com/techmehedi/Spam-Detection',
    liveUrl: 'https://spam-detection-yg0t.onrender.com',
    technologies: ['Python', 'Streamlit', 'Scikit-learn']
  },
  {
    id: '5',
    title: 'AI Grammar Editor Platform',
    subtitle: 'Python/Flask, Ollama, PyQt6, OpenAI API',
    description: 'Built an AI-powered editing system using LLMs for text correction and refinement. Designed collaborative features with real-time updates and role-based access control for a Google Docs-like experience.',
    image: '/assets/AI-Grammer-Editor-Platform.png',
    githubUrl: 'https://github.com/techmehedi/AI-TEXT-EDITOR',
    technologies: ['Python', 'Flask', 'Ollama', 'PyQt6', 'OpenAI API']
  },
  {
    id: '6',
    title: 'E-Commerce Library',
    subtitle: 'React, JavaScript, HTML, CSS',
    description: 'E-commerce app that displays data about popular and recommended books for others to explore.',
    image: '/assets/elibrary.png',
    githubUrl: 'https://github.com/techmehedi/BookLibraryReact',
    liveUrl: 'https://master--amazing-fenglisu-a0eea3.netlify.app/',
    technologies: ['React', 'JavaScript']
  },
  {
    id: '7',
    title: 'Mental Health Hub',
    subtitle: 'HTML, CSS, JavaScript, Python',
    description: 'Mental health section added to City University of New York\'s official website. Allows students to easily schedule appointments with mental health counselors, collaborate with other students on similar topics, and talk to a AI mental health chatbot.',
    image: '/assets/mentalhealth.png',
    githubUrl: 'https://github.com/techmehedi/CunyCounseling',
    liveUrl: 'https://astounding-liger-af2d02.netlify.app/counseling.html',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python']
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Undergraduate Research Assistant',
    company: 'The City College of New York',
    date: 'Nov 2025 – Present',
    bullets: [
      'Researching generative AI Agents for NYC Real Estate and Engineering applications',
      'Developing innovative solutions using cutting-edge AI technologies',
      'Collaborating with faculty and researchers on advanced AI projects'
    ]
  },
  {
    id: '2',
    title: 'Software Engineer Intern',
    company: 'Locus (YC F25)',
    date: 'Oct 2025 – Present',
    bullets: [
      'Building scalable software solutions for a Y Combinator-backed startup',
      'Contributing to product development in a fast-paced startup environment',
      'Working on full-stack development with modern technologies'
    ]
  },
  {
    id: '3',
    title: 'Software Engineer Intern',
    company: 'JPMorganChase',
    date: 'Jun 2025 – Aug 2025',
    bullets: [
      'Fine-tuned and deployed ML classification model on AWS SageMaker, meeting new business requirements',
      'Built a caching system with OpenSearch, enabling rapid retrieval of model outputs',
      'Integrated Azure OpenAI LLMs to optimize processes and improve performance by 30%',
      'Skills: Docker, AWS, Java, Spring Boot, AI, Machine Learning, Python'
    ]
  },
  {
    id: '4',
    title: 'Programming Instructor',
    company: 'ScholarStem',
    date: 'Nov 2022 – May 2025',
    bullets: [
      'Taught programming fundamentals to students using Python and JavaScript',
      'Developed curriculum and lesson plans to enhance student learning outcomes',
      'Mentored students in coding projects and provided technical guidance',
      'Skills: Communication, Python, JavaScript, Leadership'
    ]
  },
  {
    id: '5',
    title: 'Software Engineer Intern',
    company: 'JPMorganChase',
    date: 'Jun 2024 – Aug 2024',
    bullets: [
      'Designed a React and SpringBoot database synchronization tool with real-time updates for 53M customers',
      'Achieved 80% test coverage with Postman + JUnit, strengthening pipeline and reducing code errors',
      'Presented technical and business impact to senior managers, driving cross-team adoption',
      'Skills: Kubernetes, React.js, JavaScript, TypeScript, Jira, Bitbucket, Confluence, CI/CD'
    ]
  },
  {
    id: '6',
    title: 'Student Research Assistant',
    company: 'The City College of New York',
    date: 'Jan 2024 – Apr 2024',
    bullets: [
      'Assisted in developing ML models for adversarial defense, reducing risks by 30% in a US Air Force project',
      'Increased decision transparency and accuracy by 40% via multimodal sensing & deep learning',
      'Performed large-scale data preprocessing and feature engineering for model training & evaluation',
      'Skills: PyTorch, Python'
    ]
  },
  {
    id: '7',
    title: 'Software Engineer Tech Fellow',
    company: 'CodePath',
    date: 'Sep 2023 – Nov 2023',
    bullets: [
      'Led web development workshops and code reviews for students',
      'Mentored fellows in software engineering best practices',
      'Contributed to curriculum development and technical training programs'
    ]
  },
  {
    id: '8',
    title: 'Software Engineer Intern Fellow',
    company: 'STEMKasa',
    date: 'Jun 2023 – Aug 2023',
    bullets: [
      'Developed full-stack web applications using modern technologies',
      'Built RESTful APIs and integrated frontend with backend services',
      'Skills: Node.js, MongoDB, Express.js, React.js'
    ]
  },
  {
    id: '9',
    title: 'Software Engineer Intern Fellow',
    company: 'The Difference',
    date: 'Jan 2022 – Apr 2022',
    bullets: [
      'Developed mobile and web applications using Flutter and React',
      'Built backend services with Flask and Python',
      'Skills: Flutter, Dart, Flask, Python, React.js, JavaScript'
    ]
  }
]

export const education: Education = {
  school: 'The City College of New York',
  degree: 'Bachelor of Science in Computer Science',
  date: 'Expected Dec 2026',
  gpa: '3.9/4.0',
  coursework: [
    'Algorithms',
    'Data Structures',
    'Operating Systems',
    'Database Systems',
    'Software Engineering',
    'Programming Language Paradigms',
    'Computer Security'
  ],
  activities: [
    'Computer Science Club (ACM)',
    'Google Developer Club',
    'Dean\'s List'
  ],
  honors: [
    'Dean\'s List'
  ]
}

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    icon: 'fas fa-code',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'HTML/CSS', 'MySQL']
  },
  {
    category: 'Frameworks & Databases',
    icon: 'fas fa-layer-group',
    items: ['SpringBoot', 'React', 'Next.js', 'Flask', 'Express.js', 'PostgreSQL', 'Supabase']
  },
  {
    category: 'Developer Tools',
    icon: 'fas fa-tools',
    items: ['AWS', 'Docker', 'Kubernetes', 'Jira', 'Git', 'Postman', 'Bitbucket', 'Node.js', 'Linux/Unix', 'CI/CD', 'Tailwind']
  }
]

export const activities: Activity[] = [
  {
    id: '1',
    title: 'HackHarvard Winner',
    description: 'Won best use of Gemini API award at Harvard University hackathon (Oct 2025)',
    icon: 'fas fa-trophy'
  },
  {
    id: '2',
    title: 'HackKnight Winner',
    description: 'Won best use of Cloudflare award at Queen\'s College hackathon (Oct 2025)',
    icon: 'fas fa-trophy'
  },
  {
    id: '3',
    title: 'HackNYU Winner',
    description: 'Won first place in HackNYU on the MLH track (Feb 2024)',
    icon: 'fas fa-trophy'
  },
  {
    id: '4',
    title: 'John Jay Hackathon Winner',
    description: 'Won first place at 2023 John Jay College hackathon for web development/software engineering (May 2023)',
    icon: 'fas fa-trophy'
  },
  {
    id: '5',
    title: 'EasyA x Polkadot Hackathon',
    description: 'Won 2nd place for best use of Polkadot blockchain technology (Apr 2023)',
    icon: 'fas fa-trophy'
  },
  {
    id: '6',
    title: 'Microsoft Cybersecurity Scholarship',
    description: 'Awarded scholarship by Microsoft Scholarship Program (Oct 2022)',
    icon: 'fas fa-award'
  },
  {
    id: '7',
    title: 'Volunteer Mentor & Technology Instructor',
    description: 'Mentored high school students from underinvested communities in NYC, supporting college readiness and digital literacy (Jul 2025 - Sep 2025)',
    icon: 'fas fa-heart'
  },
  {
    id: '8',
    title: 'Computer Science Club (ACM)',
    description: 'Active member of ACM chapter, participating in workshops and technical events',
    icon: 'fas fa-users'
  },
  {
    id: '9',
    title: 'Google Developer Club',
    description: 'Member of Google Developer Club, contributing to coding labs and demo days',
    icon: 'fab fa-google'
  },
  {
    id: '10',
    title: 'Dean\'s List',
    description: 'Recognized for academic excellence with consistent high performance',
    icon: 'fas fa-star'
  }
]

