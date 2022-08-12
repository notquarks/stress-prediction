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
        target:'https://sleep-flask-test.herokuapp.com/api/v1/predict',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
