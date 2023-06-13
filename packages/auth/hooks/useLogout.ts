import { signOut } from 'next-auth/react';

export const useLogout = (): (() => void) => {
  return async () => {
    await signOut();
    window.location.href = '/api/auth/logout';
  };
};
