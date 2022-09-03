import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles'
import CategoryGrid from '../category/CategoryGrid'
import { SectionTitle } from '../typography/Title'

const TopCategories = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `)
  const categories = data.allSanityFeatured.nodes[0].category
  return (
    <TopCategoriesStyles>
      <SectionTitle>Categories</SectionTitle>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  )
}

export default TopCategories
