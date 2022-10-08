import React from "react"
import { Fade } from "react-awesome-reveal"
// import data from "../yourdata"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade triggerOnce direction="up">
            <h2>
              Hi, I'm
            </h2>
          </Fade>
          <Fade triggerOnce direction="up" cascade>
            <div className="heading-wrapper">
              <h1>
                Vojtěch Loskot
              </h1>
            </div>
          </Fade>
          <Fade triggerOnce direction="up">
            <p>A computing science student and freelance developer</p>
          </Fade>
          <Fade triggerOnce direction="up">
            <button
              className="primary-btn"
              onClick={() => scrollTo("#contact")}
            >
              Get in touch!
            </button>

          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
