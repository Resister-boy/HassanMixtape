export interface Post {
  find(arg0: (p: any) => Array);
  _id: String;
  slug: String;
  title: String;
  subtitle: String;
  createdAt: String;
  author: {
    name: String;
    image: String;
    slug: String;
    introduce: [
      {
        children: [
          {
            text: String;
          }
        ]
      }
    ]
  }
  content: {
    children: {
      text: String;
    };
    metadata: {
      meta: {
        title: String;
        description: String;
      };
      openGraph: {
        description: String;
        image: String;
      };
      resolvedUrl: String;
      url: String;
    };
  };
  mainImage: {
    imageUrl: String;
  }
}

interface Post extends Array<Post> {}