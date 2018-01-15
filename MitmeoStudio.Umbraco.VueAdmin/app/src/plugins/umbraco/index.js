import BO from './backoffice-client';

export default {
  install: Vue => {
    Vue.prototype.$umbraco = {
      BO
    };
  }
};
