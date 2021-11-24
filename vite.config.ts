import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080, // 你需要定义的端口号
   // open: true, // open支持boolean/string类型，为true时打开默认浏览器，为string类型时，打开指定浏览器，具体查看官网即可
    proxy: { // 配置本地代理地址
      '/api':{
        target: 'https://www.baidu.com',
                changeOrigin: true,
                ws:false,
                rewrite: path => path.replace(/^\/api/, '')
     }
    }
 }
})

