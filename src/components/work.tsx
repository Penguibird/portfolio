import React from "react"
import Card from "../atoms/card"
import Fade from "react-reveal/Fade"

// import data from "../yourdata"
import projects from "../content/projects"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>
          
          <Fade bottom cascade>
            <div className="projects__content">

              {projects.map((project, index) => (
                <Card
                  key={index}
                  project={project}
                />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div >
  )
}

export default Work
