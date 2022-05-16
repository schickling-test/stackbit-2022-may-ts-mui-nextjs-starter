import { defineNestedType } from '@contentlayer/source-files';

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
            extensions: {
                stackbit: {
                    label: 'Size',
                    initialValue: 'medium',
                    group: 'styles',
                    controlType: 'button-group',
                },
            },
        },
        variant: {
            type: 'enum',
            options: ['contained', 'outlined', 'text'],
            stackbit: {
                label: 'Size',
                initialValue: 'medium',
                group: 'styles',
                controlType: 'button-group',
                optionLabels: {
                    contained: 'Contained',
                    outlined: 'Outlined',
                    text: 'Text',
                },
            },
        },
        color: {
            type: 'enum',
            options: ['inherit', 'primary', 'secondary'],
            stackbit: {
                label: 'Color',
                initialValue: 'primary',
                group: 'styles',
                controlType: 'button-group',
            },
        },
    },
    stackbit: {
        label: 'Button',
        fieldGroups: [{ name: 'styles', label: 'Styles' }],
    },
}));
