import React from "react"
import { Tech } from "../types/Project";

interface Skill {
  tech: Tech
  text: string
}
const skills: readonly Skill[] = [
  
] as const;

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <ul className="skills-grid">
            {skills.map((skill, index) => {
              const t = skill.tech
              return (
                <li className="skill" key={index}>
                  <img
                    aria-label={t}
                    data-balloon-pos="down"
                    className={`projects__row-content-tech-svg ${t.toLowerCase()}`}
                    src={require(`../images/tech/${t.toLowerCase()}.svg`)}
                    alt={t}
                  />
                  <p>{skill.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
