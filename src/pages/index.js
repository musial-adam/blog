import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
      maiores, nostrum, cumque suscipit eius eos vel nulla dignissimos in
      quisquam optio amet harum hic quam quibusdam rem, dolor iste accusantium!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere
      nihil hic tempore, itaque odio ullam veniam nobis neque illum dicta ut
      aliquid unde at error maiores fuga voluptatibus. Dolorum?
    </p>

    <svg>
      <use xlinkHref="/assets/sprite.svg#icon-location" />
    </svg>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
