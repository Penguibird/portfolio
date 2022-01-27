import React from 'react'
import type Project from "../types/Project";
import { StaticImage } from "gatsby-plugin-image";
import { Tech } from '../types/Project';

export default [
    {
        title: "Trippi",
        text: "An app for reporting work trip expenses developped for TietoEVRY. Trippi replaced their old paper system and is used by over 2 700 employees of the Czech branch of TietoEVRY as the primary way to report expenses.",
        img: <StaticImage className='img drop-shadow' src="../images/portfolio/trippi.png" alt='' layout='constrained' placeholder='blurred' />,
        // url: "/Trippi",
        // isInternalUrl: true,
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'C#', 'SQL']
    },
    {
        title: 'Element communications',
        text: 'The client (a small communications agency) wanted a bold unique design. We settled on using blob-like shapes combined with a parallax for a light, plastic, yet clean and professional look. The parallax is achieved through pure css, making it fast and responsive even on slower devices.',
        img: <StaticImage className='img drop-shadow' src="../images/portfolio/element.png" alt='' layout='constrained' placeholder='blurred' />,
        url: 'https://elementcommunications.cz/',
        isInternalUrl: false,
        tech: ['HTML', 'Handlebars','Sass', 'Javascript', ]
    },
    {
        title: 'Kousek po kousku',
        text: 'A website for a local non profit charity. Part of the overhaul was launching an online store run through an ecommerce platform. A particular feature is an interactive map showing projects the foundation has supported over the past 10 years, highlighting the impact and regional focus.',
        img: <StaticImage className='img drop-shadow' src="../images/portfolio/kousek.png" alt='' layout='constrained' placeholder='blurred' />,
        url: 'https://www.kousekpokousku.cz/',
        isInternalUrl: false,
        tech: ['HTML', 'sass', 'typescript', "gatsby", 'react'],
    },
    {
        title: 'Artemea',
        text: 'An employee skill management system, which allows the HR department of TietoEVRY to track the skills, certifications, trainings and career positions of their employees. One of the main features is a gamification aspect, where the employees are rewarded for keeping their profiles up to date with virtual currency.',
        img: <StaticImage className='img drop-shadow' src="../images/portfolio/artemea_profile.png" alt='' layout='constrained' placeholder='blurred' />,
        // url: '/artemea',
        // isInternalUrl: false,
        tech: ['HTML', 'CSS', 'Javascript', 'react', 'c#', 'mongoDB'] as const

    },
    {
        title: 'Doctobrain',
        text: 'A small czech telemedicine startup focusing on simplifying the medicine prescription process. I was a designer and developer of their Android and iOS app. We heavily utilised multi-platform technologies, like React Native and Expo to allow us to develop both apps with a single codebase.',
        img: <StaticImage className='img' src="../images/portfolio/doctobrain.png" alt='' layout='constrained' placeholder='blurred' />,
        // url: '/doctobrain',
        // isInternalUrl: false,
        tech: ['react', 'typescript', 'design',]
    },
    {
        title: 'Skimysak.cz',
        text: 'Website for a local ski centre. The website involves communicating with an external weather API, a well optimised hero video on the mainpage and a CMS for managing posts and updates on the page. The design was halfway done when I joined the project, but I still contributed to the final look significantly.',
        img: <StaticImage className='img drop-shadow' src="../images/portfolio/skimysak.png" alt='' layout='constrained' placeholder='blurred' />,
        url: 'https://skimysak.cz/',
        isInternalUrl: false,
        tech: ['HTML', 'sass', 'typescript', 'gatsby', 'react',]
    },
] as Project[];