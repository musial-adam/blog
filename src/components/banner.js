import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const BannerContainer = styled.div`
  position: sticky;
  top: 0;
  /* z-index: 1000; */
  height: 100vh;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  writing-mode: vertical-lr;
`

const Logo = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 220px;
  /* padding: 5% 10%; */

  h4 {
    color: white;
    text-transform: uppercase;
    /* letter-spacing: 2px; */
  }
`

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
      </BannerContainer>
    )}
  />
)

export default Banner
