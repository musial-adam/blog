import { Link } from 'gatsby'
import PropTypes from 'prop-types'
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
  /* display: inline-block; */
  border: 1px solid red;
  max-width: 500px;
  padding: 0;
`

const SVGsBox = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  padding-top: 2px;
  flex-shrink: 0;
  /* align-self: baseline; */
`

const FirstLine = styled.div`
  border: 1px solid darkblue;
  height: 30px;
  display: flex;
  justify-content: space-between;

  p {
    display: inline-block;
    /* max-width: 500px; */
  }
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
  padding: 20px 30px;
  flex-shrink: 0; /* Footer if flex item within flex container - this blocks it from shrinking */
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    <FirstLine>
      <p>
        © {new Date().getFullYear()} {` `} Adam Musiał
      </p>
      <SVGsBox>
        <FooterSVG icon="github" />
        <FooterSVG icon="twitter" />
        <FooterSVG icon="instagram" />
      </SVGsBox>
    </FirstLine>
    <FooterText>
      <br />
      Built with {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {`, `}
      <a href="https://graphcms.com/">GraphCMS</a>
      {` & `}
      <a href="https://www.styled-components.com/">styled-components</a>
      {`.`}
    </FooterText>
    {/* <FooterText>
      © {new Date().getFullYear()} {` `} Adam Musiał
      <br />
      Built with {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {`, `}
      <a href="https://graphcms.com/">GraphCMS</a>
      {` & `}
      <a href="https://www.styled-components.com/">styled-components</a>
      {`.`}
    </FooterText> */}
  </StyledFooter>
)
// const Footer = ({ siteTitle }) => (
//   <StyledFooter>
//     <FooterText>
//       © {new Date().getFullYear()} {` `} Adam Musiał
//       <br />
//       Built with {` `}
//       <a href="https://www.gatsbyjs.org">Gatsby</a>
//       {`, `}
//       <a href="https://graphcms.com/">GraphCMS</a>
//       {` & `}
//       <a href="https://www.styled-components.com/">styled-components</a>
//       {`.`}
//     </FooterText>
//     <SVGsBox>
//       <FooterSVG icon="github" />
//       <FooterSVG icon="twitter" />
//       <FooterSVG icon="instagram" />
//     </SVGsBox>
//   </StyledFooter>
// )

export default Footer
