import { z } from 'zod';

const ProviderType = z.union([
  z.literal('oauth'),
  z.literal('email'),
  z.literal('credentials'),
]);

export const AccountSchema = z
  .object({
    /**
     * This value depends on the type of the provider being used to create the account.
     * - oauth: The OAuth account's id, returned from the `profile()` callback.
     * - email: The user's email address.
     * - credentials: `id` returned from the `authorize()` callback
     */
    providerAccountId: z.string(),
    /** id of the user this account belongs to. */
    userId: z.string().optional(),
    /** id of the provider used for this account */
    provider: z.string(),
    /** Provider's type for this account */
    type: ProviderType,

    //Token set
    access_token: z.string().optional(),
    token_type: z.string().optional(),
    id_token: z.string().optional(),
    refresh_token: z.string().optional(),
    scope: z.string().optional(),

    expires_at: z.number().optional(),
    session_state: z.string().optional(),

    // [key: string]: unknown;
  })
  .passthrough()
  .optional()
  .nullable();
