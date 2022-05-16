import { defineNestedType } from '@contentlayer/source-files'

export const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    url: {
      type: 'string',
      description: 'The URL of the image',
      stackbit: {
        label: 'Image',
        default: 'https://assets.stackbit.com/components/images/default/default-image.png',
      },
    },
    altText: {
      type: 'string',
      description: 'The alt text of the image',
      stackbit: { label: 'Alt Text', default: 'Image alt text' },
    },
  },
  stackbit: { labelField: 'altText' },
}))
