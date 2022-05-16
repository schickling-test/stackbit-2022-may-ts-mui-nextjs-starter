import { defineNestedType } from '@contentlayer/source-files'
import { Link } from './Link'

export const Footer = defineNestedType(() => ({
  name: 'Footer',
  fields: {
    copyrightText: {
      type: 'markdown',
      stackbit: { label: 'Copyright text', initialValue: 'Copyright text' },
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
  stackbit: { label: 'Footer', labelField: 'copyrightText', readOnly: true },
}))
