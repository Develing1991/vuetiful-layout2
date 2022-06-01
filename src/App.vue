<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar app color="primary elevation-0" dark hide-on-scroll>
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
        <v-app-bar-title>Title</v-app-bar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn icon>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn> -->
        <v-icon class="px-3">mdi-open-in-new</v-icon>
        <v-icon class="px-3">mdi-open-in-new</v-icon>

        <template v-slot:extension>
          <v-tabs align-with-title :fixed-tabs="false">
            <v-tab>Tab 1</v-tab>
            <v-tab>Tab 2</v-tab>
            <v-tab>Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </v-card>
    <v-main>
      <!-- <v-banner outlined single-line sticky
        ><template>
          <v-tabs fixed-tabs background-color="white">
            <v-tab> Option </v-tab>
            <v-tab> Another Selection </v-tab>
            <v-tab> Items </v-tab>
            <v-tab> Another Screen </v-tab>
          </v-tabs>
        </template></v-banner
      > -->
      <v-container style="height: 1500px"> </v-container>
      <router-view />
    </v-main>
    <v-footer>
      <v-bottom-navigation :value="value" color="primary" fixed>
        <v-btn>
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({ value: 1 }),
  };
</script>

<style scoped></style>
