<template>
<div id="vue-admin-dashboard">
  Hello World
</div>
</template>

<script>
export default {
  name: 'dasboard',
  created() {
    //https://hugh-umbraco.azurewebsites.net/umbraco/backoffice/UmbracoTrees/ApplicationTree/GetApplicationTrees?application=content&tree=&isDialog=false
    this.$http
      .get(
        'umbraco/backoffice/UmbracoTrees/ApplicationTree/GetApplicationTrees?application=content',
      )
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">

</style>
