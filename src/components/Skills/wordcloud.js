import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'

  const texts = [
    'Java',
    'JavaScript',
    'SQL',
    'HTML',
    'CSS',
    'Thymeleaf',
    'React JS',
    'Spring Boot',
    'Node JS',
    'Express JS',
    'REST API',
    'JWT Authentication',
    'MySQL',
    'PostgreSQL',
    'RabbitMQ',
    'MQTT',
    'Git',
    'GitHub',
    'SourceTree',
    'Postman',
  ]

  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  }

  useEffect(() => {
    TagCloud(container, texts, options)
    setLoad(false)
  }, [])  // ✅ runs only once on mount

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
