<template>
  <v-app>
    <AppBar />
    <MyIndexView />
    <Footer />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/my/AppBar.vue';
  import MyIndexView from '@/layouts/my/View.vue';
  import Footer from '@/layouts/my/Footer.vue';
  export default {
    name: 'MyIndex',
    components: {
      AppBar,
      MyIndexView,
      Footer,
    },
  };
</script>
<style></style>
