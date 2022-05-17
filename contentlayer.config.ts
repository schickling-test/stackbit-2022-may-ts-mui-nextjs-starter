import 'contentlayer-stackbit-yaml-generator/types'
import { makeSource } from 'contentlayer/source-files'
import { Config, PageLayout, ThemeStyle } from './src/contentlayer/index.js'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Config, PageLayout, ThemeStyle],
  stackbit: {
    dataDir: 'content/data',
    pagesDir: 'content/pages',
    assets: {
      referenceType: 'static',
      staticDir: 'public',
      uploadDir: 'images', // relative to staticDir
      publicPath: '/',
    },
    styleObjectModelName: 'ThemeStyle',
  },
})
