<template>
<div id="vue-admin-dashboard">
  {{hello}}
</div>
</template>

<script>
export default {
  name: 'dasboard',
  data() {
    return {
      hello: 'Hello world',
    };
  },
  created() {
    //https://hugh-umbraco.azurewebsites.net/umbraco/backoffice/UmbracoApi/Dashboard/GetDashboard?section=content
    //https://hugh-umbraco.azurewebsites.net/umbraco/backoffice/UmbracoTrees/ApplicationTree/GetApplicationTrees?application=content&tree=&isDialog=false
    //https://hugh-umbraco.azurewebsites.net/umbraco/backoffice/UmbracoApi/Section/GetSections
    // this.$umbraco.BO.get('UmbracoApi/Section/GetSections')
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
};
</script>

<style lang="scss">

</style>
