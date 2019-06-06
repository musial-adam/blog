import React from 'react'
import styled from 'styled-components'

import SVGIcon from './svg-icon'

const FooterSVG = styled(SVGIcon)`
  fill: ${({ theme }) => theme.lightGrey2};
  width: 16px;
  height: 16px;

  &:hover {
    fill: ${({ theme }) => theme.textColor};
    cursor: pointer;
  }
`

const FooterText = styled.div`
  min-width: 410px;
  padding: 0;
  flex-shrink: 0;

  a {
    background-image: none;
    color: ${({ theme }) => theme.accentLight};
  }
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
  border-top: 1px solid ${({ theme }) => theme.lightGrey1};
  height: 100px;
  width: 50vw;
  margin-left: calc(50vw - (100vw - 100%));
  font-family: ${({ theme }) => theme.headerFont};
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  background-color: white;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1300px) and (min-width: 1000px) {
    flex-direction: column;
    padding: 15px 40px;
    align-items: flex-start;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    padding: 15px 40px;
    align-items: flex-start;
  }
`

const Footer = () => (
  <StyledFooter>
    <FooterText>
      © {new Date().getFullYear()} {` `} Adam Musiał
      <br />
      Built with {` `}
      {/* <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FooterSVG icon="gatsby" />
      </a> */}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noreferrer noopener"
      >
        Gatsby
      </a>
      {`, `}
      <a href="https://graphcms.com/" target="_blank" rel="noreferrer noopener">
        GraphCMS
      </a>
      {` & `}
      <a
        href="https://www.styled-components.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        styled-components
      </a>
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
