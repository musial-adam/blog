import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: orange;
`

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    <div>
      <h1>Hi I am a footer</h1>
    </div>
  </StyledFooter>
)

export default Footer
