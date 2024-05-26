import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Plugins:
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// Config: https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), VueDevTools()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'MyLib',
      fileName: 'my-lib',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
