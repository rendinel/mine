import { graphql } from 'gatsby'
import React from 'react'
import PageHeader from '../components/PageHeader'
import PageSpace from '../components/PageSpace'
import BlogGrid from '../components/blog/BlogGrid'
import Pagination from '../components/Pagination'
import { SEO } from '../components/seo'
export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
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
      }
    }
  }
`

function Blogs({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext
  const blogs = data.allSanityBlog.nodes

  return (
    <>
      <PageSpace top={80} bottom={100}>
        <SEO title='Rendinel.dev | Blog Homepage' />
        <div className='container'>
          <PageHeader title='All Blog Posts' description='' />
          <BlogGrid blogs={blogs} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL='/blogs'
            />
          )}
        </div>
      </PageSpace>
    </>
  )
}

export default Blogs
