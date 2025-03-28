// Student users data
export const studentUsers = [
  {
    id: "student-1",
    fullName: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    portfolio: "https://alexjohnson.dev",
    resume: "https://alexjohnson.dev/resume.pdf",
    skills: ["React", "TypeScript", "Node.js", "UI/UX Design", "Next.js"],
    university: "Stanford University",
    major: "Computer Science",
    graduationYear: 2024,
    profileImage: "/placeholder.svg?height=200&width=200",
    bio: "Computer Science student passionate about web development and UI/UX design. Looking for internship opportunities.",
  },
  {
    id: "student-2",
    fullName: "Sophia Chen",
    email: "sophia.chen@example.com",
    phone: "+1 (555) 234-5678",
    portfolio: "https://sophiachen.dev",
    resume: "https://sophiachen.dev/resume.pdf",
    skills: ["Python", "Machine Learning", "Data Science", "SQL", "TensorFlow"],
    university: "MIT",
    major: "Data Science",
    graduationYear: 2023,
    profileImage: "/placeholder.svg?height=200&width=200",
    bio: "Data Science student with a focus on machine learning and AI. Seeking opportunities in data analysis and ML engineering.",
  },
  {
    id: "student-3",
    fullName: "Marcus Williams",
    email: "marcus.williams@example.com",
    phone: "+1 (555) 345-6789",
    portfolio: "https://marcuswilliams.dev",
    resume: "https://marcuswilliams.dev/resume.pdf",
    skills: ["Java", "Spring Boot", "Android", "Kotlin", "Firebase"],
    university: "UC Berkeley",
    major: "Software Engineering",
    graduationYear: 2025,
    profileImage: "/placeholder.svg?height=200&width=200",
    bio: "Software Engineering student specializing in mobile app development. Looking for Android development opportunities.",
  },
  {
    id: "student-4",
    fullName: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    phone: "+1 (555) 456-7890",
    portfolio: "https://oliviamartinez.dev",
    resume: "https://oliviamartinez.dev/resume.pdf",
    skills: ["UI/UX Design", "Figma", "Adobe XD", "HTML", "CSS", "JavaScript"],
    university: "Rhode Island School of Design",
    major: "Graphic Design",
    graduationYear: 2024,
    profileImage: "/placeholder.svg?height=200&width=200",
    bio: "Design student with a passion for creating beautiful and functional user interfaces. Seeking UI/UX design opportunities.",
  },
  {
    id: "student-5",
    fullName: "Ethan Kim",
    email: "ethan.kim@example.com",
    phone: "+1 (555) 567-8901",
    portfolio: "https://ethankim.dev",
    resume: "https://ethankim.dev/resume.pdf",
    skills: ["React Native", "Flutter", "Mobile Development", "JavaScript", "TypeScript"],
    university: "Carnegie Mellon University",
    major: "Human-Computer Interaction",
    graduationYear: 2023,
    profileImage: "/placeholder.svg?height=200&width=200",
    bio: "HCI student focused on mobile app development. Looking for opportunities to create intuitive and engaging mobile experiences.",
  },
]

// Function to get a student by ID
export function getStudentById(id: string) {
  return studentUsers.find((student) => student.id === id)
}

// User data (keeping for backward compatibility)
export const userData = studentUsers[0]

// Available skills for filtering and selection
export const availableSkills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Next.js",
  "Vue.js",
  "Angular",
  "Python",
  "Django",
  "Flask",
  "Ruby",
  "Ruby on Rails",
  "PHP",
  "Laravel",
  "Java",
  "Spring Boot",
  "C#",
  ".NET",
  "Go",
  "Rust",
  "Swift",
  "Kotlin",
  "Flutter",
  "React Native",
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "REST API",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "UI/UX Design",
  "Figma",
  "Adobe XD",
  "Sketch",
  "HTML",
  "CSS",
  "Sass",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "DevOps",
  "CI/CD",
  "Git",
  "Testing",
  "Jest",
  "Cypress",
  "Selenium",
  "Machine Learning",
  "Data Science",
  "Blockchain",
  "Smart Contracts",
  "Web3",
  "Solidity",
  "Project Management",
  "Agile",
  "Scrum",
  "Product Management",
]

// Job data
export const jobData = [
  {
    id: "job-1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    remote: "Hybrid",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    experience: "3-5 years",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    description:
      "We're looking for a Senior Frontend Developer to join our team and help build our next-generation web applications. You'll be working with a team of experienced developers to create responsive, accessible, and performant user interfaces.",
    responsibilities: [
      "Develop and maintain frontend applications using React and TypeScript",
      "Collaborate with designers to implement UI/UX designs",
      "Write clean, maintainable, and well-tested code",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with emerging trends and technologies",
    ],
    requirements: [
      "3+ years of experience with React",
      "Strong knowledge of TypeScript",
      "Experience with Next.js and GraphQL",
      "Understanding of responsive design principles",
      "Excellent problem-solving skills",
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Remote work options",
      "Professional development budget",
    ],
    postedDate: "2023-05-15",
    applicationDeadline: "2023-06-15",
  },
  {
    id: "job-2",
    title: "Full Stack Developer",
    company: "InnovateTech",
    location: "New York, NY",
    remote: "Remote",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    experience: "2-4 years",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "InnovateTech is seeking a Full Stack Developer to join our growing team. You'll be responsible for developing and maintaining web applications from the database to the user interface.",
    responsibilities: [
      "Design and implement new features and functionality",
      "Build reusable code and libraries for future use",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with other team members and stakeholders",
      "Ensure the technical feasibility of UI/UX designs",
    ],
    requirements: [
      "2+ years of experience with React",
      "Experience with Node.js and Express",
      "Knowledge of MongoDB or similar NoSQL databases",
      "Understanding of RESTful APIs",
      "Familiarity with version control systems like Git",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Flexible work hours",
      "Remote work options",
    ],
    postedDate: "2023-05-10",
    applicationDeadline: "2023-06-10",
  },
  {
    id: "job-3",
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Austin, TX",
    remote: "On-site",
    type: "Full-time",
    salary: "$90,000 - $110,000",
    experience: "2-5 years",
    skills: ["UI/UX Design", "Figma", "Adobe XD", "User Research"],
    description:
      "DesignHub is looking for a talented UI/UX Designer to create amazing user experiences. You'll work with product managers and engineers to design intuitive interfaces for our products.",
    responsibilities: [
      "Create user flows, wireframes, prototypes, and mockups",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Create and maintain design systems",
      "Stay up-to-date with design trends and best practices",
    ],
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency with design tools like Figma and Adobe XD",
      "Portfolio showcasing your design process and solutions",
      "Understanding of user-centered design principles",
      "Excellent communication and collaboration skills",
    ],
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "Flexible work hours",
      "Professional development opportunities",
      "Creative work environment",
    ],
    postedDate: "2023-05-05",
    applicationDeadline: "2023-06-05",
  },
  {
    id: "job-4",
    title: "Backend Developer",
    company: "DataSystems",
    location: "Seattle, WA",
    remote: "Hybrid",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    experience: "3-6 years",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
    description:
      "DataSystems is seeking a Backend Developer to design and implement server-side applications. You'll be responsible for the data architecture and API development for our products.",
    responsibilities: [
      "Design and implement scalable backend services",
      "Develop and maintain databases and data models",
      "Create and maintain RESTful APIs",
      "Implement security and data protection measures",
      "Optimize applications for performance and scalability",
    ],
    requirements: [
      "3+ years of experience in backend development",
      "Proficiency with Node.js and/or Python",
      "Experience with PostgreSQL or similar relational databases",
      "Knowledge of AWS or other cloud platforms",
      "Understanding of microservices architecture",
    ],
    benefits: [
      "Competitive salary and bonuses",
      "Comprehensive health benefits",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
    ],
    postedDate: "2023-05-01",
    applicationDeadline: "2023-06-01",
  },
  {
    id: "job-5",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Chicago, IL",
    remote: "Remote",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    experience: "4-7 years",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    description:
      "CloudTech is looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. You'll be responsible for automating deployment processes and ensuring the reliability of our systems.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage and optimize cloud infrastructure",
      "Automate deployment and scaling processes",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices",
    ],
    requirements: [
      "4+ years of experience in DevOps or similar role",
      "Experience with containerization technologies like Docker and Kubernetes",
      "Knowledge of AWS or other cloud platforms",
      "Experience with infrastructure as code tools like Terraform",
      "Understanding of networking and security concepts",
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Remote work options",
      "Professional development opportunities",
    ],
    postedDate: "2023-04-25",
    applicationDeadline: "2023-05-25",
  },
  {
    id: "job-6",
    title: "Product Manager",
    company: "ProductLabs",
    location: "Boston, MA",
    remote: "Hybrid",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    experience: "5-8 years",
    skills: ["Product Management", "Agile", "User Research", "Data Analysis"],
    description:
      "ProductLabs is seeking an experienced Product Manager to lead the development of our digital products. You'll work with cross-functional teams to define product vision, strategy, and roadmap.",
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize product requirements",
      "Work with design and engineering teams to deliver features",
      "Analyze market trends and competitive landscape",
      "Track and measure product performance metrics",
    ],
    requirements: [
      "5+ years of experience in product management",
      "Experience with Agile development methodologies",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Technical background or understanding of software development",
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health benefits",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
    ],
    postedDate: "2023-04-20",
    applicationDeadline: "2023-05-20",
  },
  {
    id: "job-7",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Remote",
    remote: "Remote",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    experience: "3-6 years",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    description:
      "AnalyticsPro is looking for a Data Scientist to help us extract insights from complex datasets. You'll be responsible for developing machine learning models and data analysis pipelines.",
    responsibilities: [
      "Develop machine learning models to solve business problems",
      "Analyze large datasets to extract actionable insights",
      "Create data visualizations and dashboards",
      "Collaborate with engineering teams to implement models",
      "Stay up-to-date with the latest research and techniques",
    ],
    requirements: [
      "3+ years of experience in data science or similar role",
      "Proficiency with Python and data science libraries",
      "Experience with SQL and database systems",
      "Knowledge of machine learning algorithms and techniques",
      "Strong mathematical and statistical background",
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "Flexible work hours",
      "Remote work options",
      "Professional development opportunities",
    ],
    postedDate: "2023-04-15",
    applicationDeadline: "2023-05-15",
  },
  {
    id: "job-8",
    title: "Mobile Developer (iOS)",
    company: "AppWorks",
    location: "Los Angeles, CA",
    remote: "Hybrid",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    experience: "2-5 years",
    skills: ["Swift", "iOS", "UIKit", "SwiftUI"],
    description:
      "AppWorks is seeking an iOS Developer to join our mobile team. You'll be responsible for developing and maintaining iOS applications that provide a great user experience.",
    responsibilities: [
      "Develop and maintain iOS applications",
      "Collaborate with cross-functional teams to define features",
      "Ensure the performance and quality of applications",
      "Identify and fix bugs and performance bottlenecks",
      "Stay up-to-date with Apple's design principles and guidelines",
    ],
    requirements: [
      "2+ years of experience in iOS development",
      "Proficiency with Swift and iOS frameworks",
      "Experience with UIKit and SwiftUI",
      "Understanding of RESTful APIs and data persistence",
      "Knowledge of code versioning tools like Git",
    ],
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "401(k) plan",
      "Flexible work arrangements",
      "Professional development budget",
    ],
    postedDate: "2023-04-10",
    applicationDeadline: "2023-05-10",
  },
]

// Project data
export const projectData = [
  {
    id: "project-1",
    title: "E-commerce Platform Redesign",
    description:
      "We're redesigning our e-commerce platform to improve user experience and conversion rates. Looking for UI/UX designers and frontend developers to join our team.",
    company: "ShopEasy",
    type: "Contract",
    duration: "3 months",
    skills: ["UI/UX Design", "React", "Next.js", "Tailwind CSS"],
    responsibilities: [
      "Redesign the user interface for better usability",
      "Implement responsive designs using React and Next.js",
      "Optimize the checkout process to reduce cart abandonment",
      "Collaborate with the product team to implement new features",
    ],
    requirements: [
      "Experience with e-commerce platforms",
      "Strong UI/UX design skills",
      "Proficiency with React and Next.js",
      "Knowledge of Tailwind CSS or similar frameworks",
    ],
    postedDate: "2023-05-12",
  },
  {
    id: "project-2",
    title: "Mobile App Development",
    description:
      "We're building a new mobile app for fitness tracking and need developers with experience in React Native or Flutter.",
    company: "FitTrack",
    type: "Part-time",
    duration: "6 months",
    skills: ["React Native", "Flutter", "Firebase", "UI/UX Design"],
    responsibilities: [
      "Develop a cross-platform mobile application",
      "Implement fitness tracking features and integrations",
      "Create an intuitive and engaging user interface",
      "Ensure the app works well on both iOS and Android",
    ],
    requirements: [
      "Experience with React Native or Flutter",
      "Knowledge of mobile app development best practices",
      "Understanding of fitness tracking concepts",
      "Ability to work with APIs and data storage solutions",
    ],
    postedDate: "2023-05-08",
  },
  {
    id: "project-3",
    title: "AI-Powered Recommendation System",
    description:
      "We're developing an AI-powered recommendation system for our content platform and need machine learning engineers and data scientists.",
    company: "ContentAI",
    type: "Full-time",
    duration: "Ongoing",
    skills: ["Machine Learning", "Python", "Data Science", "Recommendation Systems"],
    responsibilities: [
      "Design and implement recommendation algorithms",
      "Analyze user behavior data to improve recommendations",
      "Optimize algorithms for performance and accuracy",
      "Collaborate with the product team to integrate the system",
    ],
    requirements: [
      "Experience with recommendation systems",
      "Strong background in machine learning and data science",
      "Proficiency with Python and relevant libraries",
      "Understanding of content recommendation challenges",
    ],
    postedDate: "2023-05-05",
  },
  {
    id: "project-4",
    title: "Blockchain-Based Payment System",
    description:
      "We're building a blockchain-based payment system for cross-border transactions and need developers with experience in blockchain technologies.",
    company: "BlockPay",
    type: "Contract",
    duration: "4 months",
    skills: ["Blockchain", "Smart Contracts", "Solidity", "Web3"],
    responsibilities: [
      "Develop smart contracts for payment processing",
      "Implement secure transaction mechanisms",
      "Create interfaces for interacting with the blockchain",
      "Ensure compliance with regulatory requirements",
    ],
    requirements: [
      "Experience with blockchain technologies",
      "Knowledge of smart contract development",
      "Understanding of payment systems",
      "Familiarity with security best practices",
    ],
    postedDate: "2023-05-01",
  },
  {
    id: "project-5",
    title: "Educational Platform Development",
    description:
      "We're creating an interactive educational platform for online learning and need full-stack developers and UI/UX designers.",
    company: "EduLearn",
    type: "Part-time",
    duration: "5 months",
    skills: ["React", "Node.js", "MongoDB", "UI/UX Design"],
    responsibilities: [
      "Develop interactive learning features",
      "Create an intuitive user interface for students and teachers",
      "Implement assessment and progress tracking systems",
      "Ensure the platform is accessible and responsive",
    ],
    requirements: [
      "Experience with educational technology",
      "Full-stack development skills",
      "Understanding of learning management systems",
      "Knowledge of accessibility standards",
    ],
    postedDate: "2023-04-28",
  },
  {
    id: "project-6",
    title: "IoT Home Automation System",
    description:
      "We're developing an IoT system for home automation and need developers with experience in embedded systems and cloud integration.",
    company: "SmartHome",
    type: "Full-time",
    duration: "Ongoing",
    skills: ["IoT", "Embedded Systems", "Cloud Computing", "Node.js"],
    responsibilities: [
      "Develop firmware for IoT devices",
      "Create cloud-based control systems",
      "Implement secure communication protocols",
      "Design user interfaces for device control",
    ],
    requirements: [
      "Experience with IoT development",
      "Knowledge of embedded systems",
      "Understanding of cloud integration",
      "Familiarity with security best practices",
    ],
    postedDate: "2023-04-25",
  },
]

