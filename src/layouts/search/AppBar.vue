<template>
  <AppBar>
    <CommonSearchAppBar />
  </AppBar>
</template>

<script>
  import AppBar from '@/layouts/common/AppBar.vue';
  export default {
    name: 'SearchAppBarSearch',
    components: {
      CommonSearchAppBar: () =>
        import('@/layouts/common/appbar/SearchAppBar.vue'),
      AppBar,
    },
  };
</script>

<style></style>
