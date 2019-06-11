import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

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

const StyledPost = styled.article`
  /* code {
    display: block;
    background-color: grey;
    border-radius: 10px;
    padding: 20px;

    color: pink;
  } */
`

const BlogPost = ({ pageContext: { data } }) => (
  <>
    <h1>{data.title}</h1>
    <StyledPost>
      <Markdown source={data.content} escapeHtml={false} />
    </StyledPost>
    <StyledLink to="/blog">View All Posts</StyledLink>
  </>
)

BlogPost.propTypes = {
  pageContext: PropTypes.node.isRequired,
}

export default BlogPost
