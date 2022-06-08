<template>
  <v-app>
    <AppBar />
    <AuthIndexView />
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/auth/AppBar.vue';
  import AuthIndexView from '@/layouts/auth/View.vue';
  //   import Footer from '@/layouts/auth/Footer.vue';
  export default {
    name: 'AuthIndex',
    components: {
      AppBar,
      AuthIndexView,
      //   Footer,
    },
  };
</script>

<style></style>
