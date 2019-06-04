import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Markdown from 'react-markdown'

import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'

const Wrapper = styled.section`
  color: ${({ theme }) => theme.textColor};

  h1 {
    font-weight: 100;
    font-family: sans-serif;
    color: ${({ theme }) => theme.lightGrey2};
    line-height: 1.3;
    margin-bottom: 50px;

    strong {
      font-weight: 100;
      color: ${({ theme }) => theme.darkGrey};
    }
  }

  table {
    font-family: 'Roboto Mono';
    border-top: 1px solid ${({ theme }) => theme.lightGrey1};
    border-bottom: 1px solid ${({ theme }) => theme.lightGrey1};
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
      color: ${({ theme }) => theme.textColor};
    }

    th {
      text-transform: uppercase;
      color: ${({ theme }) => theme.lightGrey2};
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
