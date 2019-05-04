import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

import SVGIcon from './svg-icon'

const StyledFooter = styled.footer`
  border-top: 1px solid darkgrey;
  background-color: white;
  padding: 2% 5%;
  flex-shrink: 0; /* Footer if flex item within flex container - this blocks it from shrinking */
`

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    © {new Date().getFullYear()} {` `} Adam Musiał
    <br />
    Built with {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    <a href="https://www.gatsbyjs.org">
      <SVGIcon icon="gatsby" fill="#663399" />
    </a>
    {`, `}
    <a href="https://graphcms.com/">GraphCMS</a>
    {` & `}
    <a href="https://www.styled-components.com/">styled-components</a>
    {`.`}
  </StyledFooter>
)

export default Footer
