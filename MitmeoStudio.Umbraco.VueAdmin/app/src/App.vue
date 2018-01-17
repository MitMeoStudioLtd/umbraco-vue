<template>
<v-app id="umbraco-vue-admin">
  <navigation-drawer></navigation-drawer>
  <v-toolbar app dark color="secondary">
    <v-toolbar-side-icon @click="showDrawer(true)"></v-toolbar-side-icon>
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
  <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>Mitmeo Studio &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</v-app>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

import NavigationDrawer from '@/components/layout/NavigationDrawer';

import umbraco from '@/plugins/umbraco';
import http from '@/plugins/http';
import vuetify from '@/plugins/vuetify';
import icons from '@/plugins/icons';

Vue.use(umbraco);
Vue.use(http);
Vue.use(vuetify);
Vue.use(icons);

export default {
  name: 'umbraco-admin',
  components: {
    [NavigationDrawer.name]: NavigationDrawer,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapActions('layout', ['showDrawer']),
  },
  computed: {
    ...mapState('layout', ['title']),
  },
};
</script>

<style lang="scss">

</style>
