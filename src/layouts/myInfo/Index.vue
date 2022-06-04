<template>
  <v-app>
    <AppBar />
    <MyInfoIndexView />
    <Footer />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/myInfo/AppBar.vue';
  import MyInfoIndexView from '@/layouts/myInfo/View.vue';
  import Footer from '@/layouts/myInfo/Footer.vue';
  export default {
    name: 'MyInfoIndex',
    components: {
      AppBar,
      MyInfoIndexView,
      Footer,
    },
  };
</script>
<style></style>
