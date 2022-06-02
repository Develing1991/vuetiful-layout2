<template>
  <v-app>
    <AppBar />
    <MainView />
    <Footer />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/main/AppBar.vue';
  import MainView from '@/layouts/main/View.vue';
  import Footer from '@/layouts/main/Footer.vue';
  export default {
    name: 'IndexVue',
    components: {
      AppBar,
      MainView,
      Footer,
    },
  };
</script>

<style scoped></style>
