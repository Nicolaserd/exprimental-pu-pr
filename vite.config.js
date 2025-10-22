import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para GitHub Pages cambia 'REPO_NAME' por el nombre del repo o usa HashRouter.
export default defineConfig({
  plugins: [react()],
  base: '/exprimental-pu-pr/'
})
