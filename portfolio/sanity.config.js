import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'r0kdzywp',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool({
      defaultDataset: 'production',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
