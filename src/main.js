import Vue from 'vue';
import { Network } from 'vue2vis';
import './plugins/vuex';
import './plugins/axios';
import { i18n } from './plugins/vue-i18n';
import { router } from './plugins/vue-router';
import './plugins/vuex-router-sync';
import './plugins/bootstrap';
import './plugins/font-awesome';
import './plugins/register-service-worker';
import './assets/stylus/app.styl';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.component('network', Network);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App),
});
