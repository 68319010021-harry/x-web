import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    server: {
      allowedHosts: [
    "iii-loose-submitting-scripts.trycloudflare.com"
      ]
  }
})
