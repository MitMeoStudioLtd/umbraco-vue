<template>
<div id="umbraco-admin">
  <router-view></router-view>
</div>
</template>

<script>
import Vue from 'vue';
import VueCookie from 'vue-cookie';

import umbraco from '@/plugins/umbraco';
import http from '@/plugins/http';

Vue.use(VueCookie);
Vue.use(umbraco);
Vue.use(http);

export default {
  name: 'umbraco-admin',
  created() {
    // Replicate Umbraco auth cookies so we can call the APIs.
    // TODO: Check ENV first i.e don't replicate on production
    Object.keys(umbraco).forEach(x => {
      if (x.indexOf('UMB') >= 0) {
        this.$cookie.set(x, umbraco[x]);
      }
    });
  },
};
</script>

<style lang="scss">

</style>
