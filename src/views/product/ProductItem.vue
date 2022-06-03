<template>
  <v-card class="mx-auto my-1 elevation-0" outlined to="/product/detail/123">
    <v-list-item three-line ripple>
      <v-list-item-avatar tile size="110" color="grey">
        <v-img
          src="https://thumbnail6.coupangcdn.com/thumbnails/remote/300x300ex/image/product/image/vendoritem/2019/02/11/3186737276/e4f9115d-ff6d-406c-8e9e-52382c5b0abc.jpg"
        >
        </v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <!-- <div class="text-overline mb-4">2080 클래식 치약</div> -->
        <div class="mb-2">2080 클래식 치약</div>
        <v-list-item-title class="font-weight-bold mb-1">
          <span>45%</span>
        </v-list-item-title>
        <v-list-item-title class="font-weight-bold mb-1">
          <span class="red--text">5,500원</span>
          <span class="body-2 text-decoration-line-through grey--text">
            10,000원
          </span>
        </v-list-item-title>
        <v-list-item-subtitle>무료배송</v-list-item-subtitle>
      </v-list-item-content>

      <!-- <v-icon class="float-left" @click="aa()">mdi-heart-outline</v-icon> -->
    </v-list-item>
    <v-btn
      elevation="0"
      fab
      x-small
      style="position: absolute; top: 10px; right: 10px"
    >
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
  export default {
    methods: {
      aa() {
        alert('fsdfsd');
      },
    },
  };
</script>

<style></style>
