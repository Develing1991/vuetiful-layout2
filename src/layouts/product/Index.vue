<template>
  <v-app>
    <Appbar />
    <DefaultView />
  </v-app>
</template>

<script>
  import Appbar from '@/layouts/product/AppBar.vue';
  import DefaultView from '@/layouts/base/DefaultView.vue';
  export default {
    components: {
      Appbar,
      DefaultView,
    },
  };
</script>
