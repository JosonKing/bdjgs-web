import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  base: '/bdjgs-web',
  outputPath: '/docs',
  publicPath: './',
  history: { type: 'hash' },
});
