<template>
  <v-footer class="pb-0">
    <v-bottom-navigation :value="value" color="black" grow fixed fluid app>
      <v-btn to="/category/view">
        <span>카테고리</span>
        <v-icon>mdi-menu</v-icon>
        <!-- <v-icon>mdi-menu-open</v-icon> -->
      </v-btn>
      <v-btn to="/search/view">
        <span>검색</span>
        <v-icon>mdi-magnify </v-icon>
      </v-btn>
      <v-btn to="/main/view">
        <span>홈</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>
      <v-btn to="/wish/view">
        <span>찜</span>

        <!-- <v-icon>mdi-heart-outline</v-icon> -->
        <!-- <v-icon>mdi-heart-box</v-icon> -->
        <v-icon>mdi-cart-heart</v-icon>
        <!-- <v-icon>mdi-hand-heart-outline</v-icon> -->
      </v-btn>
      <v-btn to="/my/view">
        <span>마이</span>
        <!-- <v-icon>mdi-account-circle</v-icon> -->
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
  export default {
    name: 'CommonFooter',
    data: () => ({ value: 0 }),
    mounted() {
      this.value = 0;
    },
  };
</script>
