import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Markdown from 'react-markdown'

const AboutWrapper = styled.section`
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.lightGrey1};
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey1};
  padding: 50px 0px;
`

const ReadingPage = ({ data }) => (
  <>
    <h1>Reading</h1>
    <AboutWrapper>
      {console.log(data)}
      <Markdown source={data.blog.pages[0].content} escapeHtml={false} />
    </AboutWrapper>
  </>
)

export default ReadingPage

export const readingPageQuery = graphql`
  query {
    blog {
      pages(where: { name: "reading" }) {
        name
        content
      }
    }
  }
`
