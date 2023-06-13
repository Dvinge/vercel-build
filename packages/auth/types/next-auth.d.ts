import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      email: string;
      name: string;
    };
  }

  interface Account {
    id_token_expires_in: number;
    refresh_token_expires_in: number;
  }

  interface Profile {
    oid?: string;
    preferred_username: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken?: string;
    accessTokenExpires?: number;
    refreshTokenExpires?: number;
    refreshToken?: string;
    user?: {
      id: string;
      name: string;
      email: string;
    };
  }
}
