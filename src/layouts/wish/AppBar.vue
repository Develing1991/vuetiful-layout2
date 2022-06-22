<template>
  <DefaultAppBar>
    <template slot="DefaultAppbarLeft">
      <v-icon class="mt-1" @click="$router.go(-1)">mdi-arrow-left</v-icon>
      <v-spacer />
    </template>
    <!-- center -->
    <template slot="DefaultAppbarCenter">
      <span class="font-weight-bold">{{ $route.meta.appbarName }}</span>
      <v-spacer />
    </template>
  </DefaultAppBar>
</template>

<script>
  //import AppBar from '@/layouts/common/AppBar.vue';
  import DefaultAppBar from '@/layouts/base/DefaultAppBar.vue';
  //import ButtonCmp from '@/components/ButtonCmp.vue';
  export default {
    name: 'WishAppBar',
    components: {
      DefaultAppBar,
      //ButtonCmp,
    },
  };
</script>

<style></style>
