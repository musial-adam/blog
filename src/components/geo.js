import React from 'react'
import styled from 'styled-components'

import SVGIcon from './svg-icon'

// import Location from '../assets/location.svg'

const GeoContainer = styled.div`
  width: 50px;
  height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: black;
`

// const StyledSVG = styled.svg`
//   box-sizing: border-box;
//   height: 30px;
//   width: 30px;
//   fill: purple;
// `

const GeoLocation = () => {
  // const icon = '/assets/sprite.svg#icon-google'

  // console.log(icon)

  return (
    <GeoContainer>
      {/* <svg
        className="geoicon"
        width="51px"
        height="51px"
        viewBox="0 0 51 51"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#777"
          d="M25.6875,17.4736842 C27.476494,17.4736842 28.9232456,18.9204359 28.9232456,20.7094298 C28.9232456,22.4984238 27.476494,23.9451754 25.6875,23.9451754 C23.898506,23.9451754 22.4517544,22.4984238 22.4517544,20.7094298 C22.4517544,18.9204359 23.898506,17.4736842 25.6875,17.4736842 Z M25.6875,11.5 C31.3189419,11.5 35.8925439,16.0891584 35.8925439,21.7361568 C35.8925439,26.2475329 33.5590735,29.6699561 31.1789337,32.7968065 C29.9033032,34.4613487 26.6675576,38.614926 26.6675576,38.614926 L25.6875,39.875 L24.7074424,38.614926 C24.7074424,38.614926 21.4716968,34.4613487 20.1960663,32.7968065 C17.8159265,29.6699561 15.4824561,26.2475329 15.4824561,21.7361568 C15.4824561,16.0891584 20.0560581,11.5 25.6875,11.5 Z M29.234375,31.3344984 C31.9256442,27.8187363 33.4812911,25.1274671 33.4812911,21.7050439 C33.4812911,17.3959019 29.9810855,13.8801398 25.6875,13.8801398 C21.3939145,13.8801398 17.8937089,17.3959019 17.8937089,21.7050439 C17.8937089,25.1274671 19.4493558,27.8187363 22.140625,31.3344984 C22.9651179,32.4234512 24.6141036,34.5546875 25.6875,35.9392133 C26.7608964,34.5546875 28.4098821,32.4234512 29.234375,31.3344984 Z"
          id="location"
        />
      </svg> */}
      {/* <StyledSVG>
        <use xlinkHref={icon} />
      </StyledSVG> */}
      <SVGIcon icon="instagram" />
    </GeoContainer>
  )
}

export default GeoLocation
