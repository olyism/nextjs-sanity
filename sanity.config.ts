import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './sanity/schemas'
import deskStructure from './sanity/plugins/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'DPL',
  basePath: '/studio',
  // @ts-ignore
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // @ts-ignore
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [deskTool({structure: deskStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
