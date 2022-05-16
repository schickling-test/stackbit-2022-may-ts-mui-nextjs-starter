import { defineDocumentType } from '@contentlayer/source-files';
import { sectionComponent } from './common';

export const PageLayout = defineDocumentType(() => ({
    name: 'PageLayout',
    fields: {
        title: {
            type: 'string',
            required: true,
            stackbit: { initialValue: 'This Is a New Page', label: 'Title' },
        },
        sections: {
            type: 'list',
            of: sectionComponent,
            stackbit: { initialValue: defaultPageSections },
        },
    },
}));

const defaultPageSections = [
    {
        type: 'HeroSection',
        title: 'This Is A Big Hero Headline',
        text: 'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat itae interdum. Ut nec massa eget lorem blandit condimentum et at risus.\n',
        actions: [
            {
                type: 'Button',
                label: 'Get Started',
                url: '/',
                size: 'large',
                variant: 'contained',
            },
            {
                type: 'Button',
                label: 'Learn more',
                url: '/',
                size: 'large',
                variant: 'outlined',
            },
        ],
        image: {
            type: 'Image',
            url: 'https://assets.stackbit.com/components/images/default/hero.png',
            altText: 'Hero section image',
        },
    },
];
