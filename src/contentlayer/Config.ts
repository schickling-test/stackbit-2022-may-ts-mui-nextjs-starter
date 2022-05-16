import { defineDocumentType } from '@contentlayer/source-files'
import { Footer } from './Footer'
import { Header } from './Header'

export const Config = defineDocumentType(() => ({
  name: 'Config',
  fields: {
    favicon: {
      type: 'string',
      required: true,
      stackbit: {
        initialValue: 'https://assets.stackbit.com/components/images/default/favicon.svg',
        label: 'Favicon',
      },
    },
    header: {
      type: 'nested',
      of: Header,
      stackbit: { label: 'Header configuration' },
    },
    footer: {
      type: 'nested',
      of: Footer,
      stackbit: { label: 'Footer configuration' },
    },
  },
  stackbit: {
    label: 'Site Configuration',
    singleInstance: true,
    readOnly: true,
  },
}))
