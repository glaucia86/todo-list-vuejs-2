import router from '@/middlewares/router';
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
