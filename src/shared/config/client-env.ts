import { z } from 'zod';

const clientEnvSchema = z.object({
  NEXT_PUBLIC_BASE_PATH: z.string().optional().default(''),
  // Можно добавить другие NEXT_PUBLIC_* переменные
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
});
