import { defineCollection, z } from "astro:content";

import { file, glob } from "astro/loaders";

const instructors = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/collections/instructors" }),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      rank: z.enum([
        "1st Dan",
        "2nd Dan",
        "3rd Dan",
        "4th Dan",
        "5th Dan",
        "6th Dan",
        "7th Dan",
        "8th Dan",
        "9th Dan",
      ]),
      image: image(),
    }),
});

const media = defineCollection({
  loader: file("src/collections/media.yml"),
  schema: ({ image }) =>
    z.object({
      file: image(),
      alt: z.string().optional(),
    }),
});

const programs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/collections/programs" }),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      image: image(),
    }),
});

const reviews = defineCollection({
  loader: file("src/collections/reviews.yml"),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    url: z.string(),
    content: z.string(),
  }),
});

const schedule = defineCollection({
  loader: file("src/collections/schedule.yml"),
  schema: z.object({
    day: z.enum([
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ]),
    classes: z.array(
      z.object({
        title: z.enum([
          "Private Lessons",
          "Kids Taekwondo",
          "Family Taekwondo",
        ]),
        init: z.string(),
        term: z.string(),
      }),
    ),
  }),
});

export const collections = { instructors, media, programs, reviews, schedule };
