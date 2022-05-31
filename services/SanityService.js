import sanityClient from "@sanity/client";
import { env } from "process";

export default class SanityService {
  _client = sanityClient({
      dataset: 'production',
      projectId: process.env.SANITY_PROJECT_ID,
      useCdn: process.env.NODE_ENV === 'production'
  });

  async getHome() {
    return await this._client.fetch(
      `*[_type == 'home'][0] {'mainPostUrl': mainPost -> slug.current}`
    )};
  
  async getPosts() {
    return await this._client.fetch(
      `*[_type == 'post'] {
        _id,
        title,
        subtitle,
        tag,
        createdAt,
        'content': content[] {
          ...,
          ...select(_type == 'image' => {'image':image}[]{
            ...,
            'url': asset -> url})},
        'slug':slug.current,
        'mainImage': {
          'imageUrl': mainImage.asset -> url
        },
        'author': author -> {
          name,
          introduce,
          'image': image.asset -> url,
          'slug': slug.current
        },
      }`
    );
  };
}