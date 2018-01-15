import umbraco from '@/umbraco.json';

export default {
  install: Vue => {
    Vue.mixin({
      created() {
        // Replicate Umbraco auth cookies so we can call the APIs.
        Object.keys(umbraco).forEach(x => {
          if (x.indexOf('UMB') >= 0) {
            this.$cookie.set(x, umbraco[x]);
          }
        });
      }
    });
  }
};
