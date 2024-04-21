import rss from '@astrojs/rss';
import { SITE_URL } from '../config';
import { getCollection } from 'astro:content';
import siteConfig from '../../site.config.mjs';

export const GET = async () => {
  const allBlogPosts = await getCollection('blog', (post) => post.data.draft !== true && post.data.external !== true);
  const sortedPosts = allBlogPosts
    .filter((post) => post.data.draft !== true)
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
    .map((post) => {
      const [lang, ...slug] = post.slug.split('/');
      return {
        params: { lang, slug: slug.join('/') || undefined },
        props: post,
      };
    });

  let baseUrl = SITE_URL;
  // removing trailing slash if found
  // https://example.com/ => https://example.com
  baseUrl = baseUrl.replace(/\/+$/g, '');

  const rssItems = sortedPosts.map(({ props: { data: frontmatter }, params: { slug, lang } }) => {
    const author = siteConfig.name;
    if (frontmatter.external) {
      const title = frontmatter.title;
      const pubDate = frontmatter.date;
      const link = frontmatter.url;

      return {
        title,
        pubDate,
        link,
        author,
      };
    }

    const title = frontmatter.title;
    const pubDate = frontmatter.date;
    const description = frontmatter.description;
    const link = `${baseUrl}/${lang}/blog/${slug}/`;
    return {
      title,
      pubDate,
      description,
      link,
      author,
    };
  });

  return rss({
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    site: baseUrl,
    items: rssItems,
  });
};
