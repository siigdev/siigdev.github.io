import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Hello! I'm Sebastian Nørgaard.
    <p>A Master student in Software Engineering at the University of Southern Denmark, Odense. 
      Will be graduating in June, 2020. Generally enthusiastic about anything software-related, 
      and very dedicated to keep improving and learning new and exciting technologies.</p>
    <p>Currently looking out for a student job while I write my master thesis. Feel free to reach out to me if you have anything interesting.</p>
    <p>You can find more information on <a href="https://github.com/siigdev">Github</a> or <a href="https://linkedin.com/in/sebastiannoergaard">LinkedIn</a></p>
    <p>Or contact me through <a href="mailto:pwnage@live.dk">pwnage@live.dk</a></p>
    <p></p>
  </Layout>
)

export default IndexPage
