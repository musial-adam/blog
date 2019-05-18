/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

    resolve(
      graphql(
        `
          {
            blog {
              posts {
                title
                content
                slug
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        console.log('--------------------------------------------------')
        console.log(result.data.blog.posts[0].title)
        console.log('--------------------------------------------------')
        // result.data.site.siteMetadata.forEach(({ node }) => {
        //   console.log('--------------------------------------------------')
        //   console.log(node)
        //   console.log('--------------------------------------------------')
        //   const path = node.slug
        //   console.log('--------------------------------------------------')
        //   console.log(path)
        //   createPage({
        //     path,
        //     component: blogPostTemplate,
        //     context: {
        //       path,
        //     },
        //   })
        // })
      })
    )
  })
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
//     // Query for markdown nodes to use in creating pages.
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

//         // Create pages for each markdown file.
//         result.data.blog.posts.forEach(({ node }) => {
//           const path = node.slug
//           createPage({
//             path,
//             component: blogPostTemplate,
//             // In your blog post template's graphql query, you can use path
//             // as a GraphQL variable to query for data from the markdown file.
//             context: {
//               path,
//             },
//           })
//         })
//       })
//     )
//   })
// }
