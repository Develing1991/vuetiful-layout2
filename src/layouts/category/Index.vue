<template>
  <v-app>
    <AppBar />
    <CategoryIndexView />
    <Footer />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/category/AppBar.vue';
  import CategoryIndexView from '@/layouts/category/View.vue';
  import Footer from '@/layouts/category/Footer.vue';

  export default {
    name: 'CategoryIndex',
    components: {
      AppBar,
      CategoryIndexView,
      Footer,
    },
  };
</script>
<style></style>
