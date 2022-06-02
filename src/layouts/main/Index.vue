<template>
  <v-app>
    <AppBar />
    <MainIndexView />
    <Footer />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/main/AppBar.vue';
  import MainIndexView from '@/layouts/main/View.vue';
  import Footer from '@/layouts/main/Footer.vue';
  export default {
    name: 'MainIndex',
    components: {
      AppBar,
      MainIndexView,
      Footer,
    },
  };
</script>

<style scoped></style>
