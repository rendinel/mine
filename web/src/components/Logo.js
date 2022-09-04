import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LogoStyles from '../styles/LogoStyles'

const Logo = () => (
  <LogoStyles to='/'>
    <StaticImage src='../images/logo2.svg' alt='my logo' />
  </LogoStyles>
)

export default Logo
