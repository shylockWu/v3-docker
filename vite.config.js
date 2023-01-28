import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 按需加载
import { createStyleImportPlugin } from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@arco-design/web-vue',
          esModule: true,
          resolveStyle: (name) => {
            // css
            // return `@arco-design/web-vue/es/${name}/style/css.js`
            // less
            return `@arco-design/web-vue/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
  css: {
    // Vite 本身支持 Less语法 ，用户只需在配置文件中传入Less的配置即可：
    preprocessorOptions: {
      less: {
        less: {
          modifyVars: {
            'arcoblue-6': '#f85959',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  server: {
    hmr: true,
    port: 3000,
    host: 'localhost',
    cors: true,
  },
});
