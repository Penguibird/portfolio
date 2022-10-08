import React, { ReactChild } from "react"
import Project, { Tech } from "../types/Project"
import { Fade } from "react-awesome-reveal"
import { Link } from "gatsby";
// declare module "*.svg" {
//   const value: string;
//   export = value;
// }
import * as techIcons from '../images/techComponents';

const vb = {
  'c#': "0 0 750 843",
  code: "0 0 24 24",
  css: "0 0 470 470",
  design: "0 0 24 24",
  gatsby: "0 0 2500 2500",
  handlebars: "0 0 2500 605",
  html: "0 0 611 611",
  javascript: "0 0 2500 2500",
  mongodb: "0 0 72 154",
  react: "0 0 519 488",
  sass: "0 0 1508 1131",
  sql: "0 0 2500 2461",
  typescript: "0 0 2500 2500",
}


const Card = ({ project }: { project: Project }) => {
  const {
    img,
    tech,
    text: paragraph,
    title: heading,
    isInternalUrl,
    url: projectLink
  } = project;

  const offset = '25%'
  const imgRef = React.useRef<HTMLDivElement>();
  const wrapperRef = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    if (!(imgRef.current && wrapperRef.current)) {
      return;
    }
    const animation = imgRef.current.animate([
      { transform: `translateY(-${offset})` },
      { transform: `translateY(${offset})` },
    ], {
      duration: 1000000,
      fill: 'both',
      // @ts-ignore
      timeline: new ScrollTimeline({
        scrollOffsets: [
          { target: wrapperRef.current, edge: 'end', threshold: 0, rootMargin: '-20px', clamp: true },
          { target: wrapperRef.current, edge: 'start', threshold: 0, rootMargin: '-20px', clamp: true }
        ],
        fill: 'both',
      })
    })
    // return animation.cancel;
  }, []);

  return (
    <div className="projects__row" ref={wrapperRef}>
      <div className="projects__row-img-cont" ref={imgRef}>
        {img}
      </div>
      <Fade triggerOnce direction="up">
        <h3 className="projects__row-title">
          {heading}
        </h3>
      </Fade>
      <div className="projects__row-content">
        <Fade triggerOnce direction="up">
          <p className="projects__row-content-desc">
            {paragraph}
          </p>
        </Fade>
        <ul className="projects__row-content-tech">
          {
            tech.map(t =>
              <li
                key={t}
                aria-label={t}
                data-balloon-pos="down"
              >
                {/* <img
                  className={`projects__row-content-tech-svg ${t.toLowerCase()}`}
                  src={techIcons[t]}
                  alt={t}
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`projects__row-content-tech-svg ${t.toLowerCase()}`}
                  viewBox={vb[t.toLowerCase()]}
                  width={24}
                  height={24}
                >
                  <use href={`#${t.toLowerCase()}`} />
                </svg>
              </li>
            )
          }
        </ul>
        {
          projectLink && (
            isInternalUrl
              ? <Link
                to={projectLink}
                className="projects__row-content-button primary-btn "
                target="_blank"
              >
                Case Study
              </Link>
              : <a
                href={projectLink}
                className="projects__row-content-button primary-btn "
                target="_blank"
              >
                Link to Project
              </a>
          )
        }

      </div>
    </div>
  )
}

export default Card
