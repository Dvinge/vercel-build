import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

function r(p: string) {
  return resolve(__dirname, p);
}

export default defineConfig({
  plugins: [react()],
  define: {
    router: {},
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  root: '.',
  resolve: {
    alias: {
      api: r('../../packages/api'),
    },
  },
});
