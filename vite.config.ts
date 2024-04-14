import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  // 设置资源路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  // 设置开发服务器
  server: {
    port: 5714, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      "api/": {
        target: "127.0.0.1:3000",
        ws: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
