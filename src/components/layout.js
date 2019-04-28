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

import Navigation from './navigation'
import Header from './header'
import Footer from './footer'
// import './layout.css'

const LayoutContainer = styled.div`
  /* height: 100vh;  */
  display: grid;
  position: relative;
  grid-template-columns: 50px 1fr 1fr;
  background-color: palevioletred;
`

const Banner = styled.div`
  position: sticky;
  top: 0;
  /* z-index: 1000; */
  height: 100vh;
  /* height: 100vh; */
`

const LayoutLeft = styled.div`
  position: sticky;
  top: 0;
  /* z-index: 1000; */
  height: 100vh;
  /* height: 100vh; */
  background-color: paleturquoise;
`

const LayoutRight = styled.div`
  padding: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContentBox = styled.div`
  padding: 0 5%;
  margin: 0;
  height: 100%;
  background-color: beige;
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <Banner>Banner</Banner>
    <LayoutLeft>Photo section</LayoutLeft>
    <LayoutRight>
      <Navigation />
      <ContentBox>{children}</ContentBox>
      <Footer />
    </LayoutRight>
  </LayoutContainer>
)

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           <main>{children}</main>
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
