import { defineNestedType } from '@contentlayer/source-files'
import { Link } from './Link'

export const Header = defineNestedType(() => ({
  name: 'Header',
  fields: {
    title: {
      type: 'string',
      stackbit: { label: 'Title', initialValue: 'Your Brand' },
    },
    navLinks: {
      type: 'list',
      of: [Link],
      stackbit: {
        label: 'Navigation Links',
        initialValue: [
          { type: 'Link', label: 'Home', url: '/' },
          { type: 'Link', label: 'About', url: '/about' },
        ],
      },
    },
  },
}))
