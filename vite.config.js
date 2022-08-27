import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:true,
    port:4000,
    proxy:{
      '/api/v1/predict':{
        target:'https://predict-sleep.fly.dev/api/v1/predict',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
