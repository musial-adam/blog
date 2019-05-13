/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Banner from './banner'
import Navigation from './navigation'
import Footer from './footer'
import Image from './image'
import BackgroundImage from './background-image'

import Logo from './logo'
// import './layout.css'

import Header from './header'

const LayoutContainer = styled.div`
  /* position: relative; */
`

const ContentBox = styled.main`
  min-height: 90vh;
  width: 50vw;
  margin-left: calc(50vw - (100vw - 100%));
  background-color: pink;

  border: 2px solid darkcyan;

  /* position: fixed;
  top: 50px;
  left: calc(50vw - (100vw - 100%)); */

  @media (max-width: 1000px) {
    /* position: static; */
    width: 100vw;
    margin-left: 0;
  }
`

const BackgroundBox = styled.div`
  position: fixed;
  top: 0;
  left: 50px;
  background-color: red;
  height: 100vh;
  width: calc(50vw - (100vw - 100%) - 50px);

  @media (max-width: 1000px) {
    position: static;
    width: 100vw;
  }
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    {/* <BackgroundBox /> */}
    <ContentBox>{children}</ContentBox>
    <Footer />
  </LayoutContainer>
)

// const Layout = ({ children }) => (
//   <LayoutContainer>
//     {/* <Banner /> */}
//     <Logo>
//       <h4>Adam Musiał</h4>
//     </Logo>
//     <LayoutLeft>
//       <BackgroundImage />
//     </LayoutLeft>
//     <LayoutRight>
//       <Navigation />
//       <ContentBox>{children}</ContentBox>
//       <Footer />
//     </LayoutRight>
//   </LayoutContainer>
// )

export default Layout
