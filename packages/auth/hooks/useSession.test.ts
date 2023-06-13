import { describe, it, vi } from 'vitest';
import { renderHook } from '../utils/test';
import { useSession } from './useSession';

vi.mock('next/router', () => require('next-router-mock'));

describe('useSession', () => {
  it('renders', () => {
    const { result } = renderHook(() => useSession());
    expect(result.current.session?.user?.name).toBe('John Doe');
  });
});
