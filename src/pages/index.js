import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Hello! I'm Sebastian Nørgaard.</p>
    <p>A Software Engineer currently located in Odense, Denmark. 
      Generally enthusiastic about anything software-related, and very determined to continously improve and learn new and exciting technologies.</p>
    <p>I am currently full-time employed as a consultant for Netcompany at the Ministry of Higher Education and Science. Additionally, I dedicate my time to different entrepreneurial projects.</p>
    <p>You can find more information on <a href="https://github.com/siigdev">GitHub</a> or <a href="https://linkedin.com/in/sebastiannoergaard">LinkedIn</a>.</p>
    <p>Or contact me at <a href="mailto:pwnage@live.dk">pwnage@live.dk</a>.</p>
    <p></p>
  </Layout>
)

export default IndexPage
