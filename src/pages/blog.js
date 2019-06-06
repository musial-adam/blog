import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledLink = styled(Link)`
  display: block;
  font-size: 14px;
  font-family: ${({ theme }) => theme.bodyFont};
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  text-shadow: none;
  text-decoration: none;
  background-image: none;
  letter-spacing: 0.1rem;
  margin: 0 1rem;
`

const WritingPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { posts: cmsposts } = data.blog

  return (
    <>
      <h2>Blog Posts from MD files</h2>
      {posts.map(post => (
        <StyledLink
          to={post.node.frontmatter.slug}
          key={post.node.frontmatter.slug}
        >
          {post.node.frontmatter.title}
        </StyledLink>
      ))}

      <h2>Blog Posts from GraphCMS</h2>
      {cmsposts.map(post => (
        <StyledLink to={post.slug} key={post.slug}>
          {post.title}
        </StyledLink>
      ))}
    </>
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
