<template>
  <v-footer>
    <v-bottom-navigation :value="value" color="primary" grow fixed fluid>
      <v-btn to="/category">
        <span>카테고리</span>
        <v-icon>mdi-menu</v-icon>
        <!-- <v-icon>mdi-menu-open</v-icon> -->
      </v-btn>
      <v-btn to="/search">
        <span>검색</span>
        <v-icon>mdi-magnify </v-icon>
      </v-btn>
      <v-btn to="/">
        <span>홈</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>
      <v-btn to="/wish">
        <span>찜</span>

        <!-- <v-icon>mdi-heart-outline</v-icon> -->
        <!-- <v-icon>mdi-heart-box</v-icon> -->
        <v-icon>mdi-cart-heart</v-icon>
        <!-- <v-icon>mdi-hand-heart-outline</v-icon> -->
      </v-btn>
      <v-btn to="/myPage">
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
