import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/BrainwaveDAO/', // e.g., '/My-Portfolio-Site/'
  plugins: [react()],
})