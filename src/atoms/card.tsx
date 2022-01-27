import React, { ReactChild } from "react"
import Project, { Tech } from "../types/Project"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby";

import csharp from '../images/tech/c#.svg';
import code from '../images/tech/code.svg';
import css from '../images/tech/css.svg';
import design from '../images/tech/design.svg';
import gatsby from '../images/tech/gatsby.svg';
import handlebars from '../images/tech/handlebars.svg';
import html from '../images/tech/html.svg';
import javascript from '../images/tech/javascript.svg';
import mongodb from '../images/tech/mongodb.svg';
import mongodbreact from '../images/tech/mongodbreact.svg';
import sass from '../images/tech/sass.svg';
import sql from '../images/tech/sql.svg';
import typescript from '../images/tech/typescript.svg';

const techIcons = {
  'c#': csharp,
  code
  , css
  , design
  , gatsby
  , handlebars
  , html
  , javascript
  , mongodb
  , mongodbreact
  , sass
  , sql
  , typescript
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
      <Fade bottom>
        <h3 className="projects__row-title">
          {heading}
        </h3>
      </Fade>
      <div className="projects__row-content">
        <Fade bottom>
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
                <img
                  className={`projects__row-content-tech-svg ${t.toLowerCase()}`}
                  src={techIcons[t]}
                  alt={t}
                />
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
