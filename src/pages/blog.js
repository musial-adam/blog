import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

const PostWrapper = styled.div`
  border-radius: 5px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
`

const StyledLink = styled(Link)`
  /* border: 1px solid red; */
  display: inline-block;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.headerFont};
  font-weight: 300;
  color: ${({ theme }) => theme.accentLight};
  text-shadow: none;
  text-decoration: none;
  background-image: none;
  letter-spacing: 0.1rem;
  margin-bottom: 0;
  transition: all 0.15s ease-in-out;

  position: relative;
  overflow: hidden;

  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    transition: transform 0.15s ease;
    background-color: ${({ theme }) => theme.accentLight};
  }

  &:hover {
    
    color: white;
    
    &::before{
      transform: translateY(0);
    }
    /* color: white; */
    /* background-color: ${({ theme }) => theme.accentLight}; */
  }
`

const StyledDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lightGrey2};
`

const StyledDescription = styled.p`
  margin: 0;
  /* color: ${({ theme }) => theme.accentLight}; */
`

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { posts: cmsposts } = data.blog

  // const dates = data.blog.posts
  //   .map(post => post.dateAndTime)
  //   .map(dateAsString => new Date(dateAsString))
  //   .map(date =>
  //     date.toLocaleDateString('en-GB', {
  //       day: 'numeric',
  //       month: 'long',
  //       year: 'numeric',
  //     })
  //   )

  // // console.log(dates[0].getFullYear())
  // console.log(dates)

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

      <h1>Blog Posts from GraphCMS</h1>
      {cmsposts.map(post => (
        <PostWrapper key={post.slug}>
          <StyledLink to={post.slug}>{post.title}</StyledLink>
          <StyledDate>
            {new Date(post.dateAndTime).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </StyledDate>
          <StyledDescription>{post.description}</StyledDescription>
          {/* {console.log(new Date(post.dateAndTime))} */}
          {/* {console.log(post.dateAndTime)} */}
        </PostWrapper>
      ))}
    </>
  )
}

export default BlogPage

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
        description
        slug
        createdAt
        dateAndTime
      }
    }
  }
`
