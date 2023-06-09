import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/lib.js'),
      name: 'OperaWarning',
      // the proper extensions will be added
      fileName: 'main',
    },

  },
  define: {
    'process.env': process.env
  },
})
