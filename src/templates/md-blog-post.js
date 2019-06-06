import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const MarkdownWrapper = styled.div`
  pre {
    box-shadow: 2px 2px 4px -2px rgba(0, 0, 0, 0.5);
  }
  /* background-color: pink; */
  /* pre {
    border-radius: 20px;
  }
  code {
    background-color: pink;
  } */
`

const MarkdownBlogPost = ({ pageContext: { data } }) => (
  <>
    <h1>{data.frontmatter.title}</h1>
    {/* {console.log(data)} */}
    <MarkdownWrapper dangerouslySetInnerHTML={{ __html: data.html }} />
    <Link to="/">Go back</Link>
  </>
)

MarkdownBlogPost.propTypes = {
  pageContext: PropTypes.node.isRequired,
}

export default MarkdownBlogPost
