import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: SITE.title,
    description: SITE.defaultDescription,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id.split('/').pop().replace('.md', '')}`,
    })),
  });
}
