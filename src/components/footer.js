import React from 'react'

import styled from 'styled-components'

import SVGIcon from './svg-icon'

const FooterSVG = styled(SVGIcon)`
  fill: rgba(0, 0, 0, 0.5);
  width: 16px;
  height: 16px;

  &:hover {
    fill: #444444;
    cursor: pointer;
  }
`

const FooterText = styled.div`
  max-width: 500px;
  padding: 0;
  margin-right: 50px;
  flex-shrink: 0;
`

const SVGsBox = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  align-self: flex-start;
`

const StyledFooter = styled.footer`
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 100px;
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 300;
  color: #444444;
  background-color: white;
  padding: 30px 40px;
  flex-shrink: 0; /* Footer if flex item within flex container - this blocks it from shrinking */
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Footer = () => (
  <StyledFooter>
    <FooterText>
      © {new Date().getFullYear()} {` `} Adam Musiał
      <br />
      Built with {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {`, `}
      <a href="https://graphcms.com/">GraphCMS</a>
      {` & `}
      <a href="https://www.styled-components.com/">styled-components</a>
      {`.`}
    </FooterText>
    <SVGsBox>
      <FooterSVG icon="github" />
      <FooterSVG icon="twitter" />
      <FooterSVG icon="instagram" />
    </SVGsBox>
  </StyledFooter>
)

export default Footer
