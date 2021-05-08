import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWechatTitle from 'vue-wechat-title'
import './assets/top'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:81';
Vue.prototype.$axios = axios;





Vue.config.productionTip = false;
Vue.use(VueWechatTitle);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


