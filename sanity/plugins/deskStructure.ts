// import S from '@sanity/desk-tool/structure-builder'

const deskStructure = (S) =>
  S.list()
    .title('Content management')
    .items([
      ...S.documentTypeListItems().filter(
        (item) => !['settings'].includes(item.getId('siteSettings'))
      ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings')),
    ])

export default deskStructure
