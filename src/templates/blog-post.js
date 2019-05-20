import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ pageContext: { data } }) => (
  <Layout>
    <h1>{data.title}</h1>
    <p>{data.content}</p>
    <Link to="/">Go back</Link>
  </Layout>
)

BlogPost.propTypes = {
  pageContext: PropTypes.node.isRequired,
}

export default BlogPost
