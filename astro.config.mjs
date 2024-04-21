import { defineConfig, sharpImageService } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import robotsTxt from 'astro-robots-txt';
import siteConfig from './site.config.mjs';

/* 
  We are doing some URL mumbo jumbo here to tell Astro what the URL of your website will be.
  In local development, your SEO meta tags will have localhost URL.
  In built production websites, your SEO meta tags should have your website URL.
  So we give our website URL here and the template will know what URL to use 
  for meta tags during build.
  If you don't know your website URL yet, don't worry about this
  and leave it empty or use localhost URL. It won't break anything.
*/

const SERVER_PORT = 3000;

// the url to access your blog during local development
const LOCALHOST_URL = siteConfig.localhostURL;
const LIVE_URL = siteConfig.liveURL;

// this is the astro command your npm script runs
// When you're building your site in local or in CI, you could just set your URL manually
const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
const BASE_URL = isBuild ? LIVE_URL : LOCALHOST_URL;

// https://astro.build/config
export default defineConfig({
  server: {
    port: SERVER_PORT,
  },
  site: BASE_URL,
  image: {
    service: sharpImageService(),
  },
  redirects: {
    '/ko': '/ko/blog',
    '/ko/': '/ko/blog',
    '/en': '/en/blog',
    '/en/': '/en/blog',
  },
  prefetch: { prefetchAll: true },
  integrations: [
    markdoc(),
    sitemap({
      serialize(item) {
        if (
          ['https://dev.sonim1.com/', 'https://dev.sonim1.com/en/blog/', 'https://dev.sonim1.com/ko/blog/'].includes(
            item.url
          )
        ) {
          item.lastmod = new Date();
          item.priority = 1;
        }
        return item;
      },
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    robotsTxt(),
  ],
  vite: {
    define: {
      'import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID),
    },
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  output: 'static',
});
