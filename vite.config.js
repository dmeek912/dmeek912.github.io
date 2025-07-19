import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages - can be overridden with environment variable
  base: process.env.BASE_PATH || '/drexel-portfolio-website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
