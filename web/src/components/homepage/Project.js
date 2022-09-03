import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles'
import BlogGrid from '../blog/BlogGrid'
import { SectionTitle } from '../typography/Title'

function Projects() {
  const data = useStaticQuery(graphql`
    {
      allSanityProject {
        nodes {
          id
          title
          live
          code
          technology
          coverImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          excerpt {
            children {
              text
            }
          }
        }
      }
    }
  `)
  const projects = data.allSanityProject.nodes
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Projects</SectionTitle>
      <BlogGrid projects={projects} />
    </FeaturedBlogsStyles>
  )
}

export default Projects
