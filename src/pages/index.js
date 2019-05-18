import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <h1>{data.blog.posts[0].title}</h1>
    <p>
      Wow! GraphQL is COOOL!!!!
      {data.blog.posts[0].content}
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    blog {
      posts(where: { id: "cjubqg1dgqxfc0c15gphmhm7w" }) {
        title
        content
      }
    }
  }
`
