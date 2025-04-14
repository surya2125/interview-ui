import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@Layout': resolve(__dirname, 'src/layout'),
      '@Components': resolve(__dirname, 'src/components'),
      '@Pages': resolve(__dirname, 'src/pages'),
      '@Constants': resolve(__dirname, 'src/constants'),
      '@Interfaces': resolve(__dirname, 'src/interfaces'),
      '@Hooks': resolve(__dirname, 'src/hooks'),
      '@ErrorHandler': resolve(__dirname, 'src/components/ErrorBoundry'),
    },
  },
});