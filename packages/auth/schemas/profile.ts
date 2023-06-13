import { z } from 'zod';

export const ProfileSchema = z
  .object({
    oid: z.string().optional(),
    preferred_username: z.string(),
    sub: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
  })
  .optional();
