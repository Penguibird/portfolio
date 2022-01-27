import React from "react";

export type Tech = "HTML" | "CSS" | "react" | "C#" | "design" | "javascript" | "SQL" | "handlebars" | "sass" | 'typescript' | 'gatsby'

interface IProject {
    title: string
    text: string
    img: React.ReactChild
    url?: string
    isInternalUrl?: boolean
    tech: Tech[]
}

type Project = IProject
export default Project