<template>
  <v-app>
    <AppBar />
    <ProductIndexView />
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/product/AppBar.vue';
  import ProductIndexView from '@/layouts/product/View.vue';
  //import Footer from '@/layouts/product/Footer.vue';
  export default {
    name: 'SearchIndex',
    components: {
      AppBar,
      ProductIndexView,
      // Footer,
    },
  };
</script>
<style></style>
