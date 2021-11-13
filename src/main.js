import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
  app.config.productionTip = false;
  app.use(Antd);
  app.use(Router);
  app.mount('#app')
