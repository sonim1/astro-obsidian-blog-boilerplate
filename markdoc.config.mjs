import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
  extends: [
    shiki({
      theme: 'nord',
      wrap: true,
    }),
  ],
  tags: {
    youtube: {
      render: component('./src/components/markdoc/YouTubeEmbed.astro'),
      attributes: {
        url: { type: String, required: true },
        label: { type: String, required: true },
      },
      selfClosing: true,
    },
    tweet: {
      render: component('./src/components/markdoc/TweetEmbed.astro'),
      attributes: {
        url: { type: String, required: true },
      },
      selfClosing: true,
    },
    codepen: {
      render: component('./src/components/markdoc/CodePenEmbed.astro'),
      attributes: {
        url: { type: String, required: true },
        title: { type: String, required: true },
      },
      selfClosing: true,
    },
    githubgist: {
      render: component('./src/components/markdoc/GitHubGistEmbed.astro'),
      attributes: {
        id: { type: String, required: true },
      },
      selfClosing: true,
    },
  },
});
