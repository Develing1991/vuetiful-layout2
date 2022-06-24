<template>
  <!-- <v-app
    style="
      max-width: 720px !important;
      margin: 0 auto !important;
      border: 1px solid #eee;
      box-sizing: border-box;
    "
  > -->
  <v-app>
    <AppBar />
    <LayoutScrollTopView />
    <LayoutBaseFooter />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/main/AppBar.vue';
  import LayoutScrollTopView from '@/layouts/base/views/LayoutScrollTopView.vue';
  import LayoutBaseFooter from '@/layouts/base/footers/LayoutBaseFooter.vue';
  export default {
    name: 'WishIndex',
    components: {
      AppBar,
      LayoutScrollTopView,
      LayoutBaseFooter,
    },
  };
</script>
<style></style>
