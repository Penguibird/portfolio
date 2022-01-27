import React from "react"
import Fade from "react-reveal/Fade"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
          </Fade>
          <p>Get in touch, either through email or social media.</p>
          <a className="email-link" href={`mailto:loskotaklp@gmail.com`}>
            loskotaklp@gmail.com
          </a>
          <ul className="social-icons">
            <li>
              <a href="">
                
              </a>
            </li>
          </ul>
          {/* <a href="" className="primary-btn">
            Download CV
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
