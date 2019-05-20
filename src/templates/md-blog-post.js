import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const MarkdownBlogPost = ({ pageContext: { data } }) => (
  <Layout>
    <h1>{data.frontmatter.title}</h1>
    {console.log(data)}
    <div dangerouslySetInnerHTML={{ __html: data.html }} />
    <Link to="/">Go back</Link>
  </Layout>
)

MarkdownBlogPost.propTypes = {
  pageContext: PropTypes.node.isRequired,
}

export default MarkdownBlogPost
