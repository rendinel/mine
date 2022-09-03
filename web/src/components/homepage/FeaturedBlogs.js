import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles'
import BlogGrid from '../blog/BlogGrid'
import ParagraphText from '../typography/ParagraphText'
import { SectionTitle } from '../typography/Title'

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            id
            title
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `)
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Blog</SectionTitle>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  )
}

export default FeaturedBlogs
