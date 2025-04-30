import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/portfolio-backend1': {
        target: 'https://omshri-portfolio-backend.onrender.com', // Replace with your backend URL
        changeOrigin: true,
        secure: false, // Set to true if you're using HTTPS
      },
    },
  },
})
