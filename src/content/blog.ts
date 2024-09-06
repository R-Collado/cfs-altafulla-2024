// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
export const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      cover: image().refine((img) => img.width >= 200, {
        message: "Cover image must be at least 200 pixels wide!",
      }),
      author: z.string(),
      authorImg: image().refine((img) => img.width >= 20, {
        message: "Author image must be at least 200 pixels wide!",
      }),
      summary: z.string(),
      post_id: z.string(),
      image: z.string().optional(),
      date: z.string().optional(),
    }),
});

// // // 3. Export a single `collections` object to register your collection(s)
// // //    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
