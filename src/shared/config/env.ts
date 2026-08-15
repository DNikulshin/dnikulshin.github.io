import { z } from 'zod';

const envSchema = z.object({
  GITHUB_TOKEN: z.string().min(1, 'GITHUB_TOKEN is required'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_BASE_PATH: z.string().optional().default(''),
});

export const env = envSchema.parse(process.env);
