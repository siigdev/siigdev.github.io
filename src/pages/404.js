import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <b>Sorry...</b>
    <p>The page was not found.</p>
  </Layout>
);

export default NotFoundPage;
