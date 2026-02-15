import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const workExperience = [
  {
    id: 0,
    company: "TechSwing Solutions Pvt. Ltd.",
    companyUrl: "",
    position: "Software Developer",
    duration: "Feb 2026 – Present",
    location: "India",
    achievements: [
      "Developing scalable backend services using Java and Spring Boot following clean architecture principles.",
      "Designing and optimizing PostgreSQL database schemas to improve query performance and maintain data integrity.",
      "Collaborating with cross-functional teams to build secure REST APIs and production-ready enterprise applications."
    ]
  },
  {
    id: 1,
    company: "VVASAI Software Solutions Pvt. Ltd.",
    companyUrl: "",
    position: "Technical Consultant",
    duration: "Jul 2025 – Dec 2025",
    location: "India",
    achievements: [
      "Building full-stack applications using Node.js and PostgreSQL.",
      "Designing modular backend services and integrating frontend components for seamless user experience.",
      "Providing technical consultation on application architecture, API design and database optimization."
    ]
  },
  {
    id: 2,
    company: "Infosys Springboard",
    companyUrl: "",
    position: "Java Full Stack Developer Intern",
    duration: "Nov 2024 – Jan 2025",
    location: "Remote",
    achievements: [
      "Developed the 'All is Well Pharma Automation System' using Java, Spring Boot, React JS and MySQL.",
      "Implemented secure REST APIs and integrated frontend with backend services.",
      "Designed database schema and handled CRUD operations with optimized SQL queries."
    ]
  },
  {
    id: 3,
    company: "Unified Mentor",
    companyUrl: "",
    position: "Web Development Intern",
    duration: "May 2024 – Jun 2024",
    location: "Remote",
    achievements: [
      "Built responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React JS.",
      "Improved UI performance and ensured cross-browser compatibility.",
      "Applied modern frontend development best practices for maintainable code structure."
    ]
  }
]


const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p>
            My professional journey spans across various industries and technologies,
            from defense systems to trading platforms and social media applications.
            Each role has contributed to my growth as a versatile software engineer.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
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

export default Experience
