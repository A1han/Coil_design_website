import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from './router';

createApp(App).use(Antd).use(router).mount('#app')
console.log('环境变量:', process.env)
