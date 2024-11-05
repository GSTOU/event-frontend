/* eslint-disable no-restricted-imports */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/event-frontend',
  plugins: [react()],
});
