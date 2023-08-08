import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import postcssVwResize from "./src/libs/postcss-dvw-to-vw.js"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true, // 启用响应式变量支持 https://cn.vuejs.org/guide/extras/reactivity-transform.html#refs-vs-reactive-variables
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets')
      // '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server:{
    host:'0.0.0.0',
    changeOrigin:true,
    ws:true
  },
  base:'./',
  css: {
    postcss: {
      plugins: [postcssVwResize()]
    },
  }
})
