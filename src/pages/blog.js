import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const PostLink = ({ post }) => (
  <div className="blogPosts">
    <Link to={`/blog/${post.fields.slug}`}>
      {post.frontmatter.title}
    </Link>

    {post.frontmatter.date}
  </div>
)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <Layout><br></br><SEO title="Blog" />{Posts}</Layout>
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`