import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Sebastian Nørgaard</h1>
    <p>Master student in Software Engineering at University of Southern Denmark, Odense. Expected to graduate in Summer, 2020.</p>
    <p><a href="https://github.com/siigdev">Github</a></p>
    <p><a href="mailto:pwnage@live.dk">pwnage@live.dk</a></p>
    <p><a href="https://linkedin.com/in/sebastiannoergaard">LinkedIn</a></p>
  </Layout>
)

export default IndexPage
