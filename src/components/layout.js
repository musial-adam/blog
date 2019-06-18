import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import Img from 'gatsby-image'

import GlobalStyle from '../utils/global-styles'
import Theme from '../utils/theme'

import GeoLocation from './geo'
import Header from './header'
import Footer from './footer'

// import HeroImg from '../assets/images/hero3.jpg'

const LayoutContainer = styled.div`
  position: relative;
`

const ContentBox = styled.main`
  min-height: calc(100vh - 150px);
  width: 50vw;
  margin-left: calc(50vw - (100vw - 100%));
  /* padding: 20px 50px; */
  padding: 60px 50px 20px 50px;
  /* CSS only for layout in dev stage */
  /* background-color: salmon; */
  /* border: 3px solid yellow; */

  @media (max-width: 1000px) {
    width: 100%;
    min-height: auto;
    margin-left: 0;
  }
`

const BackgroundBox = styled.div`
  /* background-color: ${({ theme }) => theme.accentLight}; */
  background-color: rgb(0,119,221,0.5);
  position: fixed;
  top: 0;
  left: 50px;
  height: 100vh;
  width: calc(50vw - (100vw - 100%) - 50px);
  overflow: hidden;

  /* CSS only for layout in dev stage */
  /* border: 3px solid orange; */

  /* background-image: url('${HeroImg}');
  background-color: hsl(348.5, 50%, 90%);
  background-blend-mode: multiply;
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover; */

  @media (max-width: 1000px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    /*padding-bottom: 60%; /* This is the CSS trick to force a div to keep its aspect ratio */
    /* background-position: 50% 40%; */
  }
`

const StyledImg = styled(Img)`
  height: 100vh;
  filter: grayscale(1);

  /* mix-blend-mode: normal; */
  mix-blend-mode: multiply;
  /* mix-blend-mode: screen; */
  /* mix-blend-mode: overlay; */
  /* mix-blend-mode: darken; */
  /* mix-blend-mode: lighten; */
  /* mix-blend-mode: color-dodge; */
  /* mix-blend-mode: color-burn; */
  /* mix-blend-mode: hard-light; */
  /* mix-blend-mode: soft-light; */
  /* mix-blend-mode: difference; */
  /* mix-blend-mode: exclusion; */
  /* mix-blend-mode: hue; */
  /* mix-blend-mode: saturation; */
  /* mix-blend-mode: color; */
  /* mix-blend-mode: luminosity; */

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <StaticQuery
      query={graphql`
        query BackgroundQuery {
          file(relativePath: { eq: "hero3.jpg" }) {
            id
            absolutePath
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyle />
          <LayoutContainer>
            <Header />
            <BackgroundBox>
              <StyledImg fluid={data.file.childImageSharp.fluid} />
              <GeoLocation />
            </BackgroundBox>
            <ContentBox>{children}</ContentBox>
            <Footer />
          </LayoutContainer>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
