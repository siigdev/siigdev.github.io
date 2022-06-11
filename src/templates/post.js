import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
import SEO from "../components/seo";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="blogPostHeader">
            <p>{frontmatter.title}</p> {frontmatter.date}
          </div>
          <hr />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="goBackFromPost">
            <Link to="/blog">Go back to blog</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
      fields {
        slug
      }
    }
  }
`;
