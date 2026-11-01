import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Served by GitHub Pages from adrianhruiz.github.io/portafolio-persona3reload/.
// If the repo is renamed again, update the base to match its new name.
export default defineConfig({
  base: '/portafolio-persona3reload/',
  plugins: [react()],
})
