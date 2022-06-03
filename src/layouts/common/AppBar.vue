<template>
  <v-card>
    <v-app-bar app color="white elevation-1" hide-on-scroll>
      <!-- <v-app-bar app color="primary elevation-0" hide-on-scroll> -->
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <!-- <v-app-bar-title>Title</v-app-bar-title> -->
      <v-spacer></v-spacer>
      <router-link to="/search" class="router-link-underline-delete">
        <v-icon class="px-3">mdi-magnify</v-icon>
      </router-link>

      <v-badge color="pink" content="6" offset-x="25" offset-y="15">
        <v-icon class="px-3">mdi-bell-outline</v-icon>
      </v-badge>

      <template v-slot:extension app>
        <v-tabs
          align-with-title
          fixed-tabs
          class="px-0"
          show-arrows
          color="primary"
          slider-color="primary"
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
    name: 'CommonAppBar',
  };
</script>

<style></style>
