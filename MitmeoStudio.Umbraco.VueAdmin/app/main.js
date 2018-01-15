import Vue from 'vue';

import App from '@/App';
import store from '@/store';
import router from '@/router';

import VueCookie from 'vue-cookie';

Vue.use(VueCookie);

new Vue({
  el: '#app',
  components: {
    [App.name]: App
  },
  render(h) {
    return h('umbraco-admin');
  },
  store,
  router
})