import React from 'react'
import Projects from '../Projects/Projects'
import data from '../../assets/data/projects.json'

function ProjectsPage() {
  return (
    <div>
      <h1>This is the Projects Page component</h1>
      <Projects name={data.name} website={data.website} />
      <Projects />
      <Projects />
    </div>
  )
}

export default ProjectsPage

// TO DO

// Use .map() to output the Projects component into this page
