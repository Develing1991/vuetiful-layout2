<template>
  <SearchAppBar>
    <template slot="SearchAppbarRight">
      <v-btn
        icon
        @click="$router.push({ name: 'MainView' })"
        small
        class="mx-1"
      >
        <v-icon class="pt-1">mdi-home-outline</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="$router.push({ name: 'WishView' })"
        small
        class="mx-1"
      >
        <v-icon class="pt-1">mdi-cart-heart</v-icon>
      </v-btn>
    </template>
  </SearchAppBar>
</template>

<script>
  //import DefaultAppBar from '@/layouts/base/DefaultAppBar';
  import SearchAppBar from '@/layouts/base/appbars/SearchAppBar';
  export default {
    components: {
      //DefaultAppBar,
      SearchAppBar,
    },
  };
</script>
