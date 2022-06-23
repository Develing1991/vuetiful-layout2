<template>
  <v-app>
    <AppBar />
    <LayoutScrollTopView />
    <LayoutBaseFooter />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/wish/AppBar.vue';
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
