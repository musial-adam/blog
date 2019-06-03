import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

import avatar from '../assets/images/avatar1.jpg'

// const Avatar = styled.div`
//   height: 200px;
//   width: 200px;
//   background-image: url('${avatar}');
//   background-size: cover;
//   background-position: 0px -16px;
//   clip-path: circle(50% at 50% 50%);
// `

const Avatar = styled.img`
  height: auto;
  width: 50%;
  clip-path: circle(30% at 50% 35%);
  /* clip-path: circle(50% at 50% 50%); */
  margin-left: -10%;
  margin-bottom: 0;
`

// const Avatar2 = styled.img`
//   height: auto;
//   width: 50%;
//   border-radius: 100%;
//   border: 2px solid red;
// `

const Button = styled.button`
  background: none;
  border: none;
  position: relative;
  z-index: 2;
  color: black;

  ::before {
    content: '';
    position: absolute;
    top: 5px;
    left: -5px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: orange;
    transition: transform ease-in-out 0.1s;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid black;
  }

  &:hover {
    cursor: pointer;
    ::before {
      transform: translate(5px, -5px);
    }
  }
`

const AboutPage = () => (
  <Layout>
    <h1>About</h1>

    <Button>ale fajny button</Button>

    {/* <Avatar src={avatar} /> */}
    <br />
    {/* <Avatar2 src={avatar} /> */}
  </Layout>
)

export default AboutPage
