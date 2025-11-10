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
    title: 'Live News Platform',
    subtitle: 'HTML, CSS, JavaScript',
    description: 'Live news web application that displays news & blog articles, topics, and content based on user search.',
    image: '/assets/livenews.png',
    githubUrl: 'https://github.com/techmehedi/Newzer',
    liveUrl: 'https://sparkling-mochi-8f956b.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: '3',
    title: 'AI Spam Detector',
    subtitle: 'Python, Pandas, Streamlit, Scikit-learn',
    description: 'AI-powered spam detection system using machine learning and Streamlit, enabling real-time classification of messages as spam or not spam with a user-friendly web interface',
    image: '/assets/SpamDetector.png',
    githubUrl: 'https://github.com/techmehedi/Spam-Detection',
    liveUrl: 'https://spam-detection-yg0t.onrender.com',
    technologies: ['Python', 'Streamlit', 'Scikit-learn']
  },
  {
    id: '4',
    title: 'E-Commerce Library',
    subtitle: 'React, JavaScript, HTML, CSS',
    description: 'E-commerce app that displays data about popular and recommended books for others to explore.',
    image: '/assets/elibrary.png',
    githubUrl: 'https://github.com/techmehedi/BookLibraryReact',
    liveUrl: 'https://master--amazing-fenglisu-a0eea3.netlify.app/',
    technologies: ['React', 'JavaScript']
  },
  {
    id: '5',
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
    title: 'Software Engineer Intern',
    company: 'JPMorganChase',
    date: 'Jun 2025 – Aug 2025',
    bullets: [
      'Fine-tuned and deployed ML classification model on AWS SageMaker, meeting new business requirements',
      'Built a caching system with OpenSearch, enabling rapid retrieval of model outputs',
      'Integrated Azure OpenAI LLMs to optimize processes and improve performance by 30%'
    ]
  },
  {
    id: '2',
    title: 'Software Engineer Intern',
    company: 'JPMorganChase',
    date: 'Jun 2024 – Aug 2024',
    bullets: [
      'Designed a React and SpringBoot database synchronization tool with real-time updates for 53M customers',
      'Achieved 80% test coverage with Postman + JUnit, strengthening pipeline and reducing code errors',
      'Presented technical and business impact to senior managers, driving cross-team adoption'
    ]
  },
  {
    id: '3',
    title: 'Student Research Assistant',
    company: 'The City College of New York',
    date: 'Jan 2024 – April 2024',
    bullets: [
      'Assisted in developing ML models for adversarial defense, reducing risks by 30% in a US Air Force project',
      'Increased decision transparency and accuracy by 40% via multimodal sensing & deep learning',
      'Performed large-scale data preprocessing and feature engineering for model training & evaluation'
    ]
  }
]

export const education: Education = {
  school: 'The City College of New York',
  degree: 'Bachelor of Science in Computer Science',
  date: 'Expected Dec 2026',
  gpa: '3.9',
  coursework: [
    'Algorithms',
    'Data Structures',
    'Operating Systems',
    'Database Systems',
    'Software Engineering',
    'Programming Language Paradigms',
    'Computer Security'
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
    title: 'Computer Science Club Treasurer',
    description: 'Managed budgets and events that doubled student participation in workshops',
    icon: 'fas fa-users'
  },
  {
    id: '2',
    title: 'Google Developer Club Mentor',
    description: 'Led coding labs and demo days that gave students more project exposure',
    icon: 'fab fa-google'
  },
  {
    id: '3',
    title: 'ColorStack Ambassador',
    description: 'Organized interview prep sessions and leadership panels to expand student opportunities',
    icon: 'fas fa-handshake'
  },
  {
    id: '4',
    title: 'Programming Instructor',
    description: 'Taught students basic programming using JavaScript, increasing STEM awareness in high schools',
    icon: 'fas fa-chalkboard-teacher'
  },
  {
    id: '5',
    title: '4× Hackathon Winner',
    description: 'Delivered working prototypes under pressure and earned multiple first-place wins',
    icon: 'fas fa-trophy'
  },
  {
    id: '6',
    title: 'CodePath Fellow',
    description: 'Led code reviews and project workshops as teaching assistant that improved student completion rates',
    icon: 'fas fa-graduation-cap'
  }
]

