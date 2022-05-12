import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import type * as T from 'contentlayer-stackbit-yaml-generator/dist/cli/types.js';
import { PageLayout } from './src/contentlayer';

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [PageLayout],
    extensions: {
        stackbit: {
            dataDir: 'content/data',
            pagesDir: 'content/pages',
        },
    },
});
