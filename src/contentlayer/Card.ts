import { defineNestedType } from '@contentlayer/source-files'
import { Button } from './Button'
import { Image } from './Image'
import { initialValue } from './stackbit'

export const Card = defineNestedType(() => ({
  name: 'Card',
  fields: {
    title: {
      type: 'string',
      stackbit: { label: 'Title', initialValue: 'Item Title' },
    },
    text: {
      type: 'markdown',
      stackbit: { label: 'Text', initialValue: 'The card body text ...' },
    },
    actions: {
      type: 'list',
      of: Button,
      stackbit: { label: 'Actions', initialValue: [initialValue.Button] },
    },
    image: {
      type: 'nested',
      of: Image,
      stackbit: { initialValue: initialValue.Image },
    },
  },
}))
