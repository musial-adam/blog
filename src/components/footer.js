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
  /* border: 1px dashed black; */
  min-width: 410px;
  padding: 0;
  /* margin-right: 50px; */
  flex-shrink: 0;

  a {
    background-image: none;
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
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 100px;
  width: 50vw;
  margin-left: calc(50vw - (100vw - 100%));
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 300;
  color: #444444;
  background-color: white;
  padding: 30px 40px;
  /* overflow: hidden; */
  /*flex-shrink: 0;  Footer if flex item within flex container - this blocks it from shrinking */
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;

  /* border: 3px solid blue; */

  /* position: fixed;
  bottom: 0;
  right: 0; */

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
