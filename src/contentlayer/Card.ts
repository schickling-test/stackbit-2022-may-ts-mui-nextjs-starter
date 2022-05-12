import { defineNestedType } from '@contentlayer/source-files';
import { Button } from './Button';
import { Image } from './Image';

export const Card = defineNestedType(() => ({
    name: 'Card',
    fields: {
        title: {
            type: 'string',
            extensions: {
                stackbit: { label: 'Title', initialValue: 'Item Title' },
            },
        },
        text: {
            type: 'markdown',
            extensions: { stackbit: { label: 'Text', initialValue: 'The card body text ...' } },
        },
        actions: {
            type: 'list',
            of: Button,
            extensions: {
                stackbit: {
                    label: 'Actions',
                    initialValue: [{ type: 'Button', label: 'Learn More', url: '/' }],
                },
            },
        },
        image: {
            type: 'nested',
            of: Image,
            extensions: {
                stackbit: {
                    default: {
                        type: 'Image',
                        url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                        altText: 'Item image',
                    },
                },
            },
        },
    },
}));
