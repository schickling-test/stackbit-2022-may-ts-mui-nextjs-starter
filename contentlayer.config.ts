import { makeSource } from 'contentlayer/source-files';
import type * as T from 'contentlayer-stackbit-yaml-generator/dist/cli/types.js';
import { Config, PageLayout, ThemeStyle } from './src/contentlayer/index.js';

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Config, PageLayout, ThemeStyle],
    stackbit: {
        dataDir: 'content/data',
        pagesDir: 'content/pages',
    },
});
