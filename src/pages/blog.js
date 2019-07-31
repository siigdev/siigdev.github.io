import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="blogPosts">
    <Link to={post.frontmatter.path}>
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
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <Layout>{Posts}</Layout>
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            path
            title
          }
        }
      }
    }
  }
`