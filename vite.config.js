import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root base path - works with both GitHub Pages and custom domains
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
