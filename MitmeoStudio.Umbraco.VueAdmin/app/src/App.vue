<template>
<v-app id="umbraco-vue-admin">
  <v-navigation-drawer app fixed :value="showDrawer"></v-navigation-drawer>
  <v-toolbar app dark color="secondary">
    <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app>Mitmeo Studio &copy; {{new Date().getFullYear()}}</v-footer>
</v-app>
</template>

<script>
import Vue from 'vue';
import VueCookie from 'vue-cookie';
import { mapState, mapActions } from 'vuex';

import umbraco from '@/plugins/umbraco';
import http from '@/plugins/http';
import vuetify from '@/plugins/vuetify';

Vue.use(VueCookie);
Vue.use(umbraco);
Vue.use(http);
Vue.use(vuetify);

export default {
  name: 'umbraco-admin',
  data() {
    return {};
  },
  created() {
    // Replicate Umbraco auth cookies so we can call the APIs.
    // TODO: Check ENV first i.e don't replicate on production
    Object.keys(umbraco).forEach(x => {
      if (x.indexOf('UMB') >= 0) {
        this.$cookie.set(x, umbraco[x]);
      }
    });
  },
  methods: {
    ...mapActions('layout', ['toggleDrawer']),
  },
  computed: {
    ...mapState('layout', ['title', 'showDrawer']),
  },
};
</script>

<style lang="scss">

</style>
