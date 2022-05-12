import { defineNestedType } from '@contentlayer/source-files';
import { Button } from './Button';
import { Card } from './Card';
import { Image } from './Image';

export const CardsSection = defineNestedType(() => ({
    name: 'CardsSection',
    fields: {
        title: {
            type: 'string',
            extensions: {
                stackbit: { label: 'Title', initialValue: 'Featured Items' },
            },
        },
        subtitle: {
            type: 'string',
            extensions: { stackbit: { label: 'Subtitle', initialValue: 'The section subtitle' } },
        },
        text: {
            type: 'markdown',
            extensions: { stackbit: { label: 'Text', initialValue: 'The section body text ...' } },
        },
        items: {
            type: 'list',
            of: Card,
            extensions: {
                stackbit: {
                    label: 'Items',
                    initialValue: [
                        {
                            type: 'Card',
                            title: 'Item Title',
                            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.\n',
                            image: {
                                type: 'Image',
                                url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                                altText: 'Item image',
                            },
                            actions: [
                                {
                                    type: 'Link',
                                    label: 'Learn More',
                                    url: '/',
                                },
                            ],
                        },
                    ],
                },
            },
        },
    },
}));
