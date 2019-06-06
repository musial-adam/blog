import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Spring } from 'react-spring/renderprops'

const StyledLogo = styled.div`
  height: 200px;
  width: 50px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.darkGrey};

  display: flex;
  justify-content: center;
  align-items: center;

  writing-mode: vertical-lr;

  position: fixed;
  z-index: 20000;

  @media (max-width: 1000px) {
    writing-mode: horizontal-tb;
    height: 50px;
    width: 200px;
    position: static;
  }

  @media (max-width: 700px) {
    writing-mode: horizontal-tb;
    height: 50px;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.textColor};
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

const Logo = () => (
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
      <>
        {/* <Spring from={{ opacity: 0 }} to={{ opacity: 0.5 }}>
        {props => (
          <StyledLogo style={props}>
            <h4>{data.site.siteMetadata.title}</h4>
          </StyledLogo>
        )}
      </Spring> */}
        <StyledLogo>
          <h4>{data.site.siteMetadata.title}</h4>
        </StyledLogo>
      </>
    )}
  />
)

export default Logo
