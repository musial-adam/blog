/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

const path = require(`path`)

// Async await API implementation

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const markdownBlogPostTemplate = path.resolve(`src/templates/md-blog-post.js`)

  const postsQuery = await graphql(
    `
      {
        blog {
          posts {
            title
            content
            slug
          }
        }

        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
              }
              html
            }
          }
        }
      }
    `
  )

  postsQuery.data.blog.posts.forEach(post => {
    createPage({
      path: post.slug,
      component: blogPostTemplate,
      context: {
        data: post,
      },
    })
  })

  postsQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: markdownBlogPostTemplate,
      context: {
        data: node,
      },
    })
  })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

//   const postsQuery = await graphql(
//     `
//       {
//         blog {
//           posts {
//             title
//             content
//             slug
//           }
//         }
//       }
//     `
//   )

//   postsQuery.data.blog.posts.forEach(post => {
//     createPage({
//       path: post.slug,
//       component: blogPostTemplate,
//       context: {
//         data: post,
//       },
//     })
//   })
// }

// ====================================================================================

// Promise based API

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

//     resolve(
//       graphql(
//         `
//           {
//             blog {
//               posts {
//                 title
//                 content
//                 slug
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           reject(result.errors)
//         }

//         result.data.blog.posts.forEach(post => {
//           createPage({
//             path: post.slug,
//             component: blogPostTemplate,
//             context: {
//               data: post,
//             },
//           })
//         })
//       })
//     )
//   })
// }
