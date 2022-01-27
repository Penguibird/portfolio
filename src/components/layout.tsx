/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"

import { polyfill } from 'css-typed-om';

const Layout = ({ children }) => {

  React.useEffect(() => {
    // polyfill(window);
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  )
}
export default Layout
