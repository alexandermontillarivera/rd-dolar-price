import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@styles': path.resolve('./src/styles'),
      '@components': path.resolve('./src/components'),
      '@hooks': path.resolve('./src/hooks'),
      '@pages': path.resolve('./src/pages'),
      '@services': path.resolve('./src/services'),
      '@interfaces': path.resolve('./src/interfaces'),
      '@config': path.resolve('./src/config'),
      '@contracts': path.resolve('./src/contracts'),
      '@data': path.resolve('./src/data')
    }
  }
})
