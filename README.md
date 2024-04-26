# Astro + Obsidian Blog Boilerplate

![Logo](https://astro-obsidian-blog-boilerplate.vercel.app/images/og.png)

This blog boilerplate is ideal for developers looking for a robust, performance-optimized platform for blogging. Set it up on your GitHub repository and start sharing your ideas!

## Showcase

[DEMO](https://astro-obsidian-blog-boilerplate.vercel.app/)

[Kendrick's dev blog](https://dev.sonim1.com/) | [Theo's dev box](https://blog-astro-sandy.vercel.app/)

## Features of the Astro-Obsidian Blog Boilerplate

This boilerplate harnesses the power of Astro v4, ensuring your blog is built with the latest in web development standards. It leverages Obsidian for seamless content management, allowing you to write and organize posts effortlessly. Here are some key features:

- **Latest Astro v4 Integration**: Stay up-to-date with the cutting-edge features of Astro v4.
- **Content Management with Obsidian**: Use Obsidian to manage and author your blog posts with ease.
- **Image Optimization**: Implements sharp for optimal image processing.
- **Astro View Transitions**: Enhance user experience with smooth view transitions as detailed in the Astro documentation.
- **Web Analytics and Speed Insights on Vercel**: Gain insights into your site's performance and visitor behavior.
- **Exceptional Performance Scores**: Achieves a score of 100 on both Speed Insights and Lighthouse, ensuring top-tier site speed and SEO performance.
- **Syntax Highlighting**: Includes syntax highlighting for code blocks, enhancing readability and aesthetics. It is using [shiki](https://github.com/shikijs/shiki)
- **Responsive and Fast**: A mobile-first approach ensures your blog is responsive and fast across all devices.
- **Built-In Dark Mode**: Supports automatic light and dark modes.
- **Accessibility Focused**: Delivers a site with thoughtful, semantic, and accessible design.
- **Easy Content Authoring**: Create content directly in Markdown format from your favorite code editor or GitHub.
- **Extended Markdown Capabilities with Markdoc**: Incorporate custom components like YouTube or Twitter embeds into your Markdown files using Markdoc.
- **Built-In RSS Feed**: Automatically generates an RSS feed accessible at /rss.xml.
- **Comprehensive SEO Setup**: Every page is equipped with essential SEO features to enhance visibility.

## Installation

```bash
# Clone the repo
git clone git@github.com:sonim1/astro-obsidian-blog-boilerplate.git my-blog

cd my-blog
```

```bash
# Install dependencies
npm run ci

# Start the dev server
npm run dev
```

## Using Obsidian when editing posts

Download [Obsidian](https://obsidian.md/)

1. Open Obsidian
2. `Find` > `Open Vault` > Select the `/src` folder where you have cloned this repo
3. Done

Now you can use Obsidian to write your post.

- You can use Obsidian's MakeMD to sort files by creation date.
- Paste an image into Obsidian and it will be added to `src/assets` based on the current filename.
- There are a number of plugins available to help with note taking in Community Plugins in Settings.

## Add a new post

You can add new posts using Templates plugin in Obsidian.

## How do I deploy?

[Vercel](https://vercel.com/docs/frameworks/astro)

`Analytics` and `Speed Insight` on Vercel are already set up. After deploying from Vercel, activate them on the `Analytics` and `Speed Insight` pages.

You can also use Netlify or another service.

## Site customization

Please update the `site.config.mjs` file

```js
export default {
  localhostURL: `http://localhost:3000`,
  liveURL: 'https://astro-obsidian-blog-boilerplate.vercel.app',
  name: 'My name',
  site: {
    title: 'My Blog',
    description: `Hello world!`,
  },
  defaultLanguage: 'en', // ko | use ISO language code
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

## Astro Themes

This template is built based on the [Blogster](https://astro.build/themes/details/blogster-sleek/) theme.

If you want to change the theme. You can use other themes are existing here: https://astro.build/themes/
(Applying a theme manually may require a lot of modifications.)

## Adding the new page

1. Add the new file under the pages folder by following this [documenetation](https://docs.astro.build/en/tutorial/2-pages/1/#create-a-new-astro-file)
2. Put your new page link into the `src/components/Header.astro` file

```tsx
// src/components/Header.astro
// ...
<nav>
  <section class="text-text-bold">
    <ul class="unset flex gap-4 [&>li]:p-0">
      {/* Put the new link here */}
      <li>
        <HeaderLink href={`/`}>Home</HeaderLink>
      </li>
      <li>
        <HeaderLink href={`/blog`}>Blog</HeaderLink>
      </li>
    </ul>
  </section>
</nav>
// ...
```

## Giscus

[Giscus](https://giscus.app/)

`src/components/CommentSection.astro`
You can simply add comments by adding the giscus script to the file above.

At this time, please activate lazy mode for page performance.

## Contribute 🤝

<a href="https://github.com/sonim1/astro-obsidian-blog-boilerplate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sonim1/astro-obsidian-blog-boilerplate" />
</a>

## TODOs

- [ ] Add the starlight [link](https://starlight.astro.build/guides/components/)
- [ ] Add the pagination
