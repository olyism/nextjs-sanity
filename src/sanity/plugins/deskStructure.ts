import type {StructureBuilder} from 'sanity/desk'

const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings', 'homepage'].includes(listItem?.getId() ?? '')
      ),
      S.divider(),
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepageSettings')),
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings')),
    ])

export default deskStructure
