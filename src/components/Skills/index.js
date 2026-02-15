import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
<p>
  I have a strong foundation in full-stack development, specializing in
  building scalable backend services using Java, Spring Boot, and Node.js.
  I focus on designing secure REST APIs, implementing JWT-based authentication,
  and developing database-driven applications using MySQL and PostgreSQL.
</p>
<p>
  My experience includes developing real-world management systems, working on
  financial and IoT applications, and integrating messaging systems like
  RabbitMQ and MQTT for reliable communication. I am committed to writing
  clean, maintainable code and continuously improving my problem-solving
  skills to build efficient and production-ready applications.
</p>

        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
