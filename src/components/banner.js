import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import GeoLocation from './geo'

const BetterLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 50px;

  writing-mode: vertical-lr;

  @media (max-width: 1000px) {
    writing-mode: horizontal-tb;
    height: 50px;
    width: 200px;
  }

  @media (max-width: 700px) {
    writing-mode: horizontal-tb;
    height: 50px;
    width: 100vw;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }

  h4 {
    color: white;
    font-weight: 100;
    line-height: 1;
    margin: 0;
    padding: 0;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const BannerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: hsl(90, 50%, 90%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1000px) {
    height: 50px;
    width: 100vw;
    flex-direction: row;
  }
`

const Logo = styled.div`
  writing-mode: vertical-lr;
  background-color: black;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    writing-mode: horizontal-tb;
    height: 100%;
    width: 200px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }

  h4 {
    color: white;
    font-weight: 100;
    line-height: 1;
    margin: 0;
    padding: 0;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const Banner = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryInBanner {
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
