import React from "react"
import Fade from "react-reveal/Fade"
// import data from "../yourdata"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                Vojtěch Loskot
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>A computing science student and freelance developer</p>
          </Fade>
          <Fade bottom>
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
