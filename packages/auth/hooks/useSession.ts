import { Session } from 'next-auth';
import { useSession as useNextAuthSession } from 'next-auth/react';
import { useRouter } from 'next/compat/router';

export const useSession = ({
  required = false,
  redirectTo = '/api/auth/signin?error=SessionExpired',
}: {
  /** If set to `true`, the returned session is guaranteed to not be `null` */
  required?: boolean;
  /** If `required: true`, the user will be redirected to this URL, if they don't have a session */
  redirectTo?: string;
} = {}): {
  session: (Session & { error: string }) | null | undefined;
  isLoading: boolean;
} => {
  const router = useRouter();

  const { data: session, status } = useNextAuthSession({
    required,
    onUnauthenticated() {
      required && router?.push(redirectTo);
    },
  });

  return {
    session: session as Session & { error: string },
    isLoading: status === 'loading',
  };
};
