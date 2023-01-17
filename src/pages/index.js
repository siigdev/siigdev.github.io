import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Hello! I'm Sebastian Nørgaard.</p>
    <p>
      A Software Engineer located in Odense, Denmark. Generally passionate
      about anything software-related, and highly dedicated to continously
      improve and learn new and exciting technologies.
    </p>
    <p>
      I am a founder of the disruptive multidestination online travel engine,{" "} <a href="https://tryp.com">Tryp.com</a>, where I dedicate my time managing the frontend development. I have prior professional experience in the full tech-stack working with large-scale, critical software systems for external clients. 
    </p>
    <p>
      You can find more information on{" "}
      <a href="https://github.com/siigdev">GitHub</a> or{" "}
      <a href="https://linkedin.com/in/sebastiannoergaard">LinkedIn</a>.
    </p>
    <p>
      Or contact me at <a href="mailto:pwnage@live.dk">sebastian@tryp.dk</a>.
    </p>
    <p></p>
  </Layout>
);

export default IndexPage;
