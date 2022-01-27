import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Hero from "../components/hero"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import polyfill from '../utils/scroll-timeline'
const isBrowser = typeof window !== "undefined"

const IndexPage = () => {
  if (isBrowser) {
    polyfill()
  }
  return (
    <Layout>
      <SEO title="Vojtěch Loskot | Portfolio" />
      <Hero></Hero>
      <About></About>
      <Work></Work>
      {/* <Skills></Skills> */}
      {/* <Promotion></Promotion> */}
      <Footer></Footer>
    </Layout>
  );
}

export default IndexPage
