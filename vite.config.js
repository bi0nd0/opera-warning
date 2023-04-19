import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {},
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'main.js'),
      name: 'opera-warning',
      // the proper extensions will be added
      fileName: 'main',
    },
    rollupOptions: {},
    extractCSS: false,
    cssCodeSplit: false,
  }
})
