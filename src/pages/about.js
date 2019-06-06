import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Avatar = styled(Img)`
  box-sizing: border-box;
  width: 40%;
  margin: 8px 0 20px 20px;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.accentLight};
  float: right;
`

const AboutWrapper = styled.section`
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.lightGrey1};
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey1};
  padding: 50px 0px;
`

const AboutPage = ({ data }) => (
  <>
    <h1>About</h1>
    <AboutWrapper>
      <Avatar fluid={data.file.childImageSharp.fluid} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quasi
        exercitationem corrupti tempora distinctio est, modi sint a recusandae
        vero commodi delectus saepe qui consectetur ipsum ut quo officia minima!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi
        eaque dicta, maiores error aliquid nostrum necessitatibus provident in
        quasi nam, nesciunt velit. At quos ad provident veniam odio explicabo?
      </p>
    </AboutWrapper>
  </>
)

export default AboutPage

export const avatarQuery = graphql`
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
  }
`
