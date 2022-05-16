import { defineNestedType } from '@contentlayer/source-files'
import { Button } from './Button'
import { Image } from './Image'
import { initialValue } from './stackbit'

export const HeroSection = defineNestedType(() => ({
  name: 'HeroSection',
  fields: {
    title: {
      type: 'string',
      stackbit: { label: 'Title', initialValue: 'This Is a Big Hero Headline' },
    },
    subtitle: {
      type: 'string',
      stackbit: { label: 'Subtitle', initialValue: 'The section subtitle' },
    },
    text: {
      type: 'markdown',
      stackbit: { label: 'Text', initialValue: 'The section body text ...' },
    },
    actions: {
      type: 'list',
      of: Button,
      stackbit: {
        label: 'Actions',
        initialValue: [
          { type: 'Button', label: 'Get Started', url: '/', size: 'large', variant: 'contained' },
          { type: 'Button', label: 'Learn more', url: '/', size: 'large', variant: 'outlined' },
        ],
      },
    },
    image: {
      type: 'nested',
      of: Image,
      stackbit: { initialValue: initialValue.Image },
    },
  },
}))
