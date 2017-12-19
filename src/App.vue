<template>
  <div id="app">
    <side-menu></side-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu';

export default {
  name: 'umbraco-vue',
  components: {
    [SideMenu.name]: SideMenu,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import '~bulma';
html,
body,
#app {
  height: 100%;
}
</style>
