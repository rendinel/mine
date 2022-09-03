import React from 'react'
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles'
import BlogItem from './BlogItem'
import ProjectItem from './ProjectItem'

function BlogGrid({ blogs, projects }) {
  console.log(projects)
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            path={blog.slug.current}
            title={blog.title}
            categories={blog.categories}
            image={{
              imageData: blog.coverImage.asset.gatsbyImageData,
              altText: blog.coverImage.alt,
            }}
            publishedAt={blog.publishedAt}
          />
        ))}
      {projects &&
        projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            live={project.live}
            code={project.code}
            technology={project.technology}
            image={project.coverImage.asset.gatsbyImageData}
            alt={project.coverImage.alt}
            excerpt={project.excerpt[0].children[0].text}
          />
        ))}
    </BlogGridStyles>
  )
}

export default BlogGrid
