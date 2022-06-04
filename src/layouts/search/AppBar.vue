<template>
  <CommonSearchAppBar />
</template>

<script>
  // import CommonSearchAppBar from '@/layouts/common/appbar/SearchAppBar.vue';
  //import CommonSearchAppBar from '@/layouts/common/appbar/SearchAppBar.vue';
  export default {
    name: 'SearchAppBarSearch',
    components: {
      CommonSearchAppBar: () =>
        import('@/layouts/common/appbar/SearchAppBar.vue'),
    },
  };
</script>

<style></style>
