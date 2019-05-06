import React from 'react'

import styled from 'styled-components'

import Navigation from './navigation'
import Logo from './logo'

const StyledHeader = styled.header`
  height: 50px;
  overflow: visible;
  display: flex;

  justify-content: space-between;

  @media (max-width: 700px) {
    height: 100px;
    flex-direction: column;
  }

  @media (max-width: 1000px) {
  }
`

const Header = () => (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
)

export default Header
