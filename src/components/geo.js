import React, { useState } from 'react'
import styled from 'styled-components'

import SVGIcon from './svg-icon'

const GeoContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.darkGrey};

  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 200;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    position: absolute;
    bottom: 0;
    left: 0;
    /*padding-bottom: 60%; /* This is the CSS trick to force a div to keep its aspect ratio */
    /* background-position: 50% 40%; */
  }
`

const GeoDetails = styled.div`
  background-color: ${({ theme }) => theme.darkGrey};
  color: white;
  height: 200px;
  width: 300px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  padding: 30px 0px 30px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
  transform: ${({ isOpen }) =>
    isOpen ? 'translate(0, 0)' : 'translate(-250px, 150px)'};
  /* opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; */
  transition: transform .15s ease-in-out;
  
  h4, h5, p {
    margin: 0;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: opacity .2s .15s ease-out;
  }
  
  h4 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.lightGrey2};
    font-weight: 400;
  }
  
  h5 {
    color: ${({ theme }) => theme.lightGrey2};  
    font-weight: 400;
  }
  
  p {
    font-family: ${({ theme }) => theme.headerFont};
    font-weight: 100;
  }
  
  @media (max-width: 1000px) {
    position: absolute;
    bottom: 0;
    left: 0;
    /*padding-bottom: 60%; /* This is the CSS trick to force a div to keep its aspect ratio */
    /* background-position: 50% 40%; */
  }
  
`

const GeoLocation = () => {
  const [isOpen, setGeoState] = useState(false)
  console.log(isOpen)

  const toggleGeo = () => setGeoState(!isOpen)

  console.log(isOpen)

  return (
    <>
      <GeoContainer onClick={toggleGeo}>
        <SVGIcon icon="instagram" fill="#7f7f7f" />
      </GeoContainer>
      <GeoDetails isOpen={isOpen}>
        <h4>Photo location</h4>
        <p>
          Wrocław, PL <br />
          39.0580° N <br />
          107.0192° W <br />
        </p>
        <h5>Photo NOT by Adam Musial</h5>
      </GeoDetails>
    </>
  )
}

export default GeoLocation
