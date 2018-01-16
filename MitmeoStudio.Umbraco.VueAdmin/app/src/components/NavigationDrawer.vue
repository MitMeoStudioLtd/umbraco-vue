<template>
<div id="vue-admin-drawer">
  <v-navigation-drawer app absolute temporary v-model="show">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Umbraco Vue Admin
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon dark>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'navigation-drawer',
  data() {
    return {
      items: [
        { title: 'Content', icon: 'content_copy' },
        { title: 'Developer', icon: 'code' },
        { title: 'Media', icon: 'perm_media' },
        { title: 'Settings', icon: 'settings' },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['showDrawer']),
  },
  computed: {
    // ...mapState('layout', ['drawer']),
    show: {
      get() {
        return this.$store.state.layout.drawer;
      },
      set(val) {
        this.showDrawer(val);
      },
    },
  },
};
</script>

<style lang="scss">

</style>
