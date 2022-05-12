import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import type * as T from 'contentlayer-stackbit-yaml-generator/dist/cli/types.js';

const Page = defineDocumentType(() => ({
    name: 'Page',
    fields: {
        title: { type: 'string', extensions: { stackbit: { group: 'hi', default: 'new' } } }
    }
}));

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Page],
    extensions: {
        stackbit: {
            dataDir: 'content/data',
            pagesDir: 'content/pages'
        }
    }
});
