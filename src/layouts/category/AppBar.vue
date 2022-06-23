<template>
  <LayoutBaseAppBar>
    <template slot="LayoutBaseAppBarLeft"> </template>
    <template slot="LayoutBaseAppBarCenter"
      ><span class="font-weight-bold">{{ $route.meta.appbarName }}</span>
      <v-spacer />
    </template>
    <template slot="LayoutBaseAppBarRight">
      <v-icon class="mt-1" @click="$router.push({ name: 'MainView' })"
        >mdi-close</v-icon
      >
    </template>
  </LayoutBaseAppBar>
</template>

<script>
  import LayoutBaseAppBar from '@/layouts/base/appbars/LayoutBaseAppBar.vue';
  export default {
    name: 'CategoryAppBar',
    components: {
      LayoutBaseAppBar,
    },
  };
</script>

<style></style>
