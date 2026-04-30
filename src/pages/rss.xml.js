import rss from '@astrojs/rss';
import { SITE } from '../config';
import { getPosts } from '../lib/blog';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: SITE.title,
    description: SITE.defaultDescription,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.pubDate,
      description: post.description,
      link: post.url,
    })),
  });
}
