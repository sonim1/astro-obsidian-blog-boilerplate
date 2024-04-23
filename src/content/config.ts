import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      external: z.boolean().default(false),
      description: z.string().default(''),
      url: z.string().default(''),
      title: z.string({
        required_error: 'Required frontmatter missing: title',
        invalid_type_error: 'title must be a string',
      }),
      cover: image().default({
        src: '../assets/no-image-found.webp',
        width: 1100,
        height: 1100,
        format: 'jpg',
      }),
      // .refine((img) => img.width >= 1080, {
      //   message: "Cover image must be at least 1080 pixels wide!",
      // }),
      coverAlt: z.string().default('Cover'),
      date: z.date({
        required_error: 'Required frontmatter missing: date',
        invalid_type_error:
          'date must be written in yyyy-mm-dd format without quotes: For example, Jan 22, 2000 should be written as 2000-01-22.',
      }),
    }),
});

export const collections = {
  blog: blogCollection,
};
