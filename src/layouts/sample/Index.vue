<template>
  <v-app>
    <LayoutBaseAppBar>
      <template slot="LayoutBaseAppBarLeft">
        <v-icon class="mt-1" @click="$router.go(-1)">mdi-arrow-left</v-icon>
        <v-spacer
      /></template>
      <!-- <template slot="LayoutBaseAppBarCenter"
        ><span class="font-weight-bold">{{ $route.meta.appbarName }}</span>
        <v-spacer />
      </template> -->
      <template slot="LayoutBaseAppBarRight"> </template>
    </LayoutBaseAppBar>
    <LayoutBaseView />
  </v-app>
</template>

<script>
  import LayoutBaseAppBar from '@/layouts/base/appbars/LayoutBaseAppBar.vue';
  import LayoutBaseView from '@/layouts/base/views/LayoutBaseView.vue';
  export default {
    name: 'SendIndex',
    components: {
      //AppBar,
      LayoutBaseView,
      LayoutBaseAppBar,
    },
  };
</script>
<style></style>
