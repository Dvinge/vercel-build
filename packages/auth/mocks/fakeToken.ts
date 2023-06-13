import { mockUser } from 'api/cxo/users/userMock';

export const fakeToken = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  accessTokenExpires: Date.now() + 60 * 60 * 1000,
  refreshTokenExpires: Date.now() + 336 * 60 * 60 * 1000,
  refreshToken: 'REFRESH_TOKEN',
  user: {
    id: '2b2fb48f-510f-49a6-865c-9694d2effba3',
    email: mockUser.email,
    name: mockUser.displayName,
  },
};
