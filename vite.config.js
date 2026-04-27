import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` controls the URL prefix used for built asset paths.
// - Local dev / Vercel / Netlify → '/'
// - GitHub Pages → '/<repo-name>/'
//
// In CI, the deploy workflow sets VITE_BASE_PATH automatically using the repo
// name, so you don't have to edit this file.
//
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
