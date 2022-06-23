<template>
  <v-app>
    <Appbar />
    <LayoutScrollTopView />
  </v-app>
</template>

<script>
  import Appbar from '@/layouts/product/AppBar.vue';
  import LayoutScrollTopView from '@/layouts/base/views/LayoutScrollTopView.vue';
  export default {
    components: {
      Appbar,
      LayoutScrollTopView,
    },
  };
</script>
