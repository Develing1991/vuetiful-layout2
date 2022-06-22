<template>
  <v-app>
    <TestAppBar />
    <DefaultView />
  </v-app>
</template>

<script>
  import TestAppBar from '@/layouts/product/AppBar.vue';
  import DefaultView from '@/layouts/base/DefaultView.vue';
  export default {
    components: {
      TestAppBar,
      DefaultView,
    },
  };
</script>
