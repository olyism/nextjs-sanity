// import S from '@sanity/desk-tool/structure-builder'

const deskStructure = (S) =>
  S.list()
    .title('Content management')
    .items([
      // ...S.documentTypeListItems().filter(
      //   (item) => !['settings'].includes(item.getId('siteSettings'))
      // ),
      // S.listItem()
      //   .title('Pages')
      //   .child(S.document().schemaType('page'),
      S.divider(),
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepageSettings')),
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings')),
    ])

export default deskStructure
