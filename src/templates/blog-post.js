import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

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
    {/* <p>{data.content}</p> */}
    <Link to="/">Go back</Link>
  </>
)

BlogPost.propTypes = {
  pageContext: PropTypes.node.isRequired,
}

export default BlogPost
