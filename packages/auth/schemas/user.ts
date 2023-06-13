import { z } from 'zod';

const User = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
});

const AdapterUser = z.object({
  id: z.string(),
  email: z.string(),
  emailVerified: z.date().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
});

export const UserSchema = z.union([User, AdapterUser]).optional();
