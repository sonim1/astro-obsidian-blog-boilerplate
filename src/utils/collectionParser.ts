import type { CollectionEntry } from 'astro:content';

type formatBlogPostsConfigProps = {
  filterOutDrafts?: boolean;
  filterOutExternals?: boolean;
  sortByDate?: boolean;
  limit?: number;
};

export function formatBlogPosts(
  posts: CollectionEntry<'blog'>[],
  {
    filterOutDrafts = true,
    filterOutExternals = true,
    sortByDate = true,
    limit = undefined,
  }: formatBlogPostsConfigProps = {}
) {
  let filteredPosts: CollectionEntry<'blog'>[] = posts.reduce((acc: CollectionEntry<'blog'>[], post) => {
    const { draft, external } = post.data;

    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutExternal link
    if (external) return acc;

    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // Update url
  filteredPosts.map((post) => {
    const urlArray = post.slug.split('/');
    urlArray.splice(1, 0, 'blog');

    post.data.url = `/${urlArray.join('/')}`;
  });

  // limit if number is passed
  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}
