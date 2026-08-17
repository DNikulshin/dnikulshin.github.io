import { z } from 'zod';

const clientEnvSchema = z.object({
  NEXT_PUBLIC_BASE_PATH: z.string().optional().default(''),
  NEXT_PUBLIC_FORMSPREE_ENDPOINT: z.string().optional(), // <-- опционально
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
  NEXT_PUBLIC_FORMSPREE_ENDPOINT: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
});
