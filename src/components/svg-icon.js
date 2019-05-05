import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Styled component to easily adjust SVG icon parameters

const StyledSVG = styled.svg`
  box-sizing: border-box;
  height: 30px;
  width: 30px;
`

// SVG Icon component
// String concat in order to use with SVG Sprite - adjust sprite path
// className is added here only to allow styles override with styled method from styled-components

const SVGIcon = ({ className, icon, fill }) => {
  const iconID = `/assets/symbol-defs.svg#icon-${icon}`

  return (
    <StyledSVG className={className} style={{ fill }}>
      <use xlinkHref={iconID} />
    </StyledSVG>
  )
}

SVGIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string,
}

SVGIcon.defaultProps = {
  className: '',
  fill: '',
}

export default SVGIcon
