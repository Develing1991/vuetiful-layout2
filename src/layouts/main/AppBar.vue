<template>
  <AppBar>
    <CommonMainAppBar />
  </AppBar>
</template>

<script>
  import CommonMainAppBar from '@/layouts/common/appbar/MainAppBar.vue';
  import AppBar from '@/layouts/common/AppBar.vue';
  export default {
    name: 'MainAppBar',
    components: {
      CommonMainAppBar,
      AppBar,
    },
  };
</script>

<style></style>
