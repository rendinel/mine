import React from 'react'
import FeaturedBlogs from '../components/homepage/FeaturedBlogs'
import HeroSection from '../components/homepage/HeroSection'
import TopCategories from '../components/homepage/TopCategories'
import Project from '../components/homepage/Project'
import { SEO } from '../components/seo'
const IndexPage = () => (
  <>
    <SEO title='Rendinel.dev | Homepage' />
    <HeroSection />
    <div className='container'>
      <FeaturedBlogs />
      <Project />
      <TopCategories />
    </div>
  </>
)

export default IndexPage
