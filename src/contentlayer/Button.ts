import { defineNestedType } from '@contentlayer/source-files'
import { fieldGroups } from './stackbit'

export const Button = defineNestedType(() => ({
  name: 'Button',
  fields: {
    label: {
      type: 'string',
      required: true,
      stackbit: { label: 'Label', initialValue: 'Learn more' },
    },
    url: {
      type: 'string',
      required: true,
      stackbit: { label: 'URL', initialValue: '/' },
    },
    size: {
      type: 'enum',
      options: ['small', 'medium', 'large'],
      stackbit: {
        label: 'Size',
        initialValue: 'medium',
        group: fieldGroups.styles.name,
        controlType: 'button-group',
      },
    },
    variant: {
      type: 'enum',
      options: ['contained', 'outlined', 'text'],
      stackbit: {
        label: 'Size',
        initialValue: 'medium',
        group: fieldGroups.styles.name,
        controlType: 'button-group',
      },
    },
    color: {
      type: 'enum',
      options: ['inherit', 'primary', 'secondary'],
      stackbit: {
        label: 'Color',
        initialValue: 'primary',
        group: fieldGroups.styles.name,
        controlType: 'button-group',
      },
    },
  },
  stackbit: { label: 'Button', fieldGroups: [fieldGroups.styles] },
}))
