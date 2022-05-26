import 'contentlayer-stackbit-yaml-generator/types'
import { makeSource } from 'contentlayer/source-files'
import stackbitConfig from './stackbit.config.js'

import { stackbitConfigToContentlayer } from '@stackbit/some-package'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: stackbitConfigToContentlayer(stackbitConfig),
})
