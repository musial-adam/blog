import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import GeoLocation from './geo'

const BannerContainer = styled.div`
  position: sticky;
  top: 0;
  /* z-index: 1000; */
  height: 100vh;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Logo = styled.div`
  writing-mode: vertical-lr;
  background-color: black;
  /* color: black; */
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 5% 10%; */

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }

  h4 {
    color: white;
    line-height: 1;
    margin: 0;
    padding: 0;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

// const GeoLocation = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: black;
// `

const Banner = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <BannerContainer>
        <Logo>
          <h4>{data.site.siteMetadata.title}</h4>
        </Logo>
        <GeoLocation />
      </BannerContainer>
    )}
  />
)

export default Banner
