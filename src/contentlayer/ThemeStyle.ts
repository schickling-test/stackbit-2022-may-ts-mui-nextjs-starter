import { defineDocumentType } from '@contentlayer/source-files'

export const ThemeStyle = defineDocumentType(() => ({
  name: 'ThemeStyle',
  fields: {
    mode: {
      type: 'enum',
      options: ['light', 'dark'],
      stackbit: {
        label: 'Mode',
        controlType: 'button-group',
        optionLabels: { light: 'Light', dark: 'Dark' },
        initialValue: 'light',
      },
    },
    primaryColor: {
      type: 'string',
      stackbit: { label: 'Primary Color', controlType: 'color-picker' },
    },
    secondaryColor: {
      type: 'string',
      stackbit: { label: 'Secondary Color', controlType: 'color-picker' },
    },
  },
  stackbit: {
    label: 'Theme Style',
    file: 'style.json',
  },
}))
