/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Img from 'gatsby-image'

import GlobalStyle from '../utils/global-styles'
import Theme from '../utils/theme'

// import BackgroundImage from './background-image'
import Footer from './footer'
import Header from './header'

import HeroImg from '../assets/images/hero3.jpg'

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
  /* border: 3px solid yellow; */

  @media (max-width: 1000px) {
    width: 100%;
    min-height: auto;
    margin-left: 0;
  }
`

const BackgroundBox = styled.div`
  position: fixed;
  top: 0;
  left: 50px;
  height: 100vh;
  width: calc(50vw - (100vw - 100%) - 50px);

  /* CSS only for layout in dev stage */
  /* border: 3px solid orange; */

  /* background-image: url('${HeroImg}'); */
  /* background-image: url('/assets/hero2.jpg'); */
  background-color: hsl(348.5, 50%, 90%);
  background-blend-mode: multiply;
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1000px) {
    position: static;
    width: 100%;
    height: auto;
    padding-bottom: 60%; /* This is the CSS trick to force a div to keep its aspect ratio */
    background-position: 50% 40%;
  }
`

const StyledImg = styled(Img)`
  height: 100vh;
  @media (max-width: 1000px) {
    width: 100%
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
            </BackgroundBox>
            <ContentBox>{children}</ContentBox>
            <Footer />
          </LayoutContainer>
        </>
      )}
    />
  </ThemeProvider>
)
// const Layout = ({ children }) => (
//   <ThemeProvider theme={Theme}>
//     <>
//       <GlobalStyle />
//       <LayoutContainer>
//         <Header />
//         <BackgroundBox>{/* <BackgroundImage /> */}</BackgroundBox>
//         <ContentBox>{children}</ContentBox>
//         <Footer />
//       </LayoutContainer>
//     </>
//   </ThemeProvider>
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
