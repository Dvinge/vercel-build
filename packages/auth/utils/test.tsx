import { renderHook, RenderHookOptions } from '@testing-library/react-hooks';
import { SessionProvider } from 'next-auth/react';

const session = {
  user: {
    id: '1',
    email: 'jdoe@example.domain',
    name: 'John Doe',
  },
  expires: '2140-10-05T14:48:00.000Z',
};

const customRenderHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  options: RenderHookOptions<TProps> | undefined = {}
) => {
  return renderHook(callback, {
    wrapper: ({ children }) => (
      <SessionProvider session={session}>{children}</SessionProvider>
    ),
    ...options,
  });
};

export { customRenderHook as renderHook };
