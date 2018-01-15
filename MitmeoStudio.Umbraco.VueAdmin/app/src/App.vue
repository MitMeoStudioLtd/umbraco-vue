<template>
<div id="umbraco-admin">
  <router-view></router-view>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import umbCookies from '../umb-cookies.json';

//Default header
axios.defaults.headers.common['UMB-XSRF-TOKEN'] = umbCookies['UMB-XSRF-TOKEN'];

Vue.use(VueAxios, axios);

export default {
  name: "umbraco-admin",
  created() {
    //Replicate Umbraco auth cookies so we can call the APIs.
    Object.keys(umbCookies).forEach(x => {
      this.$cookie.set(x, umbCookies[x]);
    })
  }
};
</script>

<style lang="scss">

</style>