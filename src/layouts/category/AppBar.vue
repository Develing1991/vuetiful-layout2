<template>
  <AppBar>
    <v-card>
      <v-app-bar app color="white elevation-1">
        <v-container fluid>
          <v-row justify="space-between" align="center">
            <v-col cols="1" class="px-0"> </v-col>

            <v-col cols="auto" class="px-0 pt-5">
              <span class="font-weight-bold">{{ $route.meta.appbarName }}</span>
            </v-col>
            <v-col cols="1" class="px-0">
              <!-- <v-btn icon to="/main/view">
              <v-icon class="mt-1">mdi-close</v-icon>
            </v-btn> -->
              <v-icon class="mt-1" @click="$router.push({ name: 'MainView' })"
                >mdi-close</v-icon
              >
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
    </v-card>
  </AppBar>
</template>

<script>
  import AppBar from '@/layouts/common/AppBar.vue';
  export default {
    name: 'CategoryAppBar',
    components: {
      AppBar,
    },
  };
</script>

<style scoped></style>
