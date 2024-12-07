import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3D_Portfolio/',  // GitHub Pages base path
  plugins: [react()],
  build: {
    outDir: 'public',  // Output directory after build
  },
})
