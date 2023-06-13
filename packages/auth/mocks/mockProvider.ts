import { mockUser } from 'api/cxo/users/userMock';
import CredentialsProvider from 'next-auth/providers/credentials';

export const mockProvider = CredentialsProvider({
  name: 'Credentials',
  credentials: {},
  async authorize() {
    return {
      ...mockUser,
      id: mockUser.id.toString(),
      id_token_expires_in: 1_0000_000,
      refresh_token_expires_in: 1_0000_000,
    };
  },
});
