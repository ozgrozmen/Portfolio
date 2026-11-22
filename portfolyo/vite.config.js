import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
server: { open: true }

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { open: true },
})
