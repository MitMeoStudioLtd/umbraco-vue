import umbraco from '@/umbraco.json';
import BO from './backoffice-client';

export default {
  install: Vue => {
    // Replicate Umbraco auth cookies so we can call the APIs.
    // TODO: Check ENV first i.e don't replicate on production
    Object.keys(umbraco).forEach(x => {
      if (x.indexOf('UMB') >= 0) {
        document.cookie = `${x}=${umbraco[x]}`;
      }
    });

    Vue.prototype.$umbraco = {
      BO
    };
  }
};
