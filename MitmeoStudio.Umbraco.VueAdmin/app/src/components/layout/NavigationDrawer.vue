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
    <v-list v-if="sections">
      <v-list-tile v-for="section in sections" :key="section.alias" @click="navigateTo(section)">
        <v-list-tile-action>
          <v-icon dark>{{ $icon(section.cssclass) }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ section.name }}</v-list-tile-title>
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
      sections: [],
    };
  },
  created() {
    this.$umbraco.BO.get('UmbracoApi/Section/GetSections')
      .then(res => {
        this.sections = res;
        this.sections.unshift({
          name: 'Dashboard',
          alias: 'dashboard',
          cssclass: 'dashboard',
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    ...mapActions('layout', ['showDrawer', 'setTitle']),
    navigateTo(section) {
      this.setTitle(section.name);
      this.$router.push(section.alias);
    },
  },
  computed: {
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
