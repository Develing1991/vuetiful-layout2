<template>
  <AppBar>
    <CommonSearchAppBar />
  </AppBar>
</template>

<script>
  import AppBar from '@/layouts/common/AppBar.vue';
  import CommonSearchAppBar from '@/layouts/common/appbar/SearchAppBar.vue';
  export default {
    name: 'SearchAppBarProduct',
    components: {
      AppBar,
      CommonSearchAppBar,
    },
  };
</script>

<style></style>
