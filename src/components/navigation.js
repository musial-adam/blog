import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled.nav`
  height: 50px;
  width: 50vw;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 100%;
    position: static;
  }

  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey1};
`

const StyledLink = styled(Link)`
  font-size: 14px;
  font-family: 'Roboto Mono';
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
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
    color: ${({ theme }) => theme.accentLight};
    cursor: pointer;
  }

  &.activeLink {
    border-bottom: 1px solid ${({ theme }) => theme.textColor};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.accentLight};
    }
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
