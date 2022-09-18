import React from 'react'
import { graphql } from 'gatsby'
import PageSpace from '../components/PageSpace'
import PageHeader from '../components/PageHeader'
import CategoryGrid from '../components/category/CategoryGrid'
import Pagination from '../components/Pagination'
import { SEO } from '../components/seo'

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`

function Categories({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext
  const categories = data.allSanityCategory.nodes

  return (
    <>
      <PageSpace top={80} bottom={100}>
        <SEO title='Rendinel.dev | Categories' />
        <div className='container'>
          <PageHeader title='All Categories' description='' />
          <CategoryGrid categories={categories} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL='/categories'
            />
          )}
        </div>
      </PageSpace>
    </>
  )
}

export default Categories
