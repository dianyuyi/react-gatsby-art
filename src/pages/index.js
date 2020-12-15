import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Works from "../components/Works"
import About from "../components/About"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Works heading="Works" />
    {/* <About /> */}
    {/* <Stats /> */}
  </Layout>
)

export default IndexPage
