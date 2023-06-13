import { z } from 'zod';

export const JWTScheme = z.object({
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  picture: z.string().optional().nullable(),
  sub: z.string().optional(),
  accessToken: z.string().optional(),
  accessTokenExpires: z.number().optional(),
  refreshTokenExpires: z.number().optional(),
  refreshToken: z.string().optional(),
  user: z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    })
    .optional(),
});
