import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Markdown from 'react-markdown'

import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'

const Wrapper = styled.section`
  color: ${({ theme }) => theme.secondary};
  /* color: #444444; */

  h1 {
    font-weight: 100;
    font-family: sans-serif;
    color: #7f7f7f;
    line-height: 1.3;
    margin-bottom: 50px;

    strong {
      font-weight: 100;
      color: #333333;
    }
  }

  table {
    font-family: 'Roboto Mono';
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    table-layout: fixed;

    th,
    td {
      font-weight: 100;
      width: calc((1 / 3) * 100%);
      text-align: right;
      border: none;
      padding: 0;
    }

    td {
      color: #444444;
    }

    th {
      text-transform: uppercase;
      color: #7f7f7f;
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <Wrapper>
      <Markdown
        source={data.blog.indexPages[0].indexContent}
        escapeHtml={false}
      />
    </Wrapper>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    blog {
      indexPages {
        indexContent
      }
    }
  }
`
