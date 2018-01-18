import umbraco from '@/umbraco.json';
import client from 'umbraco-backoffice-client';

export default {
  install: Vue => {
    Vue.prototype.$umbraco = {
      BO: client.create(umbraco.URL, umbraco)
    };
  }
};
