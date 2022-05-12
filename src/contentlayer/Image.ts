import { defineNestedType } from '@contentlayer/source-files';

export const Image = defineNestedType(() => ({
    name: 'Image',
    fields: {
        url: {
            type: 'string',
            description: 'The URL of the image',
            extensions: {
                stackbit: {
                    label: 'Image',
                    default:
                        'https://assets.stackbit.com/components/images/default/default-image.png',
                },
            },
        },
        altText: {
            type: 'string',
            description: 'The alt text of the image',
            extensions: { stackbit: { label: 'Alt Text', default: 'Image alt text' } },
        },
    },
    extensions: { stackbit: { labelField: 'altText' } },
}));
