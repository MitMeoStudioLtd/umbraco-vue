import axios from 'axios';
import umbraco from '@/umbraco.json';

export default {
  install: Vue => {
    const instance = axios.create({
      baseURL: umbraco.URL,
      // timeout: 1000,
      headers: {
        'UMB-XSRF-TOKEN': umbraco['UMB-XSRF-TOKEN']
      }
    });
    Vue.prototype.$http = instance;
  }
};
