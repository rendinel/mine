import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles'
import ParagraphText from '../typography/ParagraphText'
import ParagraphTextLink from '../typography/ParagraphTextLink'

const ProjectItem = ({
  title,
  live,
  code,
  technology,
  image,
  alt,
  excerpt,
}) => (
  <BlogItemStyles>
    <GatsbyImage image={image} alt={alt} className='img' />

    <h1>{title}</h1>
    <ParagraphText className='categoriesText'>{technology}</ParagraphText>
    <ParagraphText>{excerpt}</ParagraphText>
    <ParagraphTextLink className='categoriesText'>
      <a style={{ color: '#ffffff' }} href={code}>
        Check the code
      </a>
    </ParagraphTextLink>
    <ParagraphText className='categoriesText'>
      <a style={{ color: '#ffffff' }} href={live}>
        See the App Live
      </a>
    </ParagraphText>
  </BlogItemStyles>
)

export default ProjectItem
