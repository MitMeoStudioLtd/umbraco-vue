<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "umbraco-vue",
  data() {
    return {};
  }
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
