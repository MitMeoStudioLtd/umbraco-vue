import axios from 'axios';

export default {
  install: Vue => {
    const instance = axios.create();
    Vue.prototype.$http = instance;
  }
};
