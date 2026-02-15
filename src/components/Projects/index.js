import { useEffect, useState } from 'react'

import { faCode, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// Projects data - easily scalable for future additions
const projects = [
  {
    id: 0,
    title: "E-Commerce Application",
    description:
      "Developed a responsive e-commerce application with product listing, cart functionality, user authentication, and payment integration.",
    technologies: ["HTML", "CSS", "JavaScript", "IBM Cloud Foundry"],
    category: "Frontend Development",
    status: "Completed",
    year: "2023",
    company: "Personal Project",
    features: [
      "User authentication system",
      "Add to cart and checkout flow",
      "Payment integration",
      "Responsive UI design",
    ],
    images: ["/ecommerce.jpeg"],
    githubUrl:
      "https://github.com/rajapriyanka/E-Commerce-Application-On-IBM-Cloud-Foundry",
    liveUrl: null,
    isPrivate: false,
  },
  {
    id: 1,
    title: "Banking Website",
    description:
      "Built a role-based banking system enabling account management, secure transactions, and administrative controls.",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL"],
    category: "Full Stack Development",
    status: "Completed",
    year: "2023",
    company: "Personal Project",
    features: [
      "Role-based access control",
      "Account creation and management",
      "Secure transaction handling",
      "Admin dashboard",
    ],
    images: ["/Banking.png"],
    githubUrl:
      "https://github.com/rajapriyanka/Riyadhya-Banking-Website.git",
    liveUrl: null,
    isPrivate: false,
  },
  {
    id: 2,
    title: "Pharmacy Management System",
    description:
      "Developed a CRUD-based pharmacy automation system with billing, inventory tracking, and reorder alerts.",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL"],
    category: "Full Stack Development",
    status: "Completed",
    year: "2023",
    company: "Infosys Springboard",
    features: [
      "Medicine inventory management",
      "Automated billing system",
      "Reorder level alerts",
      "Secure REST API integration",
    ],
    images: ["/Pharma.png"],
    githubUrl:
      "https://github.com/rajapriyanka/Pharma-Automation-System.git",
    liveUrl: null,
    isPrivate: false,
  },
  {
    id: 3,
    title: "Unihub – Educational Management System",
    description:
      "Designed and implemented an automated educational management system for timetable generation, attendance tracking, and leave management.",
    technologies: ["Spring Boot", "React JS", "MySQL"],
    category: "Full Stack Development",
    status: "Completed",
    year: "2025",
    company: "Personal Project",
    features: [
      "Automated timetable generation with constraints",
      "Faculty attendance management",
      "Student leave management system",
      "Role-based authentication",
    ],
    images: ["/Unihub.png"],
    githubUrl:
      "https://github.com/rajapriyanka/UNIHUB.git",
    liveUrl: null,
    isPrivate: false,
  },
  {
    id: 4,
    title: "AI Resume Analyzer",
    description:
      "Built an AI-powered resume analysis platform that evaluates resumes and provides job-match optimization insights.",
    technologies: ["React JS", "Puter JS", "AI Integration"],
    category: "AI / Frontend Development",
    status: "Completed",
    year: "2025",
    company: "Personal Project",
    features: [
      "Resume parsing and analysis",
      "Job match scoring",
      "AI-based feedback suggestions",
      "Deployed web application",
    ],
    images: ["/Ai.png"],
    githubUrl:
      "https://github.com/rajapriyanka/AI-Resume-Analyzer.git",
    liveUrl:
      "https://ai-resume-analyzer-vert-nine.vercel.app/",
    isPrivate: false,
  },
];


const Projects = () => {
  const projectsArray = 'Projects'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>
A showcase of my full-stack development projects, ranging from enterprise-level management 
systems to AI-powered web applications. Each project demonstrates my ability to design 
secure backend systems, intuitive user interfaces, and scalable database-driven solutions.
          </p>
          
          {/* Category Filter */}
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Project Images Section - with provision for multiple images */}
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    <div className="image-carousel">
                      {project.images.map((image, idx) => (
                        <img key={idx} src={image} alt={`${project.title} ${idx + 1}`} />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="category">{project.category}</span>
                      <span className="year">{project.year}</span>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="company">{project.company}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.isPrivate && (
                      <span className="private-indicator">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Private Project</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
