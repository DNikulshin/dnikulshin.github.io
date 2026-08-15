import { z } from 'zod';

export const RepositorySchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  url: z.url(),
  stargazerCount: z.number(),
  forkCount: z.number(),
  primaryLanguage: z
    .object({
      name: z.string(),
      color: z.string().nullable(),
    })
    .nullable(),
  updatedAt: z.string().datetime(),
  repositoryTopics: z.object({
    nodes: z.array(
      z.object({
        topic: z.object({ name: z.string() }),
      })
    ),
  }),
});

export type Repository = z.infer<typeof RepositorySchema>;
