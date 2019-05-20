import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledLink = styled(Link)`
  display: block;
`

const WritingPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { posts: cmsposts } = data.blog

  return (
    <Layout>
      <h1>Blog Posts from MD files</h1>
      {posts.map(post => (
        <StyledLink
          to={post.node.frontmatter.slug}
          key={post.node.frontmatter.slug}
        >
          {post.node.frontmatter.title}
        </StyledLink>
      ))}

      <h1>Blog Posts from GraphCMS</h1>
      {cmsposts.map(post => (
        <StyledLink to={post.slug} key={post.slug}>
          {post.title}
        </StyledLink>
      ))}

      {/* <Link to="/first-post">First post</Link>
    <br />
    <Link to="/second-one">Second post</Link>

    <h1>Writing</h1> */}
      {/* <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis
      quas temporibus, neque sunt nostrum ab a, nemo provident nesciunt autem,
      numquam laborum vitae ipsa totam et sapiente. Delectus, suscipit. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo ad sequi
      odit neque, vel nobis harum repudiandae cumque molestias ipsum officia
      alias, facilis, non odio minus modi magni expedita? Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Ullam deserunt dolores doloribus unde?
      Exercitationem illo facilis, eos, deleniti perspiciatis aliquid mollitia
      provident dolorum fuga eius magni reiciendis cum optio eligendi! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempore nam
      molestiae neque earum soluta fuga! Mollitia commodi accusantium totam sed
      eum, quas, accusamus ullam vel optio neque culpa molestiae? Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Quos, ipsa! At quia
      inventore aut optio aliquam maxime, voluptas sed cumque ducimus iure ex
      est deleniti dolorum animi! Molestias, tempora illum. Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Quidem placeat iure itaque, aliquid
      ea culpa. Tempore asperiores consectetur est neque praesentium, quo in,
      voluptatum natus deleniti ducimus impedit, libero consequuntur! Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perspiciatis
      eum dolorum voluptatem. Ad aperiam sed quae nam deserunt provident nulla
      nesciunt sint. Dolorem quia, cum sequi eveniet dolorum numquam!
    </p> */}
    </Layout>
  )
}

export default WritingPage

export const PostListing = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
    blog {
      posts {
        title
        slug
      }
    }
  }
`
