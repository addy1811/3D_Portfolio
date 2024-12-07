import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3D_Portfolio/', // Replace with your repository name (e.g., 'my-portfolio')
  plugins: [react()],
  build: {
    outDir: 'dist', // Optional, for the default build output directory
  },
})
