import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // This helps avoid routing issues
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
