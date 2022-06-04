<template>
  <v-app>
    <AppBar />
    <WishIndexView />
    <Footer />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/wish/AppBar.vue';
  import WishIndexView from '@/layouts/wish/View.vue';
  import Footer from '@/layouts/wish/Footer.vue';
  export default {
    name: 'WishIndex',
    components: {
      AppBar,
      WishIndexView,
      Footer,
    },
  };
</script>
<style></style>
