import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// process.env.NODE_CONFIG_DIR = './myCustomDir'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
