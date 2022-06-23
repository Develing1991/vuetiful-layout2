<template>
  <v-card>
    <v-app-bar app color="white elevation-1" hide-on-scroll>
      <slot name="LayoutMainAppBarLeft"></slot>
      <slot name="LayoutMainAppBarCenter"></slot>
      <slot name="LayoutMainAppBarRight"></slot>
      <template v-slot:extension app>
        <v-tabs
          align-with-title
          fixed-tabs
          class="px-0"
          show-arrows
          color="black"
          slider-color="black"
        >
          <v-tab class="ml-0 px-0">홈</v-tab>
          <v-tab class="px-0">신규</v-tab>
          <v-tab class="px-0">인기</v-tab>
          <v-tab class="px-0">추천</v-tab>
          <v-tab class="px-0">가격</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: 'LayoutMainAppBar',
    methods: {
      aa() {
        alert('fdds');
      },
    },
    mounted() {
      console.log();
    },
  };
</script>

<style></style>
