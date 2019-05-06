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

// const LayoutContainer = styled.div`
//   display: grid;
//   position: relative;
//   grid-template-columns: 1fr 1fr;
//   /* grid-template-columns: 50px 1fr 1fr; */
//   background-color: white;

//   @media (max-width: 1000px) {
//     grid-template-columns: 100%;
//   }
// `

const LayoutLeft = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
`

const LayoutRight = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContentBox = styled.div`
  padding: 0 5%;
  /* margin: 0; */
  height: 100%;
  background-color: white;
`

const LayoutContainer = styled.div`
  position: relative;

  /* background-color: pink; */
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
    <BackgroundBox />
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
