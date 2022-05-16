import { defineNestedType } from '@contentlayer/source-files'

export const Link = defineNestedType(() => ({
  name: 'Link',
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
    underline: {
      type: 'enum',
      options: ['always', 'hover', 'none'],
      stackbit: {
        group: 'styles',
        controlType: 'button-group',
        label: 'Underline',
        initialValue: 'always',
        optionLabels: {
          always: 'Always',
          hover: 'Hover',
          none: 'None',
        },
      },
    },
    color: {
      type: 'enum',
      options: ['inherit', 'primary', 'secondary'],
      stackbit: {
        group: 'styles',
        controlType: 'button-group',
        label: 'Color',
        initialValue: 'primary',
        optionLabels: {
          inherit: 'Inherit',
          primary: 'Primary',
          secondary: 'Secondary',
        },
      },
    },
  },
  stackbit: {
    fieldGroups: [{ name: 'styles', label: 'Styles' }],
  },
}))
