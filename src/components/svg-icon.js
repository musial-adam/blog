import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Styled component to easily adjust SVG icon parameters

const StyledSVG = styled.svg`
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  /* fill: grey; */
`

// SVG Icon component
// String concat in order to use with SVG Sprite - adjust sprite path

const SVGIcon = ({ icon, fill }) => {
  const iconID = `/assets/symbol-defs.svg#icon-${icon}`

  return (
    <StyledSVG style={{fill: fill}}>
      <use xlinkHref={iconID} />
    </StyledSVG>
  )
}

SVGIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
}

export default SVGIcon
