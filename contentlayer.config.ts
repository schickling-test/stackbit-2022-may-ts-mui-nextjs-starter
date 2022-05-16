import { makeSource } from 'contentlayer/source-files'
import type * as T from 'contentlayer-stackbit-yaml-generator/dist/cli/types.js'
import { Config, PageLayout, ThemeStyle } from './src/contentlayer/index.js'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Config, PageLayout, ThemeStyle],
  stackbit: {
    dataDir: 'content/data',
    pagesDir: 'content/pages',
    // stackbitVersion: '~0.4.0',
    // ssgName: 'nextjs',
    // nodeVersion: '16',
    // cmsName: 'git',
    assets: {
      //   referenceType: 'static',
      //   staticDir: 'public',
      uploadDir: 'images', // relative to staticDir
      //   publicPath: '/',
    },
    // pageLayoutKey: 'type', // default: layout
    // objectTypeKey: 'type', // default: type
    styleObjectModelName: 'ThemeStyle',
    // contentModels: {
    //   PageLayout: {

    //   },
    // },
    // modelsSource: {
    //   type: 'files',
    //   modelDirs: ['.stackbit/models'],
    // },
  },
})
