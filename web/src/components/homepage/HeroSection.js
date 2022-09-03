import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles'
import Button from '../buttons/Button'
import ParagraphText from '../typography/ParagraphText'

const HeroSection = () => (
  <HeroSectionStyles>
    <div className='container'>
      <div className='hero__wrapper'>
        <div className='left'>
          <h1 className='hero__heading'>Hi, I'm Lucio Rendine</h1>
          <ParagraphText className='hero__text'>
            I am a web developer that comes from a Business background . Through
            my past experiences, I can balance the need of users and businesses
            to understand their pain points and how I can contribute as a
            Front-end developer and solve their problems.
          </ParagraphText>
          <a href='/CV.pdf'>
            <Button className='hero__button'>Get my CV!</Button>
          </a>
        </div>
        <div className='right'>
          <StaticImage
            className='hero__image'
            src='../../images/demo.jpg'
            alt='vr guy'
            placeholder='blurred'
            objectPosition='50% 30%'
          />
        </div>
      </div>
    </div>
  </HeroSectionStyles>
)

export default HeroSection
