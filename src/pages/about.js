import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Markdown from 'react-markdown/with-html'
import Img from 'gatsby-image'

const Avatar = styled(Img)`
  box-sizing: border-box;
  width: 100%;
  /* border-radius: 100%; */
  /* border: 4px solid ${({ theme }) => theme.accentLight}; */
  /* float: right; */
  filter: grayscale(1);
  mix-blend-mode: multiply;
`
// const Avatar = styled(Img)`
//   box-sizing: border-box;
//   width: 40%;
//   margin: 8px 0 20px 20px;
//   border-radius: 100%;
//   /* border: 4px solid ${({ theme }) => theme.accentLight}; */
//   float: right;
//   filter: grayscale(1);
// `

const AvatarWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.darkGrey};
  width: 40%;
  height: auto;
  overflow: hidden;
  margin: 8px 0 20px 20px;
  border-radius: 100%;
  float: right;
  /* background-color: ${({ theme }) => theme.accentLight}; */
  background-color: rgb(0,119,221,0.5);
`

const AboutWrapper = styled.section`
  position: relative;
  /* border-top: 1px solid ${({ theme }) => theme.lightGrey1}; */
  /* border-bottom: 1px solid ${({ theme }) => theme.lightGrey1}; */
  padding: 50px 0px;
  
  
  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.accentLight};
    padding-bottom: 2px;
    
    &:hover {
      color: ${({ theme }) => theme.accentLight};
    }
  }
`

const AboutPage = ({ data }) => (
  <>
    <h1>About</h1>
    <AboutWrapper>
      <AvatarWrapper>
        <Avatar fluid={data.file.childImageSharp.fluid} />
      </AvatarWrapper>
      <Markdown source={data.blog.pages[0].content} escapeHtml={false} />
    </AboutWrapper>
  </>
)

export default AboutPage

export const aboutPageQuery = graphql`
  query {
    file(relativePath: { eq: "avatar1.jpg" }) {
      id
      absolutePath
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    blog {
      pages(where: { name: "about" }) {
        name
        content
      }
    }
  }
`
