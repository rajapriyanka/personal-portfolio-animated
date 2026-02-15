/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  faAws,
  faDocker,
  faGitAlt,
  faJava,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'

import './index.scss'


const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
           I am a passionate Full Stack Developer with strong expertise in 
           building scalable web applications using Java, Spring Boot, Node.js
           and ReactJS. I enjoy solving real-world problems through clean architecture, 
           optimized backend services and intuitive frontend interfaces.
           With hands-on experience in both Financial and IoT domains, 
           I focus on writing efficient backend logic, secure REST APIs and 
           database-driven applications. I am also an active problem solver 
           with 150+ LeetCode problems solved.
          </p>
          <p>
        My goal is simple:
        Code. Create. Impact.
          </p>
        </div>

       <div className="stage-cube-cont">
  <div className="cubespinner">
    <div className="face1">
      <FontAwesomeIcon icon={faJava} color="#f89820" />
    </div>

    <div className="face2">
      <FontAwesomeIcon icon={faReact} color="#61DBFB" />
    </div>

    <div className="face3">
      <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
    </div>

    <div className="face4">
      <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
    </div>

    <div className="face5">
      <FontAwesomeIcon icon={faAws} color="#FF9900" />
    </div>

    <div className="face6">
      <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
    </div>
  </div>
</div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
