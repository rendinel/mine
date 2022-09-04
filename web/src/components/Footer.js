import { Link } from 'gatsby'
import React from 'react'
import { menu } from '../constants/menu'
import { socialLinks } from '../constants/socialLinks'
import { FooterStyles } from '../styles/FooterStyles'
import Logofooter from './Logofooter'
import ParagraphText from './typography/ParagraphText'

const Footer = () => (
  <FooterStyles>
    <div className='container'>
      <Logofooter />
      <ul className='footer__menuList'>
        {menu.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <ul className='footer__socialList'>
        {socialLinks.map((item) => (
          <li key={item.name}>
            <Link to={item.url}>{item.icon}</Link>
          </li>
        ))}
      </ul>
      <ParagraphText className='copyright'>
        rendinel.dev blog {new Date().getFullYear()} All rights reserved
      </ParagraphText>
    </div>
  </FooterStyles>
)

export default Footer
