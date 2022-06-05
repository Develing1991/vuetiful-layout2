<template>
  <AppBar>
    <v-card id="wishAppbar">
      <v-app-bar app color="white elevation-1">
        <v-container fluid>
          <v-row justify="space-between" align="center">
            <v-col cols="1" class="px-0">
              <v-icon class="mt-1" @click="$router.go(-1)"
                >mdi-arrow-left</v-icon
              >
              <!-- >mdi-chevron-left -->
            </v-col>
            <v-col cols="auto" class="px-0 pt-5">
              <span class="font-weight-bold">내 정보</span>
            </v-col>
            <v-col cols="1" class="px-0"> </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
    </v-card>
  </AppBar>
</template>

<script>
  import AppBar from '@/layouts/common/AppBar.vue';
  export default {
    name: 'WishAppBar',
    components: {
      AppBar,
    },
  };
</script>

<style></style>
