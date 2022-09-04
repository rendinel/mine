import { IoIosCodeWorking } from 'react-icons/io'

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: IoIosCodeWorking,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Code',
      name: 'code',
      type: 'string',
    },
    {
      title: 'Live',
      name: 'live',
      type: 'string',
    },
    {
      title: 'Technology',
      name: 'technology',
      type: 'string',
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText',
      description: 'A short description of the blog post',
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
    },
    prepare({ image, title }) {
      return {
        title,
        media: image,
      }
    },
  },
}
