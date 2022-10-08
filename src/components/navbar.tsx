import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import '../utils/scroll-timeline.js';

const Navbar = () => {

  // const offset = '200px'
  const navbar = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const height = window.innerHeight
    if (!navbar.current) return;

    const animation = navbar.current.animate([
      { transform: `translateY(0))` },
      { transform: `translateY(${height / 2.3}px)` },
    ], {
      duration: 1000000,
      fill: 'both',
      // @ts-ignore
      timeline: new ScrollTimeline({
        scrollOffsets: [
          // @ts-ignore
          new CSSUnitValue(0, 'px'),
          // @ts-ignore
          new CSSUnitValue(height, 'px'),
        ],
        fill: 'both',
      })
    })
    // return animation.cancel
  }, [])
  return (
    <div className="section" style={{ overflow: "visible" }}>
      <div className="container" ref={navbar}>
        <div className="navbar-wrapper" >
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
