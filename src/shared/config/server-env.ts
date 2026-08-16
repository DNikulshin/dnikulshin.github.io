import { z } from 'zod';

// Защита от импорта на клиенте
if (typeof window !== 'undefined') {
  throw new Error('❌ server-env.ts cannot be imported on the client');
}

const serverEnvSchema = z.object({
  GITHUB_TOKEN: z.string().min(1, 'GITHUB_TOKEN is required'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const serverEnv = serverEnvSchema.parse(process.env);
