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

const LayoutContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  /* grid-template-columns: 50px 1fr 1fr; */
  background-color: white;

  @media (max-width: 1000px) {
    grid-template-columns: 100%;
  }
`

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

const Layout = ({ children }) => (
  <LayoutContainer>
    {/* <Banner /> */}
    <Logo>
      <h4>Adam Musiał</h4>
    </Logo>
    <LayoutLeft>
      <BackgroundImage />
    </LayoutLeft>
    <LayoutRight>
      <Navigation />
      <ContentBox>{children}</ContentBox>
      <Footer />
    </LayoutRight>
  </LayoutContainer>
)

export default Layout
