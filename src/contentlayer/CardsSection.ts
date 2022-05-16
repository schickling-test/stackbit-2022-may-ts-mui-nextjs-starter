import { defineNestedType } from '@contentlayer/source-files'
import { Card } from './Card'
import { initialValue } from './stackbit'

export const CardsSection = defineNestedType(() => ({
  name: 'CardsSection',
  fields: {
    title: {
      type: 'string',
      stackbit: { label: 'Title', initialValue: 'Featured Items' },
    },
    subtitle: {
      type: 'string',
      stackbit: { label: 'Subtitle', initialValue: 'The section subtitle' },
    },
    text: {
      type: 'markdown',
      stackbit: { label: 'Text', initialValue: 'The section body text ...' },
    },
    items: {
      type: 'list',
      of: Card,
      stackbit: { label: 'Items', initialValue: [initialValue.Card] },
    },
  },
}))
