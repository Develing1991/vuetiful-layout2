<template>
  <v-app>
    <AppBar />
    <SearchIndexView />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/search/AppBar.vue';
  import SearchIndexView from '@/layouts/search/View.vue';
  export default {
    name: 'SearchIndex',
    components: {
      AppBar,
      SearchIndexView,
    },
  };
</script>
<style></style>
