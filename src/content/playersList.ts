// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const playersCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      surname: z.string(),
      number: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  players: playersCollection,
};
