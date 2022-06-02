<template>
  <v-app>
    <AppBar />
    <CategoryIndexView />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/category/AppBar.vue';
  import CategoryIndexView from '@/layouts/category/View.vue';
  export default {
    name: 'CategoryIndex',
    components: {
      AppBar,
      CategoryIndexView,
    },
  };
</script>
<style></style>
