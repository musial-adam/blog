import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import './navigation.css'

const StyledNav = styled.nav`
  box-sizing: border-box;
  height: 50px;
  flex-shrink: 0; /* Navigation if flex item within flex container - this blocks it from shrinking */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const StyledLink = styled(Link)`
  font-size: 14px;
  font-family: 'Roboto Mono';
  font-weight: 300;
  color: #444444;
  text-shadow: none;
  text-decoration: none;
  background-image: none;
  letter-spacing: 0.1rem;
  margin: 0 1rem;

  &:nth-of-type(1) {
    margin-left: 0;
  }

  &:nth-of-type(4) {
    margin-right: 0;
  }

  &:hover {
    color: #0077dd;
    cursor: pointer;
  }
`

const Navigation = () => (
  <StyledNav>
    <StyledLink to="/" activeClassName="activeLink">
      Home
    </StyledLink>
    <StyledLink to="/writing" activeClassName="activeLink">
      Writing
    </StyledLink>
    <StyledLink to="/reading" activeClassName="activeLink">
      Reading
    </StyledLink>
    <StyledLink to="/about" activeClassName="activeLink">
      About
    </StyledLink>
  </StyledNav>
)

export default Navigation
