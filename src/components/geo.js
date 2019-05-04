import React from 'react'
import styled from 'styled-components'

import SVGIcon from './svg-icon'

const GeoContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const GeoLocation = () => {
  return (
    <GeoContainer>
      <SVGIcon icon="instagram" fill="grey" />
    </GeoContainer>
  )
}

export default GeoLocation
