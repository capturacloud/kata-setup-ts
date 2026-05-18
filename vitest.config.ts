import {defineConfig} from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      '@': './src',
    },
  },
  test: {
    include: ['tests/**/*.spec.ts'],
    globals: true,
  }
})
