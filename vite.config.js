import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // inline (empty) PostCSS config so Vite never picks up a config from a parent folder
  css: { postcss: {} },
})
