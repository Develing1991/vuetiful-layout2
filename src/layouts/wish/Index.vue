<template>
  <v-app>
    <AppBar />
    <DefaultView />
    <DefaultFooter />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/wish/AppBar.vue';
  //import WishIndexView from '@/layouts/wish/View.vue';
  //import Footer from '@/layouts/wish/Footer.vue';
  import DefaultView from '@/layouts/base/DefaultView.vue';
  import DefaultFooter from '@/layouts/base/DefaultFooter.vue';
  export default {
    name: 'WishIndex',
    components: {
      AppBar,
      DefaultView,
      DefaultFooter,
    },
  };
</script>
<style></style>
