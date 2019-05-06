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
  /* width: 100%; */
  height: 100%;
  background: hsl(90, 50%, 90%);
  background-blend-mode: multiply;
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
