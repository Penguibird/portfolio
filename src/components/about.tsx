import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Fade from "react-reveal/Fade"

const About = () => {
  const offset = 200;
  const img = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    const height = window.innerHeight
    if (!img.current) {
      return;
    }

    const anim = img.current.animate([
      { transform: `translateY(${offset}))` },
      { transform: `translateY(-${offset}px)` },
    ], {
      duration: 1000000,
      fill: 'both',
      // @ts-ignore
      timeline: new ScrollTimeline({
        scrollOffsets: [
          // @ts-ignore
          new CSSUnitValue(0, 'px'),
          { target: img.current, edge: 'start', threshold: 0, rootMargin: '-20px', clamp: true }

        ],
        fill: 'both',
      })
    });
    // return anim.cancel;

  }, [])
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              I'm a 19 year old student from the Czech Republic, currently studying Computing Science at Dundee University in Scotland. When I'm away from the computer, I'm probably playing somewhere with my band, travelling or cycling.
              <br /><br />
              For the past three years I've been working as a freelance fullstack developer. If you need a website, mobile app or a bespoke software solution for your business, I'd love to help you! 
              {/* I have a trusted team of other developers, so we can handle projects of any scale. */}
              <br /><br />
              The purpose of this website is to present my work and projects and as a place for me to share interesting articles and tips I find. I specialise in web technologies, fullstack development and accessibility, but I'm a well-rounded person and this website will reflect that.
            </p>
          </div>
          <div className="image-wrapper" ref={img}>
            <StaticImage loading="eager" formats={["auto", "avif", "webp"]} className='img' src="../images/aboutMe.jpeg" alt='' layout='constrained' placeholder='blurred' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
