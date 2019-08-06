const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug
        },
      })
    })
  })
}