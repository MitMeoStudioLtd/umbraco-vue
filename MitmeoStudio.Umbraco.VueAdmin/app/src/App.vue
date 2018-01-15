<template>
<div id="umbraco-admin">
  <router-view></router-view>
</div>
</template>

<script>
import Vue from "vue";
import VueCookie from 'vue-cookie';

// import umbraco from '@/umbraco.json';
import http from '@/plugins/http';
import umbraco from '@/plugins/umbraco';

Vue.use(VueCookie);
Vue.use(umbraco);
Vue.use(http);

export default {
  name: "umbraco-admin",
  // created() {
  //   //Replicate Umbraco auth cookies so we can call the APIs.
  //   Object.keys(umbraco).forEach(x => {
  //     this.$cookie.set(x, umbraco[x]);
  //   })
  // }
};
</script>

<style lang="scss">

</style>