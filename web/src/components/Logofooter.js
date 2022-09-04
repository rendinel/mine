import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LogoStyles from '../styles/LogoStyles'

const Logofooteer = () => (
  <LogoStyles to='/'>
    <StaticImage src='../images/logof.svg' alt='my logo' />
  </LogoStyles>
)

export default Logofooteer
