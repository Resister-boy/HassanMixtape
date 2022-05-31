export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'urlWithMetadata',
      options: {
        collapsed: true,
      }
    }
  ],
  previews: {
    select: {
      title: 'metadata.openGraph.title',
      subtitle: 'metadata.openGraph.url',
    }
  }
}