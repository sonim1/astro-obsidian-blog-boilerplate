This boilerplate is using the [Blogster](https://astro.build/themes/details/blogster-sleek/) theme.

## Showcase

[DEMO](https://astro-obsidian-blog-boilerplate.vercel.app/)

[Kendrick's dev blog](https://dev.sonim1.com/) | [Theo's dev box](https://blog-astro-sandy.vercel.app/)

If you want to change the theme. You can use other themes are existing here: https://astro.build/themes/

## Benefits of using this boilerplate

- This template migrated to the latest version of Astro v4
- Only need to use the Obsidian to write and manage the content
- Provide the Image Optimization using sharp
- Provide the [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Provide the `web analytics` on Vercel
- Provide the `speed insights` on Vercel
- Show the score as 100 on `speed insights` and `lighthouse`

## Template

A beautiful, performant and accessible theme built with [Tailwind](https://tailwindcss.com).

- **Fast**. Fast by default. Astro websites are engineered to be fast and load before you could blink, even when not cached.
- **Dark mode**. All themes have light/dark mode built-in.
- **Mobile first**. Responsive and loads fast in all devices.
- **Accessible**. A well thought out semantic and accessible content.
- **Perfect lighthouse score.** 100 across the board.
- **Easy content authoring**. Author content using markdown (`.md`) from your code editor or directly in GitHub.
- **Extended markdown with [Markdoc](https://markdoc.dev).** Type-safe custom components like YouTube embed, Twitter embed (or anything you want really) in your markdown (`.md`) files.
- **RSS feed**. Your blog has an RSS feed setup that can be accessed at `/rss.xml`.
- **SEO**. All pages are setup with all the SEO you might need.

## How to use the obsidian?

Download [Obsidian](https://obsidian.md/)

1. Open Obsidian
2. Find > Open Vault > Select the `/src` folder where you have cloned this repo
3. Done

## How do I deploy?

I recommend to use the vercel.

Follow steps in this document: [Link](https://vercel.com/docs/frameworks/astro)

## How to customize

Please update the `site.config.mjs` file

```
export default {
  localhostURL: `http://localhost:3000`,
  liveURL: 'https://astro-obsidian-blog-boilerplate.vercel.app',
  name: 'My name',
  site: {
    title: 'My Blog',
    description: `Hello world!`,
  },
  header: {
    github: {
      url: 'https://github.com/sonim1',
    },
    youtube: {
      url: 'https://www.youtube.com/@bumfoo/videos',
    },
    website: {
      url: 'https://welcome.sonim1.com',
    },
  },
  seo: {
    twitter: '@your_twitter_handle',
  },
};
```

## Contribute 🤝

<a href="https://github.com/sonim1/astro-obsidian-blog-boilerplate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sonim1/astro-obsidian-blog-boilerplate" />
</a>
