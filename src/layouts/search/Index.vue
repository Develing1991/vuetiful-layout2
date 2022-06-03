<template>
  <v-app>
    <AppBar />
    <SearchIndexView />
    <Footer />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/search/AppBar.vue';
  import SearchIndexView from '@/layouts/search/View.vue';
  import Footer from '@/layouts/search/Footer.vue';
  export default {
    name: 'SearchIndex',
    components: {
      AppBar,
      SearchIndexView,
      Footer,
    },
  };
</script>
<style></style>
