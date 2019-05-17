import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "photo3.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
        />
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  /* position: fixed; */
  /* top: 0; */
  /* left: 50px; */
  /* background-color: red; */
  /* border: 3px solid yellow; */
  /* height: 100vh; */
  /* width: calc(50vw - (100vw - 100%) - 50px); */
  height: 100%;
  /* @media (max-width: 1000px) {
    position: static;
    width: 100%;
    height: auto;
    left: 0;
    width: 100vw;
  } */

  background: hsl(90, 50%, 90%);
  background-blend-mode: multiply;
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
