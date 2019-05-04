import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
  /*
  background-color: transparent;
  border: 1px solid red;
  margin: 0 auto;
  max-width: 960px;
  text-transform: uppercase;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0; */
`

const StyledLink = styled(Link)`
  color: darkgray;
  text-shadow: none;
  text-decoration: none;
  background-image: none;
  letter-spacing: 0.1rem;
  /* padding: 0rem 1rem; */
  margin: 0 1rem;
  &:nth-of-type(1) {
    margin-left: 0;
  }
  &:nth-of-type(4) {
    margin-right: 0;
  }

  &:hover {
    color: blue;
  }
`

const activeStyledLink = {
  borderBottom: '1px solid blue',
}

const Navigation = () => (
  <StyledNav>
    <StyledLink to="/" activeStyle={activeStyledLink}>
      Home
    </StyledLink>
    <StyledLink to="/writing" activeStyle={activeStyledLink}>
      Writing
    </StyledLink>
    <StyledLink to="/reading" activeStyle={activeStyledLink}>
      Reading
    </StyledLink>
    <StyledLink to="/about" activeStyle={activeStyledLink}>
      About
    </StyledLink>
  </StyledNav>
)

export default Navigation
