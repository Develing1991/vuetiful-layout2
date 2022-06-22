<template>
  <SearchAppBar>
    <template slot="SearchAppbarRight">
      <v-icon class="ml-3 mr-1 pt-1" @click="$router.push({ name: 'MainView' })"
        >mdi-home-outline</v-icon
      >
      <v-icon class="ml-3 mr-1 pt-1" @click="$router.push({ name: 'WishView' })"
        >mdi-cart-heart</v-icon
      >
    </template>
  </SearchAppBar>
</template>

<script>
  import SearchAppBar from '@/layouts/base/appbars/SearchAppBar';

  export default {
    components: {
      SearchAppBar,
    },
  };
</script>
